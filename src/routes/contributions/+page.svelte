<script lang="ts">
	import papersData from '$lib/data/papers.json';
	import { workshops } from '$lib/data/workshops';
	import type { Paper } from '$lib/types';

	// Front matter isn't a contribution — keep it out of the listing.
	const all = (papersData as unknown as Paper[]).filter((p) => p.type !== 'Front matter');
	const cityByYear = new Map(workshops.map((w) => [w.year, w.city]));
	const years = [...new Set(all.map((p) => p.year))].sort((a, b) => b - a);
	const withFile = all.filter((p) => p.paper || p.slides).length;

	// Short papers are just papers.
	const kind = (p: Paper): Paper['type'] => (p.type === 'Short' ? 'Paper' : p.type);
	const norm = (s: string) => s.toLowerCase();

	const types = ['All', 'Paper', 'Invited', 'Poster', 'Panel'] as const;

	let query = $state('');
	let type = $state<(typeof types)[number]>('All');
	let year = $state(years[0]); // default: latest edition

	const searching = $derived(query.trim().length > 0);
	// A search query OR an active type filter both search across every edition;
	// only the plain (All types, no query) state browses a single year.
	const filtering = $derived(searching || type !== 'All');

	function pickYear(y: number) {
		year = y;
		query = '';
	}

	const results = $derived.by(() => {
		const q = norm(query.trim());
		return all.filter((p) => {
			if (type !== 'All' && kind(p) !== type) return false;
			if (searching)
				return norm(p.title).includes(q) || norm(p.authors).includes(q) || String(p.year).includes(q);
			if (type !== 'All') return true; // type selected → match across all editions
			return p.year === year;
		});
	});

	const byYear = $derived.by(() => {
		const m = new Map<number, Paper[]>();
		for (const p of results) (m.get(p.year) ?? m.set(p.year, []).get(p.year))!.push(p);
		return [...m.entries()].sort((a, b) => b[0] - a[0]);
	});
</script>

<svelte:head>
	<title>Contributions — ModRef Archive</title>
	<meta name="description" content="Search every paper, talk and poster from the ModRef workshop series." />
</svelte:head>

