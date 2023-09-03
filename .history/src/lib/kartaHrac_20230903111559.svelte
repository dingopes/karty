<script>
	import Pocitadla from './pocitadla.svelte';
	import SvgMagazin from './svgMagazin.svelte';

	export let hrac = '';
	export let iconId = '';
	export let iconSize = '60%';
	export let score = 20;
</script>

<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
	<header class="card-header flex items-center flex-col space-y-6">
		<div class=""><h2 class="h2 pb-4">Tým {hrac}</h2></div>
		<span class="rounded-full w-40 flex justify-center aspect-square variant-soft-primary shrink-0">
			<div class="icon flex" style="width:{iconSize};">
				<SvgMagazin {iconId} />
			</div>
		</span>
	</header>
	<Pocitadla bind:score />
</div>
