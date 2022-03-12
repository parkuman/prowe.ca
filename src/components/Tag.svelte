<script lang="ts">
	type TagColor =
		| "default"
		| "gray"
		| "brown"
		| "orange"
		| "yellow"
		| "green"
		| "blue"
		| "purple"
		| "pink"
		| "red";

	export let text: string;
	export let color: TagColor = "default";
	export let href: string = null;
</script>

<a {href} class={color}>{text}</a>

<style>
	.default {
		--color-tag-bg: 180, 180, 180;
	}
	.gray {
		--color-tag-bg: 117, 117, 115;
	}
	.brown {
		--color-tag-bg: 170, 80, 45;
	}
	.orange {
		--color-tag-bg: 255, 146, 57;
	}
	.yellow {
		--color-tag-bg: 255, 208, 0;
	}
	.green {
		--color-tag-bg: 79, 194, 79;
	}
	.blue {
		--color-tag-bg: 22, 97, 195;
	}
	.purple {
		--color-tag-bg: 110, 63, 161;
	}
	.pink {
		--color-tag-bg: 165, 56, 108;
	}
	.red {
		--color-tag-bg: 161, 38, 38;
	}

	a {
		background-color: rgba(var(--color-tag-bg), 0.4);
		border-radius: var(--border-radius);
		padding: 2px 10px;
		margin: 0 2px;
		text-decoration: none;
		color: var(--color-text);
		font-family: var(--font-mono);
		transition: var(--transition);
		font-size: 0.8rem;
	}

	a:hover {
		background-color: rgba(var(--color-tag-bg), 0.7);
	}
</style>
