<script>
	import { page } from "$app/stores";
	import navLinks from "$lib/navLinks";
	import ToggleTheme from "./ToggleTheme.svelte";

	let yPos;
</script>

<nav class={yPos > 10 ? "scroll" : ""}>
	<!-- logo -->
	<a href="/" title="navigate home">
		<img src="/images/logo.svg" alt="logo" />
	</a>

	<!-- navlinks -->
	<ul>
		<li>
			<ToggleTheme />
		</li>
		{#each navLinks as navLink, i}
			<li>
				<span>{String(i + 1).padStart(2, "0")}.</span>
				<a rel="prefetch" href={navLink.href} aria-current={$page.params.slug === navLink.text}
					>{navLink.text}</a
				>
			</li>
		{/each}
		<li>
			<a target="_blank" href="/prowe_resume.pdf">
				<button>RESUME</button>
			</a>
		</li>
	</ul>
</nav>

<svelte:window bind:scrollY={yPos} />

<style>
	:root {
		--nav-height: 90px;
		--nav-item-padding: 20px;
	}

	nav.scroll {
		--nav-height: 70px;
	}

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: var(--nav-height);
		color: var(--text);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 calc((100vw - var(--max-width)) / 2);
		font-weight: 500;
		letter-spacing: 0.07rem;
		transition: var(--transition);
	}

	nav.scroll {
		background-color: var(--color-bg);
		box-shadow: rgba(var(--primary-color-rgb), 0.07) 0px 5px 15px;
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

	li > span {
		color: var(--primary-color);
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
	}

	a:hover {
		color: var(--primary-color);
	}

	button {
		font-weight: 500;
		letter-spacing: 0.07rem;
		padding: 10px 20px;
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
