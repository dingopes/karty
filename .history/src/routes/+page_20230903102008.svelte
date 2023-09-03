<script>
	import KartaHrac from './../lib/kartaHrac.svelte';
	import KartaLogo from '$lib/kartaLogo.svelte';
</script>

<div class="container mx-auto">
	<h1 class="h1 font-bold m-4 text-center">Svelte kartičky</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<KartaHrac iconId="beznyKralik" iconSize="45%" />
		<KartaLogo iconId="netopyr">
		<KartaHrac iconId="divnyKralik" />
	</div>

	<div class="mt-8 text-center">
		<button class="btn btn-xl bg-gradient-to-br variant-gradient-error-warning text-white">
			Reset game
		</button>
	</div>

	<div class="mt-8 text-center">
		<p>First with zero is looser</p>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
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
