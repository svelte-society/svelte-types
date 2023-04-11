<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<header class="min-h-24 shadow-lg w-full">
	<div class="flex place-content-between place-items-center w-full max-w-5xl mx-auto">
		<h1 class="text-2xl font-extrabold text-center p-5">
			Svelte and SvelteKit TypeScript Cheatsheet
		</h1>
		<div class="">
			<button>Print</button>
			<button>Share</button>
			<button>GitHub</button>
			<div>Sponsor</div>
		</div>
	</div>
</header>
<main class="mx-auto px-4">
	<div class="text-center text-lg my-12">
		<p>Ever wondered how to type props, slots, events, etc. in your projects? Here's how 👇</p>
		<div class="mt-6">Sponsor</div>
	</div>
	<div class="grid gap-5 lg:grid-cols-2 max-w-screen-2xl">
		{#each data.cards as card}
			<Card {...card} />
		{/each}
	</div>
</main>

<footer class="mx-auto">Footie</footer>

<style lang="postcss">
	:global(body) {
		@apply dark:bg-gray-800 grid dark:text-gray-100 bg-slate-50 text-gray-950;
	}
</style>
