<script>
	import navLinks from "$lib/navLinks";
	import ToggleTheme from "./ToggleTheme.svelte";
</script>

<nav>
	<!-- logo -->
	<a href="/">
		<img src="/images/logo.png" alt="logo" />
	</a>

	<!-- navlinks -->
	<ul>
		<ToggleTheme />
		{#each navLinks as navLink}
			<li>
				<a href={navLink.href}>{navLink.text.toUpperCase()}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	:root {
		--nav-height: 70px;
	}

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: var(--nav-height);
		background-color: var(--bg);
		color: var(--text);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
	}

	li {
		padding: 0 20px;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
		font-family: var(--font-mono);
	}

	img {
		height: var(--nav-height);
		transition: all ease-out 150ms;
	}

	:global(body.dark) img {
		filter: invert(100%);
	}
</style>
