<script context="module">
	export async function load({ url }) {
		return {
			props: { currentPage: url.pathname },
		};
	}
</script>

<script>
	import Nav from "$components/Nav.svelte";
	import Footer from "$components/Footer.svelte";
	import ToTop from "$components/ToTop.svelte";
	import "$styles/global.css";

	export let currentPage;
</script>

<Nav {currentPage} />
<main>
	<slot />
	<ToTop />
	<Footer />
</main>

<style>
	main {
		margin: 0 auto;
		margin-top: var(--nav-height);
		max-width: var(--max-content-width);
	}
</style>
