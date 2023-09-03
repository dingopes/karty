<script>
	import DivnyKralik from '../assets/divnyKralik.svg';
	import BeznyKralik from '../assets/beznyKralik.svg';

	// tady je potřeba registrovat ikony !!!
	let svgs = [
		{ name: 'beznyKralik', content: BeznyKralik },
		{ name: 'divnyKralik', content: DivnyKralik }
	];

	export let iconId;
</script>

<svg class="icon" viewBox="0 0 24 24">
	<use xlink:href={'#' + iconId} />
</svg>

<svg style="display: none;">
	{#each svgs as svg}
		<symbol id={svg.name}>
			{@html svg.content}
		</symbol>
	{/each}
</svg>
