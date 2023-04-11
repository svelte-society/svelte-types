<script lang="ts">
	export let firstName: string;
	export let lastName: string;

	// Inferred
	$: greeting = 'Hello ' + firstName;

	// Type it explicitly by creating a var like so 👇
	let fancyGreeting: string;
	$: fancyGreeting = 'Good evening ' + lastName;
</script>

{greeting}

{fancyGreeting}
