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

<div
	class="rounded-md drop-shadow-lg grid gap-2 p-5 dark:bg-gray-700 bg-gray-300 grid-rows-[auto_1fr]"
>
	<div class="flex flex-row place-content-between">
		<h2 id={title} class="text-xl font-bold pt-1 hover:underline underline-offset-2">
			<a href="/#{title}"># {title}</a>
		</h2>
		<button on:click={copyCode} class=""
			><svg
				class="fill-white hover:fill-pink-600 transition-colors w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				><title>Copy code</title>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
				/>
			</svg>
		</button>
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
