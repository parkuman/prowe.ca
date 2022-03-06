<!-- 
  component to toggle the theme of the site. 
  thanks to @lenaschnedlitz (https://github.com/LenaSchnedlitz)
  for the awesome article: https://dev.to/lenaschnedlitz/create-a-simple-dark-mode-toggle-with-svelte-4b3g
-->
<script>
	import { onMount } from "svelte";

	const LOCAL_STORAGE_KEY = "theme";
	const PREFERS_DARK = "(prefers-color-scheme: dark)";

	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};

	let isDarkMode = true;

	let prefersDarkTheme = () => true;

	onMount(() => {
		// since we rely on window, this ensures this will work with SSR
		prefersDarkTheme = () => window.matchMedia(PREFERS_DARK).matches;

		// apply the theme and listen for changes to the user's theme preference.
		// for example MacOS can automatically go dark mode depending on time of day
		applyTheme();
		window.matchMedia(PREFERS_DARK).addEventListener("change", applyTheme);

		// remove event listener when component is destroyed
		return () => {
			window.matchMedia(PREFERS_DARK).removeEventListener("change", applyTheme);
		};
	});

	const toggleTheme = () => {
		const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

		if (stored) {
			// if they have a theme set using this toggle already, set the opposite
			localStorage.setItem(LOCAL_STORAGE_KEY, stored === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
		} else {
			// the user hasn't specifically set the theme on the site (only on their OS), store opposite of preference
			localStorage.setItem(LOCAL_STORAGE_KEY, prefersDarkTheme() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	};

	const applyTheme = () => {
		const preferredTheme = prefersDarkTheme() ? THEMES.DARK : THEMES.LIGHT;

		// if a theme is set in localStorage, use that. otherwise use the
		// preference provided by the browser (usually set by OS)
		let currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY) ?? preferredTheme;

		// local state to see if its currently dark mode
		isDarkMode = currentTheme === THEMES.DARK;

		if (isDarkMode) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};
</script>

<svelte:head>
	<meta content={isDarkMode ? "#ffffff" : "#131418"} name="theme-color" />
</svelte:head>

<label
	aria-label="switch to {isDarkMode ? THEMES.LIGHT : THEMES.DARK} mode"
	title="switch to {isDarkMode ? THEMES.LIGHT : THEMES.DARK} mode"
>
	<input type="checkbox" on:click={toggleTheme} bind:checked={isDarkMode} />
	<span class="toggle" />
</label>

<style>
	label {
		padding: 0;
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
		box-sizing: border-box;
		--toggle-height: 20px;
	}

	input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
		overflow: hidden;
	}

	.toggle,
	.toggle::after,
	.toggle::before {
		transition: var(--transition);
	}

	.toggle {
		position: relative;
		display: inline-block;
		width: calc(var(--toggle-height) * 2);
		height: var(--toggle-height);
		margin: 0;
		background-color: #404346;
		color: #404346;
		border-radius: var(--toggle-height);
		cursor: pointer;
	}

	input:checked ~ .toggle {
		color: white;
		background-color: white;
	}

	.toggle::after {
		position: absolute;
		top: 3px;
		left: calc(var(--toggle-height) + 3px);
		width: calc(var(--toggle-height) - 6px);
		height: calc(var(--toggle-height) - 6px);
		background-color: white;
		border-radius: var(--toggle-height);
		content: "";
	}

	input:checked ~ .toggle::after {
		left: 3px;
		background-color: #404346;
	}

	.toggle:hover {
		background-color: #202122;
	}

	input:checked ~ .toggle:hover {
		background-color: rgb(202, 202, 202);
	}

	input:checked ~ .toggle:hover:before {
		background-color: rgb(202, 202, 202);
	}

	.toggle::before {
		z-index: 2;
		content: "";
		top: 2px;
		right: 8px;
		width: 1px;
		height: 1px;
		display: block;
		position: absolute;
		border-radius: var(--toggle-height);
		background-color: none;
	}
	input:checked ~ .toggle::before {
		top: 1px;
		right: 15px;
		width: calc(var(--toggle-height) - 3px);
		height: calc(var(--toggle-height) - 7px);
		border-radius: var(--toggle-height);
		background-color: white;
	}
</style>
