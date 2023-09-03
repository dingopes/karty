<script>
	import KartaHrac from './../lib/kartaHrac.svelte';
	import KartaLogo from '$lib/kartaLogo.svelte';

	let score1 = 20;
	let score2 = 20;
	let isResetGameVisible = true;

	function resetScore() {
		score1 = 20;
		score2 = 20;
		isResetGameVisible = false;
	}

	function isScoreZero() {
		return score1 === 0 || score2 === 0;
	}

	function playAgain() {
		score1 = 20;
		score2 = 20;
		isResetGameVisible = true;
	}
</script>

<div class="container mx-auto">
	<h1 class="h1 font-bold m-4 text-center">Svelte kartičky</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<KartaHrac hrac="bezny kralik" iconId="beznyKralik" iconSize="45%" bind:score={score1} />
		<KartaLogo iconId="netopyr" />
		<KartaHrac hrac="divny kralik" iconId="divnyKralik" iconSize="45%" bind:score={score2} />
	</div>
	<div class="mt-8 text-center">
		{#if !isScoreZero() && isResetGameVisible}
			<button
				class="btn btn-xl bg-gradient-to-br variant-gradient-error-warning text-white"
				on:click={resetScore}
			>
				Reset game
			</button>
		{:else if isResetGameVisible}
			<button
				class="btn btn-xl bg-gradient-to-br variant-gradient-success text-white"
				on:click={playAgain}
			>
				Hrát znovu
			</button>
		{/if}
	</div>
	<div class="mt-8 text-center">
		<p>First with zero is the loser</p>
	</div>
</div>
