$(document).ready(function() {

	const tb_to_tib = Math.pow(1000,4) / Math.pow(1024,4);

	var disks;
	var min_spares;
	var use_new_slop;
	var recordsize;
	var ashift;
	var swap_size;
	var decimal_places;
	var show_bytes;
	var show_afr;
	var disk_afr;
	var show_deflate;
	var table_data;
	var reservation;

	var hdd_sizes = [4, 8, 12, 18, 22];
	var ssd_sizes = [1.92, 3.84, 7.68, 15.36, 30.72];
	var disk_sizes = hdd_sizes.concat(ssd_sizes);
	var first_ssd = ssd_sizes[0];
	var mirror = [0, 1, 2, 3];
	var z1 = [3, 4, 5, 6, 7, 8, 9, 10];
	var z2 = [5, 6, 7, 8, 9, 10, 11, 12];
	var z3 = [7, 8, 9, 10, 11, 12, 13, 14];
	var draid = [
		"draid1:4d:24c:0s",
		"draid1:8d:24c:0s",
		"draid2:8d:24c:0s",
		"draid2:16d:24c:0s",
		"draid2:20d:24c:0s",
		"draid3:8d:24c:0s",
		"draid3:16d:24c:0s",
		"draid3:20d:24c:0s"
	]

	fast_draid = false;

	var raidz = ["common", mirror, z1, z2, z3, draid];
	var raid_names = ["c","Mirror","Z1","Z2","Z3","dRAID"];
	var raid_labels = ["c","m","z1","z2","z3","d"];
	var update_with_mouseover = true;
	var add_disk_unit = "TB";
	var common = ["0wm","2wm","3wz1","5wz1","5wz2","6wz2","10wz2","11wz2"];

	$("label#reservation").css("color", "grey");
	$("label#disk_afr_label").css("color", "grey");
	$("label#allow_resilver_label").css("color", "grey");
	$("label#resilver_time_label").css("color", "grey");

	function rnd(num, scale) {
		if(!("" + num).includes("e")) {
			return +(Math.round(num + "e+" + scale)  + "e-" + scale);
		} else {
			var arr = ("" + num).split("e");
			var sig = ""
			if(+arr[1] + scale > 0) {
				sig = "+";
			}
			return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
		}
	}

	function validate_input(input,var_name,def,min,max,whole_num) {
		var orig = input;
		if (isNaN(input)) {
			input = def;
		} else {
			if (whole_num) { input = Math.round(input); }
			if (input < min) { input = min; }
			if (input > max) { input = max; }
		}
		if (orig != input && var_name != "") {
			$("input#" + var_name).val(input);
		}
		return input;
	}

	var params = window.location.href.split("?");
	if (params.length > 1) {
		params = params[1].split("&");
		for (var i = 0; i < params.length; i++) {
			param = params[i].split("=");
			if (param.length > 1) {
				var_name = param[0];
				var_val = param[1];

				if (var_name == "disks") {
					param_disks = validate_input(var_val,"",24,0,999999,true);
					$("input#disks").val(param_disks);
				}

				if (var_name == "swap") {
					 param_swap = validate_input(var_val,"",2,0,8,true);
					$("select#swap_size").val(param_swap);
				}
			}
		}
	}

	function draw_tables() {

		get_form_data()
		$("table.results").html("");

		for (var raid_type_index = 0; raid_type_index < raidz.length; raid_type_index++) {

			var raid_name = raid_names[raid_type_index];
			var raid_label = raid_labels[raid_type_index];
			var vdev_widths = raidz[raid_type_index];
			if (vdev_widths == "common") {
				vdev_widths = common;
			}

			var tr_text = ["","","",""];
			// Draw headers first
			for (var width_index = 0; width_index < vdev_widths.length; width_index++) {
				var vdev_width = vdev_widths[width_index];

				// Prep common layouts table
				if (raid_type_index == 0) {
					layout_temp = vdev_width;
					vdev_width = layout_temp.split("w")[0];
					raid_label = layout_temp.split("w")[1];
					if (raid_label == "m") {
						raid_name = "Mirror";
					} else {
						raid_name = raid_label.toUpperCase();
					}
				}

				// If we're drawing the first column
				if (width_index == 0) {
					tr_text[0] += "<tr><td class=\"white\"></td>";
					tr_text[1] += "<tr><td class=\"white\"></td>";

					// If we're drawing the pool AFR data
					if (show_afr) {
						tr_text[2] += "<tr><th>Pool AFR</td>";
					}

					// If we're drawing the deflate ratio
					if (show_deflate) {
						tr_text[3] += "<tr><th>Deflate %</td>";
					}
				}
				// Drawing header rows for the body of the table
				if (vdev_width == 0) {
					tr_text[0] += "<th>Raw</th>";
				} else if (vdev_width == 1) {
					tr_text[0] += "<th>Stripe</th>";
				} else if (raid_label == "m") {
					tr_text[0] += "<th>" + vdev_width + "-Way " + raid_name + "</th>";
				} else if (raid_label == "d") {
					tr_text[0] += "<th>" + vdev_width + "</th>";
				} else {
					tr_text[0] += "<th>" + vdev_width + "-Wide " + raid_name + "</th>";
				}

				if (raid_label == "d") {
					var draid_label = vdev_width.replaceAll(":","-");
					tr_text[1] += "<td class=\"vdev" + draid_label + "\"></td>";
				} else {
					tr_text[1] += "<td class=\"vdev" + vdev_width + "w" + raid_label + "\"></td>";
				}

				if (show_afr) {
					if (raid_label == "d") {
						tr_text[2] += "<td class=\"vdev" + vdev_width.replaceAll(":","-") + "afr\"></td>"
					} else {
						tr_text[2] += "<td class=\"vdev" + vdev_width + "w" + raid_label + "afr\"></td>"
					}
				}

				if (show_deflate) {
					if (raid_label == "d") {
						tr_text[3] += "<td class=\"vdev" + vdev_width.replaceAll(":","-") + "deflate\"></td>"
					} else {
						tr_text[3] += "<td class=\"vdev" + vdev_width + "w" + raid_label + "deflate\"></td>"
					}
				}
			}

			tr_text[0] += "</tr>"
			tr_text[1] += "</tr>"
			tr_text[2] += "</tr>"
			tr_text[3] += "</tr>"

			if (raid_type_index == 0) {
				$("table#common").append(tr_text[0]);
				$("table#common").append(tr_text[1]);
				if (show_afr) {
					$("table#common").append(tr_text[2]);
				}
				if (show_deflate) {
					$("table#common").append(tr_text[3]);
				}
			} else if (raid_type_index == 1) {
				$("table#stripes").append(tr_text[0]);
				$("table#stripes").append(tr_text[1]);
				if (show_afr) {
					$("table#stripes").append(tr_text[2]);
				}
				if (show_deflate) {
					$("table#stripes").append(tr_text[3]);
				}
			} else if (raid_label == "d") {
				$("table#draid").append(tr_text[0]);
				$("table#draid").append(tr_text[1]);
				if (show_afr) {
					$("table#draid").append(tr_text[2]);
				}
				if (show_deflate) {
					$("table#draid").append(tr_text[3]);
				}
			} else {
				$("table#raid" + raid_label).append(tr_text[0]);
				$("table#raid" + raid_label).append(tr_text[1]);
				if (show_afr) {
					$("table#raid" + raid_label).append(tr_text[2]);
				}
				if (show_deflate) {
					$("table#raid" + raid_label).append(tr_text[3]);
				}
			}

			// Draw disks
			for (var disk_size_index = 0; disk_size_index < disk_sizes.length; disk_size_index++) {
				disk_size = disk_sizes[disk_size_index];

				if (Number.isInteger(disk_size) == true) {
					disk_size_label = disk_size;
				} else {
					disk_size_label = disk_size.toString().replace(".","_");
				}

				var tr_text = "";

				for (var width_index = 0; width_index < vdev_widths.length; width_index++) {
					var vdev_width = vdev_widths[width_index];

					if (raid_type_index == 0) {
						layout_temp = vdev_width;
						vdev_width = layout_temp.split("w")[0];
						raid_label = layout_temp.split("w")[1];
						if (raid_label == "m") {
							raid_name = "Mirror";
						} else {
							raid_name = raid_label.toUpperCase();
						}
					}

					if (width_index == 0) {
						if (disk_size == first_ssd) {
							tr_text += "<tr><th id=\"first_ssd\">" + disk_size + "TB</th>"
						} else {
							tr_text += "<tr><th>" + disk_size + "TB</th>"
						}
					} 

					if (raid_label == "d") {
						var draid_label = vdev_width.replaceAll(":","-");
						if (disk_size == first_ssd) {
							tr_text += "<td id=\"first_ssd\" class=\"" + disk_size_label + "t" + draid_label + "\"></td>"
						} else {
							tr_text += "<td class=\"" + disk_size_label + "t" + draid_label + "\"></td>"
						}
					} else {
						if (disk_size == first_ssd) {
							tr_text += "<td id=\"first_ssd\" class=\"" + disk_size_label + "t" + vdev_width + "w" + raid_label + "\"></td>"
						} else {
							tr_text += "<td class=\"" + disk_size_label + "t" + vdev_width + "w" + raid_label + "\"></td>"
						}
					}
					
				}

				tr_text += "</tr>"
				if (raid_type_index == 0) {
					$("table#common").append(tr_text);
				} else if (raid_type_index == 1) {
					$("table#stripes").append(tr_text);
				} else if (raid_label == "d") {
					$("table#draid").append(tr_text);
				} else {
					$("table#raid" + raid_label).append(tr_text);
				}
			}
		}
	}

	function get_form_data() {
		disks = parseFloat($("input#disks").val());
		min_spares = parseFloat($("input#min_spares").val());
		use_new_slop = $("input#use_new_slop").is(':checked');
		recordsize = parseInt($("select#recordsize").val());
		ashift = parseInt($("select#ashift").val());
		swap_size = parseInt($("select#swap_size").val());
		decimal_places = $("select#decimal_places").val();
		show_deflate = $("input#show_deflate").is(':checked');
		show_afr = $("input#show_afr").is(':checked');
		disk_afr = parseFloat($("input#disk_afr").val());
		allow_resilver = $("input#allow_resilver").is(':checked');
		resilver_time = parseFloat($("input#resilver_time").val());
		table_data = $("input[name='table_data']:checked").val();
		reservation = parseInt($("input#reservation").val());

		disks = validate_input(disks,"disks",24,0,999999,true);

		min_spares = validate_input(min_spares,"min_spares",0,0,disks-1,true);

		if (decimal_places == "bytes") {
			show_bytes = true;
			decimal_places = 10;
		} else {
			show_bytes = false;
			decimal_places = parseInt(decimal_places);
		}

		disk_afr = validate_input(disk_afr,"disk_afr",1,0,100,false);
		disk_afr = disk_afr / 100;

		resilver_time = validate_input(resilver_time,"resilver_time",24,0,8760,false);

		reservation = validate_input(reservation,"reservation",20,0,100,false);
		reservation = reservation / 100;
	}

	function get_capacity(vdev_layout) {
		// Capacity data object
		var cd = {};

		// Disk size encoded in vdev layout
		cd.disk_size = vdev_layout.split("t")[0];

		// "."s in disk sizes are encoded as "_" to prevent HTML/CSS errors; fix that here
		if (cd.disk_size.includes("_")) {
			cd.disk_size = cd.disk_size.replace("_",".");
			cd.disk_size = parseFloat(cd.disk_size);
		} else {
			cd.disk_size = parseInt(cd.disk_size);
		}

		// Extract basic vdev layout information, label the RAID type for use below
		if (vdev_layout.includes("wz")) {
			// RAIDZ width, parity
			cd.vdev_width = parseInt(vdev_layout.split("t")[1].split("wz")[0]);
			cd.parity_level = parseInt(vdev_layout.split("wz")[1]);
			cd.raid_type = "z";
		} else if (vdev_layout.includes("draid")) {
			// dRAID width, parity, data, and spare disk counts
			cd.vdev_width = parseInt(vdev_layout.split(":")[2].replace("c",""));
			cd.parity_level = parseInt(vdev_layout.split("t")[1].split(":")[0].replace("draid",""));
			cd.data_disks = parseInt(vdev_layout.split(":")[1].replace("d",""));
			cd.spare_disks = parseInt(vdev_layout.split(":")[3].replace("s",""));
			cd.raid_type = "d";

			// Check if dRAID config is valid before proceeding, if not, bail early
			if (cd.vdev_width > disks || cd.vdev_width < cd.parity_level + cd.data_disks + cd.spare_disks) {
				cd.pool_usable_bytes = 0;
				cd.pool_usable_gib = 0;
				cd.pool_usable_tib = 0;
				cd.pool_usable_pib = 0;
				return cd;
			}
		} else {
			// Mirror width
			cd.vdev_width = parseInt(vdev_layout.split("t")[1].split("wm")[0]);
			cd.raid_type = "m";
		}

		// Bail early if we have a 0-width vdev
		if (cd.vdev_width == 0) {
			cd.pool_usable_bytes = 0;
			cd.pool_usable_gib = 0;
			cd.pool_usable_tib = 0;
			cd.pool_usable_pib = 0;
			return cd;
		}

		// Determine basic pool properties given the disk qty
		cd.vdev_count = Math.floor((disks - min_spares) / cd.vdev_width);
		cd.disks_in_pool = cd.vdev_count * cd.vdev_width;
		cd.spares_count = ((disks - min_spares) % cd.vdev_width) + min_spares;
		cd.pool_raw_capacity = cd.disks_in_pool * cd.disk_size * 1000**4;

		// Subtract out swap partition size (if it exists)
		cd.zfs_partition_size = (cd.disk_size * 1000**4) - (swap_size * 1024**3);
		
		// Subtract labels
		cd.vdev_label_size = 256 * 1024;
		cd.boot_block_size = 8 * 2**19;
		cd.zfs_usable_partition_size = cd.zfs_partition_size - 4 * cd.vdev_label_size - cd.boot_block_size;
		
		// Align to 256KiB block size
		cd.zfs_osize = Math.floor(cd.zfs_usable_partition_size / (256 * 1024)) * 256 * 1024;

		// Determine vdev asize
		if (cd.raid_type == "m") {
			cd.vdev_asize = cd.zfs_osize;
		}
		if (cd.raid_type == "z") {
			cd.vdev_asize = cd.zfs_osize * cd.vdev_width;
		}
		if (cd.raid_type == "d") {
			// dRAID asize is "the sum of the space on all children less the number of distributed spares 
			// rounded down to last full row and then to the last full group. An additional 32MB of scratch
			// space is reserved at the end of each child for use by the dRAID expansion feature."
			// From comment in vdev_draid.c, vdev_draid_open().
			cd.row_height = 2**24;
			cd.reflow_reserve = 2**25;
			cd.group_width = cd.parity_level + cd.data_disks;
			cd.group_size = cd.group_width * cd.row_height;
			cd.child_asize = Math.floor((cd.zfs_osize - cd.reflow_reserve) / cd.row_height) * cd.row_height;
			cd.vdev_raw_asize = cd.child_asize * (cd.vdev_width - cd.spare_disks);
			cd.vdev_asize = Math.floor(cd.vdev_raw_asize / cd.group_size) * cd.group_size;
		}

		// Determine metaslab shift value
		for (var ms_shift_temp = 29; ms_shift_temp <= 34; ms_shift_temp++) {
			ms_size_temp = 2**ms_shift_temp;
			ms_count_temp = Math.floor(cd.vdev_asize / ms_size_temp);
			if (ms_count_temp < 200 || ms_shift_temp == 34) {
				cd.metaslab_shift = ms_shift_temp;
				break;
			}
		}

		// In cases where vdev asize > ~2PB, we need some extra ms_shift logic
		// If ms_count is greater than 2^17 (131072), then use a larger ms_shift
		cd.ms_count_max = 2**17;
		cd.highbit = Math.ceil(Math.log2(Math.floor(cd.vdev_asize/cd.ms_count_max)));
		if (cd.highbit > cd.metaslab_shift) {
			cd.metaslab_shift = cd.highbit;
		}

		if (cd.raid_type == "m" || cd.raid_type == "z") {
			// Mirrored and RAIDZ vdevs have uniform metaslab sizes so the math is straightforward
			cd.metaslab_size = 2**cd.metaslab_shift;
			cd.ms_count = Math.floor(cd.vdev_asize / cd.metaslab_size);

			// If we end up with fewer than 16 metaslabs, manually correct
			if (cd.ms_count < 16) {
				cd.ms_count = 16;
				// REVISIT FOR dRAID
				cd.metaslab_size = Math.floor(cd.vdev_asize / 16);
			}

			// Vdev size before deflation
			cd.vdev_raw_size = cd.metaslab_size * cd.ms_count;
		} else {
			// dRAID metaslabs are not necessarily uniformly sized. Metaslab start needs to be aligned to the group
			// width and the size needs to be rounded down to be an even multiple of the group width. We need to 
			// iterate over the full set of metaslabs to calculate the size for each. Tally metaslab count and 
			// raw size as we go.
			cd.metaslab_base_size = 2**cd.metaslab_shift;
			cd.group_alloc_size = cd.group_width * 2**ashift;
			
			if (fast_draid) {
				// Reasonable approximation for dRAID metaslab size that does not require looping
				cd.metaslab_size = Math.floor(cd.metaslab_base_size / cd.group_alloc_size) * cd.group_alloc_size;
				cd.ms_count = Math.floor(cd.vdev_asize / cd.metaslab_size);
				cd.vdev_raw_size = cd.metaslab_size * cd.ms_count;
			} else {
				cd.ms_count = 0;
				cd.vdev_raw_size = 0;

				// If we have swap space, account for that in metaslab placement
				ms_start = (swap_size * 1024**3);
				var asize_remaining = cd.vdev_asize - (swap_size * 1024**3);

				// Keep allocating metaslabs until we don't have enough asize left to fit another full one
				while (asize_remaining >= cd.metaslab_base_size) {
					// Round up to starting offset of each metslab so it aligns with the group size
					astart = Math.ceil(ms_start/cd.group_alloc_size) * cd.group_alloc_size;
					alignment_loss = astart - ms_start;

					// Round down the (reduced) length of each metslab so its size is divisible by group size
					asize = Math.floor((cd.metaslab_base_size - alignment_loss) / cd.group_alloc_size) * cd.group_alloc_size;

					// Increment metaslab count and tally raw size
					cd.ms_count += 1;
					cd.vdev_raw_size += asize;

					// Update new metaslab start offset for next iteration
					ms_start += cd.metaslab_base_size;

					// Reduce space available for allocation
					asize_remaining -= cd.metaslab_base_size;
				}
			}
		}

		// Pool size is vdev size * vdev count; assumes uniform vdev topology across pool
		cd.zfs_pool_size = cd.vdev_raw_size * cd.vdev_count;

		// Calculate sector size and recordsize for deflate_ratio		
		cd.sector_size = 2**ashift;
		cd.recordsize_bytes = recordsize * 1024;
		
		if (cd.raid_type == "m") {
			// Mirror deflate ratio is always 1
			cd.vdev_deflate_ratio = 1;
		}

		if (cd.raid_type == "z") {
			// RAIDZ deflate ratio calculation
			cd.min_sector_count = cd.parity_level + 1;
			cd.num_data_sectors = cd.recordsize_bytes / cd.sector_size;
			cd.data_stripes = cd.num_data_sectors / (cd.vdev_width - cd.parity_level);
			cd.data_stripes_rounded = Math.ceil(cd.data_stripes);
			cd.num_parity_sectors = cd.data_stripes_rounded * cd.parity_level;
			cd.data_plus_parity_sectors = cd.num_data_sectors + cd.num_parity_sectors;
			cd.total_sector_count = Math.ceil(cd.data_plus_parity_sectors / cd.min_sector_count) * cd.min_sector_count;
			cd.reduction_ratio = cd.num_data_sectors / cd.total_sector_count;
			cd.vdev_deflate_ratio = Math.floor(cd.reduction_ratio * 512) / 512;
		}

		if (cd.raid_type == "d") {
			// dRAID deflate ratio calculation
			cd.num_data_sectors = cd.recordsize_bytes / cd.sector_size;
			cd.num_redundancy_groups = cd.num_data_sectors / cd.data_disks;
			cd.num_groups_rounded = Math.ceil(cd.num_redundancy_groups);
			cd.total_sector_count = cd.num_groups_rounded * (cd.data_disks + cd.parity_level);
			cd.reduction_ratio = cd.num_data_sectors / cd.total_sector_count;
			cd.vdev_deflate_ratio = Math.floor(cd.reduction_ratio * 512) / 512;
		}

		// Capacity before slop space is subtracted
		cd.vdev_usable_capacity = cd.vdev_raw_size * cd.vdev_deflate_ratio;
		cd.pool_usable_pre_slop = cd.vdev_usable_capacity * cd.vdev_count;

		// Slop space calculation
		cd.slop_max = 128 * 1024**3;
		cd.slop_min = 128 * 1024**2;
		cd.slop_computed = cd.pool_usable_pre_slop * 1/32;
		if (use_new_slop) {
			cd.slop_actual = Math.max( Math.min(cd.slop_computed,cd.slop_max),cd.slop_min );
		} else {
			cd.slop_actual = Math.max(cd.slop_computed,cd.slop_min);
		}
		
		// Final usable space calculation
		cd.pool_usable_bytes = cd.pool_usable_pre_slop - cd.slop_actual;
		if (cd.pool_usable_bytes < 0) {cd.pool_usable_bytes = 0;}
		cd.pool_usable_gib = cd.pool_usable_bytes / 1024**3;
		cd.pool_usable_tib = cd.pool_usable_bytes / 1024**4;
		cd.pool_usable_pib = cd.pool_usable_bytes / 1024**5;

		// Calculate other misc stats
		cd.storage_efficiency = cd.pool_usable_bytes / cd.pool_raw_capacity * 100;

		if (cd.raid_type == "m") {
			cd.simple_capacity = cd.vdev_count * cd.disk_size * tb_to_tib;
		}
		if (cd.raid_type == "z") {
			cd.simple_capacity = (cd.vdev_width - cd.parity_level) * cd.vdev_count * cd.disk_size * tb_to_tib;
		}
		if (cd.raid_type == "d") {
			cd.simple_capacity = (cd.vdev_width - cd.spare_disks) / (cd.data_disks + cd.parity_level) * cd.data_disks * cd.vdev_count * cd.disk_size * tb_to_tib;
		}

		// ZFS overhead compares a naive capacity calculation to what ZFS actually does
		cd.zfs_overhead = (1 - (cd.pool_usable_tib/cd.simple_capacity)) * 100;

		return cd;
	}

	function update() {
		get_form_data();
		var raidz = [mirror, z1, z2, z3, draid];

		if (show_afr) {
			$("label#disk_afr_label").css("color", "#0095d5");
			$("input#disk_afr").prop("disabled", false);
			$("label#allow_resilver_label").css("color", "#0095d5");
			$("input#allow_resilver").prop("disabled", false);
			
			if (allow_resilver) {
				$("label#resilver_time_label").css("color", "#0095d5");
				$("input#resilver_time").prop("disabled", false);
			} else {
				$("label#resilver_time_label").css("color", "grey");
				$("input#resilver_time").prop("disabled", true);
			}
		} else {
			$("label#disk_afr_label").css("color", "grey");
			$("input#disk_afr").prop("disabled", true);
			$("label#allow_resilver_label").css("color", "grey");
			$("input#allow_resilver").prop("disabled", true);
			$("label#resilver_time_label").css("color", "grey");
			$("input#resilver_time").prop("disabled", true);
		}

		if (table_data == "cap_w_reserve") {
			$("label#reservation").css("color", "#0095d5");
			$("input#reservation").prop("disabled", false);
		} else {
			$("label#reservation").css("color", "grey");
			$("input#reservation").prop("disabled", true);
			
		}
		for (var p = 0; p < raidz.length; p++) {

			for (var v = 0; v < raidz[p].length; v++) {

				var capacity_data;
				var vdev_width = raidz[p][v];

				for (var d = 0; d < disk_sizes.length; d++) {

					if (Number.isInteger(disk_sizes[d]) == true) {
						disk_size_label = disk_sizes[d];
					} else {
						disk_size_label = disk_sizes[d].toString().replace(".","_");
					}

					if (p == 0) {
						var vdev_layout = disk_size_label + "t" + vdev_width + "wm";
					} else if (p == 4) {
						var vdev_layout = disk_size_label + "t" + vdev_width;
					} else {
						var vdev_layout = disk_size_label + "t" + vdev_width + "wz" + p;
					}

					capacity_data = get_capacity(vdev_layout);

					if (p == 4) {
						vdev_layout = vdev_layout.replaceAll(":","-");
					}

					if (p == 0 && v == 0) {
						capacity_tb = disks * disk_sizes[d];
						if (capacity_tb > 1000) {
							capacity_pb = capacity_tb / 1000;
							$("td." + vdev_layout).text(rnd(capacity_pb,decimal_places) + " PB");
						} else {
							$("td." + vdev_layout).text(rnd(capacity_tb,decimal_places) + " TB");
						}
					} else {
						if (table_data == "usable_cap") {
							if (show_bytes) {
								$("td." + vdev_layout).text(capacity_data.pool_usable_bytes);
							} else {
								if (capacity_data.pool_usable_tib > 1024) {
									$("td." + vdev_layout).text(rnd(capacity_data.pool_usable_pib,decimal_places) + " PiB");
								} else {
									$("td." + vdev_layout).text(rnd(capacity_data.pool_usable_tib,decimal_places) + " TiB");
								}
							}
						} else if (table_data == "efficiency") {
							$("td." + vdev_layout).text(rnd(capacity_data.storage_efficiency,decimal_places) + "%");
						} else if (table_data == "overhead") {

							$("td." + vdev_layout).text(rnd(capacity_data.zfs_overhead,decimal_places) + "%");
						} else if (table_data == "cap_w_reserve") {
							if (show_bytes) {
								$("td." + vdev_layout).text(capacity_data.pool_usable_bytes * (1 - reservation));
							} else {
								if (capacity_data.pool_usable_tib * (1 - reservation) > 1024) {
									$("td." + vdev_layout).text(rnd(capacity_data.pool_usable_pib * (1 - reservation),decimal_places) + " PiB");
								} else {
									$("td." + vdev_layout).text(rnd(capacity_data.pool_usable_tib * (1 - reservation),decimal_places) + " TiB");
								}
							}
						}
					}
				}

				if (p == 0) {
					if (v == 0) {
						$("td.vdev" + vdev_width + "wm").text(disks + " disks");
					} else {
						$("td.vdev" + vdev_width + "wm").text(capacity_data.vdev_count + " vdev + " + capacity_data.spares_count + " spare");
					}
				} else {
					if (capacity_data.raid_type == "d") {
						var draid_label = vdev_width.replaceAll(":","-");
						$("td.vdev" + draid_label).text(capacity_data.vdev_count + " vdev + " + capacity_data.spares_count + " spare");
					} else {
						$("td.vdev" + vdev_width + "wz" + p).text(capacity_data.vdev_count + " vdev + " + capacity_data.spares_count + " spare");
					}
				}


				var redundancy;
				
				if (p == 0) {
					redundancy = vdev_width - 1;
				} else if (p == 4) {
					redundancy = parseInt(vdev_width.split(":")[0].replace("draid",""));
				} else {
					redundancy = p;
				}

				if (p == 4) {
					draid_width = parseInt(vdev_width.split(":")[2].replace("c",""));
					if (allow_resilver && redundancy != 0) {
						var disk_hourly_failure_rate = disk_afr / 8760;
						var disk_failure_probability = disk_hourly_failure_rate * resilver_time;
						var pool_afr = R2C2(draid_width,redundancy,capacity_data.vdev_count,disk_failure_probability) * 100;
					} else {
						var pool_afr = R2C2(draid_width,redundancy,capacity_data.vdev_count,disk_afr) * 100;
					}
					$("td.vdev" + vdev_width.replaceAll(":","-") + "afr").text(rnd(pool_afr,decimal_places) + "%");
				} else {

					if (allow_resilver && redundancy != 0) {
						var disk_hourly_failure_rate = disk_afr / 8760;
						var disk_failure_probability = disk_hourly_failure_rate * resilver_time;
						var pool_afr = R2C2(vdev_width,redundancy,capacity_data.vdev_count,disk_failure_probability) * 100;
					} else {
						var pool_afr = R2C2(vdev_width,redundancy,capacity_data.vdev_count,disk_afr) * 100;
					}

					if (p == 0) {
						if (v == 0) {
							$("td.vdev" + vdev_width + "wmafr").text(" - ");
						} else {
							$("td.vdev" + vdev_width + "wmafr").text(rnd(pool_afr,decimal_places) + "%");
						}
					} else {
						$("td.vdev" + vdev_width + "wz" + p + "afr").text(rnd(pool_afr,decimal_places) + "%");
					}
				}

				deflate_ratio = rnd(capacity_data.vdev_deflate_ratio * 100,decimal_places);


				if (p == 0) {
					if (v == 0) {
						$("td.vdev" + vdev_width + "wmdeflate").text(" - ");
					} else {
						$("td.vdev" + vdev_width + "wmdeflate").text(deflate_ratio + "%");
					}
				} else if (p == 4) {
					$("td.vdev" + vdev_width.replaceAll(":","-") + "deflate").text(deflate_ratio + "%");
				} else {
					$("td.vdev" + vdev_width + "wz" + p + "deflate").text(deflate_ratio + "%");
				}
			}
		}
	}

	function update_debug(vdev_layout) {
		if (vdev_layout == undefined) { vdev_layout = ""; };
		if (vdev_layout == "white") { vdev_layout = ""; };

		if (vdev_layout.includes("draid")) {
			vdev_layout = vdev_layout.replaceAll("-",":");
		}

		var debug_text;

		if (!vdev_layout.includes("vdev") && vdev_layout != "") {

			var cd = get_capacity(vdev_layout);

			var raid_name;
			if (cd.raid_type == 0) {
				if (cd.vdev_width == 1) {
					raid_name = "Stripe";
					debug_text = "<tr><td colspan=\"2\"><b>" + raid_name + " (" + cd.disk_size + " TB disks)</b></td></tr>";
				} else {
					raid_name = "Mirror";
					debug_text =  "<tr><td colspan=\"2\"><b>" + cd.vdev_width + "-way " + raid_name + " (" + cd.disk_size + " TB disks)</b></td></tr>";
				}
			}
			if (cd.raid_type != 0) {
				raid_name = "RAIDZ" + cd.raid_type;
				debug_text = "<tr><td colspan=\"2\"><b>" + cd.vdev_width + "-wide " + raid_name + " (" + cd.disk_size + " TB disks)</b></td></tr>";
			}

			if (raid_name == "Stripe") {
				debug_text += "<tr><td colspan=\"2\"><b>" + disks + " disks</b></td></tr>";
			} else {
				debug_text += "<tr><td colspan=\"2\"><b>" + cd.vdev_count + " vdevs (" + disks + " disks, " + cd.spares_count + " spares)</b></td></tr>";
			}

			for (const [key, value] of Object.entries(cd)) {
				debug_text += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
			}

			$("table#debug_vals").html(debug_text);
		}
	}

	function Factorial(n) {
		// Factorial(n) = n! = n * n-1 * n-2 * ... * 2 * 1
		var rval = 1;
		for (var i = 2; i <= n; i++) {
			rval = rval * i;
		}
		return rval;
	}

	function BinomCoeff(n,k) {
		// BinomCoeff(n,k) = n choose k = n! / (k! * (n-k)!)
		return Factorial(n) / (Factorial(k) * Factorial(n-k));
	}

	function BinomDistrib(n,k,p) {
		// BinomDistrib(n,k,p) = (n choose k) * p^k * (1-p)^(n-k)
		return BinomCoeff(n,k) * Math.pow(p,k) * Math.pow(1-p,n-k)
	}

	function R2C2(numHDD, rLvl, numVdev, pFail) {
		// R2C2() returns the probability value of zpool failure given configuration parameters
		// numHDD = (number) Number of HDDs per vdev
		// rLvl = (number) Redundancy level (1 for RAID-Z1, 2 for RAID-Z2, 3 for RAID-Z3, etc.)
		// numVdev = (number) Number of vdevs in zpool
		// pFail = (number) Probability of an individual drive failing

		var P = 0;
		// P = probability that rLvl or fewer drives have failed (i.e., vdev is still alive)
		for (var i = rLvl; i >= 0; i--) {
			P = P + BinomDistrib(numHDD, i, pFail);
		}
		// 1 - P^numVdev = probability that one or more of the vdevs are not alive
		return 1 - Math.pow(P,numVdev);
	}

	draw_tables();
	update();
	update_debug("18t7wz2");

	$("input.monitor").change(function() {
		update();
		update_debug("18t7wz2");
	});

	$("input#show_afr").change(function() {
		draw_tables();
		update();
	});

	$("input#show_deflate").change(function() {
		draw_tables();
		update();
	});

	$("select.monitor").change(function() {
		update();
		update_debug("18t7wz2");
	});

	$("select#add_vdev_type").change(function() {
		var raid_type = $("select#add_vdev_type").val();
		var tr_text;

		tr_text = "<td><label for=\"recordsize\">ZFS recordsize value:</label></td>"
		tr_text += "<td><select class=\"monitor\" name=\"recordsize\" id=\"recordsize\">"
		tr_text += "<option value=\"4\">4 KiB</option>"
		tr_text += "<option value=\"8\">8 KiB</option>"
		tr_text += "<option value=\"16\">16 KiB</option>"
		tr_text += "<option value=\"32\">32 KiB</option>"
		tr_text += "<option value=\"64\">64 KiB</option>"
		tr_text += "<option value=\"128\">128 KiB</option>"
		tr_text += "<option value=\"256\">256 KiB</option>"
		tr_text += "<option value=\"512\">512 KiB</option>"
		tr_text += "<option value=\"1024\">1 MiB</option>"
		tr_text += "<option value=\"2048\">2 MiB</option>"
		tr_text += "<option value=\"4096\">4 MiB</option>"
		tr_text += "<option value=\"8192\">8 MiB</option>"
		tr_text += "<option value=\"16384\">16 MiB</option>"
		tr_text += "</select></td>"

		if (raid_type == "draid") {
			tr_text += "<td id=\"draid_settings\" colspan=\"2\">"
			tr_text += "<label class=\"draid_settings\">draid</label>"
			tr_text += "<input type=\"text\"  class=\"draid_settings\" id=\"draid_parity\">"
			tr_text += "<label class=\"draid_settings\">:</label>"
			tr_text += "<input type=\"text\"  class=\"draid_settings\" id=\"draid_data\">"
			tr_text += "<label class=\"draid_settings\">d:</label>"
			tr_text += "<input type=\"text\"  class=\"draid_settings\" id=\"draid_children\">"
			tr_text += "<label class=\"draid_settings\">c:</label>"
			tr_text += "<input type=\"text\"  class=\"draid_settings\" id=\"draid_spares\">"
			tr_text += "<label class=\"draid_settings\">s</label>"
			tr_text += "</td>"
		} else {
			tr_text += "<td><label for=\"add_vdev\" id=\"add_vdev\">New vdev Width:</label></td>"
			tr_text += "<td><input type=\"text\" id=\"add_vdev\" name=\"add_vdev\"></td>"
		}

		$("tr#new_vdev").empty();
		$("tr#new_vdev").html(tr_text);

		$("select#recordsize option[value=" + recordsize + "]").attr("selected","selected");
	});

	function add_rem_disks(num_disks) {
		new_disk_qty = disks + num_disks;
		new_disk_qty = validate_input(new_disk_qty,"disks",disks,0,999999,true);

		if (new_disk_qty != disks) {
			$("input#disks").val(new_disk_qty);
			draw_tables();
			update();
		}

	}

	$("button#minus_100").click(function() {
		add_rem_disks(-100);
	});
	$("button#minus_10").click(function() {
		add_rem_disks(-10);
	});
	$("button#minus_1").click(function() {
		add_rem_disks(-1);
	});
	$("button#plus_1").click(function() {
		add_rem_disks(+1);
	});
	$("button#plus_10").click(function() {
		add_rem_disks(+10);
	});
	$("button#plus_100").click(function() {
		add_rem_disks(+100);
	});

	$("button#add_disk").click(function() {
		var new_disk = parseFloat($("input#add_disk").val());

		if (isNaN(new_disk)) {
			$("input#add_disk").val("");
			$("td#status").html("Invalid disk size").css({
                "color": "#ff3a04",
                "font-weight": "bold"
            });
			return;
		}

		if (new_disk <= 0 && add_disk_unit == "TB") {
			$("input#add_disk").val("");
			$("td#status").html("Invalid disk size").css({
                "color": "#ff3a04",
                "font-weight": "bold"
            });
			return;
		}

		if (new_disk < 1 && add_disk_unit == "GB") {
			$("input#add_disk").val("");
			$("td#status").html("Invalid disk size").css({
                "color": "#ff3a04",
                "font-weight": "bold"
            });
			return;
		}

		new_disk = rnd(new_disk,3);

		if (new_disk > 1000 && add_disk_unit == "TB") {
			new_disk = 1000;
			$("input#add_disk").val("1000");
		}

		if (new_disk > 1000000 && add_disk_unit == "GB") {
			new_disk = 1000000;
			$("input#add_disk").val("1000000");
		}

		if (add_disk_unit == "GB") {
			new_disk = new_disk / 1000;
		}

		if (disk_sizes.includes(new_disk)) {
			$("input#add_disk").val("");
			if (add_disk_unit == "TB") {
				$("td#status").html(new_disk + "TB disk already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
			} else {
				$("td#status").html((new_disk*1000) + "GB disk already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
			}
			return;
		}

		$("input#add_disk").val("");

		if (add_disk_unit == "TB") {
			$("td#status").html(new_disk + "TB disk added").css({
                "color": "#71bf44",
                "font-weight": "bold"
            });
		} else {
			if (new_disk*1000 <= swap_size) {
				$("td#status").html((new_disk*1000) + "GB disk added (check swap size)").css({
                    "color": "#71bf44",
                    "font-weight": "bold"
                });
			} else {
				$("td#status").html((new_disk*1000) + "GB disk added").css({
                    "color": "#71bf44",
                    "font-weight": "bold"
                });
			}
		}

		if (new_disk % 1 == 0) {
			hdd_sizes.push(new_disk);
			hdd_sizes = hdd_sizes.sort(function(a, b){return a - b});
		} else {
			ssd_sizes.push(new_disk);
			ssd_sizes = ssd_sizes.sort(function(a, b){return a - b});
			if (ssd_sizes[0] != first_ssd) {
				first_ssd = ssd_sizes[0];
			}
		}
		disk_sizes = hdd_sizes.concat(ssd_sizes);
		draw_tables();
		update();
	});

	$("button#tb_gb").click(function() {
		if (add_disk_unit == "TB") {
			add_disk_unit = "GB";
		} else {
			add_disk_unit = "TB";
		}
		$("label#add_disk").html("Add Disk (" + add_disk_unit + "):");
	});

	$("button#add_vdev").click(function() {
		var new_vdev_type = $("select#add_vdev_type").val()

		if (new_vdev_type == "draid") {
			var draid_parity = parseInt($("input#draid_parity").val());
			var draid_data = parseInt($("input#draid_data").val());
			var draid_children = parseInt($("input#draid_children").val());
			var draid_spares = parseInt($("input#draid_spares").val());

			if (isNaN(draid_parity) || isNaN(draid_data) || isNaN(draid_children) || isNaN(draid_spares)) {
				$("td#status").html("Invalid vdev layout").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (draid_parity <= 0 || draid_data <= 0 || draid_children <= 0 || draid_spares < 0) {
				$("td#status").html("Invalid vdev layout").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (draid_parity > 3) {
				$("td#status").html("dRAID parity must be between 1 and 3").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (draid_spares > 4) {
				$("td#status").html("dRAID spares count must be between 0 and 4").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (draid_parity + draid_data + draid_spares > draid_children) {
				$("td#status").html("dRAID parity + data + spares must be greater than children").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			var new_draid_layout = "draid" + draid_parity + ":" + draid_data + "d:" + draid_children + "c:" + draid_spares + "s";
			
			if (draid.includes(new_draid_layout)) {
				$("td#status").html(new_draid_layout + " already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				$("input#draid_parity").val("");
				$("input#draid_data").val("");
				$("input#draid_children").val("");
				$("input#draid_spares").val("");
				return;
			}

			draid.push(new_draid_layout);
			$("td#status").html(new_draid_layout + " added").css({
                "color": "#71bf44",
                "font-weight": "bold"
            });

		} else {
			var new_vdev_width = parseInt($("input#add_vdev").val());

			if (isNaN(new_vdev_width) || new_vdev_width <= 0) {
				$("input#add_vdev").val("");
				$("td#status").html("Invalid vdev layout").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z1" && (new_vdev_width < 2)) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-wide Z1 invalid").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z2" && (new_vdev_width < 3)) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-wide Z2 invalid").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z3" && (new_vdev_width < 4)) {
				$("td#status").html(new_vdev_width + "-wide Z3 invalid").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				$("input#add_vdev").val("");
				return;
			}

			if (new_vdev_type == "mirror" && (mirror.includes(new_vdev_width))) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-way mirror already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z1" && (z1.includes(new_vdev_width))) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-wide Z1 already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z2" && (z2.includes(new_vdev_width))) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-wide Z2 already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_type == "z3" && (z3.includes(new_vdev_width))) {
				$("input#add_vdev").val("");
				$("td#status").html(new_vdev_width + "-wide Z3 already added").css({
                    "color": "#ff3a04",
                    "font-weight": "bold"
                });
				return;
			}

			if (new_vdev_width > 1000) {
				new_vdev_width = 1000;
				$("input#add_vdev").val("1000");
			}

			if (new_vdev_type == "mirror") {
				mirror.push(new_vdev_width);
				mirror = mirror.sort(function(a, b){return a - b});
			}

			if (new_vdev_type == "z1") {
				z1.push(new_vdev_width);
				z1 = z1.sort(function(a, b){return a - b});
			}

			if (new_vdev_type == "z2") {
				z2.push(new_vdev_width);
				z2 = z2.sort(function(a, b){return a - b});
			}

			if (new_vdev_type == "z3") {
				z3.push(new_vdev_width);
				z3 = z3.sort(function(a, b){return a - b});
			}

			$("input#add_vdev").val("");

			if (new_vdev_type == "mirror") {
				$("td#status").html(new_vdev_width + "-way mirror added").css({
                    "color": "#71bf44",
                    "font-weight": "bold"
                });
			} else {
				$("td#status").html(new_vdev_width + "-wide " + new_vdev_type.toUpperCase() + " added").css({
                    "color": "#71bf44",
                    "font-weight": "bold"
                });
			}
		}

		draw_tables();
		update();
	});

	$("button#reset_button").click(function() {
		hdd_sizes = [4, 8, 12, 18, 22];
		ssd_sizes = [1.92, 3.84, 7.68, 15.36];
		disk_sizes = hdd_sizes.concat(ssd_sizes);
		first_ssd = 1.92;
		mirror = [0, 1, 2, 3];
		z1 = [3, 4, 5, 6, 7, 8, 9, 10];
		z2 = [5, 6, 7, 8, 9, 10, 11, 12];
		z3 = [7, 8, 9, 10, 11, 12, 13, 14];
		draid = [
			"draid1:4d:24c:0s",
			"draid1:8d:24c:0s",
			"draid2:8d:24c:0s",
			"draid2:16d:24c:0s",
			"draid2:32d:24c:0s",
			"draid3:8d:24c:0s",
			"draid3:16d:24c:0s",
			"draid3:32d:24c:0s"
		]

		$("td#status").html("Values cleared").css({
            "color": "#71bf44",
            "font-weight": "bold"
        });

		draw_tables();
		update();
	});

    $(document).on("click", "td", function () {
        if (update_with_mouseover == false) {
            update_with_mouseover = true;
            $("td").css({
                "background-color": "",
                "color": "var(--body-font-color)"
            });
        } else {
            cell = $(this).attr("class");
            if (cell == undefined) { cell = ""; }
            if (cell == "white") { cell = ""; }
            if (!cell.includes("vdev") && cell != "") {
                update_with_mouseover = false;
    
                const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
                $(this).css({
                    "background-color": "#71bf44",
                    "color": prefersDarkMode ? "white" : "black"
                });
            }
        }
    });      

	$(document).on("mouseover","td",function(){
		if (update_with_mouseover) {
			update_debug($(this).attr("class"));
		}
	});
    
});