<section class="wrap head">
	<div class="tag">The archive</div>
	<h1>Contributions</h1>
	<p class="lede">
		Every paper, talk and poster from the ModRef series — {all.length} in all, {withFile} with a file
		to download. Pick a year, or search across every edition.
	</p>

	<div class="controls" role="search">
		<input
			class="mono"
			type="search"
			placeholder="Search title or author…"
			bind:value={query}
			aria-label="Search contributions"
		/>
		<div class="types" role="group" aria-label="Filter by type">
			{#each types as t (t)}
				<button class="mono" class:on={type === t} onclick={() => (type = t)}>{t}</button>
			{/each}
		</div>
	</div>

	{#if filtering}
		<p class="status mono">
			{results.length} result{results.length === 1 ? '' : 's'}
			{#if searching}for “{query.trim()}” {/if}across all editions ·
			<button
				class="clear"
				onclick={() => {
					query = '';
					type = 'All';
				}}>clear</button
			>
		</p>
	{:else}
		<nav class="years" aria-label="Select a year">
			{#each years as y (y)}
				<button
					class="mono"
					class:on={y === year}
					onclick={() => pickYear(y)}
					aria-current={y === year ? 'true' : undefined}>{y}</button
				>
			{/each}
		</nav>
	{/if}
</section>

<section class="wrap list">
	{#each byYear as [yr, items] (yr)}
		<div class="year-block">
			<h2 class="year">
				<span>{yr}</span>
				{#if cityByYear.get(yr)}<span class="where mono">{cityByYear.get(yr)}</span>{/if}
				<span class="n mono">{items.length}</span>
			</h2>
			<ul>
				{#each items as p (p.title)}
					<li>
						<div class="paper">
							<span class="ptitle">{p.title}</span>
							{#if kind(p) !== 'Paper'}<span class="badge mono">{kind(p)}</span>{/if}
						</div>
						<div class="links mono">
							{#if p.paper}<a href={p.paper}>paper ↓</a>{/if}
							{#if p.slides}<a href={p.slides}>slides ↓</a>{/if}
							{#if !p.paper && !p.slides}<span class="none">no file</span>{/if}
						</div>
						<div class="authors">{p.authors}</div>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<p class="empty mono">Nothing matches “{query.trim()}”.</p>
	{/each}
</section>

<style>
	.head {
		padding-block: clamp(2.5rem, 8vw, 3.75rem) 1rem;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 2.9rem);
		margin: 0.3rem 0 0.5rem;
	}
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: center;
		margin-top: 1.4rem;
	}
	input[type='search'] {
		flex: 1 1 260px;
		font-size: 0.95rem;
		padding: 11px 14px;
		border: 2px solid var(--ink);
		border-radius: 4px;
		background: var(--card);
		color: var(--ink);
	}
	input::placeholder {
		color: color-mix(in srgb, var(--ink-soft) 80%, transparent);
	}
	.types {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}
	.types button {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 7px 11px;
		border: 1px solid var(--rule);
		border-radius: 3px;
		background: transparent;
		color: var(--ink-soft);
		cursor: pointer;
	}
	.types button.on {
		border-color: var(--ink);
		color: var(--paper);
		background: var(--ink);
	}

	/* year selector */
	.years {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: 1.1rem;
	}
	.years button {
		font-size: 0.82rem;
		padding: 6px 10px;
		border: 1px solid var(--rule);
		border-radius: 3px;
		background: transparent;
		color: var(--ink-soft);
		cursor: pointer;
	}
	.years button:hover {
		border-color: var(--red);
		color: var(--red);
	}
	.years button.on {
		border-color: var(--red);
		background: var(--red);
		color: #fff;
	}

	.status {
		font-size: 0.9rem;
		color: var(--ink-soft);
		margin: 1.1rem 0 0;
	}
	.clear {
		font: inherit;
		background: none;
		border: none;
		padding: 0;
		color: var(--red);
		cursor: pointer;
		text-decoration: underline;
	}

	.list {
		padding-bottom: 2rem;
	}
	.year-block {
		margin-top: 2.4rem;
	}
	.year {
		display: flex;
		align-items: baseline;
		gap: 12px;
		font-size: 1.5rem;
		margin: 0 0 0.6rem;
		border-bottom: 2px solid var(--ink);
		padding-bottom: 4px;
	}
	.year .where {
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--red);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.year .n {
		margin-left: auto;
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--ink-soft);
	}
	.list ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.list li {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2px 18px;
		padding: 12px 2px;
		border-bottom: 1px solid var(--rule);
	}
	.ptitle {
		font-size: 1.05em;
	}
	/* Badge flows inline after the title text, so on a multi-line title it stays at
	   the end of the last line instead of being wrapped onto its own line. */
	.badge {
		display: inline-block;
		margin-left: 8px;
		vertical-align: middle;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--teal);
		border: 1px solid color-mix(in srgb, var(--teal) 40%, transparent);
		border-radius: 3px;
		padding: 1px 6px;
		white-space: nowrap;
	}
	.authors {
		grid-column: 1;
		font-size: 0.95rem;
		color: var(--ink-soft);
	}
	.links {
		grid-column: 2;
		grid-row: 1 / span 2;
		align-self: center;
		display: flex;
		gap: 14px;
		font-size: 0.82rem;
		white-space: nowrap;
	}
	.links a {
		color: var(--red);
		border-bottom: 1px solid color-mix(in srgb, var(--red) 35%, transparent);
	}
	.none {
		color: color-mix(in srgb, var(--ink-soft) 70%, transparent);
	}
	.empty {
		margin-top: 2.4rem;
		color: var(--ink-soft);
	}
</style>
