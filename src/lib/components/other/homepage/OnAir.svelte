<script lang="ts">
	import MovieCard from './MovieCard.svelte';

	export let series: any;
</script>

<section class="item-center flex flex-col gap-4">
	<h2 class="font-montserrat text-xl font-bold text-gray-300">On Air</h2>
	<div class="grid-cols-auto-fit grid gap-4">
		{#each series as movie}
			<MovieCard movie={{ ...movie, media_type: 'tv' }} />
			<!-- content here -->
		{/each}
	</div>
</section>
