<script>
	import KartaHrac from './../lib/kartaHrac.svelte';
</script>

<div class="container mx-auto">
	<h1 class="h1 font-bold m-4 text-center">Svelte kartičky</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<KartaHrac iconId="circle" />
		<div class=" card variant-glass p-4 flex flex-column">
			<figure class="w-full">
				<div class="img-bg justify-center inset-0 m-auto" />
				<svg
					style="margin:auto"
					id="f02f7fd4-47c2-4da3-b660-59bd652a77b2"
					data-name="Layer 1
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 87.2 52.26"
					><defs
						><style>
							.f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac {
								fill: rgb(220, 244, 242);
							}
						</style></defs
					><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M43.14,24.79c-5.63,0-11.81,4.8-10.2,10.2,1.66,5.58,4.57,10.2,10.2,10.2s8.75-4.33,10.2-10.2C54.7,29.52,48.78,24.79,43.14,24.79ZM39.4,40.07a2.35,2.35,0,1,1,2.34-2.36h0A2.36,2.36,0,0,1,39.4,40.07Zm3.71-10.28-.09.49c-1.55-.29-2.63-.18-3,.3a1.34,1.34,0,0,0-.11,1.2l-.94.36a2.37,2.37,0,0,1,.28-2.2,1.68,1.68,0,0,1,.59-.47,1.8,1.8,0,0,1,.53-1.63,2.54,2.54,0,0,0,.09,1.39,6.77,6.77,0,0,1,2.69.05,7,7,0,0,1,2.73,0,2.56,2.56,0,0,0,.09-1.4,1.75,1.75,0,0,1,.51,1.65,1.78,1.78,0,0,1,.57.45,2.37,2.37,0,0,1,.28,2.2L46.82,32l-.46-.18a1.37,1.37,0,0,0-.12-1.2c-.41-.48-1.49-.59-3-.3Zm2.68,10.28a2.35,2.35,0,1,1,2.34-2.36h0a2.34,2.34,0,0,1-2.33,2.35Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M36.72,38.84l-.71,1,.73-1s-10.43-1.9-8.85,12.55l-.1.14h.11v.12l.1-.14C42.13,48,36.72,38.84,36.72,38.84Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M49.41,38.14,50,39.28l-.54-1.15s-6.91,8,6.36,14l.07.16v-.11l.11,0L55.92,52C60,38.09,49.41,38.14,49.41,38.14Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M41,37.88a.88.88,0,1,1-.89-.87h0a.87.87,0,0,1,.88.86Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M45.91,37.88A.88.88,0,1,1,45,37a.87.87,0,0,1,.91.88Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M52.76,13.81c0,7.62-4.34,13.8-9.69,13.8s-9.7-6.18-9.7-13.8A18.33,18.33,0,0,1,34.88,6.4C36.6,2.55,39.63,0,43.07,0,48.42,0,52.76,6.18,52.76,13.81Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M34.32,10.3s-2.48,8.4-12.11,2.59c0,0-.59,6.18-9.78,5.59,0,0-1.4,10.87-12.43,11.59a83.57,83.57,0,0,0,38.77-3.88Z"
					/><path
						class="f9e34c69-5a1e-46b7-b9dd-7a0cacd682ac"
						d="M51.65,10S55.36,18.7,65,12.89c0,0,.59,6.18,9.78,5.59,0,0,1.4,10.87,12.43,11.59,0,0-20.38,2.89-40.3-4.33Z"
					/></svg
				>

				<!-- SVG obsah -->
			</figure>
		</div>
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
