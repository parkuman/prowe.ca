<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />
<main>
	<slot />
</main>

<style>
	main {
		margin-top: var(--nav-height);
	}
</style>
