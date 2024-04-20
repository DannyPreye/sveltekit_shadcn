<script>
	export let videos;
	import Youtube from 'svelte-youtube-embed';
</script>

<section class="my-6">
	<div class="flex flex-col gap-5">
		<h2 class="text-xl font-bold text-gray-300">Trailer</h2>
		<Youtube class="rounded-md" id={videos.find((video) => video.type === 'Trailer').key} />
	</div>
</section>
