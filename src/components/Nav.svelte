<script>
	import { beforeNavigate } from "$app/navigation";
	import { navLinks } from "$lib/config";
	import ToggleTheme from "$components/ToggleTheme.svelte";
	import Icon from "$components/Icon.svelte";

	export let currentPage;

	let yPos;
	let isMenuOpen = false;

	// close the mobile menu when the user clicks on one of the items
	beforeNavigate(() => {
		isMenuOpen = false;
	});
</script>

<header class={`${yPos > 40 ? "scroll" : ""}`}>
	<!-- logo -->
	<a href="/" title="navigate home" class="logo">
		<img src="/images/logo.svg" alt="logo" />
	</a>

	<!-- navlinks -->
	<nav>
		<ToggleTheme />
		<label aria-label="toggle nav menu" title="toggle nav menu">
			<input type="checkbox" bind:checked={isMenuOpen} aria-label="toggle nav menu" />
			<span role="button" class="toggle">
				<div class="cross">
					<Icon name="cross" width="25px" height="25px" />
				</div>

				<div class="menu">
					<Icon name="menu" width="25px" height="25px" />
				</div>
			</span>
		</label>
		<ul class={isMenuOpen ? "mobile-open" : "mobile-closed"}>
			{#each navLinks as navLink, i}
				<li>
					<a rel="prefetch" href={navLink.href} aria-current={currentPage === navLink.href}>
						<span>{String(i + 1).padStart(2, "0")}.</span>
						{navLink.text}
					</a>
				</li>
			{/each}
			<li>
				<a target="_blank" href="/prowe_resume.pdf">
					<button class="styled-btn">RESUME</button>
				</a>
			</li>
		</ul>
	</nav>
</header>

<svelte:window bind:scrollY={yPos} />

<style>
	:root {
		--nav-height: 70px;
		--nav-scroll-pt: 30px;
		--nav-item-padding: 20px;
	}

	header {
		position: sticky;
		z-index: 2;
		top: 0;
		left: 0;
		height: var(--nav-height);
		color: var(--text);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 calc((100vw - var(--max-width)) / 2);
		margin-top: var(--nav-scroll-pt);
		font-weight: 500;
		letter-spacing: 0.07rem;
		transition: var(--transition) all;
		background-color: var(--color-bg);
	}

	header.scroll {
		background-color: var(--color-bg);
		border-bottom: 1px solid rgba(var(--color-primary-rgb), 0.1);
	}

	nav {
		display: flex;
		flex-direction: row;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		transition: var(--transition);
	}

	li {
		padding: 0 var(--nav-item-padding);
		display: inline-block;
		transition: var(--transition);
		border-radius: var(--border-radius);
	}

	li:last-of-type {
		padding-right: 0;
	}

	a > span {
		display: inline;
		color: var(--color-primary);
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
	}

	a:hover {
		color: var(--color-primary);
	}

	a,
	button {
		transition: var(--transition);
		font-family: var(--font-mono);
		text-transform: uppercase;
	}

	img {
		height: calc(var(--nav-height) - 20px);
		transition: var(--transition);
	}

	/* flip image colors in dark mode */
	:global(body.dark) img {
		filter: invert(100%);
	}

	/* selected nav item */
	[aria-current]:not([aria-current="false"]) {
		color: var(--color-primary);
	}

	/* hide toggle for mobile menu  */
	label {
		display: none;
	}

	@media only screen and (max-width: 1200px) {
		.logo {
			display: none;
		}

		/* show toggle for mobile menu  */
		label {
			display: inline;
		}

		ul {
			position: absolute;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 0 calc((100vw - var(--max-width)) / 2);
			list-style: none;
			background: var(--color-bg);
			top: var(--nav-height);
			left: 0;
			width: 100vw;
			height: 100vh;
		}

		ul.mobile-closed {
			opacity: 0;
			pointer-events: none;
		}

		nav {
			justify-content: space-between;
			width: 100%;
		}

		input {
			position: absolute;
			width: 0;
			height: 0;
			opacity: 0;
			overflow: hidden;
		}

		.toggle {
			transition: opacity 0.3s ease;
			position: relative;
			display: inline-block;
			margin: 0;
			width: 25px;
			height: 25px;
			cursor: pointer;
		}

		div {
			transition: opacity 0.3s ease, transform 0.3s ease;
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.menu {
			opacity: 100;
			transform: scale(1);
		}

		.cross {
			opacity: 0;
			transform: scale(0);
		}

		input:checked ~ .toggle .menu {
			opacity: 0;
			transform: scale(0);
		}

		input:checked ~ .toggle .cross {
			transform: scale(1);
			opacity: 100;
		}

		ul.mobile-open {
			opacity: 100;
			overflow: hidden;
		}

		li {
			display: flex;
			border-radius: 0;
			padding: 0;
			width: 100%;
			border-bottom: 1px solid gray;
		}

		li:last-of-type {
			border-bottom: none;
		}

		li > a {
			width: 100%;
			height: 100%;
			padding: 40px 0;
		}

		a > button {
			width: 100%;
		}
	}
</style>
