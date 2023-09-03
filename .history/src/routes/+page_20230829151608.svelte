<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Svelte Karticky.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.2 52.26"><defs><style>.cls-1{fill:#221f20;}</style></defs><path class="cls-1" d="M43.14,24.79c-5.63,0-11.81,4.8-10.2,10.2,1.66,5.58,4.57,10.2,10.2,10.2s8.75-4.33,10.2-10.2C54.7,29.52,48.78,24.79,43.14,24.79ZM39.4,40.07a2.35,2.35,0,1,1,2.34-2.35A2.35,2.35,0,0,1,39.4,40.07Zm3.71-10.28-.09.49c-1.55-.29-2.63-.18-3,.3a1.34,1.34,0,0,0-.11,1.2l-.94.36a2.36,2.36,0,0,1,.28-2.2,1.83,1.83,0,0,1,.59-.47,1.79,1.79,0,0,1,.53-1.63,2.54,2.54,0,0,0,.09,1.39,6.82,6.82,0,0,1,2.69.05,6.81,6.81,0,0,1,2.73,0,2.58,2.58,0,0,0,.09-1.4,1.75,1.75,0,0,1,.51,1.65,1.7,1.7,0,0,1,.57.45,2.36,2.36,0,0,1,.28,2.2L46.82,32l-.46-.18a1.36,1.36,0,0,0-.12-1.2c-.41-.48-1.49-.59-3-.3Zm2.68,10.28a2.35,2.35,0,1,1,2.34-2.35A2.34,2.34,0,0,1,45.79,40.07Z"/><path class="cls-1" d="M36.72,38.84l-.71,1,.73-1s-10.43-1.9-8.85,12.55l-.1.14.11,0s0,.08,0,.12l.1-.14C42.13,48,36.72,38.84,36.72,38.84Z"/><path class="cls-1" d="M49.41,38.14,50,39.28l-.54-1.15s-6.91,8,6.36,14l.07.16a.76.76,0,0,0,0-.11l.11.05L55.92,52C60,38.09,49.41,38.14,49.41,38.14Z"/><path class="cls-1" d="M41,37.88a.88.88,0,1,1-.88-.87A.87.87,0,0,1,41,37.88Z"/><path class="cls-1" d="M45.91,37.88A.88.88,0,1,1,45,37,.88.88,0,0,1,45.91,37.88Z"/><path class="cls-1" d="M52.76,13.81c0,7.62-4.34,13.8-9.69,13.8s-9.7-6.18-9.7-13.8A18.35,18.35,0,0,1,34.88,6.4C36.6,2.55,39.63,0,43.07,0,48.42,0,52.76,6.18,52.76,13.81Z"/><path class="cls-1" d="M34.32,10.3s-2.48,8.4-12.11,2.59c0,0-.59,6.18-9.78,5.59,0,0-1.4,10.87-12.43,11.59a83.58,83.58,0,0,0,38.77-3.88Z"/><path class="cls-1" d="M52.88,10.3S55.36,18.7,65,12.89c0,0,.59,6.18,9.78,5.59,0,0,1.4,10.87,12.43,11.59,0,0-20.38,2.89-40.3-4.33Z"/></svg>
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a class="btn variant-filled" href="https://skeleton.dev/" target="_blank" rel="noreferrer">
				Launch Documentation
			</a>
		</div>
		<div class="space-y-2">
			<p>Try editing the following:</p>
			<p><code class="code">/src/routes/+layout.svelte</code></p>
			<p><code class="code">/src/routes/+page.svelte</code></p>
		</div>
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
