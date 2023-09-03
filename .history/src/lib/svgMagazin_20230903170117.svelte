<script>
	import DivnyKralik from '../assets/divnykralik.svg?raw';
	import BeznyKralik from '../assets/beznykralik.svg?raw';
	import Netopyr from '../assets/netopyr.svg?raw';

	// tady je potřeba registrovat ikony !!!
	let svgs = [
		{ name: 'beznyKralik', content: BeznyKralik },
		{ name: 'divnyKralik', content: DivnyKralik },
		{ name: 'netopyr', content: Netopyr }
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
