import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), purgeCss()]
};
