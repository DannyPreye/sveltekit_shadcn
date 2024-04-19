<script>
	import '../../app.pcss';
	import { navMenu } from '$lib/resuables/nav';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Search from '$lib/components/other/Search.svelte';

	let minimize = false;
	const pathname = $page.url.pathname;
</script>

<div class="flex min-h-screen flex-col bg-gray-800 md:flex-row">
	<div
		class="sticky left-0 top-0 z-20 flex justify-between rounded-b-xl bg-slate-600 py-6 sm:flex-col md:rounded-r-xl lg:h-screen"
	>
		<a
			href="/"
			class="font-mont font-montserrat flex items-center gap-3 px-4 text-lg font-bold text-gray-200 md:text-xl"
		>
			<span class="hidden md:block">Movie Theater</span> <i class="fa-solid fa-video"></i>
		</a>
		<div class="font-lato hidden flex-col gap-6 lg:flex">
			{#each navMenu as item, index}
				<a
					href={item.link}
					class={'relative flex h-[40px] w-full items-center gap-3 px-3 text-gray-300 duration-500 hover:scale-95 hover:text-primary ' +
						(pathname == item.link &&
							'text group overflow-hidden rounded-r-lg bg-slate-700 font-bold text-secondary  hover:text-primary-foreground')}
				>
					<span class=" bg-slate-5 absolute -left-full top-0 h-full w-full group-hover:left-0" />
					<i class={item.icon + ' relative'} />
					<span class="relative">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="flex flex-col border-t-[2px] border-primary py-4">
			<button></button>
		</div>
	</div>
	<div class=" flex flex-1 flex-col gap-5 p-5">
		<Search />
		<slot></slot>
	</div>
</div>
