<script>
	import Nav from "$components/Nav.svelte";
	import Footer from "$components/Footer.svelte";
	import ToTop from "$components/ToTop.svelte";
	import "$styles/global.css";
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />
<ToTop />

<style>
	main {
		margin: 0 auto;
		margin-top: var(--nav-height);
		max-width: var(--max-width);
	}
</style>
