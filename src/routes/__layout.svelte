<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />
<main>
	<slot />
</main>

<style>
	main {
		margin: 0 auto;
		margin-top: var(--nav-height);
		max-width: var(--max-width);
	}
</style>
