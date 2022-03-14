<!-- https://utteranc.es/ -->
<script>
	import { onMount } from "svelte";

	const options = {
		src: "https://utteranc.es/client.js",
		repo: "parkuman/prowe.ca",
		label: "blog-comment",
		crossorigin: "anonymous",
		theme: "preferred-color-scheme",
		async: "",
		"issue-term": "pathname",
	};

	onMount(() => {
		const utteranceScript = document.createElement("script");
		const targetTag = document.getElementById("utterances-comments");

		const presetTheme = localStorage.getItem("theme");
		if (presetTheme) {
			const siteTheme = presetTheme === "dark" ? "github-dark" : "github-light";
			options.theme = siteTheme;
		}

		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop]);
		}

		targetTag.appendChild(utteranceScript);
	});
</script>

<div id="utterances-comments" />
