<script lang="ts">
	const steering = [
		{ years: '2002–2017', who: 'Alan Frisch' },
		{ years: '2018–2019', who: 'Kevin Leo and Alan Frisch' },
		{ years: '2020–present', who: 'Mateu Villaret' }
	];
	const antecedents = [
		{ name: 'CP 2001', topic: 'Modelling and Problem Formulation', url: 'http://www.dcs.gla.ac.uk/~pat/cp2001' },
		{ name: 'CP 1998', topic: 'Constraint Problem Reformulation', url: 'http://www.aaai.org/ojs/index.php/aimagazine/article/viewFile/1483/1382' },
		{ name: 'ECAI 02 · IJCAI 01 · ECAI 00', topic: 'Modelling and Solving Problems with Constraints' }
	];
</script>

<svelte:head>
	<title>About — ModRef Archive</title>
	<meta name="description" content="About the ModRef workshop series: scope, organisation and antecedents." />
</svelte:head>

<article class="wrap page">
	<div class="tag">About</div>
	<h1>About ModRef</h1>

	<p class="lede">
		ModRef grew out of a run of workshops and sessions on modelling and reformulating constraint
		problems — a modelling session at CP 2001, and earlier meetings at CP, ECAI and IJCAI. The first
		standalone workshop was held in 2002, alongside CP at Cornell.
	</p>

	<p>
		Its name has widened with its scope: from <em>Reformulating Constraint Satisfaction Problems</em>
		in 2002, to <em>Modelling and Reformulating Constraint Satisfaction Problems</em> in the years
		that followed, and finally to today's <em>Constraint Modelling and Reformulation</em>. Across
		twenty-five editions it has followed the CP conference around the world — Ithaca, Kinsale,
		Sydney, Perugia, Melbourne, Lisbon and beyond — and remains a small, focused venue for new ideas
		on how we model and reformulate.
	</p>

	<section>
		<h2>Organisation</h2>
		<p>
			Each edition is organised by a Programme Chair and Programme Committee, listed on that
			edition's own site. The series as a whole has been overseen by a Steering Chair:
		</p>
		<ul class="defs">
			{#each steering as s (s.years)}
				<li><span class="mono yrs">{s.years}</span><span>{s.who}</span></li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Significant antecedents</h2>
		<p>Workshops and sessions that preceded the series:</p>
		<ul class="defs">
			{#each antecedents as a (a.name)}
				<li>
					<span class="mono yrs">{#if a.url}<a href={a.url}>{a.name}</a>{:else}{a.name}{/if}</span>
					<span>{a.topic}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>About this archive</h2>
		<p>
			This site collects the history of the series with a
			<a href="/contributions/">searchable list of every contribution</a> and its papers and slides. It
			supersedes the series page formerly maintained at
			<span class="mono">www-users.york.ac.uk/~af9/ModRef</span>, which is no longer updated. Recent
			editions each keep their own site at <span class="mono">YEAR.modref.org</span>; some older
			links point to Internet Archive captures.
		</p>
	</section>

</article>

<style>
	.page {
		padding-block: clamp(2.5rem, 8vw, 3.75rem);
		max-width: 720px;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 2.8rem);
		margin: 0.3rem 0 0.6rem;
	}
	p a,
	.defs a {
		color: var(--red);
		border-bottom: 1px solid color-mix(in srgb, var(--red) 35%, transparent);
	}
	section {
		margin-top: clamp(2rem, 5vw, 2.8rem);
	}
	h2 {
		font-size: 1.4rem;
		border-bottom: 2px solid var(--ink);
		padding-bottom: 6px;
	}
	.defs {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.defs li {
		display: grid;
		grid-template-columns: 12rem 1fr;
		gap: 12px;
		padding: 8px 0;
		border-bottom: 1px solid var(--rule);
	}
	.yrs {
		font-size: 0.82rem;
		color: var(--ink-soft);
	}
	@media (max-width: 560px) {
		.defs li {
			grid-template-columns: 1fr;
			gap: 2px;
		}
	}
</style>
