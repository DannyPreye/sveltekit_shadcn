<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';

	export let movies: any;
	console.log(movies[6]);
</script>

<section class="item-center flex flex-col gap-4">
	<h2 class="font-montserrat text-xl font-bold text-gray-300">Trending Movies</h2>
	<Carousel.Root
		opts={{
			align: 'start'
		}}
		class="w-full md:max-w-[80vw]"
	>
		<Carousel.Content class="w-full items-stretch">
			{#each movies as movie}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
					<MovieCard {movie} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
