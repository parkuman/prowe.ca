<script lang="ts">
	import { onMount } from "svelte";
	import { spotifyTopTracks } from "$lib/stores";

	let topTracks = null;
	let error = false;
	let timeRange: "short_term" | "medium_term" | "long_term" = "medium_term";

	onMount(async () => {
		fetchTopTracks("medium_term");
	});

	async function fetchTopTracks(newRange?: "short_term" | "medium_term" | "long_term") {
		timeRange = newRange;

		// if the store doesn't have a value already, fetch it from API and cache it in store
		if (!$spotifyTopTracks[newRange]) {
			const response = await fetch(`/api/spotify/top-tracks.json?time_range=${newRange}`);

			if (response.ok) {
				const topTracks = await response.json();
				$spotifyTopTracks[newRange] = topTracks;
			} else {
				error = true;
			}
		}

		topTracks = $spotifyTopTracks[newRange];
	}
</script>

<div class="song-list-header">
	<h3>Here's what I've been listening to lately:</h3>
	<div class="time-group time-group-desktop">
		<button
			class={timeRange === "long_term" ? "selected" : ""}
			on:click={() => fetchTopTracks("long_term")}
		>
			3 Yr
		</button>
		<button
			class={timeRange === "medium_term" ? "selected" : ""}
			on:click={() => fetchTopTracks("medium_term")}
		>
			6 mo
		</button>
		<button
			class={timeRange === "short_term" ? "selected" : ""}
			on:click={() => fetchTopTracks("short_term")}
		>
			4 wk
		</button>
	</div>
</div>

{#if topTracks && topTracks?.tracks.length}
	<ul>
		<li class="time-group-mobile-wrapper">
			<div class="time-group time-group-mobile">
				<button
					class={timeRange === "long_term" ? "selected" : ""}
					on:click={() => fetchTopTracks("long_term")}
				>
					3 Yr
				</button>
				<button
					class={timeRange === "medium_term" ? "selected" : ""}
					on:click={() => fetchTopTracks("medium_term")}
				>
					6 mo
				</button>
				<button
					class={timeRange === "short_term" ? "selected" : ""}
					on:click={() => fetchTopTracks("short_term")}
				>
					4 wk
				</button>
			</div>
		</li>
		{#each topTracks.tracks as track, i}
			<li>
				<a class="track" href={track.songUrl} target="_blank" rel="noopener noreferrer">
					<span>{String(i + 1).padStart(2, "0")}.</span>
					<img
						width="40"
						height="40"
						src={track.artwork}
						alt={`album artwork for ${track.album}`}
					/>
					<div>
						<b>{track.title}</b> <br />
						{track.artist} • {track.album}
					</div>
				</a>
			</li>
		{/each}
	</ul>
{:else if error}
	<code>error while fetching top tracks from spotify :[</code>
{:else}
	<code>fetching tracks...</code>
{/if}

<style>
	.song-list-header {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.time-group-mobile,
	.time-group-mobile-wrapper {
		display: none;
	}

	.time-group {
		border: 1px solid var(--color-primary);
		border-radius: var(--border-radius);
		transition: var(--transition);
	}

	.time-group button {
		margin: 0;
		padding: 10px;
		border: none;
		background: none;
		float: left;
		cursor: pointer;
		transition: var(--transition);
		color: var(--color-primary);
	}

	.time-group button:hover {
		background-color: rgba(var(--color-primary-rgb), 0.3);
	}

	.time-group button.selected {
		background-color: var(--color-primary);
		color: var(--color-bg);
	}

	.time-group button:nth-child(2) {
		border-right: 1px solid var(--color-primary);
		border-left: 1px solid var(--color-primary);
	}

	.track {
		text-decoration: none;
		color: var(--color-text);
		transition: var(--transition);
		border-radius: var(--border-radius);
		display: grid;
		grid-template-columns: 40px auto 1fr;
		padding: 5px;
		position: relative;
	}

	.track:hover {
		background-color: rgb(var(--color-primary-rgb), 0.3);
	}

	.track span {
		font-size: 0.8rem;
		color: var(--color-primary);
		font-family: var(--font-mono);
	}

	.track img {
		margin-right: 10px;
	}

	.track div {
		text-overflow: ellipsis;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	li {
		padding: 5px 0;
	}

	@media only screen and (max-width: 1200px) {
		.time-group-mobile-wrapper {
			display: block;
		}

		.time-group-mobile {
			display: inline;
			display: flex;
			flex-direction: column;
			height: 100%;
			margin-right: 10px;
		}

		.time-group button {
			flex: 1;
		}

		.time-group button:nth-child(2) {
			border-left: none;
			border-right: none;
			border-top: 1px solid var(--color-primary);
			border-bottom: 1px solid var(--color-primary);
		}

		.time-group-desktop {
			display: none;
		}

		.track {
			min-width: 70vw;
			min-height: 100%;
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
			padding: 15px;
			margin-right: 10px;
			border-radius: var(--border-radius);
			border: 1px solid var(--color-primary);
			text-align: center;
		}

		.track img {
			margin: 0 auto;
			margin-bottom: 10px;
		}

		.track span {
			position: absolute;
			right: 5px;
			top: 5px;
		}

		ul {
			overflow-x: auto;
			flex-direction: row;

			/* allow the tracks to overflow the padding on the right side */
			width: calc(100% + calc(100vw - var(--max-width)) / 2);
		}
	}
</style>