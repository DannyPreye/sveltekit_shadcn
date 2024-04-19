<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { goto } from '$app/navigation';
	import Button from '../ui/button/button.svelte';
	let query = '';

	function handleSubmit() {
		if (query) {
			goto(`/search/${query}`);
		}
	}

	console.log(query);
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class=" mx-auto flex h-[56px] w-full max-w-[70%] rounded-md border-2 border-border"
>
	<Input
		bind:value={query}
		class="h-full flex-1 border-none text-secondary outline-none focus:border-none focus:outline-none"
		placeholder="Search..."
	/>
	<Button class="h-full">Search</Button>
</form>
