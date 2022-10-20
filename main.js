var WEAPON_RARE = 0,
	WEAPON_CATEGORY = 0,
	WEAPON_NAME = 1,
	WEAPON_ELEMENT = 2,
	WEAPON_KIND = 3,
	WEAPON_SKILL1_ID = 5,
	WEAPON_SKILL1 = 6,
	WEAPON_SKILL2_ID = 7,
	WEAPON_SKILL2 = 8,
	WEAPON_MIN_HP = 9,
	WEAPON_MAX_HP = 10,
	WEAPON_MIN_ATK = 11,
	WEAPON_MAX_ATK = 12,
	WEAPON_SKILL1_2_ID = 13,
	WEAPON_SKILL1_2 = 14,
	WEAPON_SKILL2_2_ID = 15,
	WEAPON_SKILL2_2 = 16,
	WEAPON_MAX_HP2 = 18,
	WEAPON_MAX_ATK2 = 20,
	MODE_EXCHANGE = (WEAPON_SKILL1_3_ID = 21, WEAPON_SKILL1_3 = 22, WEAPON_SKILL2_3_ID = 23, WEAPON_SKILL2_3 = 24, WEAPON_MAX_HP3 = 26, WEAPON_MAX_ATK3 = 28, 1),
	MODE_COPY = 2,
	MODE_TEMP_SAVE = 1,
	MODE_TEMP_NOSAVE = 2,
	DEFAULT_WEAPON_SKILL_STAGE = 1,
	WEAPON_ID_NULL = 1999999999,
	CATEGORY_OMEGA = 13,
	gbf = {
		version: "0.10.2",
		rank: 1,
		weapon_sp: [{
			type: 0,
			zenith: 0
		}, {
			type: 0,
			zenith: 0
		}],
		job_id: 0,
		job_attack: [0, 0],
		job_hp: [0, 0],
		hp: 0,
		turn: 1,
		summon_list: [{
			type: "none",
			effect: 0
		}, {
			type: "none",
			effect: 0
		}, {
			type: "none",
			effect: 0
		}, {
			type: "none",
			effect: 0
		}],
		chara_slot: [{
			lv: 0,
			option: {}
		}, {
			lv: 0,
			option: {}
		}, {
			lv: 0,
			option: {}
		}, {
			lv: 0,
			option: {}
		}],
		arcarum_sub: {
			type: "",
			effect: 0
		},
		summon_attack: 0,
		summon_hp: 0,
		weapon_data: [],
		weapon_data_temp: [],
		target_element: 0,
		drag_mode: MODE_EXCHANGE,
		save_temp_mode: MODE_TEMP_SAVE,
		zenith_element: 0,
		zenith_special: 0,
		airship_attribute: 0,
		element_kind: ["火", "水", "土", "風", "光", "闇", "全"],
		element_kind_color: ["#e07668", "#6aa4d6", "#b29376", "#6ad53a", "#f3e927", "#ac74ef", "#fff"],
		element_kind_label: ["FIRE", "WATER", "EARTH", "WIND", "LIGHT", "DARK", "ALL"],
		weapon_kind: ["none", "剣", "短剣", "槍", "斧", "杖", "銃", "格闘", "弓", "楽器", "刀"],
		weapon_kind_label: ["none", "Sabre", "Dagger", "Spear", "Axe", "Staff", "Gun", "Melee", "Bow", "Harp", "Katana"],
		last_hash: "",
		summon_label: {
			none: {
				label: "-"
			},
			element: {
				label: "属性"
			},
			chara: {
				label: "キャラ"
			},
			magna: {
				label: "マグナ"
			},
			zeus: {
				label: "神石(ゼウス系)"
			},
			Unkown: {
				label: "Unknown"
			},
			Huanglong: {
				label: "奥義(黄龍)"
			}
		},
		summon2_label: {
			none: {
				label: "-",
				value: 0
			},
			arcarum_3: {
				label: "3%(SR)",
				value: 3
			},
			arcarum_5: {
				label: "5%(SR3凸)",
				value: 5
			},
			arcarum_7: {
				label: "7%(SSR化)",
				value: 7
			},
			arcarum_10: {
				label: "10%(4凸)",
				value: 10
			}
		},
		weapon_zenith: [
			["LB", 0],
			["1%", .01],
			["3%", .03],
			["5%", .05],
			["6%", .06],
			["8%", .08],
			["10%", .1],
			["11%", .11],
			["13%", .13],
			["15%", .15]
		],
		WEAPON_SKILL_REGEXP: "skill_([a-z_]+)_([0-9]+)(_[0-9]+)?(_[0-9]+)?",
		SWORD: 0,
		S_SWORD: 1,
		SPEAR: 2,
		AXE: 3,
		CANE: 4,
		GUN: 5,
		FIST: 6,
		BOW: 7,
		HARP: 8,
		KATANA: 9,
		selected_element: 0,
		output: {
			weapon_hp: 0,
			weapon_attack: 0,
			base_attack: 0,
			boost: 0,
			enmity: 0,
			magna_boost: 0,
			magna_enmity: 0,
			unkown: 0,
			element: 0,
			turn_element: 0,
			seraphic: 0,
			total_enmity: 0,
			total_skill: 0,
			total_attack: 0,
			total_attack_adv: 0,
			total_attack_disadv: 0,
			expected_damage: 0,
			expected_damage_adv: 0,
			expected_damage_disadv: 0,
			expected_damage_tec: 0,
			expected_damage_adv_tec: 0,
			expected_damage_disadv_tec: 0,
			sp_atk: 0,
			sp_limit: 0,
			sp_limit_exceed: 0,
			magna_sp_atk: 0,
			magna_sp_limit: 0,
			sp_coefficient: 0,
			sp_fixed: 0,
			omega_special_limit: 0,
			omega_chain_limit: 0,
			buff_sp_atk: 0,
			buff_sp_limit: 0,
			voltage: 0,
			damageadd: 0,
			abilitydamageadd: 0,
			spdamageadd: 0,
			label_total_sp_limit: "",
			label_total_sp_atk: ""
		},
		tab_info_cache: {},
		init: function() {
			for (var e = 1; e <= 10; e++) gbf.weapon_data[e] = {
				id: null,
				lv: 1,
				skill_lv: 1,
				quality: 0,
				atk: 0,
				hp: 0,
				skill1_id: "none",
				skill1_element: -1,
				skill2_id: "none",
				skill2_element: -1,
				skill3_id: "none",
				skill3_element: -1
			};
			gbf.initHtml(), this.uiInitWidget(), this.uiInitWidgetAction(), this.uiUpdateWeaponListTab(), this.initWeaponSkill(), $(document).ready(function() {
				$("#version").button("option", "label", "ver " + gbf.version);
				var e = location.hash;
				if (e) {
					var a, t, s = e.substr(0, 1);
					if ("#_" == e.substr(0, 2)) {
						t = e.substr(2), a = JSON.parse(decodeURI(t)), gbf.ImportLinkData(a);
						for (var l = 1; l <= 10; l++) gbf.updateWeaponSkill(l), gbf.updateWeaponLv(l, gbf.weapon_data[l].atk);
						gbf.updateJobInfo(), gbf.setInput(), gbf.update()
					} else "#" == s && (t = e.substr(1), a = gbf.dataDecode(t), gbf.loadInput(a), gbf.setTargetElement(), gbf.setInput(), gbf.update())
				}
				gbf.updateSaveList(), gbf.setTemp()
			}), $(window).on("hashchange", function() {
				var e = location.hash;
				e && e != gbf.last_hash && "#" == e.substr(0, 1) && (savedata_string = e.substr(1), savedata = gbf.dataDecode(savedata_string), gbf.loadInput(savedata), gbf.setInput(), gbf.update())
			}), window.onerror = function(e, a, t, s, l) {
				$.ajax({
					type: "POST",
					url: "log.php",
					data: "log=" + (e + "\t" + a + "\t" + t + ":" + s + "\t" + l) + "&query=" + gbf.dataEncode()
				})
			}
		},
		update: function() {
			var T, e = 1e3,
				a = 600,
				P = (1 < gbf.rank && gbf.rank <= 100 ? (e += 40 * gbf.rank, a += 8 * gbf.rank) : 100 < gbf.rank && gbf.rank <= 175 ? (e = e + 4e3 + 20 * (gbf.rank - 100), a = a + 800 + 4 * (gbf.rank - 100)) : 175 < gbf.rank && gbf.rank <= 190 ? (e = (e += 4e3) + 1500 + 10 * (gbf.rank - 175), a = (a += 800) + 300 + 2 * (gbf.rank - 175)) : 190 < gbf.rank && (e = (e = e + 4e3 + 1500) + 150 + 5 * (gbf.rank - 190), a = (a = a + 800 + 300) + 30 + (gbf.rank - 190)), 0),
				C = 0,
				H = 0,
				z = 0,
				R = [],
				t = 0,
				s = 0,
				l = 0,
				n = 0,
				X = 0,
				B = [],
				q = !0,
				i = [],
				K = !0,
				Q = 0,
				G = -1,
				U = -1;
			for (T in gbf.weapon_kind) 0 != T && (R[gbf.weapon_kind[T]] = 0);
			for (var o = 1; o <= 10; o++)
				if (gbf.weapon_data[o].id && 1999999999 != gbf.weapon_data[o].id) {
					var V = new gbf.weapon(gbf.weapon_data[o].id);
					if ("COSMOS" == V.getCategory()) {
						X = V.getType();
						break
					}
				}
			for (var p, o = 1; o <= 10; o++) gbf.weapon_data[o].id && 1999999999 != gbf.weapon_data[o].id && (B[gbf.weapon_data[o].id] ? q = !1 : B[gbf.weapon_data[o].id] = 1, n = (p = new gbf.weapon(gbf.weapon_data[o].id)).getType(), bonus_job = s = t = l = 0, i[n] ? (K = !1, i[n]++) : i[n] = 1, gbf.weapon_sp[0].type == n && (t = .2, gbf.weapon_zenith[gbf.weapon_sp[0].zenith][1] && (s += gbf.weapon_zenith[gbf.weapon_sp[0].zenith][1])), gbf.weapon_sp[1].type == n && (t = .2, gbf.weapon_zenith[gbf.weapon_sp[1].zenith][1] && (s += gbf.weapon_zenith[gbf.weapon_sp[1].zenith][1])), X && n == X && (l = .5), H += gbf.weapon_data[o].atk + Math.round(gbf.weapon_data[o].atk * (t + s + bonus_job)) + Math.ceil(gbf.weapon_data[o].atk * l), z += gbf.weapon_data[o].hp + Math.round(gbf.weapon_data[o].hp * t) + Math.ceil(gbf.weapon_data[o].hp * l), C += gbf.weapon_data[o].atk, P += gbf.weapon_data[o].hp, R[n] += gbf.weapon_data[o].atk + Math.ceil(gbf.weapon_data[o].atk * l), "OMEGA" == p.getCategory() && (G = n), "HOLLOWSKY" == p.getCategory() && (U = gbf.weapon_data[o].id), "EPIC" == p.getCategory() && Q++);
			e = Math.round((e + H + gbf.job_attack[0] + gbf.summon_attack) * (1 + gbf.job_attack[1] / 100)), a = Math.round((a + z + gbf.job_hp[0] + gbf.summon_hp) * (1 + gbf.job_hp[1] / 100)), gbf.output.weapon_attack = C, gbf.output.weapon_hp = P, gbf.output.base_attack = e;
			for (var _ = {}, c = 0; c < gbf.summon_list.length; c++) {
				var J = 0 | gbf.summon_list[c].effect;
				_[gbf.summon_list[c].type] ? _[gbf.summon_list[c].type] += J : _[gbf.summon_list[c].type] = J
			}
			for (var g = {
				boost: 0,
				enmity: 0,
				tec: 0,
				da: 0,
				ta: 0,
				whole: 0,
				boost_n: 0,
				enmity_n: 0,
				tec_n: 0,
				da_n: 0,
				ta_n: 0,
				whole_n: 0,
				sp_atk_n: 0,
				race_da: 0,
				race_ta: 0,
				hp: 0,
				bahahp_hp: 0,
				bahahp_hp2: 0,
				magna_boost: 0,
				magna_enmity: 0,
				magna_tec: 0,
				magna_da: 0,
				magna_ta: 0,
				magna_hp: 0,
				magna_whole: 0,
				unkown: 0,
				unkown_enmity: 0,
				unkown_hp: 0,
				unkown_da: 0,
				unkown_ta: 0,
				chara: 0,
				baha: 0,
				element: 0,
				tyrant: 0,
				seraphic: 0,
				cosmos_at_sp: 0,
				cosmos_df_hp: 0,
				cosmos_df_df: 0,
				cosmos_bl_da: 0,
				cosmos_bl_df: 0,
				weapon_atk: 0,
				weapon_hp: 0,
				weapon_da: 0,
				weapon_ta: 0,
				weapon_tec: 0,
				weapon_whole: 0,
				weapon_backwater: 0,
				hollowsky: 0,
				hollowsky_hp: 0,
				hollowsky_turn_boost: 0,
				hollowsky_ta: 0,
				hollowsky_tec: 0,
				others_tec: 0,
				nirrti_da: 0,
				nirrti_ta: 0,
				turn_boost: 0,
				sp_atk: 0,
				sp_limit: 0,
				sp_limit_exceed: 0,
				magna_sp_atk: 0,
				magna_sp_limit: 0,
				main_weapon_whole: 0,
				soka: 0,
				magna_soka: 0,
				sp_damage: 0,
				huanglong: 0,
				omega_special_limit: 0,
				omega_chain_limit: 0,
				epic_bland: 0,
				highlander: 0,
				turn_element: 0,
				turn_element_magna: 0,
				turn_element_limit: 0,
				turn_element_limit_magna: 0,
				total_da: 0,
				total_ta: 0,
				total_tec: 0,
				final_da: 0,
				final_ta: 0,
				final_tec: 0,
				damage_limit: 0,
				skill_train: 0,
				skill_train_add: 0,
				ability_limit: 0,
				ability_damage: 0,
				voltage: 0,
				voltage_1: 0,
				voltage_2: 0,
				voltage_3: 0,
				voltage_4: 0,
				voltage_5: 0,
				voltage_6: 0,
				voltage_7: 0,
				voltage_8: 0,
				voltage_9: 0,
				voltage_10: 0,
				damageaddwhole_base: 0,
				damageaddwhole_var: 0,
				damageaddbackwater_base: 0,
				damageaddbackwater_var: 0,
				spdamageaddwhole_base: 0,
				spdamageaddwhole_var: 0,
				spdamageaddbackwater_base: 0,
				spdamageaddbackwater_var: 0,
				abilitydamageaddwhole_base: 0,
				abilitydamageaddwhole_var: 0,
				abilitydamageaddbackwater_base: 0,
				abilitydamageaddbackwater_var: 0,
				damageadd: 0,
				abilitydamageadd: 0,
				spdamageadd: 0
			}, Y = [], d = {}, o = 1; o <= 10; o++)
				if (gbf.weapon_data[o].id && 1999999999 != gbf.weapon_data[o].id)
					for (var f = [{
						element: gbf.weapon_data[o].skill1_element,
						skill: gbf.weapon_data[o].skill1_id
					}, {
						element: gbf.weapon_data[o].skill2_element,
						skill: gbf.weapon_data[o].skill2_id
					}, {
						element: gbf.weapon_data[o].skill3_element,
						skill: gbf.weapon_data[o].skill3_id
					}], F = gbf.weapon_data[o].skill_lv, u = 0; u < f.length; u++)
						if (-1 != f[u].element && (6 == f[u].element || f[u].element == gbf.target_element)) {
							f[u].element;
							var r = f[u].skill;
							if (gbf.weapon_skill_setting[r])
								for (var b = 0; b < gbf.weapon_skill_setting[r].effect.length; b++) {
									var Z, m = gbf.weapon_skill_setting[r].effect[b].group,
										h = gbf.weapon_skill_setting[r].effect[b].list[F - 1];
									"bahahp" != m && "race_atk" != m || 1 != gbf.checkBahamutWeaponStage(gbf.weapon_data[o].id) ? "bahahp_hp2" == m && 1 == gbf.checkBahamutWeaponStage(gbf.weapon_data[o].id) ? g.bahahp_hp2 = 0 : "seraphic" == m || "turn_boost" == m || "soka" == m || "magna_soka" == m || "omega_special_limit" == m || "omega_chain_limit" == m || "highlander" == m ? (g[m] || (g[m] = h), g[m] < h && (g[m] = h)) : "whole" == m || "whole_n" == m || "magna_whole" == m || "weapon_whole" == m ? (g[m] || (g[m] = 0), g[m] += Math.pow(gbf.hp / h, 2.9) + 2.1) : "main_weapon" == m && 1 == o ? ("1040015400" === gbf.weapon_data[o].id && (m = "main_weapon_whole", h = Math.pow(gbf.hp / 44, 3.3)), g[m] || (g[m] = 0), g[m] += h) : "turn_element" == m || "turn_element_limit" == m || "turn_element_magna" == m || "turn_element_limit_magna" == m ? (d[Z = o + "_" + u] || (d[Z] = {}), d[Z][m] = h) : (g[m] || (g[m] = 0), g[m] += h, "tec" == m && Y.push(h)) : (g[m += "_stage1"] || (g[m] = h), g[m] < h && (g[m] = h))
								}
						}
			var w, k = 0,
				$ = (g.bahahp_hp += g.bahahp_hp2, g.bahahp_stage1 && (k += g.bahahp_stage1), g.race_atk_stage1 && (k += g.race_atk_stage1), g.bahahp && (k += g.bahahp), g.race_atk && (k += g.race_atk), 50 < k && (k = 50), gbf.turn < 0 && (gbf.turn = 1), gbf.turn <= 8 && (g.boost += g.soka, g.magna_boost += g.magna_soka), 0),
				v = 0;
			for (turn_element_index in d) d[turn_element_index].turn_element ? ($ = d[turn_element_index].turn_element * gbf.turn, v = d[turn_element_index].turn_element_limit, g.turn_element += Math.min($, v)) : d[turn_element_index].turn_element_magna && ($ = d[turn_element_index].turn_element_magna * gbf.turn, v = d[turn_element_index].turn_element_limit_magna, g.turn_element_magna += Math.min($, v));
			for (w in _) switch (w) {
				case "chara":
					g.chara = _[w];
					break;
				case "zeus":
					g.boost *= 1 + _[w] / 100, g.enmity *= 1 + _[w] / 100, g.whole *= 1 + _[w] / 100, g.da *= 1 + _[w] / 100, g.ta *= 1 + _[w] / 100, g.tec *= 1 + _[w] / 100, g.hp *= 1 + _[w] / 100, g.sp_atk *= 1 + _[w] / 100, g.sp_limit *= 1 + _[w] / 100, g.turn_element *= 1 + _[w] / 100, g.skill_train *= 1 + _[w] / 100, g.skill_train_add *= 1 + _[w] / 100;
					break;
				case "element":
					g.element = _[w];
					break;
				case "magna":
					g.magna_boost *= 1 + _[w] / 100, g.magna_enmity *= 1 + _[w] / 100, g.magna_da *= 1 + _[w] / 100, g.magna_ta *= 1 + _[w] / 100, g.magna_tec *= 1 + _[w] / 100, g.magna_hp *= 1 + _[w] / 100, g.magna_whole *= 1 + _[w] / 100, g.magna_sp_atk *= 1 + _[w] / 100, g.magna_sp_limit *= 1 + _[w] / 100, g.turn_element_magna *= 1 + _[w] / 100;
					break;
				case "Unkown":
					g.unkown *= 1 + _[w] / 100, g.unkown_enmity *= 1 + _[w] / 100;
					break;
				case "Huanglong":
					g.huanglong = _[w]
			}
			if (g.boost += g.boost_n, g.enmity += g.enmity_n, g.whole += g.whole_n, g.tec += g.tec_n, g.da += g.da_n, g.ta += g.ta_n, g.sp_atk += g.sp_atk_n, 0 < g.epic_bland && (g.unkown += Math.min(80, Q * g.epic_bland)), 0 < g.highlander && q && (g.unkown += g.highlander, g.damage_limit += 10), 0 < g.highlander2 && K && (g.unkown += g.highlander2, g.damage_limit += 10), gbf.turn <= 8 && (g.boost += g.turn_boost), G != gbf.weapon_sp[0].type && G != gbf.weapon_sp[1].type || (g.da += g.weapon_da, g.ta += g.weapon_ta, g.boost += g.weapon_atk, g.hp += g.weapon_hp, g.others_tec += g.weapon_tec, g.whole += g.weapon_whole, g.enmity += g.weapon_backwater), -1 !== U) switch (U) {
				case "1040016300":
					"剣" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "剣" != gbf.weapon_kind[gbf.weapon_sp[1].type] && "短剣" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "短剣" != gbf.weapon_kind[gbf.weapon_sp[1].type] || (g.unkown += g.hollowsky);
					break;
				case "1040211900":
					"槍" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "槍" != gbf.weapon_kind[gbf.weapon_sp[1].type] && "刀" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "刀" != gbf.weapon_kind[gbf.weapon_sp[1].type] || (g.unkown += g.hollowsky, g.hp += g.hollowsky_hp);
					break;
				case "1040310300":
					"斧" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "斧" != gbf.weapon_kind[gbf.weapon_sp[1].type] && "格闘" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "格闘" != gbf.weapon_kind[gbf.weapon_sp[1].type] || (g.unkown += g.hollowsky, g.ta += g.hollowsky_ta);
					break;
				case "1040414700":
					"杖" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "杖" != gbf.weapon_kind[gbf.weapon_sp[1].type] && "楽器" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "楽器" != gbf.weapon_kind[gbf.weapon_sp[1].type] || (g.unkown += g.hollowsky, g.unkown += g.hollowsky_turn_boost);
					break;
				case "1040708900":
					"弓" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "弓" != gbf.weapon_kind[gbf.weapon_sp[1].type] && "銃" != gbf.weapon_kind[gbf.weapon_sp[0].type] && "銃" != gbf.weapon_kind[gbf.weapon_sp[1].type] || (g.unkown += g.hollowsky, g.tec += g.hollowsky_tec)
			}
			g.damageadd += g.damageaddwhole_base + g.damageaddwhole_var * (gbf.hp / 100), g.damageadd += g.damageaddbackwater_base + g.damageaddbackwater_var * ((100 - gbf.hp) / 100), g.abilitydamageadd += g.abilitydamageaddwhole_base + g.abilitydamageaddwhole_var * (gbf.hp / 100), g.abilitydamageadd += g.abilitydamageaddbackwater_base + g.abilitydamageaddbackwater_var * ((100 - gbf.hp) / 100), g.spdamageadd += g.spdamageaddwhole_base + g.spdamageaddwhole_var * (gbf.hp / 100), g.spdamageadd += g.spdamageaddbackwater_base + g.spdamageaddbackwater_var * ((100 - gbf.hp) / 100), g.damageadd = Math.min(1e5, g.damageadd), g.abilitydamageadd = Math.min(2e5, g.abilitydamageadd), g.spdamageadd = Math.min(1e6, g.spdamageadd);
			var ee, ae = 0;
			for (ee in i) ae += g["voltage_" + ee] * i[ee];
			g.voltage += Math.min(80, ae), g.unkown += g.voltage, g.total_tec = g.tec + g.magna_tec, g.final_tec = Math.min(100, g.total_tec), g.tec = Math.min(100, g.tec), g.magna_tec = Math.min(100, g.magna_tec), g.da = Math.max(0, g.da), g.ta = Math.max(0, g.ta), g.magna_da = Math.max(0, g.magna_da), g.magna_ta = Math.max(0, g.magna_ta), 50 < g.race_da && (g.race_da = 50), 50 < g.race_ta && (g.race_ta = 50), g.da += g.race_da, g.ta += g.race_ta, g.da += g.nirrti_da, g.ta += g.nirrti_ta, g.total_da = g.da + g.magna_da + g.unkown_da, g.total_ta = g.ta + g.magna_ta + g.unkown_ta, g.final_da = Math.min(75, g.total_da), g.final_ta = Math.min(75, g.total_ta), g.sp_atk = Math.min(100, g.sp_atk), g.magna_sp_atk = Math.min(100, g.magna_sp_atk), g.total_sp_limit = g.sp_limit + g.magna_sp_limit + g.sp_limit_exceed, g.final_sp_limit = Math.min(75, g.total_sp_limit), g.ability_limit += g.skill_train, g.ability_limit = Math.min(100, g.ability_limit), g.element += gbf.zenith_element, g.turn_element += g.turn_element_magna, g.turn_element = Math.min(75, g.turn_element), g.element += g.turn_element, g.boost += g.chara + k, k = (100 - gbf.hp) * (.02 * (100 - gbf.hp) + 1) / 100, g.enmity = k * g.enmity, g.magna_enmity = k * g.magna_enmity, g.unkown_enmity = k * g.unkown_enmity, gbf.hp < 25 && 0 < g.whole && (g.whole = 0), gbf.hp < 25 && 0 < g.magna_whole && (g.magna_whole = 0), gbf.hp < 50 && 0 < g.main_weapon_whole && (g.main_weapon_whole = 0), g.whole += g.main_weapon_whole;
			var k = Math.ceil(e / 10),
				e = Math.ceil(k * (1 + gbf.airship_attribute / 100)) * (1 + g.boost / 100) * (1 + g.enmity / 100) * (1 + g.whole / 100) * (1 + g.magna_boost / 100) * (1 + g.magna_enmity / 100) * (1 + g.magna_whole / 100) * (1 + g.unkown / 100) * (1 + g.unkown_enmity / 100),
				k = (gbf.arcarum_sub.type || (gbf.arcarum_sub.type = "none"), gbf.arcarum_sub.effect = gbf.summon2_label[gbf.arcarum_sub.type].value, 1 + gbf.arcarum_sub.effect / 100 + gbf.output.seraphic / 100),
				y = g.final_ta / 100,
				x = g.final_da / 100,
				y = 3 * (y = (y = 1 < y ? 1 : y) < 0 ? 0 : y) + (1 - y) * (2 * (x = (x = 1 < x ? 1 : x) < 0 ? 0 : x) + 1 - x),
				x = e,
				M = Math.round(x * (1 + g.element / 100)),
				A = Math.round(x * (1 + (g.element + 50) / 100)),
				x = Math.round(x * (1 + (g.element - 25) / 100)),
				te = Math.round(gbf.calcDamageLimit(M, g.damage_limit) + g.damageadd),
				se = Math.round(gbf.calcDamageLimit(A, g.damage_limit) * k + g.damageadd),
				le = Math.round(gbf.calcDamageLimit(x, g.damage_limit) + g.damageadd),
				ne = te * y,
				ie = se * y,
				oe = le * y,
				pe = Math.round(gbf.calcDamageLimit(M * (1 + .5 * g.final_tec / 100), g.damage_limit) + g.damageadd),
				_e = Math.round(gbf.calcDamageLimit(A * (1 + .5 * g.final_tec / 100), g.damage_limit) * k + g.damageadd),
				ce = Math.round(gbf.calcDamageLimit(x * (1 + .5 * g.final_tec / 100), g.damage_limit) + g.damageadd),
				ge = pe * y,
				de = _e * y,
				y = ce * y,
				fe = (M += g.damageadd, A = A * k + g.damageadd, x += g.damageadd, a * (1 + (g.hp + g.magna_hp + g.unkown_hp + g.bahahp_hp) / 100) * (1 - g.tyrant / 100)),
				E = (fe <= 0 && (fe = 1), gbf.weapon_data[1].id),
				I = gbf.weapon_data[1].lv,
				ue = new gbf.weapon(E),
				S = ue.getCategory(),
				re = [
					[15e5, .6],
					[17e5, .3],
					[18e5, .05],
					[25e5, .01]
				],
				L = "",
				j = 0;
			switch (I < 100 ? j = 0 : 100 == I ? j = 1 : I <= 150 ? j = 2 : 150 < I && (j = 3), S = "1040207900" != E && "1040607100" != E && "1040906800" != E && "1040010000" != E && "1040706000" != E && "1040805900" != E ? S : "BEAST2") {
				case "EVENT":
				case "BEAST":
				case "PRIMAL":
				case "SERAPHIC":
					L = "EVENT";
					break;
				case "BEAST2":
					L = "BEAST2";
					break;
				case "MAGNA":
					L = 2 == ue.getElement() ? "MAGNA_E" : "MAGNA";
					break;
				case "MAGNA2":
					L = "MAGNA2";
					break;
				case "EPIC":
					L = "EPIC";
					break;
				case "ROSE":
					L = "ROSE";
					break;
				case "REVENANT":
					L = "REVENANT";
					break;
				case "OMEGA":
					L = "OMEGA";
					break;
				case "DARKOPUS":
					L = "DARKOPUS";
					break;
				case "GACHA":
				case "VINTAGE":
				case "LIMITED":
				case "HOLLOWSKY":
				case "LIMITED":
				case "BRAVE":
					L = "GACHA";
					break;
				case "CLASS":
					L = "CLASS";
					break;
				default:
					L = "EVENT"
			}
			I = {
				EVENT: [
					[3.5, 2e3],
					[4, 2500],
					[4.5, 3e3],
					[4.5, 3e3]
				],
				BEAST2: [
					[4.5, 2500],
					[5, 3500],
					[5.5, 3500],
					[5.5, 3500]
				],
				MAGNA: [
					[3.5, 2e3],
					[4, 2500],
					[4.5, 3e3],
					[5.5, 3e3]
				],
				MAGNA_E: [
					[3, 2e3],
					[3.5, 2500],
					[4.5, 3e3],
					[5.5, 3e3]
				],
				MAGNA2: [
					[4.5, 3e3],
					[5, 3e3],
					[5, 3e3],
					[5, 3e3]
				],
				EPIC: [
					[5, 2e3],
					[5.5, 2e3],
					[6, 3e3],
					[6, 3e3]
				],
				ROSE: [
					[4.5, 2500],
					[4.5, 2500],
					[4.5, 2500],
					[4.5, 2500]
				],
				REVENANT: [
					[4, 2e3],
					[4.5, 3e3],
					[4.5, 3e3],
					[4.5, 3e3]
				],
				CLASS: [
					[4.5, 2500],
					[5, 3500],
					[5, 3500],
					[5.5, 2500]
				],
				BAHAMUT: [
					[4, 2500],
					[4, 2500],
					[4, 2500],
					[4, 2500]
				],
				BAHAMUT2: [
					[4.5, 3e3],
					[4.5, 3e3],
					[4.5, 3e3],
					[4.5, 3e3]
				],
				OMEGA: [
					[5.5, 3e3],
					[5.5, 3e3],
					[5.5, 3e3],
					[5.5, 3e3]
				],
				DARKOPUS: [
					[4.5, 2500],
					[4.5, 2500],
					[5, 3e3],
					[5.5, 3500]
				],
				GACHA: [
					[4, 2e3],
					[4.5, 2500],
					[5, 4e3],
					[5, 4e3]
				]
			}[L][j], S = I[0], j = I[1];
			huanglong_lance_limit = 0, "1040207900" == E && (g.sp_atk = Math.min(100, g.sp_atk + 20), huanglong_lance_limit = 20);
			for (var I = g.huanglong + gbf.zenith_special, E = (g.sp_atk + g.magna_sp_atk) * (1 + I / 100), e = e * (1 + (g.sp_atk + g.magna_sp_atk) / 100), N = e * (1 + g.element / 100) * S * (1 + I / 100) + j, O = e * (1 + (g.element + 50) / 100) * S * (1 + I / 100) + j, D = e * (1 + (g.element - 25) / 100) * S * (1 + I / 100) + j, be = 0, me = 0, he = 0, we = g.final_sp_limit + huanglong_lance_limit + g.omega_special_limit + g.damage_limit, ke = 0; ke < re.length; ke++) {
				var W = re[ke];
				W[0] *= 1 + we / 100, N > W[0] && (be += (N - W[0]) * W[1], N = W[0]), O > W[0] && (me += (O - W[0]) * W[1], O = W[0]), D > W[0] && (he += (D - W[0]) * W[1], D = W[0])
			}
			N += Math.ceil(be) + g.spdamageadd + g.damageadd, O += Math.ceil(me * k) + g.spdamageadd + g.damageadd, D += Math.ceil(he) + g.spdamageadd + g.damageadd, gbf.output.sp_coefficient = S, gbf.output.sp_fixed = j, gbf.output.sp_damage = N, gbf.output.sp_damage_adv = O, gbf.output.sp_damage_disadv = D, gbf.output.buff_sp_atk = I, gbf.output.total_sp_atk = E, gbf.output.total_sp_limit = we, gbf.output.label_total_sp_atk = jQuery.i18n.prop("label_total_sp_atk").replace("%d", g.sp_atk).replace("%d", g.magna_sp_atk).replace("%d", I), gbf.output.label_total_sp_limit = jQuery.i18n.prop("label_total_sp_limit").replace("%d", g.sp_limit).replace("%d", g.magna_sp_limit).replace("%d", g.sp_limit_exceed).replace("%d", huanglong_lance_limit).replace("%d", g.omega_special_limit), gbf.output.boost = (100 * g.boost | 0) / 100, gbf.output.enmity = (100 * g.enmity | 0) / 100, gbf.output.magna_boost = (100 * g.magna_boost | 0) / 100, gbf.output.magna_enmity = (100 * g.magna_enmity | 0) / 100, gbf.output.unkown = (100 * g.unkown | 0) / 100, gbf.output.unkown_enmity = (100 * g.unkown_enmity | 0) / 100, gbf.output.whole = (100 * g.whole | 0) / 100, gbf.output.magna_whole = (100 * g.magna_whole | 0) / 100, gbf.output.element = (100 * g.element | 0) / 100, gbf.output.turn_element = (100 * g.turn_element | 0) / 100, gbf.output.seraphic = (100 * g.seraphic | 0) / 100, gbf.output.total_attack = 0 | M, gbf.output.total_attack_adv = 0 | A, gbf.output.total_attack_disadv = 0 | x, gbf.output.total_attack_restrected = 0 | te, gbf.output.total_attack_adv_restrected = 0 | se, gbf.output.total_attack_disadv_restrected = 0 | le, gbf.output.base_hp = a, gbf.output.result_hp = Math.ceil(fe), gbf.output.aegis = g.hp, gbf.output.magna_aegis = g.magna_hp, gbf.output.unkown_aegis = g.unkown_hp, gbf.output.bahahp_hp = g.bahahp_hp, gbf.output.tyrant = g.tyrant, gbf.output.da = g.da, gbf.output.magna_da = g.magna_da, gbf.output.unkown_da = g.unkown_da, gbf.output.final_da = g.final_da, gbf.output.ta = g.ta, gbf.output.magna_ta = g.magna_ta, gbf.output.unkown_ta = g.unkown_ta, gbf.output.final_ta = g.final_ta, gbf.output.tec = g.tec, gbf.output.limitover_damage = g.damage_limit, gbf.output.limitover_ability = g.ability_limit, gbf.output.limitover_sp = g.final_sp_limit, gbf.output.magna_tec = g.magna_tec, gbf.output.sp_atk = g.sp_atk, gbf.output.sp_limit = g.sp_limit, gbf.output.magna_sp_atk = g.magna_sp_atk, gbf.output.magna_sp_limit = g.magna_sp_limit, gbf.output.expected_damage = ne, gbf.output.expected_damage_adv = ie, gbf.output.expected_damage_disadv = oe, gbf.output.expected_damage_tec = 0 | pe, gbf.output.expected_damage_adv_tec = 0 | _e, gbf.output.expected_damage_disadv_tec = 0 | ce, gbf.output.expected_damage_tec_multi = 0 | ge, gbf.output.expected_damage_adv_tec_multi = 0 | de, gbf.output.expected_damage_disadv_tec_multi = 0 | y, gbf.output.damageadd = g.damageadd, gbf.output.abilitydamageadd = g.abilitydamageadd, gbf.output.spdamageadd = g.spdamageadd, gbf.uiUpdateDisplay();
			e = gbf.dataEncode();
			location.href = "#" + e, gbf.last_hash = "#" + e
		},
		calcDamageLimit: function(e, a) {
			for (var t = [
				[6e5, .01],
				[5e5, .05],
				[4e5, .6],
				[3e5, .8]
			], s = 0, l = 0; l < t.length; l++) {
				var n = t[l];
				n[0] *= 1 + a / 100, e > n[0] && (s += (e - n[0]) * n[1], e = n[0])
			}
			return e + Math.ceil(s)
		},
		updateWeaponStatus: function(e) {
			var a = gbf.weapon_data[e].id,
				a = new gbf.weapon(a),
				t = a.getAtk(gbf.weapon_data[e].lv),
				a = a.getHp(gbf.weapon_data[e].lv);
			gbf.weapon_data[e].quality && (a += gbf.weapon_data[e].quality, t += 5 * gbf.weapon_data[e].quality), gbf.weapon_data[e].hp = a, gbf.weapon_data[e].atk = t
		},
		updateWeaponLv: function(e, a) {
			var t = gbf.weapon_data[e].id,
				s = a,
				t = (gbf.weapon_data[e].quality && (s -= 5 * gbf.weapon_data[e].quality), new gbf.weapon(t)),
				l = t.getWeaponLevelFromAtk(s),
				n = t.getAtk(l);
			s == t.getBaseAtk() ? (gbf.weapon_data[e].atk = 0 | s, gbf.weapon_data[e].lv = 1) : n != a ? (gbf.weapon_data[e].atk = 0 | a, gbf.weapon_data[e].lv = -1) : (gbf.weapon_data[e].atk = 0 | a, gbf.weapon_data[e].lv = l)
		},
		updateJobInfo: function() {
			var e = gbf.job_id;
			gbf.weapon_sp[0].type = gbf.job_settings[e].weapon1, gbf.weapon_sp[1].type = gbf.job_settings[e].weapon2
		},
		updateWeaponSkill: function(e) {
			120 <= gbf.weapon_data[e].lv && gbf.uiSetSkill(e, 1)
		},
		checkBahamutWeaponStage: function(e) {
			switch (e) {
				case "1030004400":
				case "1030103800":
				case "1030203700":
				case "1030302900":
				case "1030403200":
				case "1030502600":
				case "1030603700":
				case "1030702400":
				case "1030802000":
				case "1030900500":
				case "1040004300":
				case "1040103700":
				case "1040203700":
				case "1040303000":
				case "1040403700":
				case "1040502300":
				case "1040602400":
				case "1040702400":
				case "1040802000":
				case "1040901300":
					return 1;
				default:
					return 2
			}
		},
		job_settings: {
			100301: {
				image: "100301_sw_1_01",
				type: "2",
				category: "4",
				name: "Berserker",
				weapon1: 1,
				weapon2: 4,
				bonus: {
					atk: 6e3,
					hp: 1e3
				}
			},
			110301: {
				image: "110301_sw_1_01",
				type: "3",
				category: "4",
				name: "Spartan",
				weapon1: 1,
				weapon2: 3,
				bonus: {
					def: 30,
					hp: 1500
				}
			},
			120301: {
				image: "120301_wa_1_01",
				type: "4",
				category: "4",
				name: "Sage",
				weapon1: 5,
				weapon2: 3,
				bonus: {}
			},
			130301: {
				image: "130301_wa_1_01",
				type: "2",
				category: "4",
				name: "Warlock",
				weapon1: 5,
				weapon2: 2,
				bonus: {
					atk: 2e3,
					ability_atk: 24
				}
			},
			140301: {
				image: "140301_kn_1_01",
				type: "1",
				category: "4",
				name: "BanditTycoon",
				weapon1: 2,
				weapon2: 6,
				bonus: {}
			},
			150301: {
				image: "150301_sw_1_01",
				type: "5",
				category: "4",
				name: "ChaosRuler",
				weapon1: 1,
				weapon2: 2,
				bonus: {}
			},
			160301: {
				image: "160301_me_1_01",
				type: "2",
				category: "4",
				name: "Luchador",
				weapon1: 7,
				weapon2: 7,
				bonus: {
					atk: 2e3,
					hp: 300,
					da: 20,
					ta: 10
				}
			},
			170301: {
				image: "170301_bw_1_01",
				type: "1",
				category: "4",
				name: "Nighthound",
				weapon1: 8,
				weapon2: 6,
				bonus: {
					atk: 1800,
					ability_atk: 20
				}
			},
			180301: {
				image: "180301_mc_1_01",
				type: "5",
				category: "4",
				name: "Elysian",
				weapon1: 9,
				weapon2: 2,
				bonus: {
					def: 18
				}
			},
			190301: {
				image: "190301_sp_1_01",
				type: "2",
				category: "4",
				name: "Apsaras",
				weapon1: 3,
				weapon2: 4,
				bonus: {
					atk: 2e3,
					da: 10,
					ta: 10
				}
			},
			200201: {
				image: "200201_kn_1_01",
				type: "4",
				category: "EX",
				name: "Alchemist",
				weapon1: 2,
				weapon2: 6,
				bonus: {
					hp: 100
				}
			},
			210201: {
				image: "210201_kt_1_01",
				type: "5",
				category: "EX",
				name: "Ninja",
				weapon1: 10,
				weapon2: 7,
				bonus: {
					da: 25
				}
			},
			220201: {
				image: "220201_kt_1_01",
				type: "2",
				category: "EX",
				name: "Samurai",
				weapon1: 10,
				weapon2: 8,
				bonus: {
					atk: 3e3
				}
			},
			230201: {
				image: "230201_sw_1_01",
				type: "5",
				category: "EX",
				name: "SwordMaster",
				weapon1: 1,
				weapon2: 10,
				bonus: {
					atk: 1500,
					hp: 300
				}
			},
			240201: {
				image: "240201_gu_1_01",
				type: "5",
				category: "EX",
				name: "Gunslinger",
				weapon1: 6,
				weapon2: 6,
				bonus: {
					atk: 800,
					da: 4
				}
			},
			250201: {
				image: "250201_wa_1_01",
				type: "5",
				category: "EX",
				name: "Mystic",
				weapon1: 5,
				weapon2: 5,
				bonus: {
					hp: 1e3
				}
			},
			260201: {
				image: "260201_kn_1_01",
				type: "5",
				category: "EX",
				name: "Assassin",
				weapon1: 2,
				weapon2: 2,
				bonus: {
					atk: 1e3
				}
			},
			270201: {
				image: "270201_mc_1_01",
				type: "5",
				category: "EX",
				name: "DrumMaster",
				weapon1: 9,
				weapon2: 9,
				bonus: {
					atk: 1e3,
					hp: 1e3
				}
			}
		},
		job_bonus_setting: {
			class1: {
				atk: 1,
				def: 2,
				ability_atk: 3,
				hp: 2
			},
			class2: {
				atk: 2,
				def: 4,
				ability_atk: 5,
				hp: 4
			},
			class3: {
				atk: 3,
				def: 6,
				ability_atk: 7,
				hp: 6
			},
			class4: {
				atk: 5,
				def: 1,
				ability_atk: 3,
				hp: 3,
				da: 1
			},
			classEX: {
				atk: 7,
				ability_atk: 5,
				da: 1
			}
		},
		weapon_skill_setting: {
			none: {
				label: "-",
				effect: [{
					group: "none",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
				}]
			},
			atk_1: {
				label: "攻刃(小)",
				effect: [{
					group: "boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}]
			},
			atk_2: {
				label: "攻刃(中)",
				effect: [{
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}]
			},
			atk_3: {
				label: "攻刃(大)",
				effect: [{
					group: "boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			atk_3_2: {
				label: "攻刃II(大)",
				effect: [{
					group: "boost",
					list: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16.8, 17.6, 18.4, 19.2, 20, 20.4, 20.8, 21.2, 21.6, 22]
				}]
			},
			atk_4_3: {
				label: "攻刃III(特大)",
				effect: [{
					group: "boost",
					list: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
				}]
			},
			atk_4: {
				label: "攻刃(特大)",
				effect: [{
					group: "boost_n",
					list: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26.6, 28.2, 29.8, 31.4, 33]
				}]
			},
			god: {
				label: "神威",
				effect: [{
					group: "boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.1, 12.2, 12.3, 12.4, 12.5]
				}, {
					group: "hp",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.1, 12.2, 12.3, 12.4, 12.5]
				}]
			},
			god_2: {
				label: "神威(中)",
				effect: [{
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5]
				}, {
					group: "hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5]
				}]
			},
			god_3: {
				label: "神威(大)",
				effect: [{
					group: "boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}, {
					group: "hp",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			tyrant: {
				label: "暴君",
				effect: [{
					group: "boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}, {
					group: "tyrant",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			tyrant_2: {
				label: "暴君II",
				effect: [{
					group: "boost",
					list: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23.5, 24, 24.5, 25, 25.5]
				}, {
					group: "tyrant",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			moment_1: {
				label: "刹那(小)",
				effect: [{
					group: "tec",
					list: []
				}, {
					group: "boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}]
			},
			moment: {
				label: "刹那",
				effect: [{
					group: "tec",
					list: []
				}, {
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}]
			},
			moment_3: {
				label: "刹那(大)",
				effect: [{
					group: "tec",
					list: []
				}, {
					group: "boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			moment_3_2: {
				label: "刹那II",
				effect: [{
					group: "tec",
					list: []
				}, {
					group: "boost",
					list: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16.8, 17.6, 18.4, 19.2, 20, 20.4, 20.8, 21.2, 21.6, 22]
				}]
			},
			musou_2: {
				label: "無双(中)",
				effect: [{
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			musou_3_2: {
				label: "無双II",
				effect: [{
					group: "boost",
					list: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16.8, 17.6, 18.4, 19.2, 20, 20.4, 20.8, 21.2, 21.6, 22]
				}, {
					group: "da",
					list: [3.4, 3.8, 4.2, 4.6, 5, 5.4, 5.8, 6.2, 6.6, 7, 7.4, 7.8, 8.2, 8.6, 9]
				}]
			},
			musou_m_2: {
				label: "M無双(中)",
				effect: [{
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "magna_da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			nirrti: {
				label: "羅刹",
				effect: [{
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "nirrti_da",
					list: [-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10]
				}]
			},
			nirrti_m: {
				label: "M羅刹",
				effect: [{
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "nirrti_da",
					list: [-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10]
				}]
			},
			ranbu_1: {
				label: "乱舞",
				effect: [{
					group: "boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}, {
					group: "ta",
					list: [.18, .31, .44, .57, .7, .83, .96, 1.09, 1.22, 1.35, 1.48, 1.61, 1.74, 1.87, 2, 2, 2, 2, 2, 2]
				}]
			},
			ranbu_2: {
				label: "乱舞中",
				effect: [{
					group: "boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "ta",
					list: [.8, .95, 1.1, 1.25, 1.4, 1.55, 1.7, 1.85, 2, 2.15, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1]
				}]
			},
			ranbu_m_1: {
				label: "M乱舞",
				effect: [{
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "magna_ta",
					list: [.18, .31, .44, .57, .7, .83, .96, 1.09, 1.22, 1.35, 1.48, 1.61, 1.74, 1.87, 2]
				}]
			},
			atk_m_2: {
				label: "M攻刃",
				effect: [{
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}]
			},
			atk_m_3: {
				label: "M攻刃II",
				effect: [{
					group: "magna_boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			me_m_1: {
				label: "M得意攻刃",
				effect: [{
					group: "magna_boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			atk_a_1: {
				label: "EX攻刃(小)",
				effect: [{
					group: "unkown",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12]
				}]
			},
			atk_a_2: {
				label: "EX攻刃(中)",
				effect: [{
					group: "unkown",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5]
				}]
			},
			atk_a_3: {
				label: "EX攻刃(大)",
				effect: [{
					group: "unkown",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.6, 19.2, 19.8, 20.4, 21]
				}]
			},
			atk_a_4: {
				label: "EX攻刃(特大)",
				effect: [{
					group: "unkown",
					list: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23.5, 24, 24.5, 25, 25.5]
				}]
			},
			atk_a_5: {
				label: "EX攻刃(極大)",
				effect: [{
					group: "unkown",
					list: [12, 13.4, 14.9, 16.3, 17.8, 19.2, 20.7, 22.1, 23.6, 25, 26.6, 28.2, 29.8, 31.4, 33, 33.8, 34.6, 35.4, 36.2, 37]
				}]
			},
			xeno_4: {
				label: "EX攻刃(特大)/HP",
				effect: [{
					group: "unkown",
					list: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23.5, 24, 24.5, 25, 25.5]
				}, {
					group: "unkown_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}]
			},
			backwater_a_1: {
				label: "EX背水(小)",
				effect: [{
					group: "unkown_enmity",
					list: []
				}]
			},
			backwater_a_2: {
				label: "EX背水(中)",
				effect: [{
					group: "unkown_enmity",
					list: []
				}]
			},
			backwater_a_3: {
				label: "EX背水(大)",
				effect: [{
					group: "unkown_enmity",
					list: []
				}]
			},
			god_m: {
				label: "M神威",
				effect: [{
					group: "magna_boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.1, 12.2, 12.3, 12.4, 12.5]
				}, {
					group: "magna_hp",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.1, 12.2, 12.3, 12.4, 12.5]
				}]
			},
			god_m_2: {
				label: "M神威II",
				effect: [{
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5]
				}, {
					group: "magna_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5]
				}]
			},
			god_m_3: {
				label: "M神威III",
				effect: [{
					group: "magna_boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}, {
					group: "magna_hp",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			tyrant_m: {
				label: "M暴君",
				effect: [{
					group: "magna_boost",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}, {
					group: "tyrant",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			moment_m_1: {
				label: "M刹那(小)",
				effect: [{
					group: "magna_tec",
					list: []
				}, {
					group: "magna_boost",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}]
			},
			moment_m: {
				label: "M刹那(中)",
				effect: [{
					group: "magna_tec",
					list: []
				}, {
					group: "magna_boost",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}]
			},
			god_a: {
				label: "EX神威(中)",
				effect: [{
					group: "unkown",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.8, 15.1, 15.4, 15.7, 16]
				}, {
					group: "unkown_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14]
				}]
			},
			tyrant_a: {
				label: "EX暴君",
				effect: [{
					group: "unkown",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}, {
					group: "tyrant",
					list: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
				}]
			},
			wargod_m: {
				label: "M軍神II",
				effect: [{
					group: "magna_hp",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}, {
					group: "magna_da",
					list: [.4, .6, .8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2]
				}]
			},
			backwater_1: {
				label: "背水(小)",
				effect: [{
					group: "enmity",
					list: []
				}]
			},
			backwater_2: {
				label: "背水(中)",
				effect: [{
					group: "enmity",
					list: []
				}]
			},
			backwater_3: {
				label: "背水(大)",
				effect: [{
					group: "enmity",
					list: []
				}]
			},
			backwater_4: {
				label: "背水(特大)",
				effect: [{
					group: "enmity_n",
					list: []
				}]
			},
			backwater_m_1: {
				label: "M背水",
				effect: [{
					group: "magna_enmity",
					list: []
				}]
			},
			backwater_m_3: {
				label: "M背水II",
				effect: [{
					group: "magna_enmity",
					list: []
				}]
			},
			baha: {
				label: "バハHP",
				effect: [{
					group: "bahahp",
					list: [10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 15, 15, 15, 15, 15]
				}, {
					group: "bahahp_hp",
					list: [10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 15, 15, 15, 15, 15]
				}]
			},
			race_atk: {
				label: "バハ",
				effect: [{
					group: "race_atk",
					list: [20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 30.4, 30.8, 31.2, 31.6, 32]
				}, {
					group: "bahahp_hp2",
					list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15.6, 16.2, 16.8, 17.4, 18]
				}]
			},
			race_hp: {
				label: "バハHP(単体)",
				effect: [{
					group: "bahahp_hp",
					list: [20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 34, 36, 38, 40]
				}]
			},
			race_da: {
				label: "バハ連攻",
				effect: [{
					group: "race_da",
					list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 7.5, 8, 8.5, 9, 9.5, 10]
				}, {
					group: "race_ta",
					list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6.4, 6.8, 7.2, 7.6, 8]
				}]
			},
			whole_1: {
				label: "渾身(小)",
				effect: [{
					group: "whole",
					list: []
				}]
			},
			whole_2: {
				label: "渾身(中)",
				effect: [{
					group: "whole",
					list: []
				}]
			},
			whole_3: {
				label: "渾身(大)",
				effect: [{
					group: "whole",
					list: []
				}]
			},
			whole_3_2: {
				label: "渾身II(大)",
				effect: [{
					group: "whole",
					list: []
				}]
			},
			whole_4: {
				label: "渾身(特大)",
				effect: [{
					group: "whole_n",
					list: []
				}]
			},
			whole_m_2: {
				label: "M渾身(中)",
				effect: [{
					group: "magna_whole",
					list: []
				}]
			},
			whole_m_3: {
				label: "M渾身(大)",
				effect: [{
					group: "magna_whole",
					list: []
				}]
			},
			seraphic: {
				label: "ｾﾗﾌｨｯｸ",
				effect: [{
					group: "seraphic",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			seraphic_2: {
				label: "ｾﾗﾌｨｯｸII",
				effect: [{
					group: "seraphic",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}]
			},
			seraphic_3: {
				label: "ｾﾗﾌｨｯｸIII",
				effect: [{
					group: "seraphic",
					list: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]
				}]
			},
			da_1: {
				label: "二手(小)",
				effect: [{
					group: "da",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}]
			},
			da_2: {
				label: "二手(中)",
				effect: [{
					group: "da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			da_3: {
				label: "二手(大)",
				effect: [{
					group: "da",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}]
			},
			ta_1: {
				label: "三手(小)",
				effect: [{
					group: "ta",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}, {
					group: "da",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}]
			},
			ta_2: {
				label: "三手(中)",
				effect: [{
					group: "ta",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}, {
					group: "da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			ta_3: {
				label: "三手(大)",
				effect: [{
					group: "ta",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}, {
					group: "da",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}]
			},
			ta_4: {
				label: "三手(特大)",
				effect: [{
					group: "ta_n",
					list: [2.8, 3.6, 4.4, 5.2, 6, 6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4, 13.2, 14]
				}, {
					group: "da_n",
					list: [2.8, 3.6, 4.4, 5.2, 6, 6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4, 13.2, 14]
				}]
			},
			da_m_1: {
				label: "M二手(小)",
				effect: [{
					group: "magna_da",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}]
			},
			da_m_2: {
				label: "M二手(中)",
				effect: [{
					group: "magna_da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			da_m_3: {
				label: "M二手(大)",
				effect: [{
					group: "magna_da",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}]
			},
			ta_m_1: {
				label: "M三手(小)",
				effect: [{
					group: "magna_ta",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}, {
					group: "magna_da",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}]
			},
			ta_m_2: {
				label: "M三手(中)",
				effect: [{
					group: "magna_ta",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}, {
					group: "magna_da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			ta_m_3: {
				label: "M三手(大)",
				effect: [{
					group: "magna_ta",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}, {
					group: "magna_da",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}]
			},
			hakai_m_1: {
				label: "M破壊(小)",
				effect: [{
					group: "magna_ta",
					list: [.4, .55, .7, .85, 1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9, 2.05, 2.2, 2.35, 2.5]
				}]
			},
			da_a_1: {
				label: "EX二手(小)",
				effect: [{
					group: "unkown_da",
					list: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5]
				}]
			},
			da_a_2: {
				label: "EX二手(中)",
				effect: [{
					group: "unkown_da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5]
				}]
			},
			da_a_3: {
				label: "EX二手(大)",
				effect: [{
					group: "unkown_da",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 5, 5.4, 5.8, 6.2, 6.6, 7]
				}]
			},
			coki: {
				label: "克己",
				effect: [{
					group: "tec",
					list: []
				}, {
					group: "da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			coki_m: {
				label: "M克己",
				effect: [{
					group: "magna_tec",
					list: []
				}, {
					group: "magna_da",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5.2, 5.4, 5.6, 5.8, 6]
				}]
			},
			tec_1: {
				label: "技巧(小)",
				effect: [{
					group: "tec",
					list: [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4]
				}]
			},
			tec_2: {
				label: "技巧(中)",
				effect: [{
					group: "tec",
					list: [3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.3, 5.6, 5.9, 6.2, 6.5, 6.7, 6.9, 7.1, 7.3, 7.5]
				}]
			},
			tec_3: {
				label: "技巧(大)",
				effect: [{
					group: "tec",
					list: [4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.2, 10.4, 10.6, 10.8, 11]
				}]
			},
			tec_3_2: {
				label: "技巧(大)II",
				effect: [{
					group: "tec",
					list: [6, 6.3, 6.7, 7, 7.3, 7.7, 8, 8.3, 8.7, 9, 9.6, 10.2, 10.8, 11.4, 12]
				}]
			},
			tec_4: {
				label: "技巧(特大)",
				effect: [{
					group: "tec_n",
					list: [8, 8.6, 9.4, 10, 10.6, 11.4, 12, 12.6, 13.4, 14, 15.2, 16.4, 17.6, 18.8, 20]
				}]
			},
			tec_m_1: {
				label: "M技巧(小)",
				effect: [{
					group: "magna_tec",
					list: []
				}]
			},
			tec_m_2: {
				label: "M技巧(中)",
				effect: [{
					group: "magna_tec",
					list: []
				}]
			},
			tec_m_3: {
				label: "M技巧(大)",
				effect: [{
					group: "magna_tec",
					list: []
				}]
			},
			hp_1: {
				label: "守護(小)",
				effect: [{
					group: "hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14]
				}]
			},
			hp_2: {
				label: "守護(中)",
				effect: [{
					group: "hp",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.4, 15.8, 16.2, 16.6, 17]
				}]
			},
			hp_3: {
				label: "守護(大)",
				effect: [{
					group: "hp",
					list: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18.6, 19.2, 19.8, 20.4, 21, 21.6, 22.2, 22.8, 23.4, 24]
				}]
			},
			hp_3_2: {
				label: "守護II(大)",
				effect: [{
					group: "hp",
					list: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
				}]
			},
			grace_1: {
				label: "恩寵(小)",
				effect: [{
					group: "hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14]
				}]
			},
			hp_m_1: {
				label: "M守護(小)",
				effect: [{
					group: "magna_hp",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12, 12.2, 12.4, 12.6, 12.8, 13]
				}]
			},
			hp_m_2: {
				label: "M守護(中)",
				effect: [{
					group: "magna_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.7, 14.9, 15.1, 15.3, 15.5]
				}]
			},
			hp_m_3: {
				label: "M守護II(大)",
				effect: [{
					group: "magna_hp",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.6, 16.2, 16.8, 17.4, 18, 18.4, 18.8, 19.2, 19.8, 20]
				}]
			},
			hp_a_1: {
				label: "EX守護(小)",
				effect: [{
					group: "unkown_hp",
					list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.4, 10.8, 11.2, 11.6, 12]
				}]
			},
			hp_a_2: {
				label: "EX守護(中)",
				effect: [{
					group: "unkown_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14]
				}]
			},
			turn_atk: {
				label: "先制",
				effect: [{
					group: "turn_boost",
					list: [5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20]
				}]
			},
			soka: {
				label: "楚歌",
				effect: [{
					group: "soka",
					list: [3, 3.5, 4, 4.5, 5, 5.6, 6.2, 6.8, 7.4, 8, 16, 17, 18, 19, 20]
				}]
			},
			soka_m: {
				label: "M楚歌",
				effect: [{
					group: "magna_soka",
					list: [3, 3.5, 4, 4.5, 5, 5.6, 6.2, 6.8, 7.4, 8, 16, 17, 18, 19, 20]
				}]
			},
			jinkai_1: {
				label: "刃界(小)",
				effect: [{
					group: "hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14]
				}, {
					group: "tec",
					list: []
				}]
			},
			fullcut_m: {
				label: "M不可侵",
				effect: [{
					group: "magna_hp",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.4, 12.8, 13.2, 13.6, 14, 14, 14, 14, 14, 14]
				}]
			},
			sp_atk_1: {
				label: "秘奥(小)",
				effect: [{
					group: "sp_atk",
					list: [.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 5.5, 7, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5]
				}]
			},
			sp_atk_2: {
				label: "秘奥(中)",
				effect: [{
					group: "sp_atk",
					list: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5]
				}]
			},
			sp_atk_3: {
				label: "秘奥(大)",
				effect: [{
					group: "sp_atk",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
				}]
			},
			sp_atk_4: {
				label: "秘奥(特大)",
				effect: [{
					group: "sp_atk_n",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25]
				}]
			},
			deadly_2: {
				label: "必殺(中)",
				effect: [{
					group: "sp_atk",
					list: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5]
				}, {
					group: "sp_limit",
					list: [.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5, 5, 5, 5, 5, 5]
				}]
			},
			deadly_3: {
				label: "必殺(大)",
				effect: [{
					group: "sp_atk",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
				}, {
					group: "sp_limit",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 6.8, 6.8, 6.8, 6.8, 6.8]
				}]
			},
			turn_element_2: {
				label: "進境(中)",
				effect: [{
					group: "turn_element",
					list: [.43, .46, .49, .52, .55, .58, .61, .64, .67, .7, .72, .74, .76, .78, .8, .8, .8, .8, .8, .8]
				}, {
					group: "turn_element_limit",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			turn_element_3: {
				label: "進境(大)",
				effect: [{
					group: "turn_element",
					list: [.55, .6, .65, .7, .75, .8, .85, .9, .95, 1, 1.04, 1.08, 1.12, 1.16, 1.2, 1.26, 1.32, 1.38, 1.44, 1.5]
				}, {
					group: "turn_element_limit",
					list: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
				}]
			},
			turn_element_m_2: {
				label: "M進境(中)",
				effect: [{
					group: "turn_element_magna",
					list: [.43, .46, .49, .52, .55, .58, .61, .64, .67, .7, .72, .74, .76, .78, .8, .8, .8, .8, .8, .8]
				}, {
					group: "turn_element_limit_magna",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			turn_element_m_3: {
				label: "M進境(大)",
				effect: [{
					group: "turn_element_magna",
					list: [.55, .6, .65, .7, .75, .8, .85, .9, .95, 1, 1.04, 1.08, 1.12, 1.16, 1.2, 1.26, 1.32, 1.38, 1.44, 1.5]
				}, {
					group: "turn_element_limit_magna",
					list: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
				}]
			},
			hero_3: {
				label: "英傑",
				effect: [{
					group: "sp_atk",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
				}, {
					group: "sp_limit",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 6.8, 6.8, 6.8, 6.8, 6.8]
				}, {
					group: "chain_atk",
					list: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5]
				}, {
					group: "chain_limit",
					list: [1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 6.8, 6.8, 6.8, 6.8, 6.8]
				}]
			},
			deadly_m_2: {
				label: "M必殺(中)",
				effect: [{
					group: "magna_sp_atk",
					list: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5]
				}, {
					group: "magna_sp_limit",
					list: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5]
				}]
			},
			sp_limit: {
				label: "イクシード",
				effect: [{
					group: "sp_limit_exceed",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
				}]
			},
			arts: {
				label: "アーツ",
				effect: [{
					group: "ability_limit",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
				}]
			},
			train_3: {
				label: "技錬(大)",
				effect: [{
					group: "skill_train",
					list: [1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8, 6.1, 6.4, 6.7, 7]
				}, {
					group: "skill_train_add",
					list: [11e3, 12e3, 13e3, 14e3, 15e3, 16e3, 17e3, 18e3, 19e3, 2e4, 21e3, 22e3, 23e3, 24e3, 25e3, 26e3, 27e3, 28e3, 29e3, 3e4]
				}]
			},
			weapon_atk: {
				label: "オメガ初期",
				effect: [{
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_atk_2: {
				label: "オメガ戦意",
				effect: [{
					group: "weapon_atk",
					list: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_da: {
				label: "オメガ闘争",
				effect: [{
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}, {
					group: "weapon_da",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_ta",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}]
			},
			weapon_hp: {
				label: "オメガ生命",
				effect: [{
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20, 20, 20, 20, 20]
				}]
			},
			weapon_whole: {
				label: "オメガ強壮",
				effect: [{
					group: "weapon_whole",
					list: []
				}, {
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_backwater: {
				label: "オメガ激情",
				effect: [{
					group: "weapon_backwater",
					list: []
				}, {
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_tec: {
				label: "オメガ勇気",
				effect: [{
					group: "weapon_atk",
					list: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]
				}, {
					group: "weapon_hp",
					list: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10, 10, 10, 10]
				}, {
					group: "weapon_tec",
					list: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 15, 15]
				}]
			},
			omega_blank: {
				label: "スキル選択",
				effect: []
			},
			special_limit: {
				label: "【奥義上限】",
				effect: [{
					group: "omega_special_limit",
					list: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
				}]
			},
			chain_limit: {
				label: "【チェンバ上限】",
				effect: [{
					group: "omega_chain_limit",
					list: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
				}]
			},
			weapon_hollowsky_main_1: {
				label: "虚空剣",
				effect: [{
					group: "hollowsky",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}]
			},
			weapon_hollowsky_main_2: {
				label: "虚空杖",
				effect: [{
					group: "hollowsky",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}, {
					group: "hollowsky_turn_boost",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_hollowsky_main_3: {
				label: "虚空槍",
				effect: [{
					group: "hollowsky",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}, {
					group: "hollowsky_hp",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_hollowsky_main_4: {
				label: "虚空斧",
				effect: [{
					group: "hollowsky",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}, {
					group: "hollowsky_ta",
					list: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
				}]
			},
			weapon_hollowsky_main_5: {
				label: "虚空弓",
				effect: [{
					group: "hollowsky",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}, {
					group: "hollowsky_tec",
					list: []
				}]
			},
			epic_bland: {
				label: "エピック",
				effect: [{
					group: "epic_bland",
					list: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
				}]
			},
			voltage_1: {
				label: "ボルテージ(剣)",
				effect: [{
					group: "voltage_1",
					list: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
				}]
			},
			voltage_2: {
				label: "ボルテージ(短剣)",
				effect: [{
					group: "voltage_2",
					list: []
				}]
			},
			voltage_3: {
				label: "ボルテージ(槍)",
				effect: [{
					group: "voltage_3",
					list: []
				}]
			},
			voltage_4: {
				label: "ボルテージ(斧)",
				effect: [{
					group: "voltage_4",
					list: []
				}]
			},
			voltage_5: {
				label: "ボルテージ(杖)",
				effect: [{
					group: "voltage_5",
					list: []
				}]
			},
			voltage_6: {
				label: "ボルテージ(銃)",
				effect: [{
					group: "voltage_6",
					list: []
				}]
			},
			voltage_7: {
				label: "ボルテージ(格闘)",
				effect: [{
					group: "voltage_7",
					list: []
				}]
			},
			voltage_8: {
				label: "ボルテージ(弓)",
				effect: [{
					group: "voltage_8",
					list: []
				}]
			},
			voltage_9: {
				label: "ボルテージ(楽器)",
				effect: [{
					group: "voltage_9",
					list: []
				}]
			},
			voltage_10: {
				label: "ボルテージ(刀)",
				effect: [{
					group: "voltage_10",
					list: []
				}]
			},
			voltage_1_2: {
				label: "ボルテージII(剣)",
				effect: [{
					group: "voltage_1",
					list: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
				}]
			},
			voltage_2_2: {
				label: "ボルテージII(短剣)",
				effect: [{
					group: "voltage_2",
					list: []
				}]
			},
			voltage_3_2: {
				label: "ボルテージII(槍)",
				effect: [{
					group: "voltage_3",
					list: []
				}]
			},
			voltage_4_2: {
				label: "ボルテージII(斧)",
				effect: [{
					group: "voltage_4",
					list: []
				}]
			},
			voltage_5_2: {
				label: "ボルテージII(杖)",
				effect: [{
					group: "voltage_5",
					list: []
				}]
			},
			voltage_6_2: {
				label: "ボルテージII(銃)",
				effect: [{
					group: "voltage_6",
					list: []
				}]
			},
			voltage_7_2: {
				label: "ボルテージII(格闘)",
				effect: [{
					group: "voltage_7",
					list: []
				}]
			},
			voltage_8_2: {
				label: "ボルテージII(弓)",
				effect: [{
					group: "voltage_8",
					list: []
				}]
			},
			voltage_9_2: {
				label: "ボルテージII(楽器)",
				effect: [{
					group: "voltage_9",
					list: []
				}]
			},
			voltage_10_2: {
				label: "ボルテージII(刀)",
				effect: [{
					group: "voltage_10",
					list: []
				}]
			},
			damageadd_50: {
				label: "与ダメ50k",
				effect: [{
					group: "damageadd",
					list: [5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4]
				}]
			},
			damageaddwhole_30: {
				label: "与ダメ30k(渾身)",
				effect: [{
					group: "damageaddwhole_base",
					list: [1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4]
				}, {
					group: "damageaddwhole_var",
					list: [2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4]
				}]
			},
			damageaddbackwater_60: {
				label: "与ダメ60k(背水)",
				effect: [{
					group: "damageaddbackwater_base",
					list: [1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4, 1e4]
				}, {
					group: "damageaddbackwater_var",
					list: [5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4, 5e4]
				}]
			},
			abilitydamageadd_100: {
				label: "アビ与ダメ100k",
				effect: [{
					group: "abilitydamageadd",
					list: [1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5]
				}]
			},
			spdamageadd_400: {
				label: "奥義与ダメ400k",
				effect: [{
					group: "spdamageadd",
					list: [4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5, 4e5]
				}]
			},
			spdamageaddwhole_600: {
				label: "奥義与ダメ600k(渾身)",
				effect: [{
					group: "spdamageaddwhole_base",
					list: [1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5, 1e5]
				}, {
					group: "spdamageaddwhole_var",
					list: [5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5, 5e5]
				}]
			},
			damage_limit: {
				label: "ダメージ上限",
				effect: [{
					group: "damage_limit",
					list: [3, 3.2, 3.5, 3.8, 4.1, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8, 6.1, 6.4, 6.7, 7, 7.6, 8.2, 8.8, 9.4, 10]
				}]
			},
			highlander: {
				label: "ハイランダー",
				effect: [{
					group: "highlander",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}]
			},
			highlanders: {
				label: "ハイランダー",
				effect: [{
					group: "highlander2",
					list: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
				}]
			},
			main_weapon: {
				label: "メイン特殊",
				effect: [{
					group: "main_weapon",
					list: []
				}]
			}
		},
		initWeaponSkill: function() {
			for (var e = 1; e <= 20; e++) {
				var a = gbf.weapon_skill_setting.voltage_1.effect[0].list[e - 1],
					a = (gbf.weapon_skill_setting.voltage_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_3.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_4.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_5.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_6.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_7.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_8.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_9.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_10.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_1_2.effect[0].list[e - 1]),
					a = (gbf.weapon_skill_setting.voltage_2_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_3_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_4_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_5_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_6_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_7_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_8_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_9_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.voltage_10_2.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.tec_1.effect[0].list[e - 1]),
					t = gbf.weapon_skill_setting.tec_2.effect[0].list[e - 1],
					s = gbf.weapon_skill_setting.tec_3.effect[0].list[e - 1],
					l = gbf.weapon_skill_setting.tec_3_2.effect[0].list[e - 1],
					n = 1.6 + .1 * (e - 1);
				gbf.weapon_skill_setting.tec_m_1.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.tec_m_2.effect[0].list[e - 1] = t, gbf.weapon_skill_setting.tec_m_3.effect[0].list[e - 1] = s, gbf.weapon_skill_setting.jinkai_1.effect[1].list[e - 1] = n, gbf.weapon_skill_setting.weapon_hollowsky_main_5.effect[1].list[e - 1] = 20, gbf.weapon_skill_setting.moment_1.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.moment_m_1.effect[0].list[e - 1] = a, gbf.weapon_skill_setting.coki.effect[0].list[e - 1] = t, gbf.weapon_skill_setting.coki_m.effect[0].list[e - 1] = t, gbf.weapon_skill_setting.moment.effect[0].list[e - 1] = t, gbf.weapon_skill_setting.moment_m.effect[0].list[e - 1] = t, gbf.weapon_skill_setting.moment_3.effect[0].list[e - 1] = s, gbf.weapon_skill_setting.moment_3_2.effect[0].list[e - 1] = l, gbf.weapon_skill_setting.weapon_tec.effect[2].list[e - 1] = e < 10 ? .5 * (e + 5) : 7.5, e <= 15 && (gbf.weapon_skill_setting.whole_1.effect[0].list[e - 1] = 85 - e), e <= 15 && (gbf.weapon_skill_setting.whole_2.effect[0].list[e - 1] = 65 - e, gbf.weapon_skill_setting.whole_m_2.effect[0].list[e - 1] = 60.4 - e), e <= 15 ? (gbf.weapon_skill_setting.whole_3.effect[0].list[e - 1] = 56.4 - e, gbf.weapon_skill_setting.whole_m_3.effect[0].list[e - 1] = 56.4 - e, gbf.weapon_skill_setting.weapon_whole.effect[0].list[e - 1] = 53.7 - e) : (gbf.weapon_skill_setting.whole_3.effect[0].list[e - 1] = 56.4 - (15 + .4 * (e - 15)), gbf.weapon_skill_setting.whole_m_3.effect[0].list[e - 1] = 56.4 - (15 + .4 * (e - 15)), gbf.weapon_skill_setting.weapon_whole.effect[0].list[e - 1] = 56.4 - (15 + .4 * (e - 15))), gbf.weapon_skill_setting.whole_3_2.effect[0].list[e - 1] = e <= 15 ? 53.7 - e : 53.7 - (15 + .4 * (e - 15)), gbf.weapon_skill_setting.whole_4.effect[0].list[e - 1] = e <= 15 ? 50.4 - e : 50.4 - (15 + .4 * (e - 15)), e < 10 ? (gbf.weapon_skill_setting.backwater_1.effect[0].list[e - 1] = (1.8 * e - .3) / 3, gbf.weapon_skill_setting.backwater_m_1.effect[0].list[e - 1] = (1.8 * e - .3) / 3, gbf.weapon_skill_setting.backwater_a_1.effect[0].list[e - 1] = (1.8 * e - .3) / 3) : e <= 15 ? (gbf.weapon_skill_setting.backwater_1.effect[0].list[e - 1] = 6 + (e - 10) / 5, gbf.weapon_skill_setting.backwater_m_1.effect[0].list[e - 1] = 6 + (e - 10) / 5, gbf.weapon_skill_setting.backwater_a_1.effect[0].list[e - 1] = 6 + (e - 10) / 5) : (gbf.weapon_skill_setting.backwater_1.effect[0].list[e - 1] = 7 + (e - 15) / 10, gbf.weapon_skill_setting.backwater_m_1.effect[0].list[e - 1] = 7 + (e - 15) / 10, gbf.weapon_skill_setting.backwater_a_1.effect[0].list[e - 1] = 7 + (e - 15) / 10), e < 10 ? (gbf.weapon_skill_setting.backwater_2.effect[0].list[e - 1] = (2.4 * e - .4) / 3, gbf.weapon_skill_setting.backwater_a_2.effect[0].list[e - 1] = (2.4 * e - .4) / 3) : e <= 15 && (gbf.weapon_skill_setting.backwater_2.effect[0].list[e - 1] = 8 + 2 * (e - 10) / 5, gbf.weapon_skill_setting.backwater_a_2.effect[0].list[e - 1] = 8 + 2 * (e - 10) / 5), e < 10 ? (gbf.weapon_skill_setting.backwater_3.effect[0].list[e - 1] = (3 * e - .5) / 3, gbf.weapon_skill_setting.backwater_m_3.effect[0].list[e - 1] = (3 * e - .5) / 3, gbf.weapon_skill_setting.backwater_a_3.effect[0].list[e - 1] = (3 * e - .5) / 3, gbf.weapon_skill_setting.weapon_backwater.effect[0].list[e - 1] = (3 * (e - 1) - .5) / 3) : e <= 15 ? (gbf.weapon_skill_setting.backwater_3.effect[0].list[e - 1] = 10 + 2.5 * (e - 10) / 5, gbf.weapon_skill_setting.backwater_m_3.effect[0].list[e - 1] = 10 + 2.5 * (e - 10) / 5, gbf.weapon_skill_setting.backwater_a_3.effect[0].list[e - 1] = 10 + 2.5 * (e - 10) / 5, gbf.weapon_skill_setting.weapon_backwater.effect[0].list[e - 1] = 10 + 2.5 * (e - 10) / 5) : (gbf.weapon_skill_setting.backwater_3.effect[0].list[e - 1] = 12.5 + (e - 15) / 5, gbf.weapon_skill_setting.backwater_m_3.effect[0].list[e - 1] = 12.5 + (e - 15) / 5, gbf.weapon_skill_setting.backwater_a_3.effect[0].list[e - 1] = 12.5 + (e - 15) / 5), gbf.weapon_skill_setting.backwater_4.effect[0].list[e - 1] = e < 10 ? +e + 5 : e <= 15 ? 15 + 3.75 * (e - 10) / 5 : 15.625 + (e - 15) / 5
			}
		},
		get_wapon_category: function(e) {
			switch (e) {
				case "1040001800":
				case "1040002400":
				case "1040002500":
				case "1040002600":
				case "1040002700":
				case "1040002800":
				case "1040002900":
				case "1040003000":
				case "1040003700":
				case "1040003800":
				case "1040003900":
				case "1040004000":
				case "1040004100":
				case "1040004200":
				case "1040101700":
				case "1040102200":
				case "1040102300":
				case "1040102400":
				case "1040102500":
				case "1040102600":
				case "1040102700":
				case "1040102800":
				case "1040103100":
				case "1040103200":
				case "1040103300":
				case "1040103400":
				case "1040103500":
				case "1040103600":
				case "1040201600":
				case "1040202100":
				case "1040202200":
				case "1040202300":
				case "1040202400":
				case "1040202500":
				case "1040202600":
				case "1040202700":
				case "1040203100":
				case "1040203200":
				case "1040203300":
				case "1040203400":
				case "1040203500":
				case "1040203600":
				case "1040301300":
				case "1040301600":
				case "1040301700":
				case "1040301800":
				case "1040301900":
				case "1040302000":
				case "1040302100":
				case "1040302200":
				case "1040302400":
				case "1040302500":
				case "1040302600":
				case "1040302700":
				case "1040302800":
				case "1040302900":
				case "1040401800":
				case "1040402000":
				case "1040402100":
				case "1040402200":
				case "1040402300":
				case "1040402400":
				case "1040402500":
				case "1040402600":
				case "1040403100":
				case "1040403200":
				case "1040403300":
				case "1040403400":
				case "1040403500":
				case "1040403600":
				case "1040500800":
				case "1040500900":
				case "1040501000":
				case "1040501100":
				case "1040501200":
				case "1040501300":
				case "1040501400":
				case "1040501500":
				case "1040501700":
				case "1040501800":
				case "1040501900":
				case "1040502000":
				case "1040502100":
				case "1040502200":
				case "1040600800":
				case "1040601000":
				case "1040601100":
				case "1040601200":
				case "1040601300":
				case "1040601400":
				case "1040601500":
				case "1040601600":
				case "1040601800":
				case "1040601900":
				case "1040602000":
				case "1040602100":
				case "1040602200":
				case "1040602300":
				case "1040700500":
				case "1040701000":
				case "1040701100":
				case "1040701200":
				case "1040701300":
				case "1040701400":
				case "1040701500":
				case "1040701600":
				case "1040701800":
				case "1040701900":
				case "1040702000":
				case "1040702100":
				case "1040702200":
				case "1040702300":
				case "1040800300":
				case "1040800400":
				case "1040800500":
				case "1040800600":
				case "1040800700":
				case "1040800800":
				case "1040800900":
				case "1040801000":
				case "1040801400":
				case "1040801500":
				case "1040801600":
				case "1040801700":
				case "1040801800":
				case "1040801900":
				case "1040900500":
				case "1040900600":
				case "1040900700":
				case "1040900800":
				case "1040900900":
				case "1040901000":
				case "1040901100":
				case "1040901200":
				case "1040901400":
				case "1040901500":
				case "1040901600":
				case "1040901700":
				case "1040901800":
				case "1040901900":
					return 6;
				case "1030004400":
				case "1030103800":
				case "1030203700":
				case "1030302900":
				case "1030403200":
				case "1030502600":
				case "1030603700":
				case "1030702400":
				case "1030802000":
				case "1030900500":
				case "1040004300":
				case "1040007400":
				case "1040103700":
				case "1040106700":
				case "1040203700":
				case "1040205400":
				case "1040303000":
				case "1040304300":
				case "1040403700":
				case "1040407000":
				case "1040502300":
				case "1040504500":
				case "1040602400":
				case "1040604400":
				case "1040702400":
				case "1040703700":
				case "1040802000":
				case "1040803800":
				case "1040901300":
				case "1040904400":
					return 7;
				case "1040008000":
				case "1040107300":
				case "1040206000":
				case "1040304900":
				case "1040407600":
				case "1040505100":
				case "1040605000":
				case "1040704300":
				case "1040804400":
				case "1040905000":
					return 8;
				case "1030301900":
				case "1040302300":
				case "1040303500":
				case "1040303600":
				case "1040303700":
				case "1040303800":
				case "1040303900":
				case "1040304000":
				case "1040304100":
				case "1040308400":
				case "1040308500":
				case "1040308600":
				case "1040308700":
				case "1040308800":
				case "1040308900":
				case "1030003300":
				case "1040003500":
				case "1040005100":
				case "1040005200":
				case "1040005300":
				case "1040005400":
				case "1040005500":
				case "1040005600":
				case "1040005700":
				case "1040012600":
				case "1040012700":
				case "1040012800":
				case "1040012900":
				case "1040013000":
				case "1040013100":
				case "1030401900":
				case "1040402800":
				case "1040404500":
				case "1040404600":
				case "1040404700":
				case "1040404800":
				case "1040404900":
				case "1040405000":
				case "1040405100":
				case "1040411600":
				case "1040411700":
				case "1040411800":
				case "1040411900":
				case "1040412000":
				case "1040412100":
				case "1030402000":
				case "1040402900":
				case "1040405200":
				case "1040405300":
				case "1040405400":
				case "1040405500":
				case "1040405600":
				case "1040405700":
				case "1040405800":
				case "1040412200":
				case "1040412300":
				case "1040412400":
				case "1040412500":
				case "1040412600":
				case "1040412700":
				case "1030501700":
				case "1040501600":
				case "1040502700":
				case "1040502800":
				case "1040502900":
				case "1040503000":
				case "1040503100":
				case "1040503200":
				case "1040503300":
				case "1040508000":
				case "1040508100":
				case "1040508200":
				case "1040508300":
				case "1040508400":
				case "1040508500":
				case "1030102800":
				case "1040102900":
				case "1040104000":
				case "1040104100":
				case "1040104200":
				case "1040104300":
				case "1040104400":
				case "1040104500":
				case "1040104600":
				case "1040013200":
				case "1040013300":
				case "1040013400":
				case "1040013500":
				case "1040013600":
				case "1040013700":
				case "1030602500":
				case "1040601700":
				case "1040603200":
				case "1040603300":
				case "1040603400":
				case "1040603500":
				case "1040603600":
				case "1040603700":
				case "1040603800":
				case "1040609100":
				case "1040609200":
				case "1040609300":
				case "1040609400":
				case "1040609500":
				case "1040609600":
				case "1030701500":
				case "1040701700":
				case "1040702600":
				case "1040702700":
				case "1040702800":
				case "1040702900":
				case "1040703000":
				case "1040703100":
				case "1040703200":
				case "1040707500":
				case "1040707600":
				case "1040707700":
				case "1040707800":
				case "1040707900":
				case "1040708000":
				case "1030800700":
				case "1040801300":
				case "1040802800":
				case "1040802900":
				case "1040803000":
				case "1040803100":
				case "1040803200":
				case "1040803300":
				case "1040803400":
				case "1040807600":
				case "1040807700":
				case "1040807800":
				case "1040807900":
				case "1040808000":
				case "1040808100":
				case "1030202800":
				case "1040203000":
				case "1040204200":
				case "1040204300":
				case "1040204400":
				case "1040204500":
				case "1040204600":
				case "1040204700":
				case "1040204800":
				case "1040209700":
				case "1040209800":
				case "1040209900":
				case "1040210000":
				case "1040210100":
				case "1040210200":
				case "1030103000":
				case "1040103000":
				case "1040104700":
				case "1040104800":
				case "1040104900":
				case "1040105000":
				case "1040105100":
				case "1040105200":
				case "1040105300":
				case "1030900300":
				case "1040900300":
				case "1040902800":
				case "1040902900":
				case "1040903000":
				case "1040903100":
				case "1040903200":
				case "1040903300":
				case "1040903400":
				case "1040909300":
				case "1040909400":
				case "1040909500":
				case "1040909600":
				case "1040909700":
				case "1040909800":
				case "1030900400":
				case "1040900400":
				case "1040903500":
				case "1040903600":
				case "1040903700":
				case "1040903800":
				case "1040903900":
				case "1040904000":
				case "1040904100":
				case "1030005500":
				case "1040006200":
				case "1040006300":
				case "1040006400":
				case "1040006500":
				case "1040006600":
				case "1040006700":
				case "1040006800":
				case "1040006900":
				case "1040014400":
				case "1040014500":
				case "1040014600":
				case "1040014700":
				case "1040014800":
				case "1040014900":
				case "1030503800":
				case "1040503500":
				case "1040503600":
				case "1040503700":
				case "1040503800":
				case "1040503900":
				case "1040504000":
				case "1040504100":
				case "1040504200":
				case "1030404100":
				case "1040406000":
				case "1040406100":
				case "1040406200":
				case "1040406300":
				case "1040406400":
				case "1040406500":
				case "1040406600":
				case "1040406700":
				case "1040413400":
				case "1040413500":
				case "1040413600":
				case "1040413700":
				case "1040413800":
				case "1040413900":
				case "1030104400":
				case "1040105500":
				case "1040105600":
				case "1040105700":
				case "1040105800":
				case "1040105900":
				case "1040106000":
				case "1040106100":
				case "1040106200":
					return 11;
				case "1040007500":
				case "1040007600":
				case "1040007700":
				case "1040007800":
				case "1040002000":
				case "1040007900":
				case "1040200900":
				case "1040205500":
				case "1040205600":
				case "1040205700":
				case "1040205800":
				case "1040205900":
				case "1040106600":
				case "1040106800":
				case "1040106900":
				case "1040107000":
				case "1040107100":
				case "1040107200":
				case "1040406900":
				case "1040407100":
				case "1040407200":
				case "1040407300":
				case "1040407400":
				case "1040407500":
				case "1040304400":
				case "1040304500":
				case "1040304600":
				case "1040304700":
				case "1040300100":
				case "1040304800":
				case "1040504400":
				case "1040504600":
				case "1040504700":
				case "1040504800":
				case "1040504900":
				case "1040505000":
				case "1040604200":
				case "1040604500":
				case "1040604600":
				case "1040604700":
				case "1040604800":
				case "1040604900":
				case "1040703600":
				case "1040703800":
				case "1040703900":
				case "1040704000":
				case "1040704100":
				case "1040704200":
				case "1040803700":
				case "1040803900":
				case "1040804000":
				case "1040804100":
				case "1040804200":
				case "1040804300":
				case "1040904300":
				case "1040904500":
				case "1040904600":
				case "1040904700":
				case "1040904800":
				case "1040904900":
					return 12;
				case "1040011300":
				case "1040011400":
				case "1040011500":
				case "1040011600":
				case "1040011700":
				case "1040011800":
				case "1040011900":
				case "1040012000":
				case "1040012100":
				case "1040012200":
				case "1040012300":
				case "1040012400":
				case "1040109100":
				case "1040109200":
				case "1040109300":
				case "1040109400":
				case "1040109500":
				case "1040109600":
				case "1040109700":
				case "1040109800":
				case "1040109900":
				case "1040110000":
				case "1040110100":
				case "1040110200":
				case "1040208200":
				case "1040208300":
				case "1040208400":
				case "1040208500":
				case "1040208600":
				case "1040208700":
				case "1040208800":
				case "1040208900":
				case "1040209000":
				case "1040209100":
				case "1040209200":
				case "1040209300":
				case "1040307200":
				case "1040307300":
				case "1040307400":
				case "1040307500":
				case "1040307600":
				case "1040307700":
				case "1040307800":
				case "1040307900":
				case "1040308000":
				case "1040308100":
				case "1040308200":
				case "1040308300":
				case "1040410200":
				case "1040410300":
				case "1040410400":
				case "1040410500":
				case "1040410600":
				case "1040410700":
				case "1040410800":
				case "1040410900":
				case "1040411000":
				case "1040411100":
				case "1040411200":
				case "1040411300":
				case "1040506800":
				case "1040506900":
				case "1040507000":
				case "1040507100":
				case "1040507200":
				case "1040507300":
				case "1040507400":
				case "1040507500":
				case "1040507600":
				case "1040507700":
				case "1040507800":
				case "1040507900":
				case "1040607500":
				case "1040607600":
				case "1040607700":
				case "1040607800":
				case "1040607900":
				case "1040608000":
				case "1040608100":
				case "1040608200":
				case "1040608300":
				case "1040608400":
				case "1040608500":
				case "1040608600":
				case "1040706300":
				case "1040706400":
				case "1040706500":
				case "1040706600":
				case "1040706700":
				case "1040706800":
				case "1040706900":
				case "1040707000":
				case "1040707100":
				case "1040707200":
				case "1040707300":
				case "1040707400":
				case "1040806400":
				case "1040806500":
				case "1040806600":
				case "1040806700":
				case "1040806800":
				case "1040806900":
				case "1040807000":
				case "1040807100":
				case "1040807200":
				case "1040807300":
				case "1040807400":
				case "1040807500":
				case "1040906900":
				case "1040907000":
				case "1040907100":
				case "1040907200":
				case "1040907300":
				case "1040907400":
				case "1040907500":
				case "1040907600":
				case "1040907700":
				case "1040907800":
				case "1040907900":
				case "1040908000":
					return 13;
				case "1040007000":
				case "1040007100":
				case "1040604000":
				case "1040604100":
				case "1040803500":
				case "1040803600":
				case "1040205200":
				case "1040205300":
				case "1040703400":
				case "1040703500":
				case "1040106400":
				case "1040106500":
					return 14;
				case "1040410100":
				case "1040011200":
				case "1040208100":
				case "1040109000":
				case "1040706200":
				case "1040307100":
					return 15
			}
		},
		get_wapon_category_limited: function(e) {
			switch (e) {
				case "1040004600":
				case "1040008700":
				case "1040105400":
				case "1040404300":
				case "1040502500":
				case "1040108200":
				case "1040108700":
				case "1040207000":
				case "1040410000":
				case "1040906400":
				case "1040014300":
				case "1040309000":
				case "1040110600":
					return 1;
				default:
					return 0
			}
		},
		weapon: function(e) {
			this.weapon_id = e, weapon[this.weapon_id] || (this.weapon_id = "1999999999"), this.exists = function() {
				return "1999999999" != this.weapon_id
			}, this.getName = function() {
				return weapon[this.weapon_id].name
			}, this.getBaseAtk = function() {
				return parseInt(weapon[this.weapon_id].base_atk)
			}, this.getMaxAtk = function() {
				return parseInt(weapon[this.weapon_id].max_atk)
			}, this.getMaxExAtk = function() {
				return parseInt(weapon[this.weapon_id].max_ex_atk)
			}, this.getMaxEx2Atk = function() {
				return parseInt(weapon[this.weapon_id].max_ex2_atk)
			}, this.getBaseHp = function() {
				return parseInt(weapon[this.weapon_id].base_hp)
			}, this.getMaxHp = function() {
				return parseInt(weapon[this.weapon_id].max_hp)
			}, this.getMaxExHp = function() {
				return parseInt(weapon[this.weapon_id].max_ex_hp)
			}, this.getMaxEx2Hp = function() {
				return parseInt(weapon[this.weapon_id].max_ex2_hp)
			}, this.getBaseLv = function() {
				return weapon[this.weapon_id].lv
			}, this.getAtk = function(e) {
				if (e <= 1) return this.getBaseAtk();
				e > this.getMaxLv() && (e = this.getMaxLv());
				var a = 75;
				return "sr" == this.getRare() ? e <= 75 ? (a = 0, parseInt(this.getBaseAtk() + parseInt((this.getMaxAtk() - this.getBaseAtk()) * (e - a) / 75))) : (a = 75, parseInt(this.getMaxAtk() + parseInt((this.getMaxExAtk() - this.getMaxAtk()) * (e - a) / 45))) : "ssr" == this.getRare() ? e <= 100 ? (a = 0, parseInt(this.getBaseAtk() + parseInt((this.getMaxAtk() - this.getBaseAtk()) * (e - a) / 100))) : e <= 150 ? (a = 100, parseInt(this.getMaxAtk() + parseInt((this.getMaxExAtk() - this.getMaxAtk()) * (e - a) / 50))) : 150 < e ? (a = 150, parseInt(this.getMaxExAtk() + parseInt((this.getMaxEx2Atk() - this.getMaxExAtk()) * (e - a) / 50))) : void 0 : void 0
			}, this.getHp = function(e) {
				if (e <= 1) return this.getBaseHp();
				e > this.getMaxLv() && (e = this.getMaxLv());
				var a = 75;
				return "sr" == this.getRare() ? e <= 75 ? (a = 0, parseInt(this.getBaseHp() + parseInt((this.getMaxHp() - this.getBaseHp()) * (e - a) / 75))) : (a = 75, parseInt(this.getMaxHp() + parseInt((this.getMaxExHp() - this.getMaxHp()) * (e - a) / 45))) : "ssr" == this.getRare() ? e <= 100 ? (a = 0, parseInt(this.getBaseHp() + parseInt((this.getMaxHp() - this.getBaseHp()) * (e - a) / 100))) : e <= 150 ? (a = 100, parseInt(this.getMaxHp() + parseInt((this.getMaxExHp() - this.getMaxHp()) * (e - a) / 50))) : 150 < e ? (a = 150, parseInt(this.getMaxExHp() + parseInt((this.getMaxEx2Hp() - this.getMaxExHp()) * (e - a) / 50))) : void 0 : void 0
			}, this.getWeaponLevelFromAtk = function(e) {
				var a = 1;
				"sr" == this.getRare() ? a = e <= this.getMaxAtk() ? Math.round((e - this.getBaseAtk()) / (this.getMaxAtk() - this.getBaseAtk()) * 75) : Math.round((e - this.getMaxAtk()) / (this.getMaxExAtk() - this.getMaxAtk()) * 45) + 75 : "ssr" == this.getRare() && (e <= this.getMaxAtk() ? a = Math.round((e - this.getBaseAtk()) / (this.getMaxAtk() - this.getBaseAtk()) * 100) : e <= this.getMaxExAtk() ? a = Math.round((e - this.getMaxAtk()) / (this.getMaxExAtk() - this.getMaxAtk()) * 50) + 100 : e <= this.getMaxEx2Atk() && (a = Math.round((e - this.getMaxExAtk()) / (this.getMaxEx2Atk() - this.getMaxExAtk()) * 50) + 150));
				for (var t = 0; t < 3; t++)
					if (this.getAtk(a - 1 + t) == e) {
						a = a - 1 + t;
						break
					}
				return a
			}, this.getType = function() {
				return weapon[this.weapon_id].type
			}, this.getKind = function() {
				return weapon[this.weapon_id].type
			}, this.getCategory = function() {
				return weapon[this.weapon_id].category
			}, this.getRare = function() {
				return weapon[this.weapon_id].rare
			}, this.getElement = function() {
				return weapon[this.weapon_id].element
			}, this.getSkillId = function(e, a) {
				var t = "";
				return e < 0 && (console.log("WARNING:slot error. change %d to 1".replace("%d", e)), e = 1), 3 < e && (console.log("WARNING:slot error. change %d to 3".replace("%d", e)), e = 3), e = parseInt(e), weapon[this.weapon_id]["skill" + e].level && a >= weapon[this.weapon_id]["skill" + e].level && (t = weapon[this.weapon_id]["skill" + e].id), weapon[this.weapon_id]["skill" + e].ex_level && a >= weapon[this.weapon_id]["skill" + e].ex_level && (t = weapon[this.weapon_id]["skill" + e].ex_id), weapon[this.weapon_id]["skill" + e].ex2_level && a >= weapon[this.weapon_id]["skill" + e].ex2_level && (t = weapon[this.weapon_id]["skill" + e].ex2_id), new String(t)
			}, this.getSkillName = function(e) {
				return (e = parseInt(e)) < 0 && (console.log("WARNING:slot error. change %d to 1".replace("%d", e)), e = 1), 3 < e && (console.log("WARNING:slot error. change %d to 3".replace("%d", e)), e = 3), new String(weapon[this.weapon_id]["skill" + e].name)
			}, this.getMaxLv = function() {
				return parseInt(weapon[this.weapon_id].max_lv)
			}
		},
		getWeaponIds: function() {
			return Object.keys(weapon)
		},
		uiInitWidget: function() {
			for (var e = 0; e < gbf.weapon_kind.length; e++) $("select[name=select-weapon1]").append($("<option>").val(e).text(jQuery.i18n.prop(gbf.weapon_kind_label[e]))), $("select[name=select-weapon2]").append($("<option>").val(e).text(jQuery.i18n.prop(gbf.weapon_kind_label[e])));
			for (e = 0; e < gbf.weapon_zenith.length; e++) $("select[name=select-zenith1]").append($("<option>").val(e).text(gbf.weapon_zenith[e][0])), $("select[name=select-zenith2]").append($("<option>").val(e).text(gbf.weapon_zenith[e][0]));
			for (var a, t, e = 0; e < gbf.element_kind.length; e++) "全" != gbf.element_kind[e] && $("select[name=select-element]").append($("<option>").val(e).text(jQuery.i18n.prop(gbf.element_kind_label[e])).attr("data-class", "element-type-" + (e + 1))), $("select[name=skill1_element], select[name=skill2_element]").append($("<option>").val(e).text(jQuery.i18n.prop(gbf.element_kind_label[e])));
			for (a in gbf.weapon_skill_setting) $("select[name=skill1], select[name=skill2]").append($("<option>").val(a).text(jQuery.i18n.prop(a)));
			for (t in gbf.summon_label) $(".select-summon1, .select-summon2").append($("<option>").val(t).text(jQuery.i18n.prop(t)));
			for (t in gbf.summon2_label) $(".select-summon3").append($("<option>").val(t).text(jQuery.i18n.prop(t)));
			for (var s = 1; s <= 10; s++)
				for (var l = 1; l <= 20; l++) $(".prt-weapon-main-status-setting[set_num=" + s + "] .weapon_skill_lv,.prt-weapon-sub-status-setting[set_num=" + s + "] .weapon_skill_lv").append($("<option>").val(l).text("Slv." + l));
			$("#dialog").dialog({
				autoOpen: !1
			}), $(".select-menu").selectmenu(), $(".spinner").spinner(), $(".data-remove, .data-shortcut, .data-skill-reset").button(), $(".tooltip").tooltip({
				content: function(e) {
					e($(this).prop("title").replace(/\|/g, "<br />"))
				}
			}), $(".img-weapon-main, .img-weapon-sub").droppable({
				activeClass: "ui-droppable-default",
				hoverClass: "ui-droppable-hover",
				accept: ":not(.ui-sortable-helper)",
				drop: function(e, a) {
					var t = $(a.draggable).attr("data-id"),
						s = $(this).parent().attr("set_num"),
						l = $(this).attr("data-id");
					if (!t || 1999999999 == t) return !1;
					if ($(a.draggable).hasClass("thumb")) console.log("new Data"), gbf.weapon_data[s] = {
						id: t,
						lv: 1,
						skill_lv: 1,
						quality: 0,
						atk: 0,
						hp: 0,
						skill1_id: "none",
						skill1_element: -1,
						skill2_id: "none",
						skill2_element: -1,
						skill3_id: "none",
						skill3_element: -1
					}, gbf.uiSetSkill(s, DEFAULT_WEAPON_SKILL_STAGE);
					else if ($(a.draggable).hasClass("temp-image")) {
						var n = $(a.draggable).attr("slot_num");
						if (l && 1999999999 != l && gbf.drag_mode != MODE_COPY) {
							console.log("exchange Temp Data");
							var i = {
								skill1: {
									id: null,
									element: 0
								},
								skill2: {
									id: null,
									element: 0
								}
							};
							for (o in gbf.weapon_data[s]) i[o] = gbf.weapon_data[s][o], gbf.weapon_data[s][o] = gbf.weapon_data_temp[n][o];
							for (o in gbf.weapon_data[s]) gbf.weapon_data_temp[n][o] = i[o]
						} else
							for (var o in console.log("copy Temp Data"), gbf.weapon_data[s]) gbf.weapon_data[s][o] = gbf.weapon_data_temp[n][o];
						gbf.setTemp()
					} else {
						var p = $(a.draggable).parent().attr("set_num");
						if (l && 1999999999 != l && gbf.drag_mode != MODE_COPY) {
							console.log("exchange Data");
							i = {
								skill1: {
									id: null,
									element: 0
								},
								skill2: {
									id: null,
									element: 0
								}
							};
							for (o in gbf.weapon_data[s]) i[o] = gbf.weapon_data[s][o], gbf.weapon_data[s][o] = gbf.weapon_data[p][o];
							for (o in gbf.weapon_data[s]) gbf.weapon_data[p][o] = i[o]
						} else
							for (var o in console.log("copy Data"), gbf.weapon_data[s]) gbf.weapon_data[s][o] = gbf.weapon_data[p][o]
					}
					1 == s && gbf.setTargetElement(), gbf.setInput(), gbf.update()
				}
			}), $(".right-content-temp").droppable({
				activeClass: "ui-droppable-default-temp",
				hoverClass: "ui-droppable-hover-temp",
				accept: ".img-weapon-main,.img-weapon-sub",
				drop: function(e, a) {
					var t = $(a.draggable).attr("data-id");
					if (!t || 1999999999 == t) return !1;
					if ($(a.draggable).hasClass("thumb")) return !1;
					var s = $(a.draggable).parent().attr("set_num"),
						l = gbf.weapon_data_temp.length;
					for (label in gbf.weapon_data_temp[l] = {}, gbf.weapon_data[s]) gbf.weapon_data_temp[l][label] = gbf.weapon_data[s][label];
					gbf.setTemp()
				}
			}), $(".img-weapon-main, .img-weapon-sub").draggable({
				appendTo: "body",
				helper: "clone",
				start: function(e, a) {
					var t, s = $(".ui-draggable-dragging");
					s.hasClass("img-weapon-main") && s.attr("title") && (t = s.attr("title"), s.attr("src", "javaScript:huijiToolbox.getImageUrl('M_%d_01.jpg')".replace("%d", t)))
				}
			}), $(".tabs").tabs(), $(".radio").buttonset(), $("input[type=button]").button(), $("#dialog").dialog({
				autoOpen: !1
			}), $("#dialog2").dialog({
				autoOpen: !1,
				width: "150px"
			})
		},
		setTemp: function() {
			$("#temp-list").html("");
			for (var e = 0; e < gbf.weapon_data_temp.length; e++) $("#temp-list").append("<li><div class='temp-box'><img src='javaScript:huijiToolbox.getImageUrl('M_%d_01.jpg')' class='temp-image' data-id='%d' slot_num='%d'><div class='temp-lv'>Lv. %d<br />Slv. %d</div><div class='temp-remove'><button type='button' class='temp-remove' slot_num='%d'><span class='ui-button-icon ui-icon ui-icon-closethick' slot_num='%d'></span></button></div></div></li>".replace(/%d/, gbf.weapon_data_temp[e].id).replace(/%d/, gbf.weapon_data_temp[e].id).replace(/%d/, e).replace(/%d/, gbf.weapon_data_temp[e].lv).replace(/%d/, gbf.weapon_data_temp[e].skill_lv).replace(/%d/, e).replace(/%d/, e));
			$("#tabs-temp-tab").html("一時領域 (" + e + ")"), $(".temp-image").draggable({
				appendTo: "body",
				helper: "clone",
				start: function(e, a) {}
			}), $(".temp-remove").click(function(e, a) {
				e = 0 | $(e.target).attr("slot_num");
				null != e && (gbf.weapon_data_temp.splice(e, 1), gbf.setTemp(), gbf.update())
			}), gbf.update()
		},
		initSaveLabel: function(e) {
			var a;
			return e = e ? document.createTextNode(e).data : (a = new Date).getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
		},
		uiUpdateWeaponListTab: function(e) {
			var a = $(".select-weapons .ui-tabs-panel[aria-hidden=false]").attr("id");
			if (gbf.tab_info_cache[a = e ? e : a] != gbf.selected_element && ("tabs-bahamut" != a && "tabs-cosmos" != a || 6 != gbf.tab_info_cache[a])) {
				for (var t = {
					ssr: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
					sr: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
				}, s = 0, l = 0, n = [-1, -1], i = gbf.getWeaponIds(), o = 0; o < i.length; o++) {
					var p = i[o];
					if (!(1999999999 <= p)) {
						var _ = new gbf.weapon(p),
							s = -1,
							n = [-1, -1],
							c = _.getCategory(),
							g = _.getRare(),
							d = _.getElement(),
							f = ("sr" != g && (g = "ssr"), "thumb"),
							f = "<img class='%s' src='javaScript:huijiToolbox.getImageUrl('M_%d_01.jpg')' data-id='%d' title='%s'>".replace("%s", f = "LIMITED" === c ? "thumb limited" : f).replace("%d", p).replace("%d", p).replace("%s", _.getName() + "\nskill1:" + _.getSkillName("1", 1) + "\nskill2:" + _.getSkillName("2", 1)),
							p = gbf.get_wapon_category(p);
						if ("REVENANT" == c) {
							if (d != gbf.selected_element) continue;
							s = 6
						}
						if ("SUPERLATIVE" == c) {
							if (d != gbf.selected_element) continue;
							s = 12
						}
						if ("CLASS" == c) {
							if (d != gbf.selected_element) continue;
							s = 11
						}
						if ("BAHAMUT" == c && (s = 7), "OMEGA" == c) {
							if (d != gbf.selected_element) continue;
							s = 13
						}
						if ("HOLLOWSKY" == c && (s = 14), -1 != (s = 8 == p ? 8 : s)) t[g][s] += f;
						else {
							for (var u = [_.getSkillId("1", 1), _.getSkillId("2", 1)], r = 0; r < u.length; r++) {
								var l = 0,
									b = u[r].split("_");
								if ("a" == b[2] && d == gbf.selected_element) n[r] = s = 9;
								else if ("heal" == b[1] && "limit" == b[2] && (b[1] = b[1] + "_" + b[2], b[2] = b[3], b[3] = b[4]), "m" == b[2] && (b[1] = b[1] + "_" + b[2], b[2] = b[3], b[3] = b[4], l = 1), b[2] == gbf.selected_element + 1) {
									switch (b[1]) {
										case "atk":
										case "tyrant":
										case "moment":
										case "musou":
										case "god":
										case "nirrti":
										case "ranbu":
											s = "LIMITED" == c ? 15 : "DARKOPUS" == c ? 21 : 0;
											break;
										case "atk_m":
										case "tyrant_m":
										case "moment_m":
										case "musou_m":
										case "god_m":
											s = "DARKOPUS" == c ? 22 : 3;
											break;
										case "hp":
											s = 1;
											break;
										case "hp_m":
											s = 4;
											break;
										default:
											s = l ? 5 : 2
									}
									n[r] = s
								}
							} - 1 == n[0] && -1 == n[1] && d == gbf.selected_element && (n[0] = s = 10), n[0] == n[1] && (n[1] = -1), -1 != n[0] && (t[g][n[0]] += f), -1 != n[1] && (t[g][n[1]] += f)
						}
					}
				}
				switch (a) {
					case "tabs-boost":
						$("#tabs-boost").html(t.ssr[21] + t.ssr[15] + t.ssr[0] + t.sr[0]);
						break;
					case "tabs-aegis":
						$("#tabs-aegis").html(t.ssr[1] + t.sr[1]);
						break;
					case "tabs-others":
						$("#tabs-others").html(t.ssr[2] + t.sr[2]);
						break;
					case "tabs-magna":
						$("#tabs-magna-boost").html(t.ssr[22] + t.ssr[3] + t.ssr[4] + t.ssr[5] + t.sr[3] + t.sr[4] + t.sr[5]);
						break;
					case "tabs-magna-boost":
						$("#tabs-magna-boost").html(t.ssr[22] + t.ssr[3] + t.sr[3]);
						break;
					case "tabs-magna-aegis":
						$("#tabs-magna-aegis").html(t.ssr[4] + t.sr[4]);
						break;
					case "tabs-magna-others":
						$("#tabs-magna-others").html(t.ssr[5] + t.sr[5]);
						break;
					case "tabs-bahamut":
						$("#tabs-bahamut").html(t.ssr[7] + t.sr[7]);
						break;
					case "tabs-omega":
						$("#tabs-omega").html(t.ssr[13] + t.sr[13]);
						break;
					case "tabs-cosmos":
						$("#tabs-cosmos").html(t.ssr[8] + t.sr[8]);
						break;
					case "tabs-numbers":
						$("#tabs-numbers").html(t.ssr[6] + t.sr[6]);
						break;
					case "tabs-moon":
						$("#tabs-moon").html(t.ssr[12] + t.sr[12]);
						break;
					case "tabs-job":
						$("#tabs-job").html(t.ssr[11] + t.sr[11]);
						break;
					case "tabs-hollowsky":
						$("#tabs-hollowsky").html(t.ssr[14] + t.sr[14]);
						break;
					case "tabs-unkown":
						$("#tabs-unkown").html(t.ssr[9] + t.sr[9]);
						break;
					case "tabs-others2":
						$("#tabs-others2").html(t.ssr[10] + t.sr[10])
				}
				gbf.tab_info_cache[a] = gbf.selected_element, "tabs-bahamut" != a && "tabs-cosmos" != a || (gbf.tab_info_cache[a] = 6), $(".tabs.select-weapons img").draggable({
					appendTo: "body",
					helper: "clone"
				})
			}
		},
		uiSetSkill: function(e, a) {
			var t = $(".prt-weapon-main-skill-setting[set_num=" + e + "],.prt-weapon-sub-skill-setting[set_num=" + e + "]"),
				s = gbf.weapon_data[e].id,
				l = gbf.weapon_data[e].lv,
				n = new gbf.weapon(s),
				s = new RegExp(gbf.WEAPON_SKILL_REGEXP),
				i = [n.getSkillId("1", l).match(s), n.getSkillId("2", l).match(s), n.getSkillId("3", l).match(s)];
			t.find("select[name=skill1]").val("none"), t.find("select[name=skill1_element]").val(-1), t.find("select[name=skill2]").val("none"), t.find("select[name=skill2_element]").val(-1);
			for (var o = 0; o < i.length; o++)
				if (i[o]) {
					var p = "",
						_ = 0;
					switch (i[o][1]) {
						case "weapon_hollowsky_main":
						case "weapon_hollowsky":
						case "voltage":
							p = i[o][1] + "_" + i[o][2], _ = 6, i[o][3] && (p += i[o][3]);
							break;
						case "main_weapon":
						case "stance":
						case "omega_blank":
						case "race_atk":
						case "race_hp":
						case "race_da":
						case "baha":
						case "weapon_atk":
						case "weapon_atk2":
						case "weapon_da":
						case "weapon_hp":
						case "weapon_tec":
						case "epic_bland":
						case "highlander":
						case "highlanders":
							p = i[o][1], _ = 6;
							break;
						case "damage_limit":
						case "sp_limit":
						case "god":
						case "god_m":
						case "god_a":
						case "coki":
						case "coki_m":
						case "moment":
						case "moment_m":
						case "nirrti":
						case "nirrti_m":
						case "turn_atk":
						case "soka":
						case "soka_m":
						case "grace":
						case "fullcut_m":
						case "wargod_m":
							p = i[o][1], _ = i[o][2] - 1, i[o][3] && (p += i[o][3]), i[o][4] && (p += i[o][4]);
							break;
						case "arts":
						case "tyrant":
						case "tyrant_m":
						case "tyrant_a":
						case "seraphic":
							p = i[o][1], i[o][3] && (p += i[o][3]), _ = i[o][2] - 1;
							break;
						default:
							p = i[o][1] + i[o][3], i[o][4] && (p += i[o][4]), _ = i[o][2] - 1
					} - 1 == _ && (_ = n.getElement()), gbf.weapon_skill_setting[p] && (0 == o ? (gbf.weapon_data[e].skill1_id = p, gbf.weapon_data[e].skill1_element = _, t.find("select[name=skill1]").val(p), t.find("select[name=skill1_element]").val(_)) : 1 == o ? (gbf.weapon_data[e].skill2_id = p, gbf.weapon_data[e].skill2_element = _, t.find("select[name=skill2]").val(p), t.find("select[name=skill2_element]").val(_)) : (gbf.weapon_data[e].skill3_id = p, gbf.weapon_data[e].skill3_element = _))
				} else 0 == o ? (gbf.weapon_data[e].skill1_id = "none", gbf.weapon_data[e].skill1_element = -1, t.find("select[name=skill1]").val("none"), t.find("select[name=skill1_element]").val("-1")) : 1 == o ? (gbf.weapon_data[e].skill2_id = "none", gbf.weapon_data[e].skill2_element = -1, t.find("select[name=skill2]").val("none"), t.find("select[name=skill2_element]").val("-1")) : (gbf.weapon_data[e].skill3_id = "none", gbf.weapon_data[e].skill3_element = -1)
		},
		uiUpdateDisplay: function() {
			for (param_name in $(".total-hp .num").attr("title", 0 | gbf.output.weapon_hp).html(0 | gbf.output.weapon_hp), $(".total-atk .num").attr("title", 0 | gbf.output.weapon_attack).html(0 | gbf.output.weapon_attack), gbf.output) $(".display ." + param_name).length && $(".display ." + param_name).html(gbf.number_format(gbf.output[param_name]));
			$(".display .total_enmity").html(0 | gbf.output.total_enmity), $(".display .total_skill").html(0 | gbf.output.total_skill), $(".display .total_attack").html(gbf.number_format(0 | gbf.output.total_attack)), $(".display .total_attack_disadv").html(gbf.number_format(0 | gbf.output.total_attack_disadv)), $(".display .base_hp").html(gbf.number_format(0 | gbf.output.base_hp)), $(".display .result_hp").html(gbf.number_format(0 | gbf.output.result_hp)), $(".display .aegis").html((100 * gbf.output.aegis | 0) / 100), $(".display .m_aegis").html((100 * gbf.output.magna_aegis | 0) / 100), $(".display .ex_aegis").html((100 * gbf.output.unkown_aegis | 0) / 100), $(".display .bahahp_hp").html((100 * gbf.output.bahahp_hp | 0) / 100), $(".display .da").html((100 * gbf.output.da | 0) / 100), $(".display .m_da").html((100 * gbf.output.magna_da | 0) / 100), $(".display .ex_da").html((100 * gbf.output.unkown_da | 0) / 100), $(".display .ta").html((100 * gbf.output.ta | 0) / 100), $(".display .m_ta").html((100 * gbf.output.magna_ta | 0) / 100), $(".display .ex_ta").html((100 * gbf.output.unkown_ta | 0) / 100), $(".display .tec_list").html((100 * gbf.output.tec | 0) / 100 + "%"), $(".display .tec_exp").html((.5 * gbf.output.tec * 100 | 0) / 100), $(".display .m_tec").html((100 * gbf.output.magna_tec | 0) / 100 + "%"), $(".display .m_tec_exp").html((.5 * gbf.output.magna_tec * 100 | 0) / 100), $(".display .damage_data").html(gbf.number_format(0 | gbf.output.expected_damage)), $(".display .damage_data_disadv").html(gbf.number_format(0 | gbf.output.expected_damage_disadv)), $(".display .damage_tec").html(gbf.number_format(0 | gbf.output.damage_tec)), $(".display .damage_data_tec").html(gbf.number_format(0 | gbf.output.expected_damage_tec)), $(".display .sp_atk").html((100 * gbf.output.sp_atk | 0) / 100), $(".display .sp_limit").html((100 * gbf.output.sp_limit | 0) / 100), $(".display .magna_sp_atk").html((100 * gbf.output.magna_sp_atk | 0) / 100), $(".display .magna_sp_limit").html((100 * gbf.output.magna_sp_limit | 0) / 100), $(".display .buff_sp_atk").html((100 * gbf.output.buff_sp_atk | 0) / 100), $(".display .sp_coefficient").html((100 * gbf.output.sp_coefficient | 0) / 100), $(".display .sp_fixed").html((100 * gbf.output.sp_fixed | 0) / 100), $(".display .sp_damage").html(gbf.number_format(0 | gbf.output.sp_damage)), $(".display .sp_damage_disadv").html(gbf.number_format(0 | gbf.output.sp_damage_disadv)), 0 == gbf.output.whole && gbf.hp < 20 && $(".display .whole").html("<span class='ui-state-highlight' title='" + jQuery.i18n.prop("label_underhp").replace("$1", "20") + "'>0</span>"), gbf.output.total_attack_adv = gbf.number_format(0 | gbf.output.total_attack_adv), gbf.output.expected_damage_adv = gbf.number_format(0 | gbf.output.expected_damage_adv), gbf.output.expected_damage_adv_tec = gbf.number_format(0 | gbf.output.expected_damage_adv_tec), gbf.output.damage_adv_tec = gbf.number_format(0 | gbf.output.damage_adv_tec), gbf.output.sp_damage_adv = gbf.number_format(0 | gbf.output.sp_damage_adv), $("table.display .total_attack_adv").html(gbf.output.total_attack_adv), $(".display .damage_data_adv").html(gbf.output.expected_damage_adv), $(".display .damage_data_adv_tec").html(gbf.output.expected_damage_adv_tec), $(".display .damage_adv_tec").html(gbf.output.damage_adv_tec), $(".display .sp_damage_adv").html(gbf.output.sp_damage_adv), total_sp_atk_label = "<span class='seraphic' title='" + gbf.output.label_total_sp_atk + "'>" + (100 * gbf.output.total_sp_atk | 0) / 100 + "</span>", total_sp_limit_label = "<span class='seraphic' title='" + gbf.output.label_total_sp_limit + "'>" + (100 * gbf.output.total_sp_limit | 0) / 100 + "</span>", $(".display .total_sp_atk").html(total_sp_atk_label), $(".display .total_sp_limit").html(total_sp_limit_label)
		},
		setTargetElement: function() {
			var e = 1;
			new gbf.weapon(gbf.weapon_data[1].id).exists() && (e = new gbf.weapon(gbf.weapon_data[1].id).getElement());
			for (var a = 0; a < gbf.element_kind.length && a != e; a++);
			gbf.target_element = 0 | a
		},
		checkInput: function() {
			gbf.rank = 0 | $(".spinner[name=rank]").val(), gbf.rank < 0 && (gbf.rank = 1), $("#display_mode_attack:checked").val() ? ($(".prt-weapon-main-status").show(), $(".prt-weapon-sub-status").show()) : $("#display_mode_skill:checked").val() ? ($(".prt-weapon-main-skill-setting").show(), $(".prt-weapon-sub-skill-setting").show()) : $("#display_mode_skill_lv:checked").val() ? ($(".prt-weapon-main-status-setting").show(), $(".prt-weapon-sub-status-setting").show()) : $("#display_mode_quality:checked").val() && ($(".prt-weapon-main-quality-setting").show(), $(".prt-weapon-sub-quality-setting").show()), gbf.target_element = 0 | $(".radio.output-element :radio:checked").attr("data-element"), gbf.target_element < 0 && (gbf.target_element = 0);
			for (var e = 0; e < 2; e++) {
				gbf.weapon_sp[e].type = 0 | $("select[name=select-weapon" + (e + 1) + "]").val(), (gbf.weapon_sp[e].type < 0 || gbf.weapon_kind.length < gbf.weapon_sp[e].type) && (gbf.weapon_sp[e].type = 0);
				var a = 0 | $("select[name=select-zenith" + (e + 1) + "]").val();
				gbf.weapon_zenith[a] && (gbf.weapon_sp[e].zenith = a)
			}
			gbf.job_attack[0] = 0 | $(".spinner[name=job_attack]").val(), gbf.job_attack[0] < 0 && (gbf.job_attack[0] = 0), gbf.job_attack[1] = 0 | $(".spinner[name=job_attack_per]").val(), gbf.job_attack[1] < 0 && (gbf.job_attack[1] = 0), gbf.job_hp[0] = 0 | $(".spinner[name=job_hp]").val(), gbf.job_hp[0] < 0 && (gbf.job_hp[0] = 0), gbf.job_hp[1] = 0 | $(".spinner[name=job_hp_per]").val(), gbf.job_hp[1] < 0 && (gbf.job_hp[1] = 0), gbf.hp = 0 | $(".spinner[name=hp]").val(), (gbf.hp <= 0 || 100 < gbf.hp) && (gbf.hp = 100), gbf.turn = 0 | $(".spinner[name=turn]").val(), gbf.turn <= 0 && (gbf.turn = 1), gbf.summon_list[0].type = $(".select-menu[name=select-summon1]").val(), gbf.summon_label[gbf.summon_list[0].type] || (gbf.summon_list[0].type = "none"), gbf.summon_list[1].type = $(".select-menu[name=select-summon2]").val(), gbf.summon_label[gbf.summon_list[1].type] || (gbf.summon_list[1].type = "none"), gbf.summon_list[2].type = $(".select-menu[name=select-summon1-sub]").val(), gbf.summon_label[gbf.summon_list[2].type] || (gbf.summon_list[2].type = "none"), gbf.summon_list[3].type = $(".select-menu[name=select-summon2-sub]").val(), gbf.summon_label[gbf.summon_list[3].type] || (gbf.summon_list[3].type = "none"), gbf.summon_list[0].effect = 0 | $(".spinner[name=select-summon1-effect]").val(), gbf.summon_list[1].effect = 0 | $(".spinner[name=select-summon2-effect]").val(), gbf.summon_list[2].effect = 0 | $(".spinner[name=select-summon1-sub-effect]").val(), gbf.summon_list[3].effect = 0 | $(".spinner[name=select-summon2-sub-effect]").val(), gbf.arcarum_sub.type = $(".select-menu[name=select-summon3]").val(), gbf.summon2_label[gbf.arcarum_sub.type] || (gbf.arcarum_sub.type = "none"), gbf.summon_attack = 0 | $(".spinner[name=summon_attack]").val(), gbf.summon_attack < 0 && (gbf.summon_attack = 0), gbf.summon_hp = 0 | $(".spinner[name=summon_hp]").val(), gbf.summon_hp < 0 && (gbf.summon_hp = 0), gbf.airship_attribute = 0 | $(".spinner[name=airship_attribute]").val(), gbf.airship_attribute < 0 && (gbf.airship_attribute = 0), gbf.zenith_element = 0 | $(".spinner[name=zenith_element]").val(), gbf.zenith_element < 0 && (gbf.zenith_element = 0), gbf.zenith_special = 0 | $(".spinner[name=zenith_special]").val(), gbf.zenith_special < 0 && (gbf.zenith_special = 0);
			var t = 0 | $(".select-menu[name=select-element]").val();
			gbf.element_kind[gbf.selected_element] ? t != gbf.selected_element && (gbf.selected_element = t, gbf.uiUpdateWeaponListTab()) : gbf.selected_element = 0;
			for (var s = 1; s <= 10; s++) {
				var l = ".prt-weapon-sub",
					n = (1 == s && (l = ".prt-weapon-main"), $(l + "-status-setting[set_num=" + s + "]")),
					n = (gbf.weapon_data[s].lv = 0 | n.find(".weapon_lv").val(), gbf.weapon_data[s].skill_lv = 0 | n.find(".weapon_skill_lv").val(), $(l + "-skill-setting[set_num=" + s + "]"));
				gbf.weapon_data[s].skill1_id = n.find("select[name=skill1]").val(), gbf.weapon_data[s].skill1_element = 0 | n.find("select[name=skill1_element]").val(), gbf.weapon_data[s].skill2_id = n.find("select[name=skill2]").val(), gbf.weapon_data[s].skill2_element = 0 | n.find("select[name=skill2_element]").val(), gbf.weapon_skill_setting[gbf.weapon_data[s].skill1_id] || (gbf.weapon_data[s].skill1_id = "none"), gbf.weapon_skill_setting[gbf.weapon_data[s].skill2_id] || (gbf.weapon_data[s].skill2_id = "none"), gbf.weapon_data[s].quality = 0 | $(".btn-weapon[set_num=" + s + "]").find(".weapon-quality").val(), (gbf.weapon_data[s].quality < 0 || 99 < gbf.weapon_data[s].quality) && (gbf.weapon_data[s].quality = 0)
			}
		},
		setInput: function() {
			$(".spinner[name=rank]").val(gbf.rank), $(".output-element :radio:checked").prop("checked", !1), $("#output-element" + gbf.target_element).prop("checked", !0), $(".output-element").buttonset("refresh", !0), $(".select-menu[name=select-summon1]").val(gbf.summon_list[0].type), $(".select-menu[name=select-summon2]").val(gbf.summon_list[1].type), $(".select-menu[name=select-summon1]").selectmenu("refresh"), $(".select-menu[name=select-summon2]").selectmenu("refresh"), $(".select-menu[name=select-summon1-sub]").val(gbf.summon_list[2].type), $(".select-menu[name=select-summon2-sub]").val(gbf.summon_list[3].type), $(".select-menu[name=select-summon1-sub]").selectmenu("refresh"), $(".select-menu[name=select-summon2-sub]").selectmenu("refresh"), $(".spinner[name=select-summon1-effect]").val(0 | gbf.summon_list[0].effect), $(".spinner[name=select-summon2-effect]").val(0 | gbf.summon_list[1].effect), $(".spinner[name=select-summon1-sub-effect]").val(0 | gbf.summon_list[2].effect), $(".spinner[name=select-summon2-sub-effect]").val(0 | gbf.summon_list[3].effect), $(".select-menu[name=select-summon3]").val(gbf.arcarum_sub.type), $(".select-menu[name=select-summon3]").selectmenu("refresh"), $(".spinner[name=airship_attribute]").val(0 | gbf.airship_attribute), $(".spinner[name=zenith_element]").val(0 | gbf.zenith_element), $(".spinner[name=zenith_special]").val(0 | gbf.zenith_special);
			for (var e = 0; e < 2; e++) $("select[name=select-weapon" + (e + 1) + "]").val(0 | gbf.weapon_sp[e].type), $("select[name=select-weapon" + (e + 1) + "]").selectmenu("refresh", !0), $("select[name=select-zenith" + (e + 1) + "]").val(0 | gbf.weapon_sp[e].zenith), $("select[name=select-zenith" + (e + 1) + "]").selectmenu("refresh", !0);
			$("#weapon-icon1").attr("class", "ico-weapon-s" + gbf.weapon_sp[0].type), $("#weapon-icon2").attr("class", "ico-weapon-s" + gbf.weapon_sp[1].type), $(".spinner[name=job_attack]").val(0 | gbf.job_attack[0]), $(".spinner[name=job_attack_per]").val(0 | gbf.job_attack[1]), $(".spinner[name=job_hp]").val(0 | gbf.job_hp[0]), $(".spinner[name=job_hp_per]").val(0 | gbf.job_hp[1]), $(".spinner[name=hp]").val(0 | gbf.hp), $(".spinner[name=turn]").val(0 | gbf.turn), $(".spinner[name=summon_attack]").val(0 | gbf.summon_attack), $(".spinner[name=summon_hp]").val(0 | gbf.summon_hp), $(".select-menu[name=select-element]").val(gbf.selected_element), $(".select-menu[name=select-element]").selectmenu("refresh", !0);
			for (var a = 1; a <= 10; a++) {
				gbf.weapon_data[a].id || (gbf.weapon_data[a] = {
					id: WEAPON_ID_NULL,
					lv: 1,
					skill_lv: 1,
					quality: 0,
					atk: 0,
					hp: 0,
					skill1_id: "none",
					skill1_element: -1,
					skill2_id: "none",
					skill2_element: -1,
					skill3_id: "none",
					skill3_element: -1
				});
				var t = 0 | gbf.weapon_data[a].id,
					s = $(".btn-weapon[set_num=" + a + "]"),
					l = s.find("img"),
					l = (l.attr("title") != t && (l.hasClass("img-weapon-main") ? l.attr("src", "javaScript:huijiToolbox.getImageUrl('ls_%d_01.jpg')".replace("%d", t)) : l.attr("src", "javaScript:huijiToolbox.getImageUrl('M_%d_01.jpg')".replace("%d", t)), l.attr("title", t).attr("data-id", t)), ".prt-weapon-sub"),
					t = (1 == a && (l = ".prt-weapon-main"), gbf.weapon_data[a].id),
					t = new gbf.weapon(t).getMaxLv(),
					t = (gbf.weapon_data[a].lv > t && (gbf.weapon_data[a].lv = t), $(l + "-status-setting[set_num=" + a + "]")),
					t = (t.find(".weapon_lv").val(0 | gbf.weapon_data[a].lv), t.find(".weapon_skill_lv").val(0 | gbf.weapon_data[a].skill_lv), $(l + "-skill-setting[set_num=" + a + "]"));
				t.find("select[name=skill1]").val(gbf.weapon_data[a].skill1_id), t.find("select[name=skill1_element]").val(0 | gbf.weapon_data[a].skill1_element), t.find("select[name=skill2]").val(gbf.weapon_data[a].skill2_id), t.find("select[name=skill2_element]").val(0 | gbf.weapon_data[a].skill2_element), s.find(".prt-skill").empty(), s.find(".prt-skill").append($("<div />", {
					text: jQuery.i18n.prop(gbf.weapon_data[a].skill1_id)
				}).css("color", gbf.element_kind_color[0 | gbf.weapon_data[a].skill1_element]), $("<div />", {
					text: jQuery.i18n.prop(gbf.weapon_data[a].skill2_id)
				}).css("color", gbf.element_kind_color[0 | gbf.weapon_data[a].skill2_element]), $("<div />", {
					text: jQuery.i18n.prop(gbf.weapon_data[a].skill3_id)
				}).css("color", gbf.element_kind_color[0 | gbf.weapon_data[a].skill3_element])), s.find(".weapon-quality").val(0 | gbf.weapon_data[a].quality), 0 < gbf.weapon_data[a].quality ? s.find(".prt-quality").html("+" + gbf.weapon_data[a].quality) : s.find(".prt-quality").html(""), -1 != gbf.weapon_data[a].lv && gbf.updateWeaponStatus(a), s.find(".prt-atk").html(gbf.weapon_data[a].atk);
				$(l + "-input[set_num=" + a + "]").find("input[name=weapon_attack]").val(gbf.weapon_data[a].atk);
				t = $(".prt-weapon-main-status[set_num=" + a + "],.prt-weapon-sub-status[set_num=" + a + "]");
				t.find(".txt-hp-value").html(gbf.weapon_data[a].hp).attr("title", gbf.weapon_data[a].hp), t.find(".txt-atk-value").html(gbf.weapon_data[a].atk).attr("title", gbf.weapon_data[a].atk)
			}
		},
		updateSaveList: function() {
			var e = gbf.loadData(),
				a = $("select[name=save_list]");
			a.html("");
			for (var t = 0; t < e.length; t++) a.append($("<option>").val(t).text(e[t].label))
		},
		export: function() {
			console.log("# Data Export");
			var e = gbf.loadData(),
				e = JSON.stringify(e);
			$("textarea[name=storage-data]").val(e)
		},
		import: function() {
			console.log("# Data Import");
			var e = $("textarea[name=storage-data]").val();
			try {
				var a = JSON.parse(e);
				gbf.saveData(a), gbf.updateSaveList()
			} catch (e) {
				alert("invalid data")
			}
		},
		number_format: function(e) {
			return String(e).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
		},
		uiInitWidgetAction: function() {
			$(".spinner").on("spinchange", function() {
				gbf.checkInput(), gbf.setInput(), gbf.update()
			}), $(".select-menu").on("selectmenuchange", function() {
				gbf.checkInput(), gbf.setInput(), gbf.update()
			}), $("input[name=weapon_attack]").on("change", function(e, a) {
				var t = $(e.target).parent().parent().attr("set_num"),
					e = 0 | $(e.target).val(),
					e = (gbf.updateWeaponLv(t, e), ".prt-weapon-sub");
				1 == t && (e = ".prt-weapon-main"), $(e + "-status-setting[set_num=" + t + "]").find(".weapon_lv").val(0 | gbf.weapon_data[t].lv), gbf.checkInput(), gbf.setInput(), gbf.update()
			}), $(".weapon_skill_stage").on("change", function(e, a) {
				var t = $(e.target).parent().parent().attr("set_num"),
					e = 0 | $(e.target).val();
				1 != e && 2 != e || (gbf.uiSetSkill(t, e), gbf.setInput(), gbf.update())
			}), $(".weapon_lv").on("change", function(e, a) {
				gbf.checkInput();
				var e = $(e.target).parent().parent().attr("set_num"),
					t = gbf.weapon_data[e].id,
					t = new gbf.weapon(t).getMaxLv();
				gbf.weapon_data[e].lv > t && (gbf.weapon_data[e].lv = t), gbf.updateWeaponSkill(e), gbf.setInput(), gbf.update()
			}), $(".weapon_skill_lv, .skill-element-select, .skill-select, .weapon-quality").on("change", function() {
				gbf.checkInput(), gbf.setInput(), gbf.update()
			}), $("input[name=output-element]").click(function() {
				gbf.checkInput(), gbf.setInput(), gbf.update()
			}), $(".data-remove").click(function(e, a) {
				e = 0 | $(e.target).attr("set_num");
				e && (gbf.weapon_data[e] = {
					id: WEAPON_ID_NULL,
					lv: 1,
					skill_lv: 1,
					quality: 0,
					atk: 0,
					hp: 0,
					skill1_id: "none",
					skill1_element: -1,
					skill2_id: "none",
					skill2_element: -1,
					skill3_id: "none",
					skill3_element: -1
				}), gbf.setInput(), gbf.update()
			}), $(".data-shortcut").click(function(e, a) {
				$("#dialog").dialog("option", "title", jQuery.i18n.prop("dialog_shortcut")), $("#dialog2").dialog("close");
				e = 0 | $(e.target).attr("set_num");
				if (0 == e) return !1;
				var t = gbf.weapon_data[e].id,
					s = new gbf.weapon(t).getMaxLv();
				$("#dialog").html(""), "sr" !== new gbf.weapon(t).getRare() ? ($("#dialog").append($("<button>").addClass("lv-shortcut").attr("data-val", 40).attr("set_num", e).html("[★0] Lv.40")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 60).attr("set_num", e).html("[★1] Lv.60")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 80).attr("set_num", e).html("[★2] Lv.80")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 100).attr("set_num", e).html("[★3] Lv.100")), 100 < s && $("#dialog").append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 120).attr("set_num", e).html("[★4] Lv.120")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 150).attr("set_num", e).html("[★4] Lv.150")), 150 < s && $("#dialog").append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 200).attr("set_num", e).html("[★4] Lv.200"))) : ($("#dialog").append($("<button>").addClass("lv-shortcut").attr("data-val", 30).attr("set_num", e).html("[★0] Lv.30")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 45).attr("set_num", e).html("[★1] Lv.45")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 60).attr("set_num", e).html("[★2] Lv.60")).append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 75).attr("set_num", e).html("[★3] Lv.75")), 100 < s && $("#dialog").append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 120).attr("set_num", e).html("[★4] Lv.120"))), $("#dialog button").button(), $("#dialog button").click(function(e, a) {
					var t;
					e = $(e.target).hasClass("lv-shortcut") ? (t = 0 | $(e.target).attr("set_num"), 0 | $(e.target).attr("data-val")) : (t = 0 | $(e.target).parent().attr("set_num"), 0 | $(e.target).parent().attr("data-val")), gbf.weapon_data[t].lv = e, gbf.updateWeaponSkill(t), gbf.setInput(), gbf.update(), $("#dialog").dialog("close")
				}), $("#dialog").dialog("open")
			}), $(".data-skill-reset").click(function(e, a) {
				$("#dialog").dialog("option", "title", jQuery.i18n.prop("dialog_skill_reset")), $("#dialog2").dialog("close");
				e = 0 | $(e.target).attr("set_num");
				if (0 == e) return !1;
				var t = gbf.weapon_data[e].id,
					s = new gbf.weapon(t).getMaxLv();
				$("#dialog").empty(), $("#dialog").append($("<button>").addClass("lv-shortcut").attr("data-val", -1).attr("set_num", e).html("スキル設定")), $("#dialog").append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 1).attr("set_num", e).html("3凸")), "sr" !== new gbf.weapon(t).getRare() && 100 < s && $("#dialog").append($("<br>")).append($("<button>").addClass("lv-shortcut").attr("data-val", 2).attr("set_num", e).html("4凸")), $("#dialog button").button(), $("#dialog button").click(function(e, a) {
					var t; - 1 == (e = $(e.target).hasClass("lv-shortcut") ? (t = 0 | $(e.target).attr("set_num"), 0 | $(e.target).attr("data-val")) : (t = 0 | $(e.target).parent().attr("set_num"), 0 | $(e.target).parent().attr("data-val"))) ? (gbf.openSkillWidget(t), $("#dialog").dialog("close")) : 1 != e && 2 != e || (gbf.uiSetSkill(t, e), gbf.setInput(), gbf.update(), $("#dialog").dialog("close"))
				}), $("#dialog").dialog("open")
			}), $("input[name=display_mode]").click(function() {
				$(".prt-weapon-main-skill-setting").hide(), $(".prt-weapon-sub-skill-setting").hide(), $(".prt-weapon-main-status").hide(), $(".prt-weapon-sub-status").hide(), $(".prt-weapon-main-status-setting").hide(), $(".prt-weapon-sub-status-setting").hide(), $(".prt-weapon-main-input").hide(), $(".prt-weapon-sub-input").hide(), $(".prt-close").hide(), $(".prt-atk").hide(), $(".prt-skill").hide(), $(".prt-skill2").hide(), $(".prt-quality").hide(), $(".prt-quality-input").hide(), $("#display_mode_attack:checked").val() ? ($(".prt-weapon-main-status").show(), $(".prt-weapon-sub-status").show(), $(".prt-quality").show()) : $("#display_mode_skill:checked").val() ? ($(".prt-weapon-main-skill-setting").show(), $(".prt-weapon-sub-skill-setting").show(), $(".prt-close").show(), $(".prt-atk").show(), $(".prt-skill").show(), $(".prt-skill2").show(), $(".prt-quality-input").show()) : $("#display_mode_skill_lv:checked").val() ? ($(".prt-weapon-main-status-setting").show(), $(".prt-weapon-sub-status-setting").show(), $(".prt-close").show(), $(".prt-atk").show(), $(".prt-skill").show(), $(".prt-skill2").show(), $(".prt-quality-input").show()) : $("#display_mode_input:checked").val() && ($(".prt-weapon-main-input").show(), $(".prt-weapon-sub-input").show(), $(".prt-close").show(), $(".prt-atk").show(), $(".prt-skill").show(), $(".prt-skill2").show(), $(".prt-quality-input").show())
			}), $("input[name=drag_mode]").click(function() {
				$("#drag_mode_copy:checked").val() ? gbf.drag_mode = MODE_COPY : $("#drag_mode_exchange:checked").val() && (gbf.drag_mode = MODE_EXCHANGE)
			}), $("input[name=save]").click(function() {
				var e = $("input[name=save_label]").val(),
					e = gbf.initSaveLabel(e);
				gbf.save(e, -1), gbf.updateSaveList()
			}), $("input[name=update]").click(function() {
				var e = $("input[name=save_label]").val(),
					e = gbf.initSaveLabel(e),
					a = $("select[name=save_list]").val();
				null !== a ? (gbf.save(e, a), gbf.updateSaveList(), $("select[name=save_list]").val(a)) : alert("更新するデータを選択してください")
			}), $("input[name=load]").click(function() {
				var e = $("select[name=save_list]").val();
				if (null !== e) {
					e = gbf.load(e), e = ($("input[name=save_label]").val(e.label), gbf.dataDecode(e.value)), e = (gbf.loadInput(e), gbf.setTargetElement(), gbf.setInput(), gbf.update(), gbf.setTemp(), new gbf.weapon(gbf.weapon_data[1].id));
					if (e.exists()) {
						element = e.getElement();
						for (var a = 0; a < gbf.element_kind.length && a != element; a++);
						a && gbf.selected_element != a && (gbf.selected_element = a, $(".select-menu[name=select-element]").val(a), $(".select-menu[name=select-element]").selectmenu("refresh"), gbf.uiUpdateWeaponListTab())
					}
				} else alert("読み込むデータを選択してください")
			}), $("input[name=remove]").click(function() {
				var e = $("select[name=save_list]").val();
				null !== e ? (gbf.remove(e), gbf.updateSaveList()) : alert("削除するデータを選択してください")
			}), $("input[name=export]").click(function() {
				gbf.export()
			}), $("input[name=import]").click(function() {
				gbf.import()
			}), $("#display_mode_skill_lv").click(), $("#drag_mode_exchange").click(), $(".select-weapons").on("tabsbeforeactivate", function(e, a) {
				a = a.newPanel.attr("id");
				gbf.uiUpdateWeaponListTab(a)
			})
		},
		openSkillWidget: function(e) {
			$("#dialog2").dialog("option", "title", jQuery.i18n.prop("dialog_skill_reset")), $("#dialog2").dialog("open"), $("#dialog2").empty();
			for (var a = 1; a <= 3; a++) $("#dialog2").append($("<div />", {
				class: "prt-skill"
			}).append($("<select />", {
				class: "skill-element-select skill-element-window",
				name: "skill%d_window_element".replace("%d", a),
				"data-set_num": e,
				"data-skill_num": a
			}).append($("<option />", {
				value: -1,
				text: "-"
			}))).append($("<select />", {
				class: "skill-select skill-select-window",
				name: "skill%d_window".replace("%d", a),
				"data-set_num": e,
				"data-skill_num": a
			})));
			for (var t, s = 0; s < gbf.element_kind.length; s++) $("#dialog2 .skill-element-window").append($("<option>").val(s).text(jQuery.i18n.prop(gbf.element_kind_label[s])));
			for (t in gbf.weapon_skill_setting) $("#dialog2 .skill-select-window").append($("<option>").val(t).text(jQuery.i18n.prop(t)));
			$("#dialog2 select[name=skill1_window]").val(gbf.weapon_data[e].skill1_id), $("#dialog2 select[name=skill1_window_element]").val(0 | gbf.weapon_data[e].skill1_element), $("#dialog2 select[name=skill2_window]").val(gbf.weapon_data[e].skill2_id), $("#dialog2 select[name=skill2_window_element]").val(0 | gbf.weapon_data[e].skill2_element), $("#dialog2 select[name=skill3_window]").val(gbf.weapon_data[e].skill3_id), $("#dialog2 select[name=skill3_window_element]").val(0 | gbf.weapon_data[e].skill3_element), $(".skill-element-window, .skill-select-window").on("change", function() {
				var e = $(this).data("set_num"),
					a = $(this).data("skill_num"),
					t = $(this).val(),
					s = "";
				$(this).hasClass("skill-element-window") ? (s = "skill%d_element".replace("%d", a), t |= 0) : $(this).hasClass("skill-select-window") && (s = "skill%d_id".replace("%d", a)), console.log([e, s, t]), gbf.weapon_data[e][s] = t, gbf.setInput(), gbf.update()
			})
		},
		initHtml: function() {
			gbf.initLeftContent(), gbf.initWindowContent(), gbf.initCenterContent()
		},
		initWindowContent: function() {
			$("body").append($("<div />", {
				id: "dialog2",
				title: "Skill Setting"
			}))
		},
		initCenterContent: function() {
			$(".center-content .tabs ul li:eq(0)").after($("<li>").append($("<a>", {
				href: "#tabs-limit",
				text: "総合データ"
			}))), $(".center-content .tabs").append($("<div />", {
				class: "main-tabs",
				id: "tabs-limit"
			}).append($("<table />", {
				class: "ui-state-default display",
				border: 0
			}).append($("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "上限・与ダメ",
				colspan: 6
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "ダメ上限"
			}), $("<td />", {
				class: "limitover_damage",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "アビ上限"
			}), $("<td />", {
				class: "limitover_ability",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "奥義上限"
			}), $("<td />", {
				class: "limitover_sp",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "与ダメ"
			}), $("<td />", {
				class: "damageadd",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "アビ与ダメ"
			}), $("<td />", {
				class: "abilitydamageadd",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "奥義与ダメ"
			}), $("<td />", {
				class: "spdamageadd",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "全般",
				colspan: 6
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "攻刃"
			}), $("<td />", {
				class: "boost",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "背水"
			}), $("<td />", {
				class: "enmity",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "渾身"
			}), $("<td />", {
				class: "whole",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "M攻刃"
			}), $("<td />", {
				class: "magna_boost",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "M背水"
			}), $("<td />", {
				class: "magna_enmity",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "M渾身"
			}), $("<td />", {
				class: "magna_whole",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "EX攻刃"
			}), $("<td />", {
				class: "unkown",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "EX背水"
			}), $("<td />", {
				class: "unkown_enmity",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "EX渾身"
			}), $("<td />", {
				class: "unkown_whole",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "DA"
			}), $("<td />", {
				class: "da",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "M DA"
			}), $("<td />", {
				class: "m_da",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "EX DA"
			}), $("<td />", {
				class: "ex_da",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "TA"
			}), $("<td />", {
				class: "ta",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "M TA"
			}), $("<td />", {
				class: "m_ta",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "EX TA"
			}), $("<td />", {
				class: "ex_ta",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "合計DA"
			}), $("<td />", {
				class: "final_da",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "合計TA"
			}), $("<td />", {
				class: "final_ta",
				text: 0
			}), $("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "-"
			}), $("<td />", {
				class: "",
				text: 0
			})))))
		},
		initLeftContent: function() {
			$(".left-content").html(""), $(".left-content").append($("<div />", {
				id: "basic_panel",
				class: "tabs"
			}), $("<div />", {
				id: "result_panel",
				class: "tabs"
			})), $("#basic_panel").append($("<ul />").append($("<li />").append($("<a />", {
				href: "#tabs-baseinfo",
				text: jQuery.i18n.prop("label_baseinfo")
			})), $("<li />").append($("<a />", {
				href: "#tabs-extrainfo",
				text: jQuery.i18n.prop("label_extrainfo")
			}))), $("<div />", {
				id: "tabs-baseinfo",
				class: "left-tab"
			}), $("<div />", {
				id: "tabs-extrainfo",
				class: "left-tab"
			})), $("#tabs-baseinfo").append($("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "tooltip base_attack_attr",
				title: "Rank上昇毎に攻撃力、HPが上昇",
				text: "Rank"
			}), $("<input />", {
				class: "spinner",
				name: "rank",
				value: 1
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "base_attack_attr",
				text: "得意武器"
			}), $("<select />", {
				class: "select-menu select-weapon",
				name: "select-weapon1",
				id: "select-weapon1"
			}), $("<select />", {
				class: "select-menu select-weapon",
				name: "select-weapon2",
				id: "select-weapon2"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "tooltip base_attack_attr",
				text: "ジョブ攻撃",
				title: "ジョブボーナス、ゼニス「攻撃力」を合計した数値。|ジョブボーナスは編成画面のボーナスから確認可能|攻撃力+○%のデータはジョブ補正に入力|<img src='./images/tooltip/job_bonus.png'>"
			}), $("<input />", {
				class: "spinner half-spinner",
				name: "job_attack",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "tooltip base_attack_attr",
				text: "ジョブ補正",
				title: "編成画面のボーナスから確認可能|攻撃力+○%のデータを入力|<img src='./images/tooltip/job_bonus.png'>"
			}), $("<input />", {
				class: "spinner half-spinner",
				name: "job_attack_per",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "tooltip",
				title: "背水・渾身スキル計算用|それ以外は変更不要",
				text: "HP/MAX HP"
			}), $("<input />", {
				class: "spinner half-spinner",
				name: "hp",
				value: 100
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				class: "tooltip",
				title: "進境/先制用",
				text: "ターン数"
			}), $("<input />", {
				class: "spinner half-spinner",
				name: "turn",
				value: 1
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "召喚石攻撃",
				class: "tooltip base_attack_attr",
				title: "編成画面の召喚石タブを選択した時に表示される|総合攻撃力の値|<img src='./images/tooltip/summon_attack.png'>"
			}), $("<input />", {
				class: "spinner",
				name: "summon_attack",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "召喚石"
			}), $("<select />", {
				class: "select-menu select-summon1",
				name: "select-summon1"
			}), $("<input />", {
				class: "spinner short-spinner",
				name: "select-summon1-effect",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<select />", {
				class: "select-menu select-summon1",
				name: "select-summon1-sub"
			}), $("<input />", {
				class: "spinner short-spinner",
				name: "select-summon1-sub-effect",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "フレ召喚石"
			}), $("<select />", {
				class: "select-menu select-summon2",
				name: "select-summon2"
			}), $("<input />", {
				class: "spinner short-spinner",
				name: "select-summon2-effect",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<select />", {
				class: "select-menu select-summon2",
				name: "select-summon2-sub"
			}), $("<input />", {
				class: "spinner short-spinner",
				name: "select-summon2-sub-effect",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "アーカルム石"
			}), $("<select />", {
				class: "select-menu select-summon3",
				name: "select-summon3"
			}))), $("#tabs-extrainfo").append($("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "団属性補正"
			}), $("<input />", {
				class: "spinner",
				name: "airship_attribute",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "得意武器LB"
			}), $("<select />", {
				class: "select-menu select-weapon",
				name: "select-zenith2",
				id: "select-zenith2"
			}), $("<select />", {
				class: "select-menu select-weapon",
				name: "select-zenith1",
				id: "select-zenith1"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "LB属性攻撃"
			}), $("<input />", {
				class: "spinner",
				name: "zenith_element",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "LB奥義ダメ"
			}), $("<input />", {
				class: "spinner",
				name: "zenith_special",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "JOB HP"
			}), $("<input />", {
				class: "spinner",
				name: "job_hp",
				value: 0
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "JOB HP(%)"
			}), $("<input />", {
				class: "spinner",
				name: "job_hp_per",
				value: 0
			}), $("<span />", {
				text: "%"
			})), $("<div />", {
				class: "option-box"
			}).append($("<label />", {
				text: "召喚石 HP"
			}), $("<input />", {
				class: "spinner",
				name: "summon_hp",
				value: 0
			}))), $("#result_panel").append($("<ul />").append($("<li />").append($("<a />", {
				href: "#tabs-result",
				text: jQuery.i18n.prop("label_result")
			})), $("<li />").append($("<a />", {
				href: "#tabs-result2",
				text: jQuery.i18n.prop("label_result_da_ta")
			})), $("<li />").append($("<a />", {
				href: "#tabs-result4",
				text: jQuery.i18n.prop("label_result_ex_sp")
			}))), $("<div />", {
				id: "tabs-result",
				class: "left-tab"
			}), $("<div />", {
				id: "tabs-result2",
				class: "left-tab"
			}), $("<div />", {
				id: "tabs-result4",
				class: "left-tab"
			})), $("#tabs-result").append($("<div />", {
				class: "radio output-element"
			}).append($("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element0",
				"data-element": "0",
				checked: "checked"
			}), $("<label />", {
				for: "output-element0",
				text: jQuery.i18n.prop("FIRE")
			}), $("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element1",
				"data-element": "1"
			}), $("<label />", {
				for: "output-element1",
				text: jQuery.i18n.prop("WATER")
			}), $("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element2",
				"data-element": "2"
			}), $("<label />", {
				for: "output-element2",
				text: jQuery.i18n.prop("EARTH")
			}), $("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element3",
				"data-element": "3"
			}), $("<label />", {
				for: "output-element3",
				text: jQuery.i18n.prop("WIND")
			}), $("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element4",
				"data-element": "4"
			}), $("<label />", {
				for: "output-element4",
				text: jQuery.i18n.prop("LIGHT")
			}), $("<input />", {
				type: "radio",
				name: "output-element",
				id: "output-element5",
				"data-element": "5"
			}), $("<label />", {
				for: "output-element5",
				text: jQuery.i18n.prop("DARK")
			})), $("<table />", {
				class: "ui-state-default display",
				border: 0
			}).append($("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 4,
				text: "表示攻撃力"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "base_attack",
				colspan: 4,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: jQuery.i18n.prop("atk")
			}), $("<th />", {
				text: jQuery.i18n.prop("backwater")
			}), $("<th />", {
				text: jQuery.i18n.prop("atk_m")
			}), $("<th />", {
				text: jQuery.i18n.prop("backwater_m")
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "boost",
				text: 0
			}), $("<td />", {
				class: "enmity",
				text: 0
			}), $("<td />", {
				class: "magna_boost",
				text: 0
			}), $("<td />", {
				class: "magna_enmity",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: jQuery.i18n.prop("atk_a")
			}), $("<th />", {
				text: jQuery.i18n.prop("backwater_a")
			}), $("<th />", {
				text: jQuery.i18n.prop("whole")
			}), $("<th />", {
				text: jQuery.i18n.prop("whole_m")
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "unkown",
				text: 0
			}), $("<td />", {
				class: "unkown_enmity",
				text: 0
			}), $("<td />", {
				class: "whole",
				text: 0
			}), $("<td />", {
				class: "magna_whole",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "属性"
			}), $("<td />", {
				class: "element-set",
				colspan: 3
			}).append($("<span />", {
				class: "element",
				text: 0
			}), " (+", $("<span />", {
				class: "turn_element",
				text: 0
			}), ")")), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 1,
				text: ""
			}), $("<th />", {
				colspan: 2,
				text: "予測ダメージ"
			}), $("<th />", {
				colspan: 1,
				text: "減衰込"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "通常"
			}), $("<td />", {
				class: "total_attack",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "total_attack_restrected",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "有利"
			}), $("<td />", {
				class: "total_attack_adv",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "total_attack_adv_restrected",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "不利"
			}), $("<td />", {
				class: "total_attack_disadv",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "total_attack_disadv_restrected",
				colspan: 1,
				text: 0
			})))), $("#tabs-result2").append($("<table />", {
				class: "ui-state-default display",
				border: 0
			}).append($("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 2,
				text: "表示HP"
			}), $("<th />", {
				colspan: 2,
				text: "推定HP"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "base_hp",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "result_hp",
				colspan: 2,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "守護"
			}), $("<th />", {
				text: "M守護"
			}), $("<th />", {
				text: "EX守護"
			}), $("<th />", {
				text: "ﾊﾞﾊHP"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "aegis",
				text: 0
			}), $("<td />", {
				class: "m_aegis",
				text: 0
			}), $("<td />", {
				class: "ex_aegis",
				text: 0
			}), $("<td />", {
				class: "bahahp_hp",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "武器DA率",
				colspan: 2
			}), $("<th />", {
				text: "武器TA率",
				colspan: 2
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "final_da",
				text: 0,
				colspan: 2
			}), $("<td />", {
				class: "final_ta",
				text: 0,
				colspan: 2
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "通常技巧"
			}), $("<th />", {
				text: "M技巧"
			}), $("<th />", {
				text: "合計発動率",
				colspan: 2
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "tec_list",
				text: 0
			}), $("<td />", {
				class: "m_tec",
				text: 0
			}), $("<td />", {
				class: "final_tec",
				text: 0,
				colspan: 2
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 1,
				text: ""
			}), $("<th />", {
				colspan: 2,
				text: "×技巧×連撃"
			}), $("<th />", {
				colspan: 1,
				text: "×技巧"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "通常"
			}), $("<td />", {
				class: "expected_damage_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_tec",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "有利"
			}), $("<td />", {
				class: "expected_damage_adv_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_adv_tec",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "不利"
			}), $("<td />", {
				class: "expected_damage_disadv_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_disadv_tec",
				colspan: 1,
				text: 0
			})))), $("#tabs-result3").append($("<table />", {
				class: "ui-state-default display",
				border: 0
			}).append($("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "技巧発動率",
				colspan: 3
			}), $("<th />", {
				text: "期待値"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "tec_list",
				text: 0,
				colspan: 3
			}), $("<td />", {
				class: "tec_exp",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				text: "M技巧発動率",
				colspan: 3
			}), $("<th />", {
				text: "期待値"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "m_tec",
				text: 0,
				colspan: 3
			}), $("<td />", {
				class: "m_tec_exp",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 1,
				text: ""
			}), $("<th />", {
				colspan: 2,
				text: "×技巧×連撃"
			}), $("<th />", {
				colspan: 1,
				text: "×技巧"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "通常"
			}), $("<td />", {
				class: "expected_damage_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_tec",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "有利"
			}), $("<td />", {
				class: "expected_damage_adv_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_adv_tec",
				colspan: 1,
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "不利"
			}), $("<td />", {
				class: "expected_damage_disadv_tec_multi",
				colspan: 2,
				text: 0
			}), $("<td />", {
				class: "expected_damage_disadv_tec",
				colspan: 1,
				text: 0
			})))), $("#tabs-result4").append($("<table />", {
				class: "ui-state-default display",
				border: 0
			}).append($("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 2,
				text: "通常奥義"
			}), $("<th />", {
				colspan: 2,
				text: "M奥義"
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 1,
				text: "倍率"
			}), $("<th />", {
				colspan: 1,
				text: "上限上昇"
			}), $("<th />", {
				colspan: 1,
				text: "倍率"
			}), $("<th />", {
				colspan: 1,
				text: "上限上昇"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "sp_atk",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "sp_limit",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "magna_sp_atk",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "magna_sp_limit",
				text: 0,
				colspan: 1
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 2,
				text: "バフ"
			}), $("<th />", {
				colspan: 2,
				text: "合計"
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 1,
				text: "倍率"
			}), $("<th />", {
				colspan: 1,
				text: "上限上昇"
			}), $("<th />", {
				colspan: 1,
				text: "倍率"
			}), $("<th />", {
				colspan: 1,
				text: "上限上昇"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "buff_sp_atk",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "buff_sp_limit",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "total_sp_atk",
				text: 0,
				colspan: 1
			}), $("<td />", {
				class: "total_sp_limit",
				text: 0,
				colspan: 1
			})), $("<tr />", {
				class: "ui-widget-header ui-state-default"
			}).append($("<th />", {
				colspan: 4,
				text: "メイン武器効果"
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<td />", {
				class: "ui-widget-header ui-state-default",
				text: "奥義倍率",
				colspan: 1
			}), $("<td />", {
				class: "sp_coefficient",
				text: 0
			}), $("<td />", {
				class: "ui-widget-header ui-state-default",
				text: "固定値",
				colspan: 1
			}), $("<td />", {
				class: "sp_fixed",
				text: 0
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "通常",
				colspan: 1
			}), $("<td />", {
				class: "sp_damage",
				text: 0,
				colspan: 3
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "有利",
				colspan: 1
			}), $("<td />", {
				class: "sp_damage_adv",
				text: 0,
				colspan: 3
			})), $("<tr />", {
				class: "ui-widget-content"
			}).append($("<th />", {
				class: "ui-widget-header ui-state-default",
				text: "不利",
				colspan: 1
			}), $("<td />", {
				class: "sp_damage_disadv",
				text: 0,
				colspan: 3
			}))))
		},
		dataEncode: function() {
			for (var e = [], a = 1; a <= 10; a++) e.push([gbf.weapon_data[a].id, gbf.weapon_data[a].lv, gbf.weapon_data[a].skill_lv, gbf.weapon_data[a].quality, gbf.weapon_data[a].atk, gbf.weapon_data[a].hp, gbf.weapon_data[a].skill1_id, gbf.weapon_data[a].skill1_element, gbf.weapon_data[a].skill2_id, gbf.weapon_data[a].skill2_element, gbf.weapon_data[a].skill3_id, gbf.weapon_data[a].skill3_element]);
			e.push([gbf.rank, gbf.weapon_sp[0].type, gbf.weapon_sp[0].zenith, gbf.weapon_sp[1].type, gbf.weapon_sp[1].zenith, gbf.job_attack[0], gbf.job_attack[1], gbf.hp, gbf.summon_attack, gbf.summon_list[0].type, gbf.summon_list[0].effect, gbf.summon_list[1].type, gbf.summon_list[1].effect, gbf.summon_list[2].type, gbf.summon_list[2].effect, gbf.summon_list[3].type, gbf.summon_list[3].effect, gbf.airship_attribute, gbf.zenith_element, gbf.job_hp[0], gbf.job_hp[1], gbf.summon_hp, gbf.arcarum_sub.type, gbf.zenith_special, gbf.turn]);
			for (var t = [], a = 0; a < gbf.weapon_data_temp.length; a++) t.push([gbf.weapon_data_temp[a].id, gbf.weapon_data_temp[a].lv, gbf.weapon_data_temp[a].skill_lv, gbf.weapon_data_temp[a].quality, gbf.weapon_data_temp[a].atk, gbf.weapon_data_temp[a].hp, gbf.weapon_data_temp[a].skill1_id, gbf.weapon_data_temp[a].skill1_element, gbf.weapon_data_temp[a].skill2_id, gbf.weapon_data_temp[a].skill2_element, gbf.weapon_data_temp[a].skill3_id, gbf.weapon_data_temp[a].skill3_element]);
			e.push(t);
			var s = JSON.stringify(e);
			return lzbase62.compress(s)
		},
		dataDecode: function(e) {
			e = lzbase62.decompress(e);
			try {
				return JSON.parse(e)
			} catch (e) {
				return alert("Data Load Error"), null
			}
		},
		StorageKey: "gbf_save_data",
		save: function(e, a) {
			var t = gbf.dataEncode(),
				s = gbf.loadData(),
				e = {
					label: e,
					value: t
				}; - 1 == a ? s.push(e) : s[a] = e, gbf.saveData(s)
		},
		remove: function(e) {
			var a = gbf.loadData();
			a.splice(e, 1), gbf.saveData(a)
		},
		load: function(e) {
			return gbf.loadData()[e]
		},
		loadData: function() {
			var e;
			if (window.localStorage) return e = localStorage.getItem(gbf.StorageKey) || "[]", JSON.parse(e)
		},
		saveData: function(e) {
			window.localStorage && (e = JSON.stringify(e), localStorage.setItem(gbf.StorageKey, e))
		},
		loadInput: function(e) {
			try {
				for (var a = 1; a <= 10; a++) gbf.weapon_data[a].id = weapon[e[a - 1][0]] ? e[a - 1][0] : null, gbf.weapon_data[a].lv = 0 | e[a - 1][1], gbf.weapon_data[a].skill_lv = 0 | e[a - 1][2], gbf.weapon_data[a].quality = 0 | e[a - 1][3], gbf.weapon_data[a].atk = 0 | e[a - 1][4], gbf.weapon_data[a].hp = 0 | e[a - 1][5], gbf.weapon_data[a].skill1_id = gbf.weapon_skill_setting[e[a - 1][6]] ? e[a - 1][6] : "none", gbf.weapon_data[a].skill1_element = 0 | e[a - 1][7], gbf.weapon_data[a].skill2_id = gbf.weapon_skill_setting[e[a - 1][8]] ? e[a - 1][8] : "none", gbf.weapon_data[a].skill2_element = 0 | e[a - 1][9], gbf.weapon_data[a].skill3_id = gbf.weapon_skill_setting[e[a - 1][10]] ? e[a - 1][10] : "none", gbf.weapon_data[a].skill3_element = 0 | e[a - 1][11];
				if (gbf.rank = 0 | e[10][0], gbf.weapon_sp[0].type = 0 | e[10][1], gbf.weapon_sp[0].zenith = 0 | e[10][2], gbf.weapon_sp[1].type = 0 | e[10][3], gbf.weapon_sp[1].zenith = 0 | e[10][4], gbf.job_attack[0] = 0 | e[10][5], gbf.job_attack[1] = 0 | e[10][6], gbf.hp = e[10][7] || 100, gbf.summon_attack = 0 | e[10][8], gbf.summon_list[0].type = gbf.summon_label[e[10][9]] ? e[10][9] : "none", gbf.summon_list[0].effect = 0 | e[10][10], gbf.summon_list[1].type = gbf.summon_label[e[10][11]] ? e[10][11] : "none", gbf.summon_list[1].effect = 0 | e[10][12], gbf.summon_list[2].type = gbf.summon_label[e[10][13]] ? e[10][13] : "none", gbf.summon_list[2].effect = 0 | e[10][14], gbf.summon_list[3].type = gbf.summon_label[e[10][15]] ? e[10][15] : "none", gbf.summon_list[3].effect = 0 | e[10][16], gbf.airship_attribute = 0 | e[10][17], gbf.zenith_element = 0 | e[10][18], gbf.job_hp[0] = 0 | e[10][19], gbf.job_hp[1] = 0 | e[10][20], gbf.summon_hp = 0 | e[10][21], gbf.arcarum_sub.type = e[10][22] || "none", gbf.zenith_special = 0 | e[10][23], gbf.turn = 1 | e[10][24], gbf.weapon_data_temp = [], e[11])
					for (a = 0; a < e[11].length; a++) gbf.weapon_data_temp[a] = {}, gbf.weapon_data_temp[a].id = weapon[e[11][a][0]] ? e[11][a][0] : null, gbf.weapon_data_temp[a].lv = 0 | e[11][a][1], gbf.weapon_data_temp[a].skill_lv = 0 | e[11][a][2], gbf.weapon_data_temp[a].quality = 0 | e[11][a][3], gbf.weapon_data_temp[a].atk = 0 | e[11][a][4], gbf.weapon_data_temp[a].hp = 0 | e[11][a][5], gbf.weapon_data_temp[a].skill1_id = gbf.weapon_skill_setting[e[11][a][6]] ? e[11][a][6] : "none", gbf.weapon_data_temp[a].skill1_element = 0 | e[11][a][7], gbf.weapon_data_temp[a].skill2_id = gbf.weapon_skill_setting[e[11][a][8]] ? e[11][a][8] : "none", gbf.weapon_data_temp[a].skill2_element = 0 | e[11][a][9], gbf.weapon_data_temp[a].skill3_id = gbf.weapon_skill_setting[e[11][a][10]] ? e[11][a][10] : "none", gbf.weapon_data_temp[a].skill3_element = 0 | e[11][a][11]
			} catch (e) {
				console.log(e)
			}
		},
		ImportLinkData: function(e) {
			try {
				for (var a = 1; a <= 10; a++) gbf.weapon_data[a].id = 0 | e.weapons[a - 1][0], gbf.weapon_data[a].skill_lv = 0 | e.weapons[a - 1][4], gbf.weapon_data[a].quality = 0 | e.weapons[a - 1][3], gbf.weapon_data[a].atk = 0 | e.weapons[a - 1][2], gbf.weapon_data[a].hp = 0 | e.weapons[a - 1][1];
				gbf.hp = 100, gbf.job_hp[0] = 0 | e.hp[0], gbf.job_hp[1] = 0 | e.hp[1], gbf.job_attack[0] = 0 | e.atk[0], gbf.job_attack[1] = 0 | e.atk[1], gbf.summon_attack = 0 | e.summon_atk, gbf.summon_hp = 0 | e.summon_hp, gbf.job_id = 0 | e.job
			} catch (e) {
				alert("Import Error"), console.log(e)
			}
		}
	};
