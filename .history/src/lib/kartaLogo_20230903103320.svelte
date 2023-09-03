<script>
	import SvgMagazin from './svgMagazin.svelte';

	export let iconId = '';
	export let logoSize = '60%';
</script>

<div class=" card variant-glass p-4 flex flex-column">
	<figure class="w-full">
		<div class="img-bg justify-center inset-0 m-auto" />
		<div class="icon flex" style="height:{logoSize} width:auto margin:auto;">
			<SvgMagazin {iconId} />

			<!-- SVG obsah -->
		</div>
	</figure>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	.icon {
		margin: auto;
	}
	.icon,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
