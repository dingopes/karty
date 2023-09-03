<script>
	import KartaHrac from './../lib/kartaHrac.svelte';
	import KartaLogo from '$lib/kartaLogo.svelte';
</script>

<div class="container mx-auto">
	<h1 class="h1 font-bold m-4 text-center">Svelte kartičky</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<KartaHrac iconId="beznyKralik" iconSize="45%" />
		<KartaLogo iconId="netopyr" />
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
