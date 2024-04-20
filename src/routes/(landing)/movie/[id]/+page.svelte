<script lang="ts">
	import ReviewCard from '$lib/components/other/ReviewCard.svelte';
	import MovieDetails from '$lib/components/other/movie/MovieDetails.svelte';
	import SimilarMovies from '$lib/components/other/movie/SimilarMovies.svelte';
	import Videos from '$lib/components/other/movie/Videos.svelte';
	import * as Carousel from '$lib/components/ui/carousel';

	export let data: any;

	const { movie, similarMovies, videos, reviews } = data;

	console.log(reviews);
</script>

<main>
	<MovieDetails {movie} />
	<Videos {videos} />
	<SimilarMovies {similarMovies} />
	<section class="mt-6 flex flex-col gap-4">
		<h2 class="font-montserrat text-xl font-bold text-gray-200">Reviews</h2>
		<Carousel.Root
			opts={{
				align: 'start'
			}}
			class="w-full md:max-w-[80vw]"
		>
			<Carousel.Content class="w-full items-stretch">
				{#each reviews as review}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<ReviewCard {review} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</section>
</main>
