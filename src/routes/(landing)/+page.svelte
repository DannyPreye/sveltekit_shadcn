<script lang="ts">
	import OnAir from '$lib/components/other/homepage/OnAir.svelte';
	import TrendingMovies from '$lib/components/other/homepage/TrendingMovies.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
	const { movies, tvSeries } = data;
</script>

<main class="flex flex-col gap-6">
	<TrendingMovies {movies} />
	<OnAir series={tvSeries} />
</main>
