<script>
	import KartaHrac from './../lib/kartaHrac.svelte';
	import KartaLogo from '$lib/kartaLogo.svelte';

	let score = 20;
	let isResetGameVisible = true;

	function resetScore() {
		score = 20;
		isResetGameVisible = false;
	}

	function isScoreZero() {
		return score === 0;
	}
</script>

<div class="container mx-auto">
	<h1 class="h1 font-bold m-4 text-center">Svelte kartičky</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<KartaHrac hrac="bezny kralik" iconId="beznyKralik" iconSize="45%" />
		<KartaLogo iconId="netopyr" />
		<KartaHrac hrac="divny kralik" iconId="divnyKralik" />
	</div>

	<div class="mt-8 text-center">
		{#if !isScoreZero() && isResetGameVisible}
			<button
				class="btn btn-xl bg-gradient-to-br variant-gradient-error-warning text-white"
				on:click={resetScore}
			>
				Reset score
			</button>
		{:else}
			<div class="btn btn-xl bg-gradient-to-br variant-gradient-success text-white">Hrát znovu</div>
		{/if}
	</div>
	<div class="mt-8 text-center">
		<p>First with zero is the loser</p>
	</div>
</div>
