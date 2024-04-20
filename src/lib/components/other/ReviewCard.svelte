<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { image_url } from '$lib';
	import Button from '../ui/button/button.svelte';

	export let review: any;
	let readmore = false;
	console.log(review);

	let content = review.content.split(' ');
	let shorten = content.slice(0, 20).join(' ');

	const handleReadmore = () => {
		shorten = content.join(' ');
		readmore = true;
	};
	const handleShorten = () => {
		shorten = content.slice(0, 20).join(' ');
		readmore = false;
	};
</script>

<Card.Root class="bg-gray-400 py-3">
	<Card.Content class="flex flex-col gap-4">
		<div class="flex items-center gap-4">
			<Avatar.Root class="bg-slate-800 text-gray-200">
				<Avatar.Image
					src={`${image_url}${review?.author_details?.avatar_path}`}
					alt={review?.author}
				/>
				<Avatar.Fallback
					>{review.author.split(' ')[0]} {review.author.split(' ')[1]}</Avatar.Fallback
				>
			</Avatar.Root>
			<Card.Title class="font-lato text-lg font-bold">{review.author}</Card.Title>
		</div>
		<Card.Description class="text-gray-200"
			>{shorten}
			{#if !readmore}
				...
			{/if}</Card.Description
		>
		<Button on:click={readmore ? handleShorten : handleReadmore}
			>{readmore ? 'Read Less' : 'Read more'}</Button
		>
	</Card.Content>
</Card.Root>
