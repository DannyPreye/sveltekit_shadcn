<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import MovieCard from '../homepage/MovieCard.svelte';

	export let similarMovies: any;
	console.log(similarMovies);
</script>

<section class="mt-6 flex flex-col gap-4">
	<h2 class="font-montserrat text-xl font-bold text-gray-200">Similar Movies</h2>
	<Carousel.Root
		opts={{
			align: 'start'
		}}
		class="w-full md:max-w-[80vw]"
	>
		<Carousel.Content class="w-full items-stretch">
			{#each similarMovies as movie}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
					<MovieCard {movie} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
