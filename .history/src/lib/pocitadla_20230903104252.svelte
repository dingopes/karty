<script>
	export let score = 20;

	function increaseScore() {
		if (score < 20) {
			score += 1;
		}
	}

	function decreaseScore() {
		score -= 1;
	}
</script>

<div class="p-4 space-y-4">
	<h3 class="h3">Score</h3>
	<p class="block font-bold text-8xl">{score}</p>
</div>

<div class="logo-cloud grid-cols-1 lg:!grid-cols-2 gap-1">
	<a class="logo-item" href="#" on:click|preventDefault={decreaseScore}>
		<span class="block font-bold text-8xl">-</span>
	</a>
	<a class="logo-item" href="#" on:click|preventDefault={increaseScore}>
		<span class="block font-bold text-8xl">+</span>
	</a>
	<!-- ... -->
</div>
