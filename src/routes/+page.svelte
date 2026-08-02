<script lang="ts">
	import PostmarkStamp from '$lib/PostmarkStamp.svelte';
	import { workshops, featuredWorkshop } from '$lib/data/workshops';
	import type { Workshop } from '$lib/types';

	const featured = featuredWorkshop();
	const past = workshops.filter((w) => w.year !== featured.year); // grid = all but the featured
	const place = (w: Workshop) => (w.country ? `${w.city}, ${w.country}` : w.city);
</script>

<svelte:head>
	<title>ModRef Archive — Constraint Modelling and Reformulation</title>
	<meta
		name="description"
		content="A logbook of the ModRef workshops on constraint modelling and reformulation — every edition, paper and slide."
	/>
</svelte:head>

{#snippet confLinks(w: Workshop)}{#if w.conference.url}<a href={w.conference.url}>{w.conference.name}</a>{:else}{w.conference.name}{/if}{#if w.floc} · {#if w.floc.url}<a href={w.floc.url}>{w.floc.name}</a>{:else}{w.floc.name}{/if}{/if}{/snippet}

<section class="wrap hero">
	<!-- <div class="tag">◦ est. 2002</div> -->
	<h1>The ModRef workshop series</h1>
	<p class="lede">
		The International Workshop on Constraint Modelling and Reformulation is a forum for
		work on how combinatorial problems are <em>modelled</em> and how those models are
		<em>reformulated</em> to be solved more effectively by constraint solvers.
	</p>
	<p class="desc">
		Since 2002 it has been held each year alongside the
		<a href="https://www.a4cp.org/">CP conference</a>. Topics range from new models and modelling
		ideas for particular problems, through reformulation techniques that improve solver performance,
		to higher-level modelling languages and the automation of modelling itself.
	</p>
</section>

<section class="wrap featured">
	<div class="stamp-cell">
		{#if featured.siteUrl}
			<a class="stamplink" href={featured.siteUrl} aria-label={`${featured.city} ${featured.year} website`}>
				<PostmarkStamp city={featured.city} year={featured.year} size={176} />
			</a>
		{:else}
			<PostmarkStamp city={featured.city} year={featured.year} size={176} />
		{/if}
	</div>
	<div>
		{#if featured.status === 'upcoming'}
			<span class="up">▲ Next stop{featured.cfpOpen ? ' · CfP open' : ''}</span>
		{:else}
			<span class="up latest">Latest edition</span>
		{/if}
		<h2>{featured.city} {featured.year}</h2>
		<p class="meta mono">
			{featured.ordinal} workshop{featured.date ? ` · ${featured.date}` : ''}<br />
			part of {@render confLinks(featured)} · {place(featured)}{featured.virtual
				? ' · held online'
				: ''}
		</p>
		{#if featured.status === 'upcoming' && featured.siteUrl}
			<a class="cta" href={featured.siteUrl}>Call for Papers →</a>
		{:else if featured.siteUrl}
			<a class="cta" href={featured.siteUrl}>Visit the {featured.year} site →</a>
		{/if}
	</div>
</section>

<div class="wrap section-head">
	<h2>Past editions</h2>
	<span class="rule"></span>
	<span class="tag" style="color:var(--ink-soft)"
		>{past.at(-1)?.year}—{past[0].year} · {past.length} editions</span
	>
</div>

<section class="wrap grid">
	{#each past as w (w.year)}
		<article class="card" class:no-site={!w.siteUrl}>
			<span class="yr mono">№ {w.edition}</span>
			{#if w.siteUrl}
				<a class="stampwrap stamplink" href={w.siteUrl} title={`${w.city} ${w.year} website`}>
					<PostmarkStamp city={w.city} year={w.year} size={128} />
				</a>
			{:else}
				<div class="stampwrap" title="No surviving website — papers only">
					<PostmarkStamp city={w.city} year={w.year} size={128} />
				</div>
			{/if}
			<div class="body">
				<div class="city">
					{#if w.siteUrl}<a href={w.siteUrl}>{w.city}</a>{:else}{w.city}{/if}
				</div>
				<div class="sub mono">
					{w.year} · {@render confLinks(w)}{#if w.virtual} · virtual{/if}{#if !w.siteUrl}
						· <span class="nosite">no site</span>{/if}
				</div>
			</div>
		</article>
	{/each}
</section>

<style>
	.hero {
		padding-block: clamp(2.5rem, 8vw, 3.75rem) 1.6rem;
	}
	.hero h1 {
		font-size: clamp(2.3rem, 6vw, 3.6rem);
		margin: 0.3rem 0 0.5rem;
	}
	.hero .lede {
		margin-bottom: 0.7rem;
	}
	.hero .desc {
		margin: 0;
	}
	.hero a {
		color: var(--red);
		border-bottom: 1px solid color-mix(in srgb, var(--red) 35%, transparent);
	}

	.featured {
		margin-block: 2.5rem;
		border: 2px solid var(--ink);
		border-radius: 6px;
		background: var(--card);
		box-shadow: 7px 7px 0 rgba(42, 37, 28, 0.1);
		padding: 30px 36px;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 38px;
		align-items: center;
	}
	.stamp-cell :global(svg) {
		filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.06));
	}
	.up {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		background: var(--red);
		color: #fff;
		padding: 4px 10px;
		border-radius: 3px;
		margin-bottom: 12px;
	}
	.up.latest {
		background: var(--ink);
	}
	.featured h2 {
		font-size: clamp(1.8rem, 5vw, 2.4rem);
		margin: 0 0 6px;
	}
	.meta {
		font-size: 0.95rem;
		color: var(--ink-soft);
		line-height: 1.75;
		margin: 0;
	}
	.cta {
		margin-top: 16px;
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.82rem;
		border: 1.5px solid var(--ink);
		border-radius: 3px;
		padding: 7px 14px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.cta:hover {
		background: var(--ink);
		color: var(--paper);
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 36px 30px;
	}
	.card {
		position: relative;
		width: 248px;
		padding-top: 8px;
	}
	.yr {
		position: absolute;
		top: 0;
		left: 2px;
		font-size: 0.92rem;
		color: var(--ink-soft);
	}
	.stampwrap {
		display: flex;
		justify-content: center;
		transition: transform 0.18s ease;
	}
	.stamplink {
		border-radius: 50%;
	}
	.card:hover .stampwrap {
		transform: scale(1.06);
	}
	.card.no-site .stampwrap {
		opacity: 0.5;
	}
	.card.no-site:hover .stampwrap {
		transform: none;
	}
	.body {
		text-align: center;
		margin-top: 10px;
	}
	.city {
		font-weight: 600;
		font-size: 1.24rem;
		line-height: 1.2;
	}
	.city a:hover {
		color: var(--red);
	}
	.sub {
		font-size: 0.9rem;
		color: var(--ink-soft);
		margin-top: 4px;
	}
	/* clickable CP / FLoC links inside the small metadata line */
	.sub :global(a),
	.meta :global(a) {
		color: inherit;
		border-bottom: 1px dotted color-mix(in srgb, var(--ink-soft) 55%, transparent);
	}
	.sub :global(a:hover),
	.meta :global(a:hover) {
		color: var(--red);
		border-color: var(--red);
	}
	.nosite {
		opacity: 0.75;
	}
	@media (max-width: 640px) {
		.featured {
			grid-template-columns: 1fr;
			text-align: center;
			justify-items: center;
		}
	}
</style>
