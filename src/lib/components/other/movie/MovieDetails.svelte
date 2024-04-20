<script lang="ts">
	import { image_url } from '$lib';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Carousel from '$lib/components/ui/carousel';
	import moment from 'moment';

	export let movie: any;
	console.log(movie);

	$: formattedNumber = movie.budget.toLocaleString('en', {
		notation: 'compact',
		compactDisplay: 'short'
	});
</script>

<section class="flex flex-col gap-7 pb-12">
	<div class="flex flex-col gap-7 md:flex-row md:items-end">
		<img
			src={movie.poster_path
				? `${image_url}${movie.poster_path}`
				: `${image_url}${movie.backdrop_path}`}
			alt=""
			class="w-full max-w-[500px] rounded-md object-cover"
		/>
		<div class="flex flex-col gap-6">
			<h1 class="font-montserrat text-xl font-bold text-gray-300 md:text-2xl">
				{movie?.title || movie?.original_title}
			</h1>
			<div class="flex flex-col gap-2 font-lato">
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Release Date:</h3>
					<div class="flex gap-2">
						{moment(movie.release_date).format('DD MMM, YYYY ')}
					</div>
				</div>
				<div class="flex gap-3">
					<h3 class="text-lg font-bold text-gray-300">Genre:</h3>
					<div class="flex gap-2">
						{#each movie.genres as genre, index}
							<Badge>{genre?.name}</Badge>
						{/each}
					</div>
				</div>
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Language:</h3>
					<div class="flex gap-2">
						{movie?.original_language}
					</div>
				</div>
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Budget:</h3>
					<div class="flex gap-2">
						${formattedNumber}
					</div>
				</div>
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Popularity:</h3>
					<div class="flex gap-2">
						{movie?.popularity}
					</div>
				</div>
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Website:</h3>
					<a href={movie?.homepage} target="_blank" class="flex gap-2">
						{movie?.homepage}
					</a>
				</div>
				<div class="flex items-baseline gap-3 text-gray-300">
					<h3 class="text-lg font-bold">Overview:</h3>
					<p class="flex gap-2">
						{movie?.overview}
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-3">
		<h2 class="font-montserrat text-xl font-bold text-gray-300">Production Companies</h2>
		<div class="flex flex-wrap gap-6">
			{#each movie.production_companies as company}
				<div class="flex flex-col items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src={image_url + company?.logo_path} alt={company.name} />
						<Avatar.Fallback>{company?.name[0]}</Avatar.Fallback>
					</Avatar.Root>
					<p class="font-lato font-semibold text-gray-300">{company?.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
