<script>
	import { onMount } from "svelte";
	import Icon from "$components/Icon.svelte";

	let data = null;

	onMount(async () => {
		const response = await fetch("/api/now-playing.json");
		const nowPlayingJson = await response.json();

		data = nowPlayingJson;
	});
</script>

<p>
	{#if data && data?.isPlaying}
		<a target="_blank" href={data.songUrl} title="open song on Spotify">
			<Icon name="spotify" />
			<b>{data.title}</b> - {data.artist}
		</a>
	{:else}
		<a href="https://open.spotify.com/user/parkuman" title="check out my profile!">
			<Icon name="spotify" />
			<b>Not Listening</b> - Spotify
		</a>
	{/if}
</p>

<style>
	p {
		margin-bottom: 20px;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
		padding: 5px;
		transition: var(--transition);
		border-radius: var(--border-radius);
	}

	a:hover {
		background-color: rgb(var(--color-primary-rgb), 0.3);
	}
</style>
