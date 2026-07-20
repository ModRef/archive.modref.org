<script module lang="ts">
	// Per-page counter so each stamp's <textPath> defs get unique ids.
	// Deterministic render order → same ids on server + client (no hydration mismatch).
	let counter = 0;

	// Classic postmark inks — carmine, teal, prussian blue, plum, sepia, slate.
	// A stamp with no explicit `ink` picks one by hash, so the mix is varied but
	// each city/year is always the same colour.
	export const STAMP_INKS = ['#a83828', '#2f6b5e', '#34607d', '#6d3f5f', '#7c5233', '#45484f'];
</script>

<script lang="ts">
	import { hash, skylineOutline } from '$lib/skyline';
	import { stampOutlines, slug } from '$lib/stamps';

	let {
		city,
		year,
		ink,
		size = 128,
		outline
	}: { city: string; year: number | string; ink?: string; size?: number; outline?: string } =
		$props();

	const uid = 'pm' + (counter++).toString(36);
	const top = $derived(String(city).toUpperCase());
	const bot = $derived('MODREF · ' + year);
	const col = $derived(ink ?? STAMP_INKS[hash(String(city) + year) % STAMP_INKS.length]);
	const rot = $derived.by(() => {
		const h = hash(city + year);
		return (h & 1 ? 1 : -1) * (6 + (h % 7)); // ±6..12° — a deliberate stamp angle
	});
	const centre = $derived(outline ?? stampOutlines[slug(String(city))] ?? skylineOutline(city));

	const star = (x: number, y: number) =>
		`<path d="M${x},${y - 3.4} L${x + 1},${y - 1} L${x + 3.4},${y} L${x + 1},${y + 1} L${x},${y + 3.4} L${x - 1},${y + 1} L${x - 3.4},${y} L${x - 1},${y - 1} Z" fill="currentColor" stroke="none" />`;
</script>

<svg
	viewBox="0 0 200 200"
	width={size}
	height={size}
	class="postmark"
	style="color:{col};transform:rotate({rot}deg)"
	role="img"
	aria-label="ModRef {year} — {city} postmark"
>
	<defs>
		<!-- top text grows outward, bottom inward; radii offset so each line sits
		     centred in the band between the r=92 and r=66 rings (mid ≈ 79). -->
		<path id="t{uid}" d="M27,100 A73,73 0 0 1 173,100" />
		<path id="b{uid}" d="M15,100 A85,85 0 0 0 185,100" />
	</defs>
	<circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="2.6" opacity="0.92" />
	<circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="1 3.6" opacity="0.85" />
	<g opacity="0.92">
		<text fill="currentColor" stroke="none" font-size="15" letter-spacing="1.4" font-weight="700">
			<textPath href="#t{uid}" startOffset="50%" text-anchor="middle">{top}</textPath>
		</text>
		<text fill="currentColor" stroke="none" font-size="15" letter-spacing="1.7" font-weight="500">
			<textPath href="#b{uid}" startOffset="50%" text-anchor="middle">{bot}</textPath>
		</text>
		<!-- eslint-disable svelte/no-at-html-tags -->
		{@html star(21, 100)}{@html star(179, 100)}
		<g transform="translate(100,117) scale(1.32)">{@html centre}</g>
		<!-- eslint-enable svelte/no-at-html-tags -->
		<line x1="46" y1="117" x2="154" y2="117" stroke="currentColor" stroke-width="1.3" />
	</g>
</svg>

<style>
	.postmark {
		display: block;
	}
	.postmark :global(text),
	.postmark text {
		font-family: var(--font-mono);
	}
</style>
