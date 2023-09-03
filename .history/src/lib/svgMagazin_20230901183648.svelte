<script>
	import DivnyKralik from '../xassets/divnyKralik.svg';
	import BeznyKralik from '../assets/beznyKralik.svg';

	// tady je potřeba registrovat ikony !!!
	let svgs = [
		{ name: 'beznyKralik', content: BeznyKralik },
		{ name: 'divnyKralik', content: DivnyKralik }
	];

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
