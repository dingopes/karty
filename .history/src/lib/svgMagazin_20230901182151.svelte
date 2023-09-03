<script>
	let BeznyKralik;
	let DivnyKralik;

	import('../assets/beznyKralik.svg').then((module) => {
		BeznyKralik = module.default;
	});

	import('../assets/divnyKralik.svg').then((module) => {
		DivnyKralik = module.default;
	});

	let svgs = [];

	$: svgs = [
		{ name: 'beznyKralik', content: BeznyKralik },
		{ name: 'divnyKralik', content: DivnyKralik }
	].filter((svg) => svg.content);

	export let iconId = '';
</script>

<svg class="icon">
	<use xlink:href={'#' + iconId} />
</svg>

<svg style="display: none;">
	{#each svgs as svg}
		<symbol id={svg.name}>
			{@html svg.content}
		</symbol>
	{/each}
</svg>
