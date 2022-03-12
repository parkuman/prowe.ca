/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_NOTION_API_KEY: string;
	VITE_NOTION_BLOG_DB: string;

	VITE_SPOTIFY_CLIENT_ID: string;
	VITE_SPOTIFY_CLIENT_SECRET: string;
	VITE_SPOTIFY_REFRESH_TOKEN: string;
}
