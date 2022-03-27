<script>
	import { onMount } from "svelte";
	import Icon from "$components/Icon.svelte";

	let data = null;

	onMount(async () => {
		const response = await fetch("/api/spotify/now-playing.json");
		const nowPlayingJson = await response.json();

		data = nowPlayingJson;
	});
</script>

<p>
	{#if data && data?.isPlaying}
		<a target="_blank" rel="noopener noreferrer" href={data.songUrl} title="open song on Spotify">
			<span><Icon name="spotify" width="1.5rem" height="1.5rem" /></span>
			<b>{data.title}</b> - {data.artist}
			<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="#1CCC5B"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect id="eq-1" width="2" height="14" />
				<rect id="eq-2" x="4" width="2" height="14" />
				<rect id="eq-3" x="8" width="2" height="14" />
				<rect id="eq-4" x="12" width="2" height="14" />
			</svg>
		</a>
	{:else}
		<a href="https://open.spotify.com/user/parkuman" title="check out my profile!">
			<span><Icon name="spotify" width="1.5rem" height="1.5rem" /></span> <b>Not Listening</b> - Spotify
		</a>
	{/if}
</p>

<style>
	@keyframes bounce {
		0% {
			transform: translateY(0%);
		}
		50% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
	#eq-1,
	#eq-2,
	#eq-3,
	#eq-4 {
		animation: bounce 1000ms;
		animation-iteration-count: infinite;
	}

	#eq-2 {
		animation-delay: 0.3s;
	}
	#eq-3 {
		animation-delay: 0.6s;
	}
	#eq-4 {
		animation-delay: 0.9s;
	}

	p {
		margin-bottom: 20px;
		text-align: center;
	}

	a {
		position: relative;
		text-decoration: none;
		color: rgba(var(--color-text-rgb), 0.7);
		padding: 6px 12px;
		transition: var(--transition);
		border-radius: var(--border-radius);
	}

	b {
		color: var(--color-text);
	}

	a:hover {
		background-color: rgb(var(--color-primary-rgb), 0.3);
	}

	span {
		display: inline-block;
		position: relative;
		top: 6px;
		margin-right: 10px;
	}

	svg {
		margin-left: 10px;
	}
</style>
