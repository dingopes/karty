<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container mx-auto">
	<h2 class="text-2xl font-bold mb-4 text-center">Svelte kartičky</h2>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div class="bg-white rounded-lg shadow-md p-4">
			<!-- obsah první karty -->
		</div>
		<div class="bg-white rounded-lg shadow-md p-4">
			<!-- obsah druhé karty -->
		</div>
		<div class="bg-white rounded-lg shadow-md p-4">
			<!-- obsah třetí karty -->
		</div>
	</div>

	<div class="mt-8">
		<figure>
			<!-- SVG obsah -->
		</figure>
	</div>

	<div class="mt-8 text-center">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Reset game
		</button>
	</div>

	<div class="mt-8">
		<p>First with zero is:</p>
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
