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
		<li>
			<ToggleTheme />
		</li>
		{#each navLinks as navLink}
			<li>
				<a href={navLink.href}>{navLink.text}</a>
			</li>
		{/each}
		<li>
			<a target="_blank" href="/prowe_resume.pdf">
				<button>RESUME</button>
			</a>
		</li>
	</ul>
</nav>

<style>
	:root {
		--nav-height: 70px;
		--nav-item-padding: 20px;
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
		padding: 0 calc((100vw - var(--max-width)) / 2);
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		padding: 0 var(--nav-item-padding);
		display: inline-block;
	}

	li:last-of-type {
		padding-right: 0;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
	}

	a:hover {
		color: var(--secondary-color);
	}

	button {
		padding: 10px 20px;
		cursor: pointer;
		background: none;
		border-style: solid;
		border-width: 2px;
		border-radius: 5px;
		color: var(--primary-color);
		border-color: var(--primary-color);
	}

	button:hover {
		background-color: rgba(var(--primary-color-rgb), 0.1);
	}

	a,
	button {
		transition: var(--transition);
		font-family: var(--font-mono);
		text-transform: uppercase;
	}

	img {
		height: calc(var(--nav-height) - 10px);
		transition: var(--transition);
	}

	:global(body.dark) img {
		filter: invert(100%);
	}
</style>
