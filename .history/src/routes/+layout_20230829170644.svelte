<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Svelte</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023/learn/lecture/37124094?start=30#overview"
					target="_blank"
					rel="noreferrer"
				>
					Udemy
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
