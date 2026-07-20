// Per-city landmark silhouettes for the postmark centres.
//
// Coordinate space: the centre <g> is translated to the stamp's baseline, so draw
// with the ground at y=0 and the building rising UPWARD (negative y). Keep art
// within roughly x ∈ [-40, 40] and height ≥ -46, and use fill="currentColor" so it
// inherits the stamp's ink colour. Anything not listed here falls back to the
// procedural skyline (see skyline.ts).
//
// STYLE SPEC (keep all cities consistent):
//   flat single-colour silhouette · one iconic landmark per city · bold masses,
//   minimal internal cutouts · must read at ~48px · sits on the baseline.
//
// Landmark plan for the remaining cities (fill in as art lands):
//   lisbon          → 25 de Abril bridge (suspension towers + deck) or a tram
//   glasgow         → University of Glasgow tower (Gilbert Scott spire)
//   girona          → cathedral + Onyar riverfront houses
//   haifa           → Bahá'í Gardens terraced steps up a slope
//   montpellier     → Arc de Triomphe / Place de la Comédie
//   louvain-la-neuve→ university aula / modern campus roofline
//   stamford        → First Presbyterian "Fish Church" wedge
//   lille           → belfry of the Chamber of Commerce
//   melbourne       → Flinders Street Station dome + clock
//   toulouse        → Basilica of Saint-Sernin octagonal tower
//   cork            → Shandon steeple (St Anne's) with the salmon vane
//   lyon            → Fourvière basilica on the hill
//   perugia         → Palazzo dei Priori / Fontana Maggiore
//   st-andrews      → cathedral ruins (twin east-gable towers)
//   providence      → Rhode Island State House dome
//   nantes          → Machines de l'île mechanical elephant
//   sitges          → Sant Bartomeu church on the seafront
//   kinsale         → Charles Fort star bastion / harbour
//   ithaca          → Cornell McGraw clock tower

