<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { image_url } from '$lib';
	import { goto } from '$app/navigation';

	export let movie: any;
</script>

<Card.Root
	on:click={() => goto(`/${movie.media_type == 'tv' ? 'tv' : 'movie'}/${movie?.id}`)}
	class="h-[350px] cursor-pointer overflow-hidden duration-700 hover:scale-95"
>
	<img
		class="h-[70%] w-full object-cover"
		src={movie?.backdrop_path
			? `${image_url}${movie?.backdrop_path}`
			: `${image_url}${movie?.poster_path}`}
		alt={movie?.title || movie.name}
	/>
	<Card.Content class="py-2">
		<Card.Title>{movie?.title || movie.name}</Card.Title>
		<Card.Description>Release Date: {movie?.release_date || movie?.first_air_date}</Card.Description
		>
		{#if movie.media_type}
			<Card.Description>Media Type: {movie?.media_type}</Card.Description>
		{/if}
	</Card.Content>
	<Card.Footer></Card.Footer>
</Card.Root>
