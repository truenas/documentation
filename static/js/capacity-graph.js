/*
TODO:
	- RIADZ shift by parity
	- AFR Multiply x100
	- Fast dRAID toggle
	- String compression
	- Sliders
*/

$(document).ready(function() {

	const tb_to_tib = 1000**4 / 1024**4;

	const colors = [
		"rgb(224, 102, 102)",
		"rgb(60, 120, 216)",
		"rgb(106, 168, 79)",
		"rgb(103, 78, 167)",
		"rgb(241, 194, 50)"
	];

	const colors_y2 = [
		"rgb(234, 153, 153)",
		"rgb(164, 194, 244)",
		"rgb(182, 215, 168)",
		"rgb(180, 167, 214)",
		"rgb(255, 229, 153)"
	];

	var afr_scale_factor = 1;

	var raid_topologies = [{},{}];
	var raid_topo_count = 2;
	var fast_draid = true;
	var y1_data;
	var y2_data;
	var disk_size_unit = "TB";

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

	function get_form_data() {

		for (var i = 0; i < raid_topo_count; i++) {

			raid_topologies[i].disks = parseFloat($("input#disks_" + i).val());
			raid_topologies[i].min_spares = parseFloat($("input#min_spares_" + i).val());
			raid_topologies[i].use_new_slop = $("input#use_new_slop_" + i).is(':checked');
			raid_topologies[i].recordsize = parseInt($("select#recordsize_" + i).val());
			raid_topologies[i].ashift = parseInt($("select#ashift_" + i).val());
			raid_topologies[i].swap_size = parseInt($("select#swap_size_" + i).val());
			raid_topologies[i].disk_afr = parseFloat($("input#disk_afr_" + i).val());
			raid_topologies[i].resilver_hrs = parseFloat($("input#resilver_hrs_" + i).val());

			raid_topologies[i].disks = validate_input(raid_topologies[i].disks,"disks_" + i,24,0,999999,true);
			raid_topologies[i].min_spares = validate_input(raid_topologies[i].min_spares,"min_spares_" + i,0,0,raid_topologies[i].disks-1,true);

			raid_topologies[i].disk_afr = validate_input(raid_topologies[i].disk_afr,"disk_afr_" + i,1,0,100,false);
			raid_topologies[i].resilver_hrs = validate_input(raid_topologies[i].resilver_hrs,"resilver_hrs_" + i,2,0,8760,false);
			
			var new_disk_size = parseFloat($("input#disk_size_" + i).val());
			new_disk_size = validate_input(new_disk_size,"disk_size_" + i,18,1,1000,false);
			if (disk_size_unit == "TB") {
				raid_topologies[i].disk_size = new_disk_size;
			} else {
				raid_topologies[i].disk_size = new_disk_size / 1000;
			}
			if ((raid_topologies[i].disk_size * 1000) - raid_topologies[i].swap_size <= 0) {
				raid_topologies[i].disk_size = 1;
				$("input#disk_size_" + i).val(11);
			}
			
			raid_topologies[i].raid_type = $("select#raid_type_" + i).val();
			
			if (raid_topologies[i].raid_type == "m") {
				raid_topologies[i].max_width = $("input.mirror_info#max_width_" + i).val();
				raid_topologies[i].max_width = validate_input(raid_topologies[i].max_width,"input.mirror_info_" + i + "#max_width",2,1,999999,true);
			}
			
			if (raid_topologies[i].raid_type == "z") {
				raid_topologies[i].parity = parseInt($("select.raidz_info#parity_" + i).val());
				raid_topologies[i].max_width = $("input.raidz_info#max_width_" + i).val();
				raid_topologies[i].max_width = validate_input(raid_topologies[i].max_width,"input.raidz_info_" + i + "#max_width",6,parseInt(raid_topologies[i].parity)+1,raid_topologies[i].disks,true);
			}

			if (raid_topologies[i].raid_type == "d") {
				raid_topologies[i].parity = $("select.draid_info#parity_" + i).val();
				raid_topologies[i].max_data_disks = $("input.draid_info#max_data_disks_" + i).val();
				raid_topologies[i].children = $("input.draid_info#children_" + i).val();
				raid_topologies[i].spares = parseInt($("select.draid_info#spares_" + i).val());
				raid_topologies[i].parity = validate_input(raid_topologies[i].parity,"select.draid_info_" + i + "#parity",2,1,3,true);
				raid_topologies[i].max_data_disks = validate_input(raid_topologies[i].max_data_disks,"input.draid_info_" + i + "#max_data",6,1,254,true);
				raid_topologies[i].children = validate_input(raid_topologies[i].children,"input.draid_info_" + i + "#children",50,4,255,true);
			}

			raid_topologies[i].y1_dataset = [];
			raid_topologies[i].y2_dataset = [];
		}

		y1_data = $("select#y1_data").val();
		y2_data = $("select#y2_data").val();
	}

	function draw_config_inputs(initial_config) {
		table = $("table#configs");
		table.empty();
		for (var i = 0; i < 21; i++) {
			table.append("<tr class=\"row_" + i + "\"></tr>");
			row = $("tr.row_" + i);
		}
		$("table#aux").empty();
		$("table#text").empty();

		if (initial_config) {
			for (var j = 0; j < raid_topo_count; j++) {
				row_0_text = "<td colspan=2>";
				row_0_text += "<button type=\"button\" class=\"minus\" id=\"minus_" + j + "\">-</button>";
				row_0_text += "<h3>Configuration " + (j+1) + "</h3>";
				row_0_text += "<button type=\"button\" class=\"plus\" id=\"plus_" + j + "\">+</button>";
				row_0_text += "</td>"
				$("tr.row_0").append(row_0_text);
				
				$("tr.row_1").append("<td colspan=2><div class=\"color_label\" style=\"background-color:" + colors[j] + ";\"></div></td>");

				$("tr.row_2").append("<td><label for=\"disks_" + j + "\">Total Disks in Pool:</label></td>");
				$("tr.row_2").append("<td><input type=\"text\" id=\"disks_" + j + "\" value=\"60\"></td>");
				
				$("tr.row_3").append("<td><label for=\"disk_size_" + j + "\">Disk Size (TB):</label></td>");
				$("tr.row_3").append("<td><input type=\"text\" id=\"disk_size_" + j + "\" value=\"18\"></td>");

				$("tr.row_4").append("<td><label for=\"min_spares_" + j + "\">Minimum Spares:</label></td>");
				$("tr.row_4").append("<td><input type=\"text\" id=\"min_spares_" + j + "\" value=\"0\"></td>");

				$("tr.row_5").append("<td><label for=\"use_new_slop_" + j + "\">OpenZFS 2.0.7 Slop:</label></td>");
				$("tr.row_5").append("<td><input type=\"checkbox\" id=\"use_new_slop_" + j + "\" checked></td>");

				$("tr.row_6").append("<td><label for=\"recordsize_" + j + "\">ZFS recordsize value:</label></td>");
				$("tr.row_6").append("<td><select id=\"recordsize_" + j + "\">");
				$("tr.row_6").append("</select></td>");
					$("select#recordsize_" + j).append("<option value=\"4\">4 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"8\">8 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"16\">16 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"32\">32 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"64\">64 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"128\" selected>128 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"256\">256 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"512\">512 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"1024\">1 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"2048\">2 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"4096\">4 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"8192\">8 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"16384\">16 MiB</option>");

				$("tr.row_7").append("<td><label for=\"ashift_" + j + "\">ZFS ashift value:</label></td>");
				$("tr.row_7").append("<td><select id=\"ashift_" + j + "\">");
				$("tr.row_7").append("</select></td>");
					$("select#ashift_" + j).append("<option value=\"9\">9</option>");
					$("select#ashift_" + j).append("<option value=\"12\" selected>12</option>");
					$("select#ashift_" + j).append("<option value=\"13\">13</option>");
					$("select#ashift_" + j).append("<option value=\"14\">14</option>");

				$("tr.row_8").append("<td><label for=\"swap_size_" + j + "\">Disk Swap Size:</label></td>");
				$("tr.row_8").append("<td><select id=\"swap_size_" + j + "\">");
				$("tr.row_8").append("</select></td>");
					$("select#swap_size_" + j).append("<option value=\"0\" selected>0 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"2\">2 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"4\">4 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"8\">8 GiB</option>");
				$("tr.row_10").append("<td><label for=\"raid_type_" + j + "\">RAID Type:</label></td>");
				$("tr.row_10").append("<td><select class=\"raid_type_select\" id=\"raid_type_" + j + "\">");
				$("tr.row_10").append("</select></td>");
				
				$("select#raid_type_" + j).append("<option value=\"m\">Mirrors</option>");
				if (j==0) {
					$("select#raid_type_" + j).append("<option value=\"z\">RAIDZ</option>");
					$("select#raid_type_" + j).append("<option value=\"d\" selected>dRAID</option>");
				} else if (j==1) {
					$("select#raid_type_" + j).append("<option value=\"z\" selected>RAIDZ</option>");
					$("select#raid_type_" + j).append("<option value=\"d\">dRAID</option>");
				} else {
					$("select#raid_type_" + j).append("<option value=\"z\" selected>RAIDZ</option>");
					$("select#raid_type_" + j).append("<option value=\"d\">dRAID</option>");
				}
				$("tr.row_11").append("<td class=\"" + j + "\" id=\"1\"></td>");
				$("tr.row_11").append("<td class=\"" + j + "\" id=\"2\"></td>");
				$("tr.row_12").append("<td class=\"" + j + "\" id=\"3\"></td>");
				$("tr.row_12").append("<td class=\"" + j + "\" id=\"4\"></td>");
				$("tr.row_13").append("<td class=\"" + j + "\" id=\"5\"></td>");
				$("tr.row_13").append("<td class=\"" + j + "\" id=\"6\"></td>");
				$("tr.row_14").append("<td class=\"" + j + "\" id=\"7\"></td>");
				$("tr.row_14").append("<td class=\"" + j + "\" id=\"8\"></td>");
				$("tr.row_16").append("<td><label for=\"disk_afr_" + j + "\">Disk AFR %:</label></td>");
				$("tr.row_16").append("<td><input type=\"text\" id=\"disk_afr_" + j + "\" value=\"5\"></td>");
				$("tr.row_17").append("<td><label for=\"resilver_hrs_" + j + "\">Resilver Hrs/Width:</label></td>");
				if (j==0) {
					$("tr.row_17").append("<td><input type=\"text\" id=\"resilver_hrs_" + j + "\" value=\"2\"></td>");
				} else if (j==1) {
					$("tr.row_17").append("<td><input type=\"text\" id=\"resilver_hrs_" + j + "\" value=\"3\"></td>");
				} else {
					$("tr.row_17").append("<td><input type=\"text\" id=\"resilver_hrs_" + j + "\" value=\"1\"></td>");
				}
			}
		} else {
			for (var j = 0; j < raid_topo_count; j++) {
				row_0_text = "<td colspan=2>";
				row_0_text += "<button type=\"button\" class=\"minus\" id=\"minus_" + j + "\">-</button>";
				row_0_text += "<h3>Configuration " + (j+1) + "</h3>";
				row_0_text += "<button type=\"button\" class=\"plus\" id=\"plus_" + j + "\">+</button>";
				row_0_text += "</td>"

				$("tr.row_0").append(row_0_text);
				
				$("tr.row_1").append("<td colspan=2><div class=\"color_label\" style=\"background-color:" + colors[j] + ";\"></div></td>");

				$("tr.row_2").append("<td><label for=\"disks_" + j + "\">Total Disks in Pool:</label></td>");
				$("tr.row_2").append("<td><input type=\"text\" id=\"disks_" + j + "\" value=\"" + raid_topologies[j].disks + "\"></td>");
				
				$("tr.row_3").append("<td><label for=\"disk_size_" + j + "\">Disk Size (TB):</label></td>");
				$("tr.row_3").append("<td><input type=\"text\" id=\"disk_size_" + j + "\" value=\"" + raid_topologies[j].disk_size + "\"></td>");

				$("tr.row_4").append("<td><label for=\"min_spares_" + j + "\">Minimum Spares:</label></td>");
				$("tr.row_4").append("<td><input type=\"text\" id=\"min_spares_" + j + "\" value=\"" + raid_topologies[j].min_spares + "\"></td>");

				$("tr.row_5").append("<td><label for=\"use_new_slop_" + j + "\">OpenZFS 2.0.7 Slop:</label></td>");
				if (raid_topologies[j].use_new_slop) {
					$("tr.row_5").append("<td><input type=\"checkbox\" id=\"use_new_slop_" + j + "\" checked></td>");
				} else {
					$("tr.row_5").append("<td><input type=\"checkbox\" id=\"use_new_slop_" + j + "\"></td>");
				}

				$("tr.row_6").append("<td><label for=\"recordsize_" + j + "\">ZFS recordsize value:</label></td>");
				$("tr.row_6").append("<td><select id=\"recordsize_" + j + "\">");
				$("tr.row_6").append("</select></td>");
					$("select#recordsize_" + j).append("<option value=\"4\">4 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"8\">8 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"16\">16 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"32\">32 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"64\">64 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"128\">128 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"256\">256 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"512\">512 KiB</option>");
					$("select#recordsize_" + j).append("<option value=\"1024\">1 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"2048\">2 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"4096\">4 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"8192\">8 MiB</option>");
					$("select#recordsize_" + j).append("<option value=\"16384\">16 MiB</option>");
				$("select#recordsize_" + j + " option[value=" + raid_topologies[j].recordsize + "]").attr("selected","selected");

				$("tr.row_7").append("<td><label for=\"ashift_" + j + "\">ZFS ashift value:</label></td>");
				$("tr.row_7").append("<td><select id=\"ashift_" + j + "\">");
				$("tr.row_7").append("</select></td>");
					$("select#ashift_" + j).append("<option value=\"9\">9</option>");
					$("select#ashift_" + j).append("<option value=\"12\">12</option>");
					$("select#ashift_" + j).append("<option value=\"13\">13</option>");
					$("select#ashift_" + j).append("<option value=\"14\">14</option>");
				$("select#ashift_" + j + " option[value=" + raid_topologies[j].ashift + "]").attr("selected","selected");

				$("tr.row_8").append("<td><label for=\"swap_size_" + j + "\">Disk Swap Size:</label></td>");
				$("tr.row_8").append("<td><select id=\"swap_size_" + j + "\">");
				$("tr.row_8").append("</select></td>");
					$("select#swap_size_" + j).append("<option value=\"0\" selected>0 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"2\">2 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"4\">4 GiB</option>");
					$("select#swap_size_" + j).append("<option value=\"8\">8 GiB</option>");
				$("select#swap_size_" + j + " option[value=" + raid_topologies[j].swap_size + "]").attr("selected","selected");

				$("tr.row_10").append("<td><label for=\"raid_type_" + j + "\">RAID Type:</label></td>");
				$("tr.row_10").append("<td><select class=\"raid_type_select\" id=\"raid_type_" + j + "\">");
				$("tr.row_10").append("</select></td>");
					$("select#raid_type_" + j).append("<option value=\"m\" selected>Mirrors</option>");
					$("select#raid_type_" + j).append("<option value=\"z\">RAIDZ</option>");
					$("select#raid_type_" + j).append("<option value=\"d\">dRAID</option>");
				$("select#raid_type_" + j + " option[value=" + raid_topologies[j].raid_type + "]").attr("selected","selected");
				
				$("tr.row_11").append("<td class=\"" + j + "\" id=\"1\"></td>");
				$("tr.row_11").append("<td class=\"" + j + "\" id=\"2\"></td>");
				$("tr.row_12").append("<td class=\"" + j + "\" id=\"3\"></td>");
				$("tr.row_12").append("<td class=\"" + j + "\" id=\"4\"></td>");
				$("tr.row_13").append("<td class=\"" + j + "\" id=\"5\"></td>");
				$("tr.row_13").append("<td class=\"" + j + "\" id=\"6\"></td>");
				$("tr.row_14").append("<td class=\"" + j + "\" id=\"7\"></td>");
				$("tr.row_14").append("<td class=\"" + j + "\" id=\"8\"></td>");
				
				$("tr.row_16").append("<td><label for=\"disk_afr_" + j + "\">Disk AFR %:</label></td>");
				$("tr.row_16").append("<td><input type=\"text\" id=\"disk_afr_" + j + "\" value=\"" + raid_topologies[j].disk_afr + "\"></td>");

				$("tr.row_17").append("<td><label for=\"resilver_hrs_" + j + "\">Resilver Hrs/Width:</label></td>");
				$("tr.row_17").append("<td><input type=\"text\" id=\"resilver_hrs_" + j + "\" value=\"" + raid_topologies[j].resilver_hrs + "\"></td>");
				
			}
		}

		draw_raid_inputs(-1,initial_config);

		$("tr.row_9").append("<td colspan=" + (2 * raid_topo_count) + "><hr></td>");
		$("tr.row_15").append("<td colspan=" + (2 * raid_topo_count) + "><hr></td>");
		$("tr.row_18").append("<td colspan=" + (2 * raid_topo_count) + "><hr></td>");
		
		$("table.graph-inputs#aux").append("<tr><td id=\"ydata_label\"><label for=\"y1_data\">Y-Axis 1 Data:</label></td>\
				<td id=\"ydata\"><select class=\"ydata\" id=\"y1_data\"></select>\
				</td><td id=\"reset\"><button type=\"button\" id=\"reset\">Reset</button></td></tr>");
			$("select#y1_data").append("<option value=\"usable\" selected>Usable Capacity</option>");
			$("select#y1_data").append("<option value=\"efficiency\">Capacity Efficiency %</option>");
			$("select#y1_data").append("<option value=\"simple_capacity\">Simple Capacity</option>");
			$("select#y1_data").append("<option value=\"zfs_overhead\">ZFS Overhead %</option>");
			$("select#y1_data").append("<option value=\"afr\">Pool AFR %</option>");
			$("select#y1_data").append("<option value=\"vdev_count\">Vdev Count</option>");
			$("select#y1_data").append("<option value=\"perf_rand_read\">Relative Performance (Random Reads)</option>");
			$("select#y1_data").append("<option value=\"perf_rand_write\">Relative Performance (Random Writes)</option>");
			$("select#y1_data").append("<option value=\"perf_seq_read\">Relative Performance (Sequential Reads)</option>");
			$("select#y1_data").append("<option value=\"perf_seq_write\">Relative Performance (Sequential Writes)</option>");
			$("select#y1_data").append("<option value=\"spares_count\">Spares Count</option>");
			$("select#y1_data").append("<option value=\"raw_pool_size\">Raw Pool Size</option>");
			$("select#y1_data").append("<option value=\"vdev_asize\">Vdev Asize</option>");
			$("select#y1_data").append("<option value=\"deflate_ratio\">Deflate Ratio</option>");
			$("select#y1_data").append("<option value=\"ms_count\">Metaslab Count</option>");
		
		$("table.graph-inputs#aux").append("<tr><td id=\"ydata_label\"><label for=\"y2_data\">Y-Axis 2 Data:</label></td>\
				<td id=\"ydata\"><select class=\"ydata\" id=\"y2_data\"></select>\
				</td><td id=\"save\"><button type=\"button\" id=\"save\">Save Configs</button></td></tr>");
			$("select#y2_data").append("<option value=\"none\">None</option>");
			$("select#y2_data").append("<option value=\"usable\" selected>Usable Capacity</option>");
			$("select#y2_data").append("<option value=\"efficiency\">Capacity Efficiency %</option>");
			$("select#y2_data").append("<option value=\"simple_capacity\">Simple Capacity</option>");
			$("select#y2_data").append("<option value=\"zfs_overhead\">ZFS Overhead %</option>");
			$("select#y2_data").append("<option value=\"afr\" selected>Pool AFR %</option>");
			$("select#y2_data").append("<option value=\"vdev_count\">Vdev Count</option>");
			$("select#y2_data").append("<option value=\"perf_rand_read\">Relative Performance (Random Read)</option>");
			$("select#y2_data").append("<option value=\"perf_rand_write\">Relative Performance (Random Write)</option>");
			$("select#y2_data").append("<option value=\"perf_seq_read\">Relative Performance (Sequential Read)</option>");
			$("select#y2_data").append("<option value=\"perf_seq_write\">Relative Performance (Sequential Write)</option>");
			$("select#y2_data").append("<option value=\"spares_count\">Spares Count</option>");
			$("select#y2_data").append("<option value=\"raw_pool_size\">Raw Pool Size</option>");
			$("select#y2_data").append("<option value=\"vdev_asize\">Vdev Asize</option>");
			$("select#y2_data").append("<option value=\"deflate_ratio\">Deflate Ratio</option>");
			$("select#y2_data").append("<option value=\"ms_count\">Metaslab Count</option>");
		
		$("table.graph-inputs#text").append("<tr><td id=\"config_text\"><input type=\"text\" id=\"config_text\" disabled></input></td>")
		$("table.graph-inputs#text").append("<tr><td id=\"help_text\"><textarea id=\"help_text\" disabled></textarea></td></tr>")
		
	}

	function draw_raid_inputs(config_to_update,initial_config) {
		if (config_to_update == -1) {
			for (var j = 0; j < raid_topo_count; j++) {
				raid_type = $("select#raid_type_" + j).val();
				
				if (initial_config) {
					if (raid_type == "m") {
						$("td#1." + j).html("<label for=\"max_width_" + j + "\">Max Mirror Width:</label>");
						$("td#2." + j).html("<input type=\"text\" class=\"mirror_info\" id=\"max_width_" + j + "\" value=\"10\">");
						$("td#3." + j).html("");
						$("td#4." + j).html("");
						$("td#5." + j).html("");
						$("td#6." + j).html("");
						$("td#7." + j).html("");
						$("td#8." + j).html("");
					}

					if (raid_type == "z") {
						$("td#1." + j).html("<label for=\"parity_" + j + "\">Parity Level:</label>");
						$("td#2." + j).html("<select class=\"raidz_info\" id=\"parity_" + j + "\"></select>");
							$("select#parity_" + j).append("<option value=\"1\">Z1</option>");
							$("select#parity_" + j).append("<option value=\"2\" selected>Z2</option>");
							$("select#parity_" + j).append("<option value=\"3\">Z3</option>");
						$("td#3." + j).html("<label for=\"max_width_" + j + "\">Max Vdev Width:</label>");
						$("td#4." + j).html("<input type=\"text\" class=\"raidz_info\" id=\"max_width_" + j + "\" value=\"36\">");
						$("td#5." + j).html("");
						$("td#6." + j).html("");
						$("td#7." + j).html("");
						$("td#8." + j).html("");
					}

					if (raid_type == "d") {
						$("td#1." + j).html("<label for=\"parity_" + j + "\">Parity Level:</label>");
						$("td#2." + j).html("<select class=\"draid_info\" id=\"parity_" + j + "\"></select>");
							$("select#parity_" + j).append("<option value=\"1\">1</option>");
							$("select#parity_" + j).append("<option value=\"2\" selected>2</option>");
							$("select#parity_" + j).append("<option value=\"3\">3</option>");
						$("td#3." + j).html("<label for=\"max_data_disks_" + j + "\">Max Data:</label>");
						$("td#4." + j).html("<input type=\"text\" class=\"draid_info\" id=\"max_data_disks_" + j + "\" value=\"36\">");
						$("td#5." + j).html("<label for=\"children_" + j + "\">Children:</label></td>");
						$("td#6." + j).html("<input type=\"text\" class=\"draid_info\" id=\"children_" + j + "\" value=\"60\">");
						$("td#7." + j).html("<label for=\"spares_" + j + "\">Spares:</label>");
						$("td#8." + j).html("<select class=\"draid_info\" id=\"spares_" + j + "\"></select>");
							$("select#spares_" + j).append("<option value=\"0\">0</option>");
							$("select#spares_" + j).append("<option value=\"1\">1</option>");
							$("select#spares_" + j).append("<option value=\"2\" selected>2</option>");
							$("select#spares_" + j).append("<option value=\"3\">3</option>");
							$("select#spares_" + j).append("<option value=\"4\">4</option>");
					}
				} else {
					if (raid_type == "m") {
						$("td#1." + j).html("<label for=\"max_width_" + j + "\">Max Mirror Width:</label>");
						$("td#2." + j).html("<input type=\"text\" class=\"mirror_info\" id=\"max_width_" + j + "\" value=\"" + raid_topologies[j].max_width + "\">");
						$("td#3." + j).html("");
						$("td#4." + j).html("");
						$("td#5." + j).html("");
						$("td#6." + j).html("");
						$("td#7." + j).html("");
						$("td#8." + j).html("");
					}

					if (raid_type == "z") {
						$("td#1." + j).html("<label for=\"parity_" + j + "\">Parity Level:</label>");
						$("td#2." + j).html("<select class=\"raidz_info\" id=\"parity_" + j + "\"></select>");
							$("select#parity_" + j).append("<option value=\"1\">Z1</option>");
							$("select#parity_" + j).append("<option value=\"2\">Z2</option>");
							$("select#parity_" + j).append("<option value=\"3\">Z3</option>");
						$("select#parity_" + j + " option[value=" + raid_topologies[j].parity + "]").attr("selected","selected");
						
						$("td#3." + j).html("<label for=\"max_width_" + j + "\">Max Vdev Width:</label>");
						$("td#4." + j).html("<input type=\"text\" class=\"raidz_info\" id=\"max_width_" + j + "\" value=\"" + raid_topologies[j].max_width + "\">");
						$("td#5." + j).html("");
						$("td#6." + j).html("");
						$("td#7." + j).html("");
						$("td#8." + j).html("");
					}

					if (raid_type == "d") {
						$("td#1." + j).html("<label for=\"parity_" + j + "\">Parity Level:</label>");
						$("td#2." + j).html("<select class=\"draid_info\" id=\"parity_" + j + "\"></select>");
							$("select#parity_" + j).append("<option value=\"1\">1</option>");
							$("select#parity_" + j).append("<option value=\"2\">2</option>");
							$("select#parity_" + j).append("<option value=\"3\">3</option>");
						$("select#parity_" + j + " option[value=" + raid_topologies[j].parity + "]").attr("selected","selected");
						$("td#3." + j).html("<label for=\"max_data_disks_" + j + "\">Max Data:</label>");
						$("td#4." + j).html("<input type=\"text\" class=\"draid_info\" id=\"max_data_disks_" + j + "\" value=\"" + raid_topologies[j].max_data_disks + "\">");
						$("td#5." + j).html("<label for=\"children_" + j + "\">Children:</label></td>");
						$("td#6." + j).html("<input type=\"text\" class=\"draid_info\" id=\"children_" + j + "\" value=\"" + raid_topologies[j].children + "\">");
						$("td#7." + j).html("<label for=\"spares_" + j + "\">Spares:</label>");
						$("td#8." + j).html("<select class=\"draid_info\" id=\"spares_" + j + "\"></select>");
							$("select#spares_" + j).append("<option value=\"0\">0</option>");
							$("select#spares_" + j).append("<option value=\"1\">1</option>");
							$("select#spares_" + j).append("<option value=\"2\">2</option>");
							$("select#spares_" + j).append("<option value=\"3\">3</option>");
							$("select#spares_" + j).append("<option value=\"4\">4</option>");
						$("select#spares_" + j + " option[value=" + raid_topologies[j].spares + "]").attr("selected","selected");
					}
				}
			}
		} else {
			raid_type = $("select#raid_type_" + config_to_update).val();
				
			if (raid_type == "m") {
				$("td#1." + config_to_update).html("<label for=\"max_width_" + config_to_update + "\">Max Mirror Width:</label>");
				$("td#2." + config_to_update).html("<input type=\"text\" class=\"mirror_info\" id=\"max_width_" + config_to_update + "\" value=\"10\">");
				$("td#3." + config_to_update).html("");
				$("td#4." + config_to_update).html("");
				$("td#5." + config_to_update).html("");
				$("td#6." + config_to_update).html("");
				$("td#7." + config_to_update).html("");
				$("td#8." + config_to_update).html("");
			}

			if (raid_type == "z") {
				$("td#1." + config_to_update).html("<label for=\"parity_" + config_to_update + "\">Parity Level:</label>");
				$("td#2." + config_to_update).html("<select class=\"raidz_info\" id=\"parity_" + config_to_update + "\"></select>");
					$("select#parity_" + config_to_update).append("<option value=\"1\">Z1</option>");
					$("select#parity_" + config_to_update).append("<option value=\"2\" selected>Z2</option>");
					$("select#parity_" + config_to_update).append("<option value=\"3\">Z3</option>");
				$("td#3." + config_to_update).html("<label for=\"max_width_" + config_to_update + "\">Max Vdev Width:</label>");
				$("td#4." + config_to_update).html("<input type=\"text\" class=\"raidz_info\" id=\"max_width_" + config_to_update + "\" value=\"24\">");
				$("td#5." + config_to_update).html("");
				$("td#6." + config_to_update).html("");
				$("td#7." + config_to_update).html("");
				$("td#8." + config_to_update).html("");
			}

			if (raid_type == "d") {
				$("td#1." + config_to_update).html("<label for=\"parity_" + config_to_update + "\">Parity Level:</label>");
				$("td#2." + config_to_update).html("<select class=\"draid_info\" id=\"parity_" + config_to_update + "\"></select>");
					$("select#parity_" + config_to_update).append("<option value=\"1\">1</option>");
					$("select#parity_" + config_to_update).append("<option value=\"2\" selected>2</option>");
					$("select#parity_" + config_to_update).append("<option value=\"3\">3</option>");
				$("td#3." + config_to_update).html("<label for=\"max_data_disks_" + config_to_update + "\">Max Data:</label>");
				$("td#4." + config_to_update).html("<input type=\"text\" class=\"draid_info\" id=\"max_data_disks_" + config_to_update + "\" value=\"24\">");
				$("td#5." + config_to_update).html("<label for=\"children_" + config_to_update + "\">Children:</label></td>");
				$("td#6." + config_to_update).html("<input type=\"text\" class=\"draid_info\" id=\"children_" + config_to_update + "\" value=\"255\">");
				$("td#7." + config_to_update).html("<label for=\"spares_" + config_to_update + "\">Spares:</label>");
				$("td#8." + config_to_update).html("<select class=\"draid_info\" id=\"spares_" + config_to_update + "\"></select>");
						$("select#spares_" + config_to_update).append("<option value=\"0\" selected>0</option>");
						$("select#spares_" + config_to_update).append("<option value=\"1\">1</option>");
						$("select#spares_" + config_to_update).append("<option value=\"2\">2</option>");
						$("select#spares_" + config_to_update).append("<option value=\"3\">3</option>");
						$("select#spares_" + config_to_update).append("<option value=\"4\">4</option>");
			}

		}

	}

	function get_capacity(vdev_layout, raid_topo) {
		// Config-specific variables
		disks = raid_topologies[raid_topo].disks;
		min_spares = raid_topologies[raid_topo].min_spares;
		use_new_slop = raid_topologies[raid_topo].use_new_slop;
		recordsize = raid_topologies[raid_topo].recordsize;
		ashift = raid_topologies[raid_topo].ashift;
		swap_size = raid_topologies[raid_topo].swap_size;

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

	function Factorial(n) {
		// Factorial(n) = n! = n * n-1 * n-2 * ... * 2 * 1
		var rval = 1n;
		for (var i = 2; i <= n; i++) {
			rval = BigInt(rval) * BigInt(i);
		}
		return rval;
	}

	function BinomCoeff(n,k) {
		// BinomCoeff(n,k) = n choose k = n! / (k! * (n-k)!)
		return Factorial(n) / (Factorial(k) * Factorial(n-k));
	}

	function BinomDistrib(n,k,p) {
		// BinomDistrib(n,k,p) = (n choose k) * p^k * (1-p)^(n-k)
		return Number(BinomCoeff(n,k)) * p**k * (1-p)**(n-k);
	}

	function R2C2(vdevWidth, parityLevel, numVdev, pFail) {
		// R2C2() returns the probability value of zpool failure given configuration parameters
		// vdevWidth = (number) Number of HDDs per vdev
		// parityLevel = (number) Redundancy level (1 for RAID-Z1, 2 for RAID-Z2, 3 for RAID-Z3, etc.)
		// numVdev = (number) Number of vdevs in zpool
		// pFail = (number) Probability of an individual drive failing

		var P = 0;
		// P = probability that rLvl or fewer drives have failed (i.e., vdev is still alive)
		for (var i = parityLevel; i >= 0; i--) {
			P = P + BinomDistrib(vdevWidth, i, pFail);
		}

		// 1 - P^numVdev = probability that one or more of the vdevs are not alive
		return 1 - P**numVdev;
	}

	
	var graph_labels = [];
	var graph_scale_shift;
	function gen_graph_data() {
		graph_labels = [];
		var max_capacity = 0;
		var max_pool_raw_size = 0;
		var max_vdev_asize = 0;
		var max_width = 0;
		
		for (var i = 0; i < raid_topo_count; i++) {

			/* MIRROR DATA */
			if (raid_topologies[i].raid_type == "m" ) {

				if (raid_topologies[i].max_width > max_width) {
					max_width = raid_topologies[i].max_width;
				}

				for (var j = 1; j <= raid_topologies[i].max_width; j++) {
					config_data = get_capacity(raid_topologies[i].disk_size + "t" + j + "wm", i);
					
					switch(y1_data) {
						case "usable":
							raid_topologies[i].y1_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y1_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y1_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y1_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
							resilver_time = raid_topologies[i].resilver_hrs;
							disk_afr = hourly_afr * resilver_time;
							pool_afr = R2C2(j,j-1,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
							if (pool_afr < 0) { pool_afr = 0; }
							raid_topologies[i].y1_dataset.push(pool_afr);
							break;
						case "vdev_count":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							raid_topologies[i].y1_dataset.push(config_data.disks_in_pool);
							break;
						case "perf_rand_write":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_seq_read":
							raid_topologies[i].y1_dataset.push(config_data.disks_in_pool);
							break;
						case "perf_seq_write":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "spares_count":
							raid_topologies[i].y1_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y1_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y1_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y1_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y1_dataset.push(config_data.ms_count);
							break;
					}

					switch(y2_data) {
						case "none":
							break;
						case "usable":
							raid_topologies[i].y2_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y2_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y2_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y2_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
							resilver_time = raid_topologies[i].resilver_hrs;
							disk_afr = hourly_afr * resilver_time;
							pool_afr = R2C2(j,j-1,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
							if (pool_afr < 0) { pool_afr = 0; }
							raid_topologies[i].y2_dataset.push(pool_afr);
							break;
						case "vdev_count":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							raid_topologies[i].y2_dataset.push(config_data.disks_in_pool);
							break;
						case "perf_rand_write":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_seq_read":
							raid_topologies[i].y2_dataset.push(config_data.disks_in_pool);
							break;
						case "perf_seq_write":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "spares_count":
							raid_topologies[i].y2_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y2_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y2_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y2_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y2_dataset.push(config_data.ms_count);
							break;
					}
				}
			}

			/* RAIDZ DATA */
			if (raid_topologies[i].raid_type == "z" ) {

				if (raid_topologies[i].max_width > max_width) {
					max_width = raid_topologies[i].max_width;
				}

				for (var j = 1; j <= raid_topologies[i].max_width; j++) {
					config_data = get_capacity(raid_topologies[i].disk_size + "t" + j + "wz" + raid_topologies[i].parity, i);
					
					switch(y1_data) {
						case "usable":
							raid_topologies[i].y1_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y1_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y1_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y1_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							if (j > raid_topologies[i].parity + 1) {
								hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
								resilver_time = raid_topologies[i].resilver_hrs * (j - raid_topologies[i].parity);
								disk_afr = hourly_afr * resilver_time * raid_topologies[i].parity;
								pool_afr = R2C2(j,raid_topologies[i].parity,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
								if (pool_afr < 0) { pool_afr = 0; }
								raid_topologies[i].y1_dataset.push(pool_afr);
							} else {
								raid_topologies[i].y1_dataset.push(0);
							}
							break;
						case "vdev_count":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_write":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_seq_read":
							perf = (config_data.vdev_width - config_data.parity_level) * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "perf_seq_write":
							perf = (config_data.vdev_width - config_data.parity_level) * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "spares_count":
							raid_topologies[i].y1_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y1_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y1_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y1_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y1_dataset.push(config_data.ms_count);
							break;
					}

					switch(y2_data) {
						case "none":
							break;
						case "usable":
							raid_topologies[i].y2_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y2_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y2_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y2_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							if (j > raid_topologies[i].parity + 1) {
								hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
								resilver_time = raid_topologies[i].resilver_hrs * (j - raid_topologies[i].parity);
								disk_afr = hourly_afr * resilver_time * raid_topologies[i].parity;
								pool_afr = R2C2(j,raid_topologies[i].parity,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
								if (pool_afr < 0) { pool_afr = 0; }
								raid_topologies[i].y2_dataset.push(pool_afr);
							} else {
								raid_topologies[i].y2_dataset.push(0);
							}
							break;
						case "vdev_count":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_write":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_seq_read":
							perf = (config_data.vdev_width - config_data.parity_level) * config_data.vdev_count;
							if (perf < 0) { perf = 0 };
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "perf_seq_write":
							perf = (config_data.vdev_width - config_data.parity_level) * config_data.vdev_count;
							if (perf < 0) { perf = 0 };
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "spares_count":
							raid_topologies[i].y2_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y2_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y2_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y2_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y2_dataset.push(config_data.ms_count);
							break;
					}

				}
			}

			/* DRAID DATA */
			if (raid_topologies[i].raid_type == "d" ) {
				p = raid_topologies[i].parity;
				c = raid_topologies[i].children;
				s = raid_topologies[i].spares;


				if (raid_topologies[i].max_data_disks > max_width) {
					max_width = raid_topologies[i].max_data_disks;
				}

				for (var j = 1; j <= raid_topologies[i].max_data_disks; j++) {					
					config_data = get_capacity(raid_topologies[i].disk_size + "tdraid" + p + ":" + j + "d:" + c + "c:" + s + "s", i);
					

					switch(y1_data) {
						case "usable":
							raid_topologies[i].y1_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y1_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y1_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y1_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							if (j+p+s <= c) {
								hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
								resilver_time = raid_topologies[i].resilver_hrs * j;
								disk_afr = hourly_afr * resilver_time * raid_topologies[i].parity;
								pool_afr = R2C2(c,p,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
								if (pool_afr < 0) { pool_afr = 0; }
								raid_topologies[i].y1_dataset.push(pool_afr);
							} else {
								raid_topologies[i].y1_dataset.push(0);
							}
							break;
						case "vdev_count":
							raid_topologies[i].y1_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							perf = Math.floor((c-s)/(j+p)) * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "perf_rand_write":
							perf = Math.floor((c-s)/(j+p)) * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "perf_seq_read":
							perf = Math.floor((c-s)/(j+p)) * j * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "perf_seq_write":
							perf = Math.floor((c-s)/(j+p)) * j * config_data.vdev_count;
							raid_topologies[i].y1_dataset.push(perf);
							break;
						case "spares_count":
							raid_topologies[i].y1_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y1_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y1_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y1_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y1_dataset.push(config_data.ms_count);
							break;
					}

					switch(y2_data) {
						case "none":
							break;
						case "usable":
							raid_topologies[i].y2_dataset.push(config_data.pool_usable_bytes);
							if (config_data.pool_usable_bytes > max_capacity) {
								max_capacity = config_data.pool_usable_bytes;
							}
							break;
						case "efficiency":
							raid_topologies[i].y2_dataset.push(config_data.storage_efficiency);
							break;
						case "simple_capacity":
							simple_capacity = config_data.simple_capacity * 1024**4;
							if (simple_capacity < 0) { simple_capacity = 0 };
							raid_topologies[i].y2_dataset.push(simple_capacity);
							if (simple_capacity > max_capacity) {
								max_capacity = simple_capacity;
							}
							break;
						case "zfs_overhead":
							raid_topologies[i].y2_dataset.push(config_data.zfs_overhead);
							break;
						case "afr":
							if (j+p+s <= c) {
								hourly_afr = raid_topologies[i].disk_afr / 8670 / 100;
								resilver_time = raid_topologies[i].resilver_hrs * j;
								disk_afr = hourly_afr * resilver_time * raid_topologies[i].parity;
								pool_afr = R2C2(c,p,config_data.vdev_count,disk_afr) * 100 * afr_scale_factor;
								if (pool_afr < 0) { pool_afr = 0; }
								raid_topologies[i].y2_dataset.push(pool_afr);
							} else {
								raid_topologies[i].y2_dataset.push(0);
							}
							break;
						case "vdev_count":
							raid_topologies[i].y2_dataset.push(config_data.vdev_count);
							break;
						case "perf_rand_read":
							perf = Math.floor((c-s)/(j+p)) * config_data.vdev_count;
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "perf_rand_write":
							perf = Math.floor((c-s)/(j+p)) * config_data.vdev_count;
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "perf_seq_read":
							perf = Math.floor((c-s)/(j+p)) * j * config_data.vdev_count;
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "perf_seq_write":
							perf = Math.floor((c-s)/(j+p)) * j * config_data.vdev_count;
							raid_topologies[i].y2_dataset.push(perf);
							break;
						case "spares_count":
							raid_topologies[i].y2_dataset.push(config_data.spares_count);
							break;
						case "raw_pool_size":
							raid_topologies[i].y2_dataset.push(config_data.zfs_pool_size);
							if (config_data.zfs_pool_size > max_pool_raw_size) {
								max_pool_raw_size = config_data.zfs_pool_size;
							}
							break;
						case "vdev_asize":
							raid_topologies[i].y2_dataset.push(config_data.vdev_asize);
							if (config_data.vdev_asize > max_vdev_asize) {
								max_vdev_asize = config_data.vdev_asize;
							}
							break;
						case "deflate_ratio":
							raid_topologies[i].y2_dataset.push(config_data.vdev_deflate_ratio);
							break;
						case "ms_count":
							raid_topologies[i].y2_dataset.push(config_data.ms_count);
							break;
					}
					
				}
			}
		}

		for (var j = 1; j <= max_width; j++) {
			graph_labels.push(j);
		}

		graph_scale_shift = 0;
		for (var i = 1; i <= 6; i++) {
			if (max_capacity / 1024**i > 1) {
				graph_scale_shift += 1;
			}
		}

		if (y1_data == "usable" || y1_data == "simple_capacity") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y1_dataset[j-1] = rnd(raid_topologies[i].y1_dataset[j-1] / 1024**graph_scale_shift,3);
				}
			}
		}

		if (y2_data == "usable" || y2_data == "simple_capacity") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y2_dataset[j-1] = rnd(raid_topologies[i].y2_dataset[j-1] / 1024**graph_scale_shift,3);
				}
			}
		}

		graph_scale_shift_raw_size = 0;
		for (var i = 1; i <= 6; i++) {
			if (max_pool_raw_size / 1000**i > 1) {
				graph_scale_shift_raw_size += 1;
			}
		}

		if (y1_data == "raw_pool_size") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y1_dataset[j-1] = rnd(raid_topologies[i].y1_dataset[j-1] / 1000**graph_scale_shift_raw_size,3);
				}
			}
		}

		if (y2_data == "raw_pool_size") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y2_dataset[j-1] = rnd(raid_topologies[i].y2_dataset[j-1] / 1000**graph_scale_shift_raw_size,3);
				}
			}
		}

		graph_scale_shift_vdev_asize = 0;
		for (var i = 1; i <= 6; i++) {
			if (max_vdev_asize / 1000**i > 1) {
				graph_scale_shift_vdev_asize += 1;
			}
		}

		if (y1_data == "vdev_asize") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y1_dataset[j-1] = rnd(raid_topologies[i].y1_dataset[j-1] / 1000**graph_scale_shift_vdev_asize,3);
				}
			}
		}

		if (y2_data == "vdev_asize") {
			for (var i = 0; i < raid_topo_count; i++) {
				for (var j = 1; j <= raid_topologies[i].disks; j++) {
					raid_topologies[i].y2_dataset[j-1] = rnd(raid_topologies[i].y2_dataset[j-1] / 1000**graph_scale_shift_vdev_asize,3);
				}
			}
		}
	}
	
	const getOrCreateLegendList = (chart, id) => {
		const legendContainer = document.getElementById(id);
		let listContainer = legendContainer.querySelector('ul');

		if (!listContainer) {
			listContainer = document.createElement('ul');
			listContainer.style.display = 'flex';
			listContainer.style.flexDirection = 'row';
			listContainer.style.justifyContent = "left";
			listContainer.style.flexWrap = "wrap";
			listContainer.style.margin = 0;
			listContainer.style.padding = 0;
			legendContainer.appendChild(listContainer);
	  	}

		return listContainer;
	};

	const htmlLegendPlugin = {
		id: 'htmlLegend',
		afterUpdate(chart, args, options) {
			const ul = getOrCreateLegendList(chart, options.containerID);

			// Remove old legend items
			while (ul.firstChild) {
				ul.firstChild.remove();
			}

			// Reuse the built-in legendItems generator
			const items = chart.options.plugins.legend.labels.generateLabels(chart);

			items.forEach(item => {
				const li = document.createElement('li');
				li.style.alignItems = 'center';
				li.style.cursor = 'pointer';
				li.style.display = 'flex';
				li.style.flexDirection = 'row';
				li.style.width = "250px";
				li.style.marginLeft = '10px';
				li.style.marginTop = "5px";

				li.onclick = () => {
					const {type} = chart.config;
					if (type === 'pie' || type === 'doughnut') {
						// Pie and doughnut charts only have a single dataset and visibility is per item
						chart.toggleDataVisibility(item.index);
					} else {
						chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
					}
					chart.update();
				};

				// Color box
				const boxSpan = document.createElement('span');
				boxSpan.style.background = item.fillStyle;
				boxSpan.style.borderColor = item.strokeStyle;
				boxSpan.style.borderWidth = item.lineWidth + 'px';
				boxSpan.style.display = 'inline-block';
				boxSpan.style.flexShrink = 0;
				boxSpan.style.height = '20px';
				boxSpan.style.marginRight = '10px';
				boxSpan.style.width = '20px';

				// Text
				const textContainer = document.createElement('p');
				textContainer.style.color = item.fontColor;
				textContainer.style.margin = 0;
				textContainer.style.padding = 0;
				textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

				const text = document.createTextNode(item.text);
				textContainer.appendChild(text);

				li.appendChild(boxSpan);
				li.appendChild(textContainer);
				ul.appendChild(li);
			});
		}
	};

	const graph_canvas = document.getElementById("graph");
	const graph = new Chart(graph_canvas, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: "",
				data: [],
			},
			{
				label: "",
				data: [],
			}]
		},
		options: {
			scales: {
				y: {
				},
				x: {
					title: {
						display: true,
						text: "Disks per Vdev, Data Disks per Redundancy Group"
					}
				}
			},
			animation: false,
			plugins: {
				htmlLegend: {
					containerID: 'legend-container'
				},
				legend: {
					display: false
				}
			}
		},
		plugins: [htmlLegendPlugin]
	});


	function update_graph() {

		graph.data.datasets = [];
		for (var i = 0; i < raid_topo_count; i++) {
			graph.data.datasets.push({});

			graph.data.datasets[i].data = raid_topologies[i].y1_dataset;
			if (raid_topologies[i].raid_type == "m") {
				graph.data.datasets[i].label = "Mirrors";
			}
			if (raid_topologies[i].raid_type == "z") {
				graph.data.datasets[i].label = "RAIDZ" + raid_topologies[i].parity;
			}
			if (raid_topologies[i].raid_type == "d") {
				graph.data.datasets[i].label = "dRAID" + raid_topologies[i].parity;
			}

			switch(y1_data) {
				case "usable":
					switch(graph_scale_shift) {
						case 0:
							graph.data.datasets[i].label += " (Bytes Usable)";
							break;
						case 1:
							graph.data.datasets[i].label += " (KiB Usable)";
							break;
						case 2:
							graph.data.datasets[i].label += " (MiB Usable)";
							break;
						case 3:
							graph.data.datasets[i].label += " (GiB Usable)";
							break;
						case 4:
							graph.data.datasets[i].label += " (TiB Usable)";
							break;
						case 5:
							graph.data.datasets[i].label += " (PiB Usable)";
							break;
						case 6:
							graph.data.datasets[i].label += " (EiB Usable)";
							break;
					}
					break;
				case "efficiency":
					graph.data.datasets[i].label += " (Efficiency %)";
					break;
				case "simple_capacity":
					switch(graph_scale_shift) {
						case 0:
							graph.data.datasets[i].label += " (Simple Capacity, Bytes)";
							break;
						case 1:
							graph.data.datasets[i].label += " (Simple Capacity, KiB)";
							break;
						case 2:
							graph.data.datasets[i].label += " (Simple Capacity, MiB)";
							break;
						case 3:
							graph.data.datasets[i].label += " (Simple Capacity, GiB)";
							break;
						case 4:
							graph.data.datasets[i].label += " (Simple Capacity, TiB)";
							break;
						case 5:
							graph.data.datasets[i].label += " (Simple Capacity, PiB)";
							break;
						case 6:
							graph.data.datasets[i].label += " (Simple Capacity, EiB)";
							break;
					}
					break;
				case "zfs_overhead":
					graph.data.datasets[i].label += " (Overhead %)";
					break;
				case "afr":
					graph.data.datasets[i].label += " (Pool AFR %)";
					break;
				case "vdev_count":
					graph.data.datasets[i].label += " (Vdev Count)";
					break;
				case "perf_rand_read":
					graph.data.datasets[i].label += " (Perf - Rand Read)";
					break;
				case "perf_rand_write":
					graph.data.datasets[i].label += " (Perf - Rand Write)";
					break;
				case "perf_seq_read":
					graph.data.datasets[i].label += " (Perf - Seq Read)";
					break;
				case "perf_seq_write":
					graph.data.datasets[i].label += " (Perf - Seq Write)";
					break;
				case "spares_count":
					graph.data.datasets[i].label += " (Spares Count)";
					break;
				case "raw_pool_size":
					switch(graph_scale_shift_raw_size) {
						case 0:
							graph.data.datasets[i].label += " (Raw Pool Size, Bytes)";
							break;
						case 1:
							graph.data.datasets[i].label += " (Raw Pool Size, KB)";
							break;
						case 2:
							graph.data.datasets[i].label += " (Raw Pool Size, MB)";
							break;
						case 3:
							graph.data.datasets[i].label += " (Raw Pool Size, GB)";
							break;
						case 4:
							graph.data.datasets[i].label += " (Raw Pool Size, TB)";
							break;
						case 5:
							graph.data.datasets[i].label += " (Raw Pool Size, PB)";
							break;
						case 6:
							graph.data.datasets[i].label += " (Raw Pool Size, EB)";
							break;
					}
					break;
				case "vdev_asize":
					switch(graph_scale_shift_vdev_asize) {
						case 0:
							graph.data.datasets[i].label += " (Vdev Asize, Bytes)";
							break;
						case 1:
							graph.data.datasets[i].label += " (Vdev Asize, KB)";
							break;
						case 2:
							graph.data.datasets[i].label += " (Vdev Asize, MB)";
							break;
						case 3:
							graph.data.datasets[i].label += " (Vdev Asize, GB)";
							break;
						case 4:
							graph.data.datasets[i].label += " (Vdev Asize, TB)";
							break;
						case 5:
							graph.data.datasets[i].label += " (Vdev Asize, PB)";
							break;
						case 6:
							graph.data.datasets[i].label += " (Vdev Asize, EB)";
							break;
					}
					break;
				case "deflate_ratio":
					graph.data.datasets[i].label += " (Deflate Ratio)";
					break;
				case "ms_count":
					graph.data.datasets[i].label += " (MS Count)";
					break;
			}

			graph.data.datasets[i].yAxisID = "y";
			graph.data.datasets[i].borderWidth = 2;
			graph.data.datasets[i].pointRadius = 1;
			graph.data.datasets[i].borderColor = colors[i];
			graph.data.datasets[i].backgroundColor = colors[i];
		}
		
		graph.options.scales.y.beginAtZero = true;
		graph.options.scales.y.position = "left";
		graph.options.scales.y.title.display = true;

		switch(y1_data) {
			case "usable":
				switch(graph_scale_shift) {
					case 0:
						graph.options.scales.y.title.text = "Bytes Usable";
						break;
					case 1:
						graph.options.scales.y.title.text = "KiB Usable";
						break;
					case 2:
						graph.options.scales.y.title.text = "MiB Usable";
						break;
					case 3:
						graph.options.scales.y.title.text = "GiB Usable";
						break;
					case 4:
						graph.options.scales.y.title.text = "TiB Usable";
						break;
					case 5:
						graph.options.scales.y.title.text = "PiB Usable";
						break;
					case 6:
						graph.options.scales.y.title.text = "EiB Usable";
						break;
				}
				break;
			case "efficiency":
				graph.options.scales.y.title.text = "Efficiency (%)";
				break;
			case "simple_capacity":
				switch(graph_scale_shift) {
					case 0:
						graph.options.scales.y.title.text = "Simple Capacity, Bytes";
						break;
					case 1:
						graph.options.scales.y.title.text = "Simple Capacity, KiB";
						break;
					case 2:
						graph.options.scales.y.title.text = "Simple Capacity, MiB";
						break;
					case 3:
						graph.options.scales.y.title.text = "Simple Capacity, GiB";
						break;
					case 4:
						graph.options.scales.y.title.text = "Simple Capacity, TiB";
						break;
					case 5:
						graph.options.scales.y.title.text = "Simple Capacity, PiB";
						break;
					case 6:
						graph.options.scales.y.title.text = "Simple Capacity, EiB";
						break;
				}
				break;
			case "zfs_overhead":
				graph.options.scales.y.title.text = "Overhead (%)";
				break;
			case "afr":
				graph.options.scales.y.title.text = "Pool AFR (%)";
				break;
			case "vdev_count":
				graph.options.scales.y.title.text = "Vdev Count";
				break;
			case "perf_rand_read":
				graph.options.scales.y.title.text = "Relative Performance - Random Read";
				break;
			case "perf_rand_write":
				graph.options.scales.y.title.text = "Relative Performance - Random Write";
				break;
			case "perf_seq_read":
				graph.options.scales.y.title.text = "Relative Performance - Sequential Read";
				break;
			case "perf_seq_write":
				graph.options.scales.y.title.text = "Relative Performance - Sequential Write";
				break;
			case "spares_count":
				graph.options.scales.y.title.text = "Spares Count";
				break;
			case "raw_pool_size":
				switch(graph_scale_shift_raw_size) {
					case 0:
						graph.options.scales.y.title.text = "Raw Pool Size, Bytes";
						break;
					case 1:
						graph.options.scales.y.title.text = "Raw Pool Size, KB";
						break;
					case 2:
						graph.options.scales.y.title.text = "Raw Pool Size, MB";
						break;
					case 3:
						graph.options.scales.y.title.text = "Raw Pool Size, GB";
						break;
					case 4:
						graph.options.scales.y.title.text = "Raw Pool Size, TB";
						break;
					case 5:
						graph.options.scales.y.title.text = "Raw Pool Size, PB";
						break;
					case 6:
						graph.options.scales.y.title.text = "Raw Pool Size, EB";
						break;
				}
				break;
			case "vdev_asize":
				switch(graph_scale_shift_vdev_asize) {
					case 0:
						graph.options.scales.y.title.text = "Vdev Asize, Bytes";
						break;
					case 1:
						graph.options.scales.y.title.text = "Vdev Asize, KB";
						break;
					case 2:
						graph.options.scales.y.title.text = "Vdev Asize, MB";
						break;
					case 3:
						graph.options.scales.y.title.text = "Vdev Asize, GB";
						break;
					case 4:
						graph.options.scales.y.title.text = "Vdev Asize, TB";
						break;
					case 5:
						graph.options.scales.y.title.text = "Vdev Asize, PB";
						break;
					case 6:
						graph.options.scales.y.title.text = "Vdev Asize, EB";
						break;
				}
				break;
			case "deflate_ratio":
				graph.options.scales.y.title.text = "Deflate Ratio";
				break;
			case "ms_count":
				graph.options.scales.y.title.text = "Metaslab Count";
				break;
		}

		if (y2_data != "none") {

			graph.options.scales.y1 = {};
			graph.options.scales.y1.display = true;
			graph.options.scales.y1.beginAtZero = true;
			graph.options.scales.y1.position = "right";
			graph.options.scales.y1.title = {};
			graph.options.scales.y1.title.display = true;

			switch(y2_data) {
				case "usable":
					switch(graph_scale_shift) {
						case 0:
							graph.options.scales.y1.title.text = "Bytes Usable";
							break;
						case 1:
							graph.options.scales.y1.title.text = "KiB Usable";
							break;
						case 2:
							graph.options.scales.y1.title.text = "MiB Usable";
							break;
						case 3:
							graph.options.scales.y1.title.text = "GiB Usable";
							break;
						case 4:
							graph.options.scales.y1.title.text = "TiB Usable";
							break;
						case 5:
							graph.options.scales.y1.title.text = "PiB Usable";
							break;
						case 6:
							graph.options.scales.y1.title.text = "EiB Usable";
							break;
					}
					break;
				case "efficiency":
					graph.options.scales.y1.title.text = "Efficiency (%)";
					break;
				case "simple_capacity":
					switch(graph_scale_shift) {
						case 0:
							graph.options.scales.y1.title.text = "Simple Capacity, Bytes";
							break;
						case 1:
							graph.options.scales.y1.title.text = "Simple Capacity, KiB";
							break;
						case 2:
							graph.options.scales.y1.title.text = "Simple Capacity, MiB";
							break;
						case 3:
							graph.options.scales.y1.title.text = "Simple Capacity, GiB";
							break;
						case 4:
							graph.options.scales.y1.title.text = "Simple Capacity, TiB";
							break;
						case 5:
							graph.options.scales.y1.title.text = "Simple Capacity, PiB";
							break;
						case 6:
							graph.options.scales.y1.title.text = "Simple Capacity, EiB";
							break;
					}
					break;
				case "zfs_overhead":
					graph.options.scales.y1.title.text = "Overhead (%)";
					break;
				case "afr":
					graph.options.scales.y1.title.text = "Pool AFR (%)";
					break;
				case "vdev_count":
					graph.options.scales.y1.title.text = "Vdev Count";
					break;
				case "perf_rand_read":
					graph.options.scales.y1.title.text = "Relative Performance - Random Read";
					break;
				case "perf_rand_write":
					graph.options.scales.y1.title.text = "Relative Performance - Random Write";
					break;
				case "perf_seq_read":
					graph.options.scales.y1.title.text = "Relative Performance - Sequential Read";
					break;
				case "perf_seq_write":
					graph.options.scales.y1.title.text = "Relative Performance - Sequential Write";
					break;
				case "spares_count":
					graph.options.scales.y1.title.text = "Spares Count";
					break;
				case "raw_pool_size":
					switch(graph_scale_shift_raw_size) {
						case 0:
							graph.options.scales.y1.title.text = "Raw Pool Size, Bytes";
							break;
						case 1:
							graph.options.scales.y1.title.text = "Raw Pool Size, KB";
							break;
						case 2:
							graph.options.scales.y1.title.text = "Raw Pool Size, MB";
							break;
						case 3:
							graph.options.scales.y1.title.text = "Raw Pool Size, GB";
							break;
						case 4:
							graph.options.scales.y1.title.text = "Raw Pool Size, TB";
							break;
						case 5:
							graph.options.scales.y1.title.text = "Raw Pool Size, PB";
							break;
						case 6:
							graph.options.scales.y1.title.text = "Raw Pool Size, EB";
							break;
					}
					break;
				case "vdev_asize":
					switch(graph_scale_shift_vdev_asize) {
						case 0:
							graph.options.scales.y1.title.text = "Vdev Asize, Bytes";
							break;
						case 1:
							graph.options.scales.y1.title.text = "Vdev Asize, KB";
							break;
						case 2:
							graph.options.scales.y1.title.text = "Vdev Asize, MB";
							break;
						case 3:
							graph.options.scales.y1.title.text = "Vdev Asize, GB";
							break;
						case 4:
							graph.options.scales.y1.title.text = "Vdev Asize, TB";
							break;
						case 5:
							graph.options.scales.y1.title.text = "Vdev Asize, PB";
							break;
						case 6:
							graph.options.scales.y1.title.text = "Vdev Asize, EB";
							break;
					}
					break;
				case "deflate_ratio":
					graph.options.scales.y1.title.text = "Deflate Ratio";
					break;
				case "ms_count":
					graph.options.scales.y1.title.text = "Metaslab Count";
					break;
			}

			for (var i = 0; i < raid_topo_count; i++) {
				graph.data.datasets.push({});
				index = graph.data.datasets.length - 1;
				graph.data.datasets[index].data = raid_topologies[i].y2_dataset;

				if (raid_topologies[i].raid_type == "m") {
					graph.data.datasets[index].label = "Mirrors";
				}
				if (raid_topologies[i].raid_type == "z") {
					graph.data.datasets[index].label = "RAIDZ" + raid_topologies[i].parity;
				}
				if (raid_topologies[i].raid_type == "d") {
					graph.data.datasets[index].label = "dRAID" + raid_topologies[i].parity;
				}

				switch(y2_data) {
					case "usable":
						switch(graph_scale_shift) {
							case 0:
								graph.data.datasets[index].label += " (Bytes Usable)";
								break;
							case 1:
								graph.data.datasets[index].label += " (KiB Usable)";
								break;
							case 2:
								graph.data.datasets[index].label += " (MiB Usable)";
								break;
							case 3:
								graph.data.datasets[index].label += " (GiB Usable)";
								break;
							case 4:
								graph.data.datasets[index].label += " (TiB Usable)";
								break;
							case 5:
								graph.data.datasets[index].label += " (PiB Usable)";
								break;
							case 6:
								graph.data.datasets[index].label += " (EiB Usable)";
								break;
						}
						break;
					case "efficiency":
						graph.data.datasets[index].label += " (Efficiency %)";
						break;
					case "simple_capacity":
						switch(graph_scale_shift) {
							case 0:
								graph.data.datasets[index].label += " (Simple Capacity, Bytes)";
								break;
							case 1:
								graph.data.datasets[index].label += " (Simple Capacity, KiB)";
								break;
							case 2:
								graph.data.datasets[index].label += " (Simple Capacity, MiB)";
								break;
							case 3:
								graph.data.datasets[index].label += " (Simple Capacity, GiB)";
								break;
							case 4:
								graph.data.datasets[index].label += " (Simple Capacity, TiB)";
								break;
							case 5:
								graph.data.datasets[index].label += " (Simple Capacity, PiB)";
								break;
							case 6:
								graph.data.datasets[index].label += " (Simple Capacity, EiB)";
								break;
						}
						break;
					case "zfs_overhead":
						graph.data.datasets[index].label += " (Overhead %)";
						break;
					case "afr":
						graph.data.datasets[index].label += " (Pool AFR %)";
						break;
					case "vdev_count":
						graph.data.datasets[index].label += " (Vdev Count)";
						break;
					case "perf_rand_read":
						graph.data.datasets[index].label += " (Perf - Rand Read)";
						break;
					case "perf_rand_write":
						graph.data.datasets[index].label += " (Perf - Rand Write)";
						break;
					case "perf_seq_read":
						graph.data.datasets[index].label += " (Perf - Seq Read)";
						break;
					case "perf_seq_write":
						graph.data.datasets[index].label += " (Perf - Seq Write)";
						break;
					case "spares_count":
						graph.data.datasets[index].label += " (Spares Count)";
						break;
					case "raw_pool_size":
						switch(graph_scale_shift_raw_size) {
							case 0:
								graph.data.datasets[index].label += " (Raw Pool Size, Bytes)";
								break;
							case 1:
								graph.data.datasets[index].label += " (Raw Pool Size, KB)";
								break;
							case 2:
								graph.data.datasets[index].label += " (Raw Pool Size, MB)";
								break;
							case 3:
								graph.data.datasets[index].label += " (Raw Pool Size, GB)";
								break;
							case 4:
								graph.data.datasets[index].label += " (Raw Pool Size, TB)";
								break;
							case 5:
								graph.data.datasets[index].label += " (Raw Pool Size, PB)";
								break;
							case 6:
								graph.data.datasets[index].label += " (Raw Pool Size, EB)";
								break;
						}
						break;
					case "vdev_asize":
						switch(graph_scale_shift_vdev_asize) {
							case 0:
								graph.data.datasets[index].label += " (Vdev Asize, Bytes)";
								break;
							case 1:
								graph.data.datasets[index].label += " (Vdev Asize, KB)";
								break;
							case 2:
								graph.data.datasets[index].label += " (Vdev Asize, MB)";
								break;
							case 3:
								graph.data.datasets[index].label += " (Vdev Asize, GB)";
								break;
							case 4:
								graph.data.datasets[index].label += " (Vdev Asize, TB)";
								break;
							case 5:
								graph.data.datasets[index].label += " (Vdev Asize, PB)";
								break;
							case 6:
								graph.data.datasets[index].label += " (Vdev Asize, EB)";
								break;
						}
						break;
					case "deflate_ratio":
						graph.data.datasets[index].label += " (Deflate Ratio)";
						break;
					case "ms_count":
						graph.data.datasets[index].label += " (MS Count)";
						break;
				}

				graph.data.datasets[index].yAxisID = "y1";
				graph.data.datasets[index].borderWidth = 1;
				graph.data.datasets[index].pointRadius = 2;
				graph.data.datasets[index].borderColor = colors_y2[i];
				graph.data.datasets[index].backgroundColor = colors_y2[i];
			}
		} else {
			graph.options.scales.y1 = {};
			graph.options.scales.y1.display = false;
		}
		
		graph.data.labels = graph_labels;
		var label_width = (raid_topo_count * 250) + 50;
		$("div#legend-container").css("width",label_width + "px");
		$("div#legend-container").css("margin","auto");
		
		graph.update();
		$("button#save").html("Save Configs");
		$("input#config_text").val("");
	}
	
	function main() {
		get_url_data();
		get_form_data();
		gen_graph_data();
		update_graph();	
	}

	$(document).on("click",'button#save', function() {
		var config_text = "";
		config_text += "raid_topo_count=" + raid_topo_count;
		config_text += "&y1_data=" + y1_data;
		config_text += "&y2_data=" + y2_data;
		for (var i = 0; i < raid_topo_count; i++) {

			for (const [key, value] of Object.entries(raid_topologies[i])) {
				if (key != "y1_dataset" && key != "y2_dataset") {
					config_text += "&" + key + "_" + i + "=" + String(value).replace(".","_");
				}
			}
		}
		$("input#config_text").val("https://www.truenas.com/docs/references/zfscapacitygraph/?" + config_text);
		navigator.clipboard.writeText("https://www.truenas.com/docs/references/zfscapacitygraph/?" + config_text);

		if ($("button#save").html() != "Copied to Clipboard!") {
			$("button#save").html("Copied to Clipboard!");
		} else {
			$("button#save").html("Copied Again!");
		}

	});

	$(document).on("click",'button#reset', function() {
		window.location.href = "https://www.truenas.com/docs/references/zfscapacitygraph/?";
	});

	function get_url_data() {
		var params = window.location.href.split("?");
		var select_boxes = ["recordsize","ashift","swap_size","raid_type","parity","spares"];
		var check_boxes = ["use_new_slop"]
		if (params.length > 1) {
			params = params[1].split("&");
			
			for (var i = 0; i < params.length; i++) {
				
				param = params[i].split("=");
				if (param.length > 1) {
					var_name = param[0];
					var_val = param[1];

					if (var_name == "raid_topo_count") {
						
							raid_topo_count = validate_input(var_val,"",2,1,5,true);
							raid_topologies = [];
							for (var j = 0; j < raid_topo_count; j++) {
								raid_topologies.push({});
							}
							draw_config_inputs(true);
						
					} else if ( var_name == "y1_data" || var_name == "y2_data" || select_boxes.includes(var_name.slice(0,-2)) ) {

						$("select#" + var_name + " option[value=" + var_val + "]").attr("selected","selected");

						if ( var_name.slice(0,-2) == "raid_type" ) {
							raid_topo = parseInt(var_name.split("_")[2]);
							draw_raid_inputs(raid_topo,false);
						}
					} else if ( check_boxes.includes(var_name.slice(0,-2)) ) {
						
						if (var_val == "true") {
							$("input#" + var_name).attr('checked', true);
						} else {
							$("input#" + var_name).attr('checked', false);
						}
					} else {
						var_val = parseFloat(var_val.replace("_","."));
						$("input#" + var_name).val(var_val);
					}
					
				}
			}

		} else {
			draw_config_inputs(true);
		}
	}

	$(document).on("change",'input', function() {
		get_form_data();
		gen_graph_data();
		update_graph();
	});

	$(document).on("change",'select', function() {
		get_form_data();
		gen_graph_data();
		update_graph();
	});

	$(document).on("click",'button.plus', function() {
		if (raid_topo_count < 5) {
			var config_num = parseInt($(this).attr("id").split("_")[1]);
			var copy = {};
			Object.assign(copy,raid_topologies[config_num]);
			raid_topologies.splice(config_num,0,copy);
			raid_topo_count += 1;

			draw_config_inputs(false);
			get_form_data();
			gen_graph_data();
			update_graph();
			if (raid_topo_count == 5) {
				$("button.plus").prop("disabled",true);
			}
			if (raid_topo_count == 2) {
				$("button.minus").prop("disabled",false);
			}
		}
	});

	$(document).on("click",'button.minus', function() {
		if (raid_topo_count > 1) {

			var config_num = parseInt($(this).attr("id").split("_")[1]);
			
			raid_topologies.splice(config_num,1);
			raid_topo_count -= 1;

			draw_config_inputs(false);
			get_form_data();
			gen_graph_data();
			update_graph();

			if (raid_topo_count == 1) {
				$("button.minus").prop("disabled",true);
			}
			if (raid_topo_count == 4) {
				$("button.plus").prop("disabled",false);
			}
		}
	});

	function update_help_text(id) {
		var help_text;
		switch (true) {
			case id == "y1_data":
				help_text = "Sets the data displayed on y-axis 1 (left side of graph)\n"
				switch(y1_data) {
					case "usable":
						help_text += "Usable Capacity: Actual, usable capacity of a pool (given it's filled with recordsize blocks)";
						break;
					case "efficiency":
						help_text += "Capacity Efficiency: Usable capacity as a percent of raw capacity";
						break;
					case "simple_capacity":
						help_text += "Simple Capacity: A naive capacity calculation (Mirrors: disk_size * vdev_count; RAIDZ: disk_size * (width - p) * vdev_count; dRAID: disk_size * (c-s)/(d+p) * d * vdev_count)";
						break;
					case "zfs_overhead":
						help_text += "ZFS Overhead: Usable capacity as a percent of simple capacity (i.e., how much extra space is ZFS using)";
						break;
					case "afr":
						help_text += "Pool AFR: The pool's expected annual failure rate given a disk AFR and a resilver time";
						break;
					case "vdev_count":
						help_text += "Vdev Count: How many top-level vdevs are in the pool";
						break;
					case "perf_rand_read":
						help_text += "Relative Performance (Random Read): Approximate pool performance relative to a single disk";
						break;
					case "perf_rand_write":
						help_text += "Relative Performance (Random Write): Approximate pool performance relative to a single disk";
						break;
					case "perf_seq_read":
						help_text += "Relative Performance (Sequential Read): Approximate pool performance relative to a single disk";
						break;
					case "perf_seq_write":
						help_text += "Relative Performance (Sequential Write): Approximate pool performance relative to a single disk";
						break;
					case "spares_count":
						help_text += "Spares Count: Number of spare disks in the pool (n_disks % vdev_width)";
						break;
					case "raw_pool_size":
						help_text += "Raw Pool Size: Raw capacity of the whole pool";
						break;
					case "vdev_asize":
						help_text += "Vdev Asize: Allocatable capacity of each vdev in the pool";
						break;
					case "deflate_ratio":
						help_text += "Deflate Ratio: By what amount is ZFS reducing raw vdev capacity";
						break;
					case "ms_count":
						help_text += "Metaslab Count: How many metaslabs each vdev has";
						break;
				}
				break;

			case id == "y2_data":
				help_text = "Sets the data displayed on y-axis 2 (right side of graph)\n"
				switch(y2_data) {
					case "usable":
						help_text += "Usable Capacity: Actual, usable capacity of a pool (given it's filled with recordsize blocks)";
						break;
					case "efficiency":
						help_text += "Capacity Efficiency: Usable capacity as a percent of raw capacity";
						break;
					case "simple_capacity":
						help_text += "Simple Capacity: A naive capacity calculation (Mirrors: disk_size * vdev_count; RAIDZ: disk_size * (width - p) * vdev_count; dRAID: disk_size * (c-s)/(d+p) * d * vdev_count)";
						break;
					case "zfs_overhead":
						help_text += "ZFS Overhead: Usable capacity as a percent of simple capacity (i.e., how much extra space is ZFS using)";
						break;
					case "afr":
						help_text += "Pool AFR: The pool's expected annual failure rate given a disk AFR and a resilver time";
						break;
					case "vdev_count":
						help_text += "Vdev Count: How many top-level vdevs are in the pool";
						break;
					case "perf_rand_read":
						help_text += "Relative Performance (Random Read): Approximate pool performance relative to a single disk";
						break;
					case "perf_rand_write":
						help_text += "Relative Performance (Random Write): Approximate pool performance relative to a single disk";
						break;
					case "perf_seq_read":
						help_text += "Relative Performance (Sequential Read): Approximate pool performance relative to a single disk";
						break;
					case "perf_seq_write":
						help_text += "Relative Performance (Sequential Write): Approximate pool performance relative to a single disk";
						break;
					case "spares_count":
						help_text += "Spares Count: Number of spare disks in the pool (n_disks % vdev_width)";
						break;
					case "raw_pool_size":
						help_text += "Raw Pool Size: Raw capacity of the whole pool";
						break;
					case "vdev_asize":
						help_text += "Vdev Asize: Allocatable capacity of each vdev in the pool";
						break;
					case "deflate_ratio":
						help_text += "Deflate Ratio: By what amount is ZFS reducing raw vdev capacity";
						break;
					case "ms_count":
						help_text += "Metaslab Count: How many metaslabs each vdev has";
						break;
				}
				break;

			case (/disks_\d/).test(id):
				help_text = "Total number of disks assigned to the pool";
				break;

			case (/disks_size_\d/).test(id):
				help_text = "Capacity (in TB) of component disks in the pool";
				break;

			case (/min_spares_\d/).test(id):
				help_text = "Minimum hot spares to reserve in the pool (separate from dRAID spares)";
				break;

			case (/use_new_slop_\d/).test(id):
				help_text = "OpenZFS changed how slop space is computed in v2.0.7 to reduce its size on larger pools. This sets whether to use the new or old slop calculation.";
				break;

			case (/recordsize_\d/).test(id):
				help_text = "Enforces a maximum block size limit. Capacity calculations will be done assuming the pool is filled with blocks of this size. Note that the zfs list command always assumes 128KiB blocks regardless of actual recordsize value.";
				break;

			case (/ashift_\d/).test(id):
				help_text = "Sets the assumed sector size for the disks on the pool where 2^ashift = sector size. ashift=9 for 512B sectors, ashift=12 for 4KiB sectors, ashift=13 for 8KiB sectors, ashift=14 for 16KiB sectors.";
				break;

			case (/swap_size_\d/).test(id):
				help_text = "How much capacity to reserve from each disk on the pool for swap space";
				break;

			case (/raid_type_\d/).test(id):
				help_text = "Sets which RAID type should be used for this configuration. (Use mirrors for striped vdevs)";
				break;

			case (/parity_\d/).test(id):
				help_text = "Sets the parity level for the RAIDZ/dRAID configuration";
				break;

			case (/max_data_disks_\d/).test(id):
				help_text = "How many data disks to include in each dRAID redundancy group. The graph will iterate from 1 to this number along its X axis.";
				break;

			case (/children_\d/).test(id):
				help_text = "Total dRAID vdev width";
				break;

			case (/spares_\d/).test(id):
				help_text = "How many logical/distributed spares to include in each dRAID vdev";
				break;

			case (/max_width_\d/).test(id):
				help_text = "How many disks to include in each vdev. The graph will iterate from 1 to this number along its X axis.";
				break;

			case (/disk_afr_\d/).test(id):
				help_text = "Annual failure rate of each individual disk. Used in the pool AFR calculations.";
				break;

			case (/resilver_hrs_\d/).test(id):
				help_text = "Resilver times are expected to scale with vdev width for RAIDZ and with redundancy group size for dRAID. The Resilver Hrs/Width value is multiplied by the number of data disks in a RAIDZ vdev or the number of data disks in a dRAID redundancy group to approximate resilver time. We're also multiplying by the parity level to account for multiple subsequent failures extending the total resilver time. If the first disk in a Z2 fails and the resilver gets to 99% after 24 hours before a second disk fails, your resilver window gets extended by another 24 hours. For mirrors, total resilver time is just the value in this field.";
				break;

			case id == "reset":
				help_text = "Resets all field back to their default state";
				break;

			case id == "save":
				help_text = "Copies a URL to the current state of all configurations to make sharing easier";
				break;

			case (/plus_\d/).test(id):
				help_text = "Copies this configuration's values to a new configuration; inserted immediately to the right of this configuration. Maximum of 5 configurations.";
				break;

			case (/minus_\d/).test(id):
				help_text = "Deletes this configuration";
				break;
		}
		$("textarea#help_text").html(help_text);
	}

	$(document).on("mouseover",'label', function() {
		var id = $(this).attr("for");
		update_help_text(id);
	});
	$(document).on("mouseover",'input', function() {
		var id = $(this).attr("id");
		update_help_text(id);
	});
	$(document).on("mouseover",'select', function() {
		var id = $(this).attr("id");
		update_help_text(id);
	});
	$(document).on("mouseover",'button', function() {
		var id = $(this).attr("id");
		update_help_text(id);
	});

	$(document).on("change",'select.raid_type_select', function() {
		var config_to_update = $(this).attr("id").split("_")[2];
		draw_raid_inputs(config_to_update);
		get_form_data();
		gen_graph_data();
		update_graph();
	});

	main();

	/*
	test_draid = {
		disks: 40,
		min_spares: 0,
		use_new_slop: true,
		recordsize: 128,
		ashift: 12,
		swap_size: 0
	}
	raid_topologies[2] = test_draid;
	fast_draid = false;
	console.log(get_capacity("8tdraid2:5d:20c:1s",2))
	fast_draid = true;
	*/

});