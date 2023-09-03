<script>
	export let icon = '';
</script>

<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
	<header class="card-header flex items-center flex-col space-y-6">
		<div class=""><h2 class="h2 pb-4">Tym bezny kralik</h2></div>
		<span class="rounded-full w-40 flex justify-center aspect-square variant-soft-primary shrink-0">
			<div class="icon">
				{#if icon}
					<img>
						src={icon}
            </img>
				{/if}
			</div>
		</span>
	</header>
	<div class="p-4 space-y-4">
		<h3 class="h3">Score</h3>
		<p class="block font-bold text-8xl">20</p>
	</div>
	<div class="logo-cloud grid-cols-1 lg:!grid-cols-2 gap-1">
		<a class="logo-item" href="/">
			<span class="block font-bold text-8xl">-</span>
		</a>
		<a class="logo-item" href="/">
			<span class="block font-bold text-8xl">+</span>
		</a>
		<!-- ... -->
	</div>
</div>
