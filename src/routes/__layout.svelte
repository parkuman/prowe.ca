<script>
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import ToTop from "$lib/components/ToTop.svelte";
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
