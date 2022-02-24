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

<span class="aria-label">{isDarkMode ? THEMES.DARK : THEMES.LIGHT} mode</span>
<input type="checkbox" on:click={toggleTheme} bind:checked={isDarkMode} />
