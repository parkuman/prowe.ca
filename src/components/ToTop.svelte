<script>
	import { fly } from "svelte/transition";
	import Icon from "./Icon.svelte";
	let yPos;
</script>

{#if yPos > 200}
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
		--to-top-size: 40px;
		position: fixed;
		right: calc(100% / 2);
		/* center the button by removing half its width */
		margin-right: calc(-1 * var(--to-top-size) / 2);
		bottom: 100px;
		width: var(--to-top-size);
		height: var(--to-top-size);
		opacity: 30%;
	}

	button:hover {
		opacity: 100%;
	}

	@media only screen and (max-width: 768px) {
		button {
			margin-right: 0;
			right: 20px;
			bottom: 20px;
		}
	}
</style>
