import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	compilerOptions: { runes: true },
	kit: {
		// Fully static (SSG) — every route is prerendered to HTML.
		adapter: adapter(),
		paths: { base: '' }, // custom domain archive.modref.org → served at root
		prerender: {
			// The paper/slide PDFs live under /files and are added at deploy time,
			// so ignore those during prerender; fail on any other broken link.
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/files/')) return;
				throw new Error(message);
			}
		}
	}
};
