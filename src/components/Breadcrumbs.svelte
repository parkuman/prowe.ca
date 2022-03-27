<script>
	import { page } from "$app/stores";

	const pathCrumbs = $page.url.pathname.split("/").slice(1);

	function pathUpToAndIncludingCrumb(crumb) {
		let path = "";

		for (const c of pathCrumbs) {
			path += `/${c}`;

			if (c === crumb) {
				return path;
			}
		}

		return path;
	}
</script>

<nav>
	{#each pathCrumbs as crumb, i}
		<a href={`${pathUpToAndIncludingCrumb(crumb)}`}>{crumb}</a>
		{#if i !== pathCrumbs.length - 1}
			<span>&gt;&nbsp;</span>
		{/if}
	{/each}
</nav>

<style>
	nav {
		margin-bottom: 20px;
	}

	span,
	a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: rgba(var(--color-text-rgb), 0.5);
		transition: var(--transition);
	}

	a {
		text-decoration: none;
		display: inline;
	}

	a:hover {
		color: var(--color-primary);
	}

	a:last-of-type {
		font-size: 1rem;
		font-weight: bold;
	}
</style>
