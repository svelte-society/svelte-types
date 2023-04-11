<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Svelte and SvelteKit TypeScript Cheatsheet</title>
</svelte:head>

<header class="min-h-24 shadow-lg w-full">
	<div class="flex place-content-between place-items-center w-full max-w-5xl mx-auto">
		<h1 class="text-2xl font-extrabold text-center p-5">
			Svelte and SvelteKit TypeScript Cheatsheet
		</h1>
		<div class="flex flex-row gap-4 place-content-center">
			<button
				><svg
					class="fill-white hover:fill-pink-600 w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<title>Print</title>
					<path
						fill-rule="evenodd"
						d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button
				><svg
					class="fill-white hover:fill-pink-600 w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<title>Share</title>
					<path
						fill-rule="evenodd"
						d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<a href="https://github.com/svelte-society/svelte-types" target="_blank"
				><svg
					class="fill-white hover:fill-pink-600 w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 480 512"
					><title>GitHub</title><path
						d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
					/></svg
				></a
			>
		</div>
	</div>
</header>
<main class="mx-auto px-4">
	<div class="text-center text-lg my-12 grid place-items-center">
		<p>Ever wondered how to type props, slots, events, etc. in your projects? Here's how 👇</p>
		<div class="mt-6 bg-black rounded-md w-1/2 py-8">Sponsor</div>
	</div>
	<div class="grid gap-5 grid-flow-dense lg:grid-cols-2 max-w-screen-2xl">
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
