import { writable } from "svelte/store";

export const spotifyTopTracks = writable({
	short_term: null,
	medium_term: null,
	long_term: null,
});
