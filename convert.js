import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminOptipng from 'imagemin-optipng';

(async () => {
	const files = await imagemin(['images/*.{jpg,png}'], {
		destination: 'output',
		plugins: [
			imageminWebp({
				quality: 100,
				method: 6,
				lossless: true,
			}),
			// imageminOptipng({ optimizationLevel: 3 }),
		],
	});
})();
