var parity = 2;
var data = 7;
var children = 24;
var spares = 2;
var num_rows = 20;

var colors = [];
var saturations = [60,30,80,50,70,90,20,100,40,10,65,35,85,55,75,95,5,25,45,15];
for (var s = 0; s < saturations.length; s++) {
	for (var h = 0; h < (21*359); h+=21) {
		colors.push([h%359, saturations[s]]);
	}
}

let map = [
	[0],
	[0],
	[ BigInt("0x89ef3dabbcc7de37"), 1.000 ],
	[ BigInt("0x89a57f3de98121b4"), 1.000 ],
	[ BigInt("0xc9ea9ec82340c885"), 1.000 ],
	[ BigInt("0xf46733b7f4d47dfd"), 1.010 ],
	[ BigInt("0x88c3c62d8585b362"), 1.031 ],
	[ BigInt("0x3a65d809b4d1b9d5"), 1.043 ],
	[ BigInt("0xe98930e3c5d2e90a"), 1.059 ],
	[ BigInt("0x5a5430036b982ccb"), 1.056 ],
	[ BigInt("0x92bf389e9eadac74"), 1.072 ],
	[ BigInt("0x74ccebf1dcf3ae80"), 1.083 ],
	[ BigInt("0x8847e41a1a9f5671"), 1.097 ],
	[ BigInt("0x7481b56debf0e637"), 1.100 ],
	[ BigInt("0x559b8c44065f8967"), 1.121 ],
	[ BigInt("0x34c49545a2ee7f01"), 1.103 ],
	[ BigInt("0xb85f4fa81a7698f7"), 1.111 ],
	[ BigInt("0x6353e47b7e47aba0"), 1.133 ],
	[ BigInt("0xaa549746b1cbb81c"), 1.131 ],
	[ BigInt("0x892e343f2f31d690"), 1.130 ],
	[ BigInt("0x76914824db98cc3f"), 1.141 ],
	[ BigInt("0x4b3cbabf9cfb1d0f"), 1.139 ],
	[ BigInt("0xf45c77abb4f035d4"), 1.150 ],
	[ BigInt("0x5e18bd7f3fd4baf4"), 1.174 ],
	[ BigInt("0xa7b3a4d285d6503b"), 1.168 ],
	[ BigInt("0x56ac7dd967521f5a"), 1.180 ],
	[ BigInt("0x3a42dfda4eb880f7"), 1.226 ],
	[ BigInt("0xd200d2fc6b54bf60"), 1.228 ],
	[ BigInt("0xc52605bbd486c546"), 1.217 ],
	[ BigInt("0xc761779e63cd762f"), 1.239 ],
	[ BigInt("0xca577b1e07f85ca5"), 1.238 ],
	[ BigInt("0xfd50a593c518b3d4"), 1.273 ],
	[ BigInt("0xc6c87ba5b042650b"), 1.191 ],
	[ BigInt("0xc3880d0c9d458304"), 1.199 ],
	[ BigInt("0xe920927e4d8b2c97"), 1.195 ],
	[ BigInt("0x8da7fcda87bde316"), 1.201 ],
	[ BigInt("0xcf09937491514a29"), 1.194 ],
	[ BigInt("0x9b5abbf345cbd7cc"), 1.237 ],
	[ BigInt("0x506312a44668d6a9"), 1.242 ],
	[ BigInt("0x71659ede62b4755f"), 1.231 ],
	[ BigInt("0xa7fde73fb74cf2d7"), 1.233 ],
	[ BigInt("0x19e8b461a1dea1d3"), 1.271 ],
	[ BigInt("0x031c9b868cc3e976"), 1.263 ],
	[ BigInt("0xbaa5125faa781854"), 1.270 ],
	[ BigInt("0x4ed55052550d721b"), 1.281 ],
	[ BigInt("0x0fd63ddbdff90677"), 1.282 ],
	[ BigInt("0x36d66546de7fdd6f"), 1.286 ],
	[ BigInt("0x99f997e7eafb69d7"), 1.329 ],
	[ BigInt("0xbecd9c2571312c5d"), 1.286 ],
	[ BigInt("0xd97371329e488a32"), 1.322 ],
	[ BigInt("0x30e9b136670749ee"), 1.335 ],
	[ BigInt("0x11ad6bc8f47aaeb4"), 1.305 ],
	[ BigInt("0x68e445300af432c1"), 1.330 ],
	[ BigInt("0x910fb561657ea98c"), 1.365 ],
	[ BigInt("0xd619693d8ce5e7a5"), 1.334 ],
	[ BigInt("0x24e281f564dbb60a"), 1.364 ],
	[ BigInt("0x947a7d3bdaab44c5"), 1.374 ],
	[ BigInt("0x2d44fec9c093e0de"), 1.363 ],
	[ BigInt("0x87743c272d29bb4c"), 1.401 ],
	[ BigInt("0x96aa3b6f67f5d923"), 1.392 ],
	[ BigInt("0x94a4f1faf520b0d3"), 1.360 ],
	[ BigInt("0xb13ed3a272f711a2"), 1.396 ],
	[ BigInt("0x3b1b11805fa4a64a"), 1.453 ],
	[ BigInt("0x4c74caad9172ba71"), 1.437 ],
	[ BigInt("0x035ff643923dd29e"), 1.402 ],
	[ BigInt("0x768e9171b11abd3c"), 1.459 ],
	[ BigInt("0x75880e6f78a13ddd"), 1.423 ],
	[ BigInt("0x910b9714f698a877"), 1.447 ],
	[ BigInt("0x87f5db6f9fdcf5c7"), 1.450 ],
	[ BigInt("0x836d4968fbaa3706"), 1.455 ],
	[ BigInt("0xc567d73a036421ab"), 1.463 ],
	[ BigInt("0x619df40f240b8fed"), 1.463 ],
	[ BigInt("0x42763a680d5bed8e"), 1.452 ],
	[ BigInt("0x5866f064b3230431"), 1.498 ],
	[ BigInt("0x9fa08548b1621a44"), 1.526 ],
	[ BigInt("0xb6053078ce0fc303"), 1.491 ],
	[ BigInt("0x4a7aad7bf3890923"), 1.470 ],
	[ BigInt("0xe165613fd75b5a53"), 1.527 ],
	[ BigInt("0x3ff154ac878163a6"), 1.509 ],
	[ BigInt("0x24b93ade0aa8a532"), 1.569 ],
	[ BigInt("0xc18e2d14cd9bb554"), 1.555 ],
	[ BigInt("0x98cc78302feb58b6"), 1.509 ],
	[ BigInt("0xc6c5fd5a2abc0543"), 1.596 ],
	[ BigInt("0xa7962f514acbba21"), 1.568 ],
	[ BigInt("0xba02545069ddc6dc"), 1.541 ],
	[ BigInt("0x447c73192c35073e"), 1.623 ],
	[ BigInt("0x48beef9e2d42b0c2"), 1.620 ],
	[ BigInt("0x4874cf98541a35e0"), 1.597 ],
	[ BigInt("0xad4cf8333a31127a"), 1.575 ],
	[ BigInt("0x47ae4859d57888c1"), 1.627 ],
	[ BigInt("0x06f7723cfe5d1891"), 1.596 ],
	[ BigInt("0xd4e44218d660576d"), 1.622 ],
	[ BigInt("0x7066702b0d5be1f2"), 1.695 ],
	[ BigInt("0x011209b4f9e11fb9"), 1.605 ],
	[ BigInt("0x47ffba30a0b35708"), 1.625 ],
	[ BigInt("0x1a95a6ac4538aaa8"), 1.687 ],
	[ BigInt("0xbda2b239bb2008eb"), 1.621 ],
	[ BigInt("0x7ffa0bea90355c6c"), 1.699 ],
	[ BigInt("0x1d56ba34be426795"), 1.688 ],
	[ BigInt("0x0aa89d45c502e93d"), 1.642 ],
	[ BigInt("0x54369449f6857774"), 1.683 ],
	[ BigInt("0xf7d4dd8445b46765"), 1.755 ],
	[ BigInt("0xfa8866312f169469"), 1.692 ],
	[ BigInt("0xd8a5aea08aef3ff9"), 1.747 ],
	[ BigInt("0x66bcd2c3d5f9ef0e"), 1.751 ],
	[ BigInt("0x3fb13a47a012ec81"), 1.751 ],
	[ BigInt("0x43100f01c9e5e3ca"), 1.726 ],
	[ BigInt("0xca09c50ccee2d054"), 1.788 ],
	[ BigInt("0xd7176732ac503f9b"), 1.740 ],
	[ BigInt("0xed206e51f8d9422d"), 1.780 ],
	[ BigInt("0x17ead5dc6ba0dcd6"), 1.836 ],
	[ BigInt("0x5f1dc21e38a969eb"), 1.778 ],
	[ BigInt("0xddaa973de33ec528"), 1.831 ],
	[ BigInt("0x2a5eccd7735a3630"), 1.825 ],
	[ BigInt("0xafcccee5c0b71446"), 1.826 ],
	[ BigInt("0x8fa30c5e7b147e27"), 1.843 ],
	[ BigInt("0x5afe0711fdfafd82"), 1.826 ],
	[ BigInt("0x533a6090238afd4c"), 1.803 ],
	[ BigInt("0x90cf11b595e39a84"), 1.857 ],
	[ BigInt("0x0d61a3b809444009"), 1.877 ],
	[ BigInt("0x7f34da0f54b0d114"), 1.849 ],
	[ BigInt("0xa52258d5b72f6551"), 1.867 ],
	[ BigInt("0xc1de54d7672878db"), 1.978 ],
	[ BigInt("0x1d03354316a414ab"), 1.947 ],
	[ BigInt("0xcebdcc377665412c"), 1.865 ],
	[ BigInt("0x4ddd4c04b1a12344"), 1.881 ],
	[ BigInt("0x64fc8f94e3973658"), 1.882 ],
	[ BigInt("0x68765f78034a334e"), 1.867 ],
	[ BigInt("0xaf36b871a303e816"), 1.972 ],
	[ BigInt("0x2a4cbf73866c3a28"), 1.896 ],
	[ BigInt("0x9cb128aacdcd3b2f"), 1.965 ],
	[ BigInt("0x5511d41c55869124"), 1.963 ],
	[ BigInt("0x42f92461937f284a"), 1.925 ],
	[ BigInt("0xe2d89a1cf6f1f287"), 1.862 ],
	[ BigInt("0xdc631a038956200e"), 2.042 ],
	[ BigInt("0xb2e5ac222cd236be"), 1.935 ],
	[ BigInt("0xbc7d8236655d88e7"), 2.005 ],
	[ BigInt("0x073e02d88d2d8e75"), 2.041 ],
	[ BigInt("0x3ddb9c3873166be0"), 1.997 ],
	[ BigInt("0x7d3b1a845420e1b5"), 1.996 ],
	[ BigInt("0x60102308aa7b2a6c"), 2.053 ],
	[ BigInt("0xdb22bb2f9eb894aa"), 1.971 ],
	[ BigInt("0xd853f879a13b1606"), 2.018 ],
	[ BigInt("0x001620a03f804b1d"), 1.961 ],
	[ BigInt("0xfdb52dda76fbf667"), 2.046 ],
	[ BigInt("0xa9160110f66e24ff"), 1.968 ],
	[ BigInt("0x77306a30379ae03b"), 2.143 ],
	[ BigInt("0x14f5985d2752319d"), 2.064 ],
	[ BigInt("0xa4b8ff11de7863f8"), 2.023 ],
	[ BigInt("0x44b345426455c1b3"), 2.136 ],
	[ BigInt("0x272677826049b46c"), 2.063 ],
	[ BigInt("0x2f9216e2cd74fe40"), 1.974 ],
	[ BigInt("0x706ae3e763ad8771"), 2.210 ],
	[ BigInt("0xf7fd345307c2480e"), 2.006 ],
	[ BigInt("0x6e94e3d26b3139eb"), 2.193 ],
	[ BigInt("0x5458bbfbb781fcba"), 2.163 ],
	[ BigInt("0xa80e2afeccd93b33"), 2.046 ],
	[ BigInt("0x1e4ccbb22796cf9d"), 2.084 ],
	[ BigInt("0x8fba4b676aaa3663"), 2.264 ],
	[ BigInt("0xf82b843814b315fa"), 2.074 ],
	[ BigInt("0x7f21e920ecf753a3"), 2.282 ],
	[ BigInt("0x48bb8ea2c4caa620"), 2.148 ],
	[ BigInt("0x5cdb652b4952c91b"), 2.355 ],
	[ BigInt("0x6ac1ba6f78c06cd4"), 2.164 ],
	[ BigInt("0x9faf5f9ca2669a56"), 2.393 ],
	[ BigInt("0xaa57e9383eb01194"), 2.178 ],
	[ BigInt("0x896967bf495c34d2"), 2.334 ],
	[ BigInt("0xdfad5f05de225f1b"), 2.266 ],
	[ BigInt("0xfd299a99f9f2abdd"), 2.304 ],
	[ BigInt("0xdda239e798fe9fd4"), 2.218 ],
	[ BigInt("0x5fca670414a32c3e"), 2.377 ],
	[ BigInt("0x1bb8934314b087de"), 2.155 ],
	[ BigInt("0xd96394b4b082200d"), 2.404 ],
	[ BigInt("0xb612a7735b1c8cbc"), 2.205 ],
	[ BigInt("0x28e7430fe5875fe1"), 2.359 ],
	[ BigInt("0x5038e89efdd981b9"), 2.158 ],
	[ BigInt("0x075fd78f1d14db7c"), 2.614 ],
	[ BigInt("0xc50fafdb5021be15"), 2.239 ],
	[ BigInt("0xe6dc7572ce7b91c7"), 2.493 ],
	[ BigInt("0x21f7843e7beda537"), 2.327 ],
	[ BigInt("0xc83385e20b43ec82"), 2.231 ],
	[ BigInt("0xca818217dddb21fd"), 2.237 ],
	[ BigInt("0xe6035defea48f933"), 2.691 ],
	[ BigInt("0x47262a4f953dac5a"), 2.170 ],
	[ BigInt("0xe24c7246260873ea"), 2.600 ],
	[ BigInt("0xeef6b57c9b58e9e1"), 2.391 ],
	[ BigInt("0x2becd3346e386142"), 2.677 ],
	[ BigInt("0x63c6207bdf3b40a3"), 2.410 ],
	[ BigInt("0x3056ce8989767d4b"), 2.776 ],
	[ BigInt("0x91af61c307cee780"), 2.266 ],
	[ BigInt("0xda359da225f6d54f"), 2.717 ],
	[ BigInt("0x0a5f7a2a55607ba0"), 2.474 ],
	[ BigInt("0x27bb75bf5224638a"), 2.673 ],
	[ BigInt("0x1ebfdb94630f5d0f"), 2.420 ],
	[ BigInt("0x6eae5e51d9c5f6fb"), 2.898 ],
	[ BigInt("0x08d903b4daedc2e0"), 2.363 ],
	[ BigInt("0xc722a2f7fa7cd686"), 2.747 ],
	[ BigInt("0x8f71faf0e54e361d"), 2.531 ],
	[ BigInt("0x87f64695c91a54e7"), 2.707 ],
	[ BigInt("0xc719cbac2c336b92"), 2.315 ],
	[ BigInt("0xe7e647afaf771ade"), 3.012 ],
	[ BigInt("0x12d4b5c38ce8c946"), 2.378 ],
	[ BigInt("0xf2e0cd4067bdc94a"), 2.969 ],
	[ BigInt("0x21b79f14d6d947d3"), 2.594 ],
	[ BigInt("0x515093f952f18cd6"), 2.763 ],
	[ BigInt("0xd47b160a1b1022c8"), 2.457 ],
	[ BigInt("0xc02fc96684715a16"), 3.057 ],
	[ BigInt("0xef51e68efba72ed0"), 2.590 ],
	[ BigInt("0x9e3be6e5448b4f33"), 3.047 ],
	[ BigInt("0x81d446c6d5fec063"), 2.676 ],
	[ BigInt("0xff215de8224e57d5"), 2.993 ],
	[ BigInt("0xe2524d9ba8f69796"), 2.457 ],
	[ BigInt("0xf6b28e26097b7e4b"), 3.182 ],
	[ BigInt("0x893a487f30ce1644"), 2.563 ],
	[ BigInt("0x386566c3fc9871df"), 3.025 ],
	[ BigInt("0x1e0ed78edf1f558a"), 2.730 ],
	[ BigInt("0xe3bc20c31e61f113"), 3.036 ],
	[ BigInt("0xd6c3ad2e23021882"), 2.722 ],
	[ BigInt("0xb4a9f95cf0f69c5a"), 3.356 ],
	[ BigInt("0x6e98ed6f6c38e82f"), 2.697 ],
	[ BigInt("0x2e01edba33fddac7"), 2.979 ],
	[ BigInt("0x559d02e1f5f57ccc"), 2.858 ],
	[ BigInt("0xac18f5a916adcd8e"), 3.258 ],
	[ BigInt("0x15789fbaddb86f4b"), 2.693 ],
	[ BigInt("0xf4a9c36d5bc4c408"), 3.259 ],
	[ BigInt("0xf640f90fd2727f44"), 2.733 ],
	[ BigInt("0xb5313d390d61884a"), 3.235 ],
	[ BigInt("0x4bae6b3ce9160939"), 2.983 ],
	[ BigInt("0x838c34480f1a66a1"), 3.308 ],
	[ BigInt("0xb1c4a52c8e3d6060"), 2.715 ],
	[ BigInt("0xe0f1110c6d0ed822"), 3.540 ],
	[ BigInt("0x9f1a8ccdcea68d4b"), 2.779 ],
	[ BigInt("0x3261ed62223f3099"), 3.084 ],
	[ BigInt("0xf2191e2311022d65"), 2.987 ],
	[ BigInt("0xf102a395c2033abc"), 3.341 ],
	[ BigInt("0x11fe378f027906b6"), 2.793 ],
	[ BigInt("0xf777f2c026b337aa"), 3.518 ],
	[ BigInt("0x1b04e9c2ee143f32"), 2.962 ],
	[ BigInt("0x2fcec95266f9352c"), 3.196 ],
	[ BigInt("0xfe2b0e47e427dd85"), 2.914 ],
	[ BigInt("0x72b49bf2225f6c6d"), 3.408 ],
	[ BigInt("0x50486b43df7df9c7"), 2.903 ],
	[ BigInt("0x5192a3e53181c8ab"), 3.778 ],
	[ BigInt("0xe9f5d8365296fd5e"), 3.026 ],
	[ BigInt("0xc740263f0301efa8"), 3.347 ],
	[ BigInt("0x23cd0f2b5671e67d"), 3.212 ],
	[ BigInt("0x002ccc7e5cd41390"), 3.482 ],
	[ BigInt("0x9aafb3c02544b31b"), 3.146 ],
	[ BigInt("0x72ba07a78b121999"), 3.626 ],
	[ BigInt("0x3d784aa58edfc7b4"), 2.952 ],
	[ BigInt("0xaab750424d8004af"), 3.463 ],
	[ BigInt("0x84403fcf8e6b5ca2"), 3.131 ],
	[ BigInt("0x71eb7455ec98e207"), 3.538 ],
	[ BigInt("0xd752b4f19301595b"), 2.974 ],
	[ BigInt("0xc4674129750499de"), 3.843 ],
	[ BigInt("0x9772baff5cd12ef5"), 3.088 ]
];


