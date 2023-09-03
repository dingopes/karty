<script>
	import SvgMagazin from './svgMagazin.svelte';

	export let iconId = '';
	export let logoSize = '60%';
</script>

<div class=" card variant-glass p-4 flex flex-column">
	<figure class="w-full">
		<div class="img-bg justify-center inset-0 m-auto" />
		<div class="icon flex" style="height:{logoSize} width:auto margin:auto;">
			<SvgMagazin {iconIdId} />

			<!-- SVG obsah -->
		</div>
	</figure>
</div>
