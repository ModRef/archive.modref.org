<script lang="ts">
	import '@fontsource-variable/fraunces/opsz.css';
	import '@fontsource-variable/fraunces/opsz-italic.css';
	import '@fontsource-variable/jetbrains-mono';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/about/', label: 'About' },
		{ href: '/contributions/', label: 'Contributions' }
	];
	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<header class="site">
	<nav class="wrap bar" aria-label="Primary">
		<a class="brand" href="/">Mod<span class="r">Ref</span> <span class="mono kicker">ARCHIVE</span></a>
		<ul>
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class:active={isActive(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="site foot">
	<div class="wrap">
		<span class="mono"
			>MODREF ARCHIVE · supersedes <span style="opacity:.8">www-users.york.ac.uk/~af9/ModRef</span
			></span
		>
		<a class="mono" href="/contributions/" style="color:var(--red)">browse all contributions →</a>
	</div>
</footer>

<style>
	.skip {
		position: absolute;
		left: 8px;
		top: -48px;
		background: var(--ink);
		color: var(--paper);
		padding: 8px 12px;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		transition: top 0.15s;
		z-index: 20;
	}
	.skip:focus {
		top: 8px;
	}
	header.site {
		border-bottom: 2px solid var(--ink);
		position: sticky;
		top: 0;
		background: color-mix(in srgb, var(--paper) 88%, transparent);
		backdrop-filter: blur(6px);
		z-index: 10;
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 16px;
	}
	.brand {
		font-weight: 700;
		font-size: 1.5rem;
		letter-spacing: -0.01em;
	}
	.brand .r {
		color: var(--red);
	}
	.kicker {
		font-size: 0.68rem;
		color: var(--ink-soft);
		letter-spacing: 0.14em;
	}
	nav ul {
		display: flex;
		gap: 6px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 6px 12px;
		color: var(--ink-soft);
		border: 1px solid transparent;
		border-radius: 3px;
		display: inline-block;
	}
	nav ul a.active {
		color: var(--ink);
		border-color: var(--ink);
	}
	nav ul a:hover {
		color: var(--red);
	}
	.foot {
		border-top: 2px solid var(--ink);
		margin-top: clamp(3rem, 8vw, 5rem);
		padding-block: 26px 60px;
	}
	.foot .wrap {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 20px;
		justify-content: space-between;
		font-size: 0.78rem;
		color: var(--ink-soft);
	}
</style>
