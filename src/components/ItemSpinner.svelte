<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { fly } from "svelte/transition";
	import Icon from "$components/Icon.svelte";

	export let items: string[] = [];
	export let withIcon: boolean = false;

	let activeIndex = 0;

	let interval;
	onMount(() => {
		interval = setInterval(() => {
			activeIndex = (activeIndex + 1) % items.length;
		}, 3000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<ul>
	{#each items as item, i}
		{#if activeIndex === i}
			<li id={i.toString()} in:fly={{ y: 0, duration: 200 }} out:fly={{ y: 100, duration: 200 }}>
				{item}

				{#if withIcon}
					<span><Icon name={item.toLowerCase()}  /></span>
				{/if}
			</li>
		{/if}
	{/each}
</ul>

<style>
	li {
		display: inline-block;
		position: absolute;
	}

	ul {
		display: inline;
		list-style: none;
	}

	span {
		display: inline-block;
		position: absolute;
		right: -30px;
	}
</style>