function rotl(x, k) {
	return (filter64 & (x << k)) | (x >> (64n - k));
}

let filter64 = BigInt((2n**64n)-1n);
function vdev_draid_rand(s) {
	var s0 = s[0];
	var s1 = s[1];
	var result = (rotl((s0 + s1) & filter64, 17n) + s0) & filter64;
	
	s1 ^= s0;
	s[0] = rotl(s0, 49n) ^ s1 ^ (filter64 & (s1 << 21n)); // a, b
	s[1] = rotl(s1, 28n); // c
	
	return (result);
}

function gen_perm_map(num_children, num_perms, num_rows_in_slice) {
	var draid = [];
	var seed = map[num_children][0];
	let vdev_draid_seed = BigInt(0xd7a1d5eed);
	var initial_row = [];


	for (var i = 0; i < num_children; i++) {
		initial_row[i] = i;
	}

	var draid_seed = [vdev_draid_seed, seed];
	var current_row = initial_row;
	var previous_row = initial_row;



	for (let i = 0; i < num_perms; i++) {
		current_row = previous_row;

		for (let j = num_children - 1; j > 0; j--) {
			var k = vdev_draid_rand(draid_seed) % BigInt(j+1);
			
			var val = current_row[j];
			current_row[j] = current_row[k];
			current_row[k] = val;
		}
		previous_row = current_row;

		for (let n = 0; n < num_rows_in_slice; n++) {
			draid[i * num_rows_in_slice + n] = current_row.slice();
		}
	}
	return draid;
}

