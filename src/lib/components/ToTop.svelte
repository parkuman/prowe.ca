<script>
	import { fly } from "svelte/transition";
	import Icon from "./Icon.svelte";
	let yPos;
</script>

{#if yPos > 10}
	<button
		title="scroll to top"
		on:click={() => {
			yPos = 0;
		}}
		transition:fly={{ y: 20, duration: 300 }}
	>
		<Icon name="chevrons-up" />
	</button>
{/if}

<svelte:window bind:scrollY={yPos} />

<style>
	button {
		position: fixed;
		right: 10px;
		bottom: 10px;
		width: 40px;
		height: 40px;
	}
</style>