export function slug(city: string): string {
	// NFD splits accents into combining marks; [^a-z0-9] then drops them.
	return city
		.toLowerCase()
		.normalize('NFD')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export const stampOutlines: Record<string, string> = {
	// Toronto — CN Tower. Tapered hexagonal shaft, main pod (SkyPod), secondary
	// pod and a long antenna mast.
	toronto:
		'<rect x="-9" y="-5" width="18" height="5" fill="currentColor"/>' +
		'<path d="M-5.5,-5 L-2.2,-36 L2.2,-36 L5.5,-5 Z" fill="currentColor"/>' +
		'<path d="M-10.5,-38 Q0,-34 10.5,-38 L8.5,-43 Q0,-46 -8.5,-43 Z" fill="currentColor"/>' +
		'<rect x="-8.5" y="-47" width="17" height="4" fill="currentColor"/>' +
		'<path d="M-4.5,-47 L0,-51 L4.5,-47 Z" fill="currentColor"/>' +
		'<rect x="-2.6" y="-56" width="5.2" height="3" fill="currentColor"/>' +
		'<path d="M-1.3,-51 L-0.45,-72 L0.45,-72 L1.3,-51 Z" fill="currentColor"/>',

	// Sydney — Opera House. Stepped podium + shells that all LEAN right: a steep
	// leading edge with the apex near the left, then a long convex tail sweeping
	// down to the right — clustered, with the detached restaurant shell past a gap.
	sydney:
		'<rect x="-37" y="-3.5" width="74" height="3.5" fill="currentColor"/>' +
		'<rect x="-33" y="-6.5" width="64" height="3.5" fill="currentColor"/>' +
		'<path d="M-30,-6 L-26,-20 Q-20,-9.5 -13,-6 Z" fill="currentColor"/>' +
		'<path d="M-21,-6 L-17,-29 Q-9,-12 -1,-6 Z" fill="currentColor"/>' +
		'<path d="M-11,-6 L-7,-34 Q2,-14 10,-6 Z" fill="currentColor"/>' +
		'<path d="M2,-6 L6,-25 Q13,-12 19,-6 Z" fill="currentColor"/>' +
		'<path d="M23,-6 L26,-15 Q30,-9 34,-6 Z" fill="currentColor"/>',

	// Uppsala — cathedral. Nave with side aisles, gabled west front, twin Gothic
	// spires with finials.
	uppsala:
		'<rect x="-21" y="-11" width="42" height="11" fill="currentColor"/>' +
		'<rect x="-16" y="-22" width="32" height="22" fill="currentColor"/>' +
		'<path d="M-7,-22 L0,-31 L7,-22 Z" fill="currentColor"/>' +
		'<rect x="-15" y="-34" width="8" height="12" fill="currentColor"/>' +
		'<path d="M-15.5,-34 L-11,-53 L-6.5,-34 Z" fill="currentColor"/>' +
		'<rect x="-11.6" y="-57" width="1.2" height="4" fill="currentColor"/>' +
		'<rect x="7" y="-34" width="8" height="12" fill="currentColor"/>' +
		'<path d="M6.5,-34 L11,-53 L15.5,-34 Z" fill="currentColor"/>' +
		'<rect x="10.4" y="-57" width="1.2" height="4" fill="currentColor"/>',

	// Lisbon — 25 de Abril suspension bridge. Deck, two portal towers, the draped
	// main cable and a few suspenders.
	lisbon:
		'<rect x="-37" y="-6" width="74" height="2.6" fill="currentColor"/>' +
		'<rect x="-18" y="-42" width="2.2" height="38" fill="currentColor"/>' +
		'<rect x="-14.8" y="-42" width="2.2" height="38" fill="currentColor"/>' +
		'<rect x="-18" y="-42" width="5.2" height="2.2" fill="currentColor"/>' +
		'<rect x="-18" y="-30" width="5.2" height="1.7" fill="currentColor"/>' +
		'<rect x="12.6" y="-42" width="2.2" height="38" fill="currentColor"/>' +
		'<rect x="15.8" y="-42" width="2.2" height="38" fill="currentColor"/>' +
		'<rect x="12.6" y="-42" width="5.2" height="2.2" fill="currentColor"/>' +
		'<rect x="12.6" y="-30" width="5.2" height="1.7" fill="currentColor"/>' +
		'<path d="M-37,-9 L-16.4,-42 Q0,-18 15.4,-42 L37,-9" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
		'<path d="M-9,-31 L-9,-6 M0,-24 L0,-6 M9,-31 L9,-6" fill="none" stroke="currentColor" stroke-width="1"/>',

	// Providence — Rhode Island State House. Marble dome on a drum with lantern and
	// the "Independent Man" statue, flanked by wings and a pedimented centre.
	providence:
		'<rect x="-33" y="-11" width="19" height="11" fill="currentColor"/>' +
		'<rect x="14" y="-11" width="19" height="11" fill="currentColor"/>' +
		'<rect x="-15" y="-18" width="30" height="18" fill="currentColor"/>' +
		'<rect x="-12" y="-22" width="24" height="4" fill="currentColor"/>' +
		'<rect x="-9" y="-28" width="18" height="6" fill="currentColor"/>' +
		'<path d="M-9,-28 A9,10 0 0 1 9,-28 Z" fill="currentColor"/>' +
		'<rect x="-3" y="-42" width="6" height="4" fill="currentColor"/>' +
		'<path d="M-3,-42 A3,3.2 0 0 1 3,-42 Z" fill="currentColor"/>' +
		'<rect x="-0.5" y="-47" width="1" height="5" fill="currentColor"/>',

	// Montpellier — Arc de Triomphe. Single round-arched gateway with cornice and
	// attic crown (opening cut from the face).
	montpellier:
		'<path fill-rule="evenodd" d="M-17,0 L-17,-33 L17,-33 L17,0 L8,0 L8,-20 Q8,-30 0,-30 Q-8,-30 -8,-20 L-8,0 Z" fill="currentColor"/>' +
		'<rect x="-19" y="-37" width="38" height="4" fill="currentColor"/>' +
		'<rect x="-13" y="-45" width="26" height="8" fill="currentColor"/>' +
		'<rect x="-4" y="-50" width="8" height="5" fill="currentColor"/>',

	// Quebec City — Château Frontenac. Detailed silhouette: corner turrets with
	// conical roofs, long wings with steep dormered roofs + chimneys, and the tall
	// central tower with a pavilion roof, finial and flag.
	'quebec-city':
		// left round turret
		'<rect x="-34" y="-22" width="6" height="22" fill="currentColor"/>' +
		'<path d="M-35,-22 L-31,-33 L-27,-22 Z" fill="currentColor"/>' +
		// left wing + roof, dormers, chimney
		'<rect x="-28" y="-15" width="14" height="15" fill="currentColor"/>' +
		'<path d="M-29,-15 L-21,-26 L-13,-15 Z" fill="currentColor"/>' +
		'<path d="M-25,-19 L-23.5,-22.6 L-22,-19 Z" fill="currentColor"/>' +
		'<path d="M-18,-19 L-16.5,-22.6 L-15,-19 Z" fill="currentColor"/>' +
		'<rect x="-20.6" y="-31" width="1.8" height="7" fill="currentColor"/>' +
		// mid block
		'<rect x="-14" y="-20" width="8" height="20" fill="currentColor"/>' +
		'<path d="M-15,-20 L-10,-28 L-5,-20 Z" fill="currentColor"/>' +
		// central tower + cornice, pavilion roof, finial, flag
		'<rect x="-6" y="-38" width="12" height="38" fill="currentColor"/>' +
		'<rect x="-7.5" y="-40" width="15" height="3" fill="currentColor"/>' +
		'<path d="M-8,-38 L0,-51 L8,-38 Z" fill="currentColor"/>' +
		'<rect x="-0.7" y="-55" width="1.4" height="5" fill="currentColor"/>' +
		'<path d="M0.7,-54 L7.5,-52 L0.7,-50 Z" fill="currentColor"/>' +
		// right wing + roof, dormers, chimney
		'<rect x="6" y="-18" width="14" height="18" fill="currentColor"/>' +
		'<path d="M5,-18 L13,-27 L21,-18 Z" fill="currentColor"/>' +
		'<path d="M9,-22 L10.5,-25.6 L12,-22 Z" fill="currentColor"/>' +
		'<path d="M15,-22 L16.5,-25.6 L18,-22 Z" fill="currentColor"/>' +
		'<rect x="14.8" y="-33" width="1.8" height="7" fill="currentColor"/>' +
		// right corner turret (tall round tower)
		'<rect x="20" y="-30" width="10" height="30" fill="currentColor"/>' +
		'<path d="M19,-30 L25,-42 L31,-30 Z" fill="currentColor"/>' +
		'<rect x="24.3" y="-46" width="1.4" height="5" fill="currentColor"/>' +
		'<path d="M25.7,-45 L30,-43.5 L25.7,-42 Z" fill="currentColor"/>',

	// Glasgow — University of Glasgow (Gilbert Scott Building): long Gothic range
	// with gables and the tall bell tower + openwork crown spire.
	glasgow:
		'<rect x="-32" y="-14" width="64" height="14" fill="currentColor"/>' +
		'<path d="M-30,-14 L-24,-21 L-18,-14 Z" fill="currentColor"/>' +
		'<path d="M-17,-14 L-11,-21 L-5,-14 Z" fill="currentColor"/>' +
		'<path d="M13,-14 L19,-21 L25,-14 Z" fill="currentColor"/>' +
		'<path d="M24,-14 L29,-20 L34,-14 Z" fill="currentColor"/>' +
		'<rect x="-5.5" y="-38" width="11" height="24" fill="currentColor"/>' +
		'<rect x="-7" y="-40" width="14" height="2.5" fill="currentColor"/>' +
		'<path d="M-7,-40 L-5.5,-48 L-4,-40 Z" fill="currentColor"/>' +
		'<path d="M4,-40 L5.5,-48 L7,-40 Z" fill="currentColor"/>' +
		'<path d="M-4.5,-40 L0,-56 L4.5,-40 Z" fill="currentColor"/>' +
		'<rect x="-0.6" y="-59" width="1.2" height="3" fill="currentColor"/>',

	// Lille — belfry of the Chamber of Commerce: tall square tower on a base, with a
	// crowned lantern, corner pinnacles and a spire finial.
	lille:
		'<rect x="-24" y="-12" width="48" height="12" fill="currentColor"/>' +
		'<rect x="-8" y="-38" width="16" height="26" fill="currentColor"/>' +
		'<rect x="-9.5" y="-40" width="19" height="2.5" fill="currentColor"/>' +
		'<path d="M-9.5,-40 L-8,-46 L-6.5,-40 Z" fill="currentColor"/>' +
		'<path d="M6.5,-40 L8,-46 L9.5,-40 Z" fill="currentColor"/>' +
		'<rect x="-5.5" y="-46" width="11" height="6" fill="currentColor"/>' +
		'<path d="M-5.5,-46 L0,-56 L5.5,-46 Z" fill="currentColor"/>' +
		'<rect x="-0.7" y="-60" width="1.4" height="4" fill="currentColor"/>',

	// Melbourne — Flinders Street Station, symmetric front elevation: the big central
	// dome on a pedimented pavilion with the grand arched entrance as negative space,
	// with the two smaller domes clustered close on either side.
	melbourne:
		// facades, split around the central arch so the opening shows through
		'<rect x="-26" y="-14" width="17" height="14" fill="currentColor"/>' +
		'<rect x="9" y="-14" width="17" height="14" fill="currentColor"/>' +
		// raised sections carrying the side domes, right next to the centre
		'<rect x="-24" y="-17" width="14" height="17" fill="currentColor"/>' +
		'<rect x="10" y="-17" width="14" height="17" fill="currentColor"/>' +
		// central pavilion with the grand arch cut from the base
		'<path d="M-9,0 L-9,-20 L9,-20 L9,0 L5,0 L5,-7 Q5,-13 0,-13 Q-5,-13 -5,-7 L-5,0 Z" fill="currentColor"/>' +
		// left side dome
		'<rect x="-22" y="-19" width="10" height="2.5" fill="currentColor"/>' +
		'<path d="M-22,-19 A5,5.2 0 0 1 -12,-19 Z" fill="currentColor"/>' +
		'<rect x="-17.4" y="-27" width="0.8" height="3" fill="currentColor"/>' +
		// right side dome
		'<rect x="12" y="-19" width="10" height="2.5" fill="currentColor"/>' +
		'<path d="M12,-19 A5,5.2 0 0 1 22,-19 Z" fill="currentColor"/>' +
		'<rect x="16.6" y="-27" width="0.8" height="3" fill="currentColor"/>' +
		// central dome: entablature, drum, dome, lantern, flag
		'<rect x="-11" y="-22" width="22" height="2" fill="currentColor"/>' +
		'<rect x="-9" y="-28" width="18" height="6" fill="currentColor"/>' +
		'<path d="M-9,-28 A9,9 0 0 1 9,-28 Z" fill="currentColor"/>' +
		'<rect x="-2.5" y="-41" width="5" height="4" fill="currentColor"/>' +
		'<path d="M-2.5,-41 A2.5,2.2 0 0 1 2.5,-41 Z" fill="currentColor"/>' +
		'<rect x="-0.5" y="-47" width="1" height="4" fill="currentColor"/>' +
		'<path d="M0.5,-46 L4,-44.5 L0.5,-43 Z" fill="currentColor"/>' +
		// pediment drawn in front of the drum so the triangle reads
		'<path d="M-11,-22 L0,-28 L11,-22 Z" fill="currentColor"/>',

	// St Andrews — cathedral ruins: St Rule's Tower and the broken east gable with
	// its two flanking turrets and a great empty window.
	'st-andrews':
		'<rect x="-29" y="-40" width="11" height="40" fill="currentColor"/>' +
		'<rect x="-29" y="-43" width="2.8" height="3" fill="currentColor"/>' +
		'<rect x="-24.9" y="-43" width="2.8" height="3" fill="currentColor"/>' +
		'<rect x="-20.8" y="-43" width="2.8" height="3" fill="currentColor"/>' +
		'<path d="M-16,0 L-16,-13 L-12,-13 L-12,-8 L-7,-8 L-7,-15 L-3,-15 L-3,0 Z" fill="currentColor"/>' +
		'<rect x="-1" y="-40" width="3.4" height="40" fill="currentColor"/>' +
		'<path d="M-1,-40 L0.7,-46 L2.4,-40 Z" fill="currentColor"/>' +
		'<rect x="11.6" y="-40" width="3.4" height="40" fill="currentColor"/>' +
		'<path d="M11.6,-40 L13.3,-46 L15,-40 Z" fill="currentColor"/>' +
		'<path fill-rule="evenodd" d="M2,0 L2,-30 L8.5,-38 L15,-30 L15,0 L11,0 L11,-16 Q11,-22 8.5,-22 Q6,-22 6,-16 L6,0 Z" fill="currentColor"/>',

	// Ithaca — Cornell's McGraw Tower rising over Uris Library, with a crenellated
	// crown and corner pinnacles.
	ithaca:
		'<rect x="-24" y="-13" width="48" height="13" fill="currentColor"/>' +
		'<path d="M-20,-13 L-14,-19 L-8,-13 Z" fill="currentColor"/>' +
		'<path d="M8,-13 L14,-19 L20,-13 Z" fill="currentColor"/>' +
		'<rect x="-7" y="-46" width="14" height="33" fill="currentColor"/>' +
		'<rect x="-7.5" y="-48" width="15" height="2.5" fill="currentColor"/>' +
		'<path d="M-7.5,-48 L-6,-54 L-4.5,-48 Z" fill="currentColor"/>' +
		'<path d="M4.5,-48 L6,-54 L7.5,-48 Z" fill="currentColor"/>' +
		'<path d="M-4,-48 L0,-55 L4,-48 Z" fill="currentColor"/>',

	// Toulouse — Basilica of Saint-Sernin: church body and the tiered octagonal
	// Romanesque bell tower stepping in to a spire.
	toulouse:
		'<rect x="-30" y="-13" width="60" height="13" fill="currentColor"/>' +
		'<path d="M-30,-13 L-30,-20 Q-24,-24 -18,-20 L-18,-13 Z" fill="currentColor"/>' +
		'<rect x="-9" y="-24" width="18" height="11" fill="currentColor"/>' +
		'<rect x="-8" y="-31" width="16" height="7" fill="currentColor"/>' +
		'<rect x="-7" y="-38" width="14" height="7" fill="currentColor"/>' +
		'<rect x="-6" y="-44" width="12" height="6" fill="currentColor"/>' +
		'<rect x="-5" y="-49" width="10" height="5" fill="currentColor"/>' +
		'<path d="M-5,-49 L0,-57 L5,-49 Z" fill="currentColor"/>',

	// Lyon — Notre-Dame de Fourvière: fortress-like basilica with four crenellated
	// corner towers and a central gable.
	lyon:
		'<rect x="-22" y="-20" width="44" height="20" fill="currentColor"/>' +
		'<path d="M-9,-20 L0,-29 L9,-20 Z" fill="currentColor"/>' +
		'<rect x="-12" y="-30" width="6" height="10" fill="currentColor"/>' +
		'<path d="M-12.5,-30 L-9,-35 L-5.5,-30 Z" fill="currentColor"/>' +
		'<rect x="6" y="-30" width="6" height="10" fill="currentColor"/>' +
		'<path d="M5.5,-30 L9,-35 L12.5,-30 Z" fill="currentColor"/>' +
		'<rect x="-25" y="-36" width="8" height="36" fill="currentColor"/>' +
		'<rect x="-25.5" y="-39" width="9" height="3" fill="currentColor"/>' +
		'<path d="M-25.5,-39 L-21,-45 L-16.5,-39 Z" fill="currentColor"/>' +
		'<rect x="17" y="-36" width="8" height="36" fill="currentColor"/>' +
		'<rect x="16.5" y="-39" width="9" height="3" fill="currentColor"/>' +
		'<path d="M16.5,-39 L21,-45 L25.5,-39 Z" fill="currentColor"/>',

	// Girona — Cases de l'Onyar: row of tall narrow riverfront houses of varying
	// heights, with the cathedral bell tower rising behind.
	girona:
		'<rect x="-32" y="-22" width="7" height="22" fill="currentColor"/>' +
		'<rect x="-25" y="-28" width="6" height="28" fill="currentColor"/>' +
		'<rect x="-19" y="-19" width="7" height="19" fill="currentColor"/>' +
		'<rect x="-12" y="-32" width="6" height="32" fill="currentColor"/>' +
		'<rect x="-6" y="-24" width="7" height="24" fill="currentColor"/>' +
		'<rect x="1" y="-30" width="6" height="30" fill="currentColor"/>' +
		'<rect x="7" y="-20" width="7" height="20" fill="currentColor"/>' +
		'<path d="M-25,-28 L-22,-32 L-19,-28 Z" fill="currentColor"/>' +
		'<path d="M-12,-32 L-9,-36 L-6,-32 Z" fill="currentColor"/>' +
		'<rect x="18" y="-42" width="11" height="42" fill="currentColor"/>' +
		'<rect x="16.5" y="-44" width="14" height="2.5" fill="currentColor"/>' +
		'<path d="M16.5,-44 L23.5,-52 L30.5,-44 Z" fill="currentColor"/>',

	// Haifa — Bahá'í Gardens: terraced slope stepping up to the golden-domed Shrine
	// of the Báb.
	haifa:
		'<rect x="-34" y="-5" width="68" height="5" fill="currentColor"/>' +
		'<rect x="-28" y="-10" width="56" height="5" fill="currentColor"/>' +
		'<rect x="-22" y="-15" width="44" height="5" fill="currentColor"/>' +
		'<rect x="-16" y="-20" width="32" height="5" fill="currentColor"/>' +
		'<rect x="-10" y="-25" width="20" height="5" fill="currentColor"/>' +
		'<rect x="-6" y="-36" width="12" height="11" fill="currentColor"/>' +
		'<path d="M-6,-36 A6,7 0 0 1 6,-36 Z" fill="currentColor"/>' +
		'<rect x="-0.7" y="-47" width="1.4" height="4" fill="currentColor"/>',

	// Cork — Shandon (St Anne's): the "pepper pot" tower stepping in to a domed
	// cupola with its golden salmon weathervane, beside the low nave.
	cork:
		'<rect x="-30" y="-10" width="24" height="10" fill="currentColor"/>' +
		'<rect x="-8" y="-34" width="16" height="34" fill="currentColor"/>' +
		'<rect x="-6.5" y="-41" width="13" height="7" fill="currentColor"/>' +
		'<rect x="-5" y="-46" width="10" height="5" fill="currentColor"/>' +
		'<path d="M-5,-46 A5,5 0 0 1 5,-46 Z" fill="currentColor"/>' +
		'<rect x="-0.5" y="-54" width="1" height="4" fill="currentColor"/>' +
		'<path d="M0.5,-53 L5,-52 L3,-50.7 L5,-49.5 L0.5,-48.5 Z" fill="currentColor"/>',

	// Perugia — Palazzo dei Priori: long Guelph-crenellated civic palace with its
	// bell tower and the fan-shaped staircase at the front.
	perugia:
		'<rect x="-30" y="-24" width="46" height="24" fill="currentColor"/>' +
		'<rect x="-30" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="-23" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="-16" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="-9" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="-2" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="5" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="12" y="-27" width="4" height="3" fill="currentColor"/>' +
		'<rect x="16" y="-40" width="10" height="40" fill="currentColor"/>' +
		'<rect x="16" y="-43" width="3.6" height="3" fill="currentColor"/>' +
		'<rect x="22.4" y="-43" width="3.6" height="3" fill="currentColor"/>' +
		'<path d="M-26,0 L-20,-5 L-8,-5 L-2,0 Z" fill="currentColor"/>',

	// Sitges — Sant Bartomeu i Santa Tecla church on its seafront rock, tall bell
	// tower and a small dome, waves to either side.
	sitges:
		'<path d="M-36,-1 Q-33,-4 -30,-1 Q-27,-4 -24,-1" fill="none" stroke="currentColor" stroke-width="1"/>' +
		'<path d="M22,-1 Q25,-4 28,-1 Q31,-4 34,-1" fill="none" stroke="currentColor" stroke-width="1"/>' +
		'<path d="M-22,0 L-18,-7 L-4,-9 L10,-7 L14,0 Z" fill="currentColor"/>' +
		'<rect x="-6" y="-24" width="16" height="17" fill="currentColor"/>' +
		'<path d="M-6,-24 L2,-30 L10,-24 Z" fill="currentColor"/>' +
		'<rect x="-14" y="-40" width="9" height="33" fill="currentColor"/>' +
		'<rect x="-15" y="-42" width="11" height="2.5" fill="currentColor"/>' +
		'<path d="M-15,-42 L-9.5,-50 L-4,-42 Z" fill="currentColor"/>' +
		'<rect x="-10.2" y="-53" width="1.4" height="3" fill="currentColor"/>' +
		'<rect x="4" y="-30" width="6" height="6" fill="currentColor"/>' +
		'<path d="M4,-30 A3,3.5 0 0 1 10,-30 Z" fill="currentColor"/>',

	// Kinsale — the harbour sailing town: a yacht under sail on the water.
	kinsale:
		'<path d="M-36,-2 Q-31,-5.5 -26,-2 Q-21,-5.5 -16,-2 Q-11,-5.5 -6,-2 Q-1,-5.5 4,-2 Q9,-5.5 14,-2 Q19,-5.5 24,-2 Q29,-5.5 34,-2" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
		'<path d="M-13,-11 L13,-11 L8,-5 Q0,-3 -8,-5 Z" fill="currentColor"/>' +
		'<rect x="-0.7" y="-44" width="1.4" height="33" fill="currentColor"/>' +
		'<path d="M2,-14 L2,-42 L15,-16 Z" fill="currentColor"/>' +
		'<path d="M-2,-15 L-2,-36 L-12,-16 Z" fill="currentColor"/>',

	// Nantes — the great mechanical elephant of Les Machines de l'île, carrying its
	// tiered passenger howdah.
	nantes:
		'<rect x="-14" y="-16" width="5" height="16" fill="currentColor"/>' +
		'<rect x="-5" y="-16" width="5" height="16" fill="currentColor"/>' +
		'<rect x="4" y="-16" width="5" height="16" fill="currentColor"/>' +
		'<rect x="12" y="-16" width="5" height="16" fill="currentColor"/>' +
		'<path d="M-18,-16 Q-20,-34 -2,-34 L16,-34 Q22,-32 22,-22 Q22,-16 18,-16 Z" fill="currentColor"/>' +
		'<path d="M18,-33 Q30,-33 30,-24 L30,-21 Q30,-17 24,-17 L18,-17 Z" fill="currentColor"/>' +
		'<path d="M28,-22 Q34,-19 32.5,-9 Q31.5,-4 27.5,-6 Q30,-12 25,-17 Z" fill="currentColor"/>' +
		'<path d="M15,-32 Q23,-30 21,-20 Q17,-22 15,-27 Z" fill="currentColor"/>' +
		'<rect x="-14" y="-44" width="27" height="10" fill="currentColor"/>' +
		'<rect x="-12" y="-49" width="23" height="5" fill="currentColor"/>' +
		'<rect x="-9" y="-53" width="17" height="4" fill="currentColor"/>',

	// Stamford — First Presbyterian "Fish Church": a low, long faceted sanctuary
	// beside the tall slender open-lattice carillon tower (twin tapering blades
	// joined by cross-struts, rising to two points).
	stamford:
		'<path d="M-30,0 L-30,-11 L-25,-8 L-21,-15 L-15,-10 L-10,-17 L-4,-12 L1,-16 L6,-9 L6,0 Z" fill="currentColor"/>' +
		'<path d="M13,0 L17.6,-56 L18.4,-56 L14.4,0 Z" fill="currentColor"/>' +
		'<path d="M23.6,0 L20.4,-56 L21.2,-56 L25,0 Z" fill="currentColor"/>' +
		'<rect x="15.1" y="-18.6" width="8.1" height="1.2" fill="currentColor"/>' +
		'<rect x="16.2" y="-32.6" width="6.1" height="1.2" fill="currentColor"/>' +
		'<rect x="17.2" y="-45.5" width="4.3" height="1" fill="currentColor"/>',

	// Louvain-la-Neuve — the Ottignies town hall (Maison communale): symmetric brick
	// block with two towers under bulbous slate roofs and tall finials, and a central
	// pedimented bay.
	'louvain-la-neuve':
		'<rect x="-30" y="-24" width="60" height="24" fill="currentColor"/>' +
		'<path d="M-13,-24 L-11,-27.5 L-9,-24 Z" fill="currentColor"/>' +
		'<path d="M9,-24 L11,-27.5 L13,-24 Z" fill="currentColor"/>' +
		'<rect x="-24" y="-30" width="10" height="30" fill="currentColor"/>' +
		'<path d="M-24,-30 C-28,-37 -21,-41 -19,-41 C-17,-41 -10,-37 -14,-30 Z" fill="currentColor"/>' +
		'<rect x="-19.4" y="-45" width="0.8" height="5" fill="currentColor"/>' +
		'<circle cx="-19" cy="-45.4" r="1.1" fill="currentColor"/>' +
		'<rect x="14" y="-30" width="10" height="30" fill="currentColor"/>' +
		'<path d="M14,-30 C10,-37 17,-41 19,-41 C21,-41 28,-37 24,-30 Z" fill="currentColor"/>' +
		'<rect x="18.6" y="-45" width="0.8" height="5" fill="currentColor"/>' +
		'<circle cx="19" cy="-45.4" r="1.1" fill="currentColor"/>' +
		'<rect x="-7" y="-27" width="14" height="27" fill="currentColor"/>' +
		'<path d="M-8,-27 L0,-34 L8,-27 Z" fill="currentColor"/>' +
		'<rect x="-0.4" y="-38" width="0.8" height="4.5" fill="currentColor"/>' +
		'<circle cx="0" cy="-38.3" r="1" fill="currentColor"/>' +
		'<path d="M-7,0 L-4,-3 L4,-3 L7,0 Z" fill="currentColor"/>'
};