function get_sect_info(c, p, d, s, target_row, target_col) {

	var sect_info = {
		sect_type: "",
		group_num: 0
	}

	if ((target_col + 1) > c-s) {
		sect_info.sect_type = "spare"
		sect_info.group_num = -1
		return sect_info;
	}

	var group_size = d+p;
	var full_stripe_width = c-s;

	var offset = (target_row * full_stripe_width) + (target_col + 1);

	sect_info.group_num = Math.floor((offset - 1)/group_size);

	if (offset % group_size <= p && offset % group_size != 0) {
		sect_info.sect_type = "parity";
	} else {
		sect_info.sect_type = "data";
	}
	return sect_info;
}

$(document).ready(function() {
	
	var shuffled = false;
	var draid = [];

	function gcd(a, b) {
		while(a != b){
			if(a > b) {
				a -= b;
			}
			else {
				b -= a;
			}
		}
		return a;
	}

	function lcm(a, b) {
		gcd_val = gcd(a, b);
		return (a * b) / gcd_val;
	}

	function draw_grid() {
		
		$("div.draid-grid-container").empty();
		$("div.draid-slice-container").empty();
		for (var j = 0; j < children; j++) {
			$("div.draid-grid-container").append("<div class=\"draid-sub\" id=\"draid-head\">" + String(j+1) + "</div>");
		}

		var num_rows_in_slice = lcm(data + parity, children - spares)/(children - spares);

		for (var i = 0; i < num_rows; i++) {
			for (var j = 0; j < children; j++) {
				$("div.draid-grid-container").append("<div class=\"draid-sub\" id=\"r" + String(i) + "c" + String(j) + "\">" + String(j+1) + "</div>");

				sect_info = get_sect_info(children, parity, data, spares, i, j);
				
				var bg_color;
				var text_color;
				
				if (sect_info.sect_type == "spare") {
					bg_color = "hsl(0, 0%, 95%)";
					text_color = "black";
				} else {
					h = String(colors[sect_info.group_num][0]);
					h_text = String((colors[sect_info.group_num][0] + 180) % 359);
					s = String(colors[sect_info.group_num][1] + "%");
					if (sect_info.sect_type == "parity") {
						l = "50%";
					} else {
						l = "65%";
					}
					bg_color = "hsl(" + h + "," + s + "," + l + ")";
					text_color = "hsl(" + h_text + ",100%," + l + ")";
				}
				$("div#r" + String(i) + "c" + String(j)).css("background-color",bg_color);
				$("div#r" + String(i) + "c" + String(j)).css("color",text_color);
			}

			var last_slice = false;
			if (i + num_rows_in_slice >= num_rows) {
				last_slice = true;
			}
			
			slice_number = Math.floor(i / num_rows_in_slice);

			if (i % num_rows_in_slice == 0) {
				if (i == 0) {
					$("div.draid-slice-container").append("<div class=\"draid-slice\" id=\"draid-slice1\">" + String(slice_number) + "</div>");
				} else if (last_slice) {
					$("div.draid-slice-container").append("<div class=\"draid-slice\" id=\"draid-last-slice\">" + String(slice_number) + "</div>");
				} else {
					$("div.draid-slice-container").append("<div class=\"draid-slice\">" + String(slice_number) + "</div>");
				}
			}
		}

		draid = gen_perm_map(children, num_rows, num_rows_in_slice);
		var base_size = 43;
		var correction = 27;
		if (num_rows_in_slice > num_rows) {
			num_rows_in_slice = num_rows;
		}
		$("div.draid-slice").css("height", String(base_size * num_rows_in_slice - correction) + "px");
		$("div.draid-slice").css("line-height", String(base_size * num_rows_in_slice - correction) + "px");

		num_slices = Math.ceil(num_rows/num_rows_in_slice);
		cut_off_slice_rows = num_rows - ((num_slices - 1) * num_rows_in_slice);
		
		if (num_rows % num_rows_in_slice != 0) {
			$("div#draid-last-slice").css("border-bottom", "0px solid white");
			$("div#draid-last-slice").css("height", String(base_size * cut_off_slice_rows - correction + 3) + "px");
			$("div#draid-last-slice").css("line-height", String(base_size * cut_off_slice_rows - correction + 3) + "px");
		} else {
			$("div#draid-last-slice").css("border-bottom", "3px solid black");
			$("div#draid-last-slice").css("height", String(base_size * cut_off_slice_rows - correction) + "px");
			$("div#draid-last-slice").css("line-height", String(base_size * cut_off_slice_rows - correction) + "px");
		}

		$("div#draid-imbalance-ratio").text("Average imbalance ratio: " + String(map[children][1].toFixed(3)));

		var grid_template_columns = "";
		for (var i = 0; i < children; i++) {
			grid_template_columns += "1fr ";
		}
		$("div.draid-grid-container").css("grid-template-columns", grid_template_columns);
	}

	draw_grid();

	$("#draid-shuffle").on("click", function() {
		if (shuffled) {
			$("#draid-shuffle").text("Shuffle");
			for (var i = 0; i < num_rows; i++) {
				for (var j = 0; j < children; j++) {
					let base_move = 33;
					var orig_position = j;
					var new_position = draid[i].indexOf(j);
					var move_ammt = base_move * (new_position - orig_position);
					
					$("div#r" + String(i) + "c" + String(j)).animate({
						left: "-=" + String(move_ammt) + "px",
					}, "slow");
				}
			}
		} else {
			$("#draid-shuffle").text("Un-Shuffle");
			for (var i = 0; i < num_rows; i++) {
				for (var j = 0; j < children; j++) {
					let base_move = 33;
					var orig_position = j;
					
					var new_position = draid[i].indexOf(j);
					var move_ammt = base_move * (new_position - orig_position);
					
					$("div#r" + String(i) + "c" + String(j)).animate({
						left: "+=" + String(move_ammt) + "px",
					}, "slow");
				}
			}
		}
		shuffled = !shuffled;
	});

	$("#draid-update").on("click", function() {

		var temp_children = parseInt($("#draid-children").val());
		var temp_parity = parseInt($("#draid-parity").val());
		var temp_data = parseInt($("#draid-data").val());
		var temp_spares = parseInt($("#draid-spares").val());
		var temp_rows = parseInt($("#draid-rows").val());
		var error_message = "";
		var error = false;
		
		if (isNaN(temp_children) || isNaN(temp_parity) || isNaN(temp_data) || isNaN(temp_spares) || isNaN(temp_rows)) {
			error = true;
			error_message = "All inputs must be whole numbers";
		}

		if (!error) {
			temp_children = parseInt(temp_children);
			temp_parity = parseInt(temp_parity);
			temp_data = parseInt(temp_data);
			temp_spares = parseInt(temp_spares);
			temp_rows = parseInt(temp_rows);
		}

		if (!error) {
			if (temp_children < 3 || temp_children > 255) {
				error = true;
				error_message = "Children must be a whole number between 3 and 255";
			}

			if (temp_children < (temp_parity + temp_data + temp_spares)) {
				error = true;
				error_message = "Number of children must not be less than parity + data + spares";
			}
		}

		if (!error) {
			if (temp_parity < 1 || temp_parity > 3) {
				error = true;
				error_message = "Parity must be a whole number between 1 and 3";
			}
		}

		if (!error) {
			if (temp_data < 1) {
				error = true;
				error_message = "Number of data disks must be at least 1";
			}
		}

		if (!error) {
			if (temp_spares < 0 || temp_spares > 4) {
				error = true;
				error_message = "Number of virtual spares must be between 0 and 4";
			}
		}

		if (!error) {
			if (temp_rows < 1 || temp_rows > 100) {
				error = true;
				error_message = "Number of rows should be between 1 and 100";
			}
		}

		if (!error) {
			children = temp_children;
			parity = temp_parity;
			data = temp_data;
			spares = temp_spares;
			num_rows = temp_rows;
			$("div#draid-notes").css("color","black");
			$("div#draid-notes").text("Enter dRAID vdev parameters above");

			shuffled = false;
			$("#draid-shuffle").text("Shuffle");
			draw_grid();
		} else {
			$("div#draid-notes").text(error_message);
			$("div#draid-notes").css("color","red");
		}
	});

	$("input#draid-parity").on("focus", function() {
		$("div#draid-parity-label").css("color","hsl(241,24%,50%)");
		$("div#draid-data-label").css("color","black");
		$("div#draid-children-label").css("color","black");
		$("div#draid-spares-label").css("color","black");
		$("div#draid-rows-label").css("color","black");

		$("input#draid-parity").css("background-color","hsl(241,24%,90%)");
		$("input#draid-data").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-children").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-spares").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-rows").css("background-color","hsl(0, 0%, 95%)");

		$("div#draid-draid-notes").css("color","black");
		$("div#draid-draid-notes").text("Parity per redundancy group (1-3)");
	});

	$("input#draid-data").on("focus", function() {
		$("div#draid-parity-label").css("color","black");
		$("div#draid-data-label").css("color","hsl(241,24%,50%)");
		$("div#draid-children-label").css("color","black");
		$("div#draid-spares-label").css("color","black");
		$("div#draid-rows-label").css("color","black");

		$("input#draid-parity").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-data").css("background-color","hsl(241,24%,90%)");
		$("input#draid-children").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-spares").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-rows").css("background-color","hsl(0, 0%, 95%)");

		$("div#draid-draid-notes").css("color","black");
		$("div#draid-draid-notes").text("Data disks per redundancy group (1+)");
	});

	$("input#draid-children").on("focus", function() {
		$("div#draid-parity-label").css("color","black");
		$("div#draid-data-label").css("color","black");
		$("div#draid-children-label").css("color","hsl(241,24%,50%)");
		$("div#draid-spares-label").css("color","black");
		$("div#draid-rows-label").css("color","black");

		$("input#draid-parity").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-data").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-children").css("background-color","hsl(241,24%,90%)");
		$("input#draid-spares").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-rows").css("background-color","hsl(0, 0%, 95%)");

		$("div#draid-draid-notes").css("color","black");
		$("div#draid-draid-notes").text("Total disks in the dRAID vdev (3-255)");
	});

	$("input#draid-spares").on("focus", function() {
		$("div#draid-parity-label").css("color","black");
		$("div#draid-data-label").css("color","black");
		$("div#draid-children-label").css("color","black");
		$("div#draid-spares-label").css("color","hsl(241,24%,50%)");
		$("div#draid-rows-label").css("color","black");

		$("input#draid-parity").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-data").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-children").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-spares").css("background-color","hsl(241,24%,90%)");
		$("input#draid-rows").css("background-color","hsl(0, 0%, 95%)");

		$("div#draid-draid-notes").css("color","black");
		$("div#draid-draid-notes").text("Total spares in the dRAID vdev (0-4)");
	});

	$("input#draid-rows").on("focus", function() {
		$("div#draid-parity-label").css("color","black");
		$("div#draid-data-label").css("color","black");
		$("div#draid-children-label").css("color","black");
		$("div#draid-spares-label").css("color","black");
		$("div#draid-rows-label").css("color","hsl(241,24%,50%)");

		$("input#draid-parity").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-data").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-children").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-spares").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-rows").css("background-color","hsl(241,24%,90%)");

		$("div#draid-draid-notes").css("color","black");
		$("div#draid-draid-notes").text("Number of rows to display below (1-100)");
	});

	$("input.draid-settings").on("focusout", function() {
		$("div#draid-parity-label").css("color","black");
		$("div#draid-data-label").css("color","black");
		$("div#draid-children-label").css("color","black");
		$("div#draid-spares-label").css("color","black");
		$("div#draid-rows-label").css("color","black");

		$("input#draid-parity").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-data").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-children").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-spares").css("background-color","hsl(0, 0%, 95%)");
		$("input#draid-rows").css("background-color","hsl(0, 0%, 95%)");

		$("div#draid-draid-notes").text("Enter dRAID vdev parameters above");
	});


});
