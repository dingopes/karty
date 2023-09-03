<script>
	import DivnyKralik from '../assets/divnyKralik.svg';
	import BeznyKralik from '../assets/beznyKralik.svg';

	// tady je potřeba registrovat ikony !!!
	let svgs = [
		{ name: 'beznyKralik', content: BeznyKralik },
		{ name: 'divnyKralik', content: DivnyKralik }
	];
</script>

<svg style="display: none;">
	{#each svgs as svg}
		<symbol id={svg.name}>
			{@html svg.content}
		</symbol>
	{/each}
</svg>
