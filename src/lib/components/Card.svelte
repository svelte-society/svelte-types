<script lang="ts">
	export let title: string;
	export let code: string;
	export let order: string;

	let codeElement: HTMLElement;

	async function copyCode() {
		try {
			const text = codeElement.textContent;
			if (!text) return;
			await navigator.clipboard.writeText(text);
		} catch (error) {}
	}
</script>

<div class="rounded-md drop-shadow-lg grid gap-2 p-5 dark:bg-gray-700 bg-gray-300">
	<div class="flex flex-row place-content-between">
		<h2 id={title} class="text-xl font-bold pt-1"><a href="/#{title}">{title}</a></h2>
		<button on:click={copyCode} class="bg-orange-600 text-white px-4 py-2 rounded-lg">Copy </button>
	</div>
	<div class="overflow-x-auto" bind:this={codeElement}>{@html code}</div>
</div>

<style lang="postcss">
	div :global(pre) {
		@apply rounded-lg py-3 px-2 pr-6 overflow-x-auto;
	}
	div :global(code) {
		counter-reset: step;
		counter-increment: step 0;
	}

	div :global(code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
		user-select: none;
		-webkit-user-select: none;
	}
</style>
