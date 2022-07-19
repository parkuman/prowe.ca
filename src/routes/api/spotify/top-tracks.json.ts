import { getTopTracks } from "$lib/spotify";

export const GET = async ({ url }) => {
	const time_range = url.searchParams.get("time_range") ?? "medium_term";

	const response = await getTopTracks(time_range);
	const { items } = await response.json();
	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		title: track.name,
		artwork: track.album.images[2].url, // 64x64
		album: track.album.name,
	}));

	return {
		status: 200,
		body: {
			tracks,
		},
	};
};
