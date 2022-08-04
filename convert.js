import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminOptipng from 'imagemin-optipng';

const resize = {
	common: {
		scoopL: { width: 188, height: 188 },
		scoopS: { width: 132, height: 132 },
	},
	desktop: {
		banner: { width: 1200, height: 526 },

		// -배라 메뉴-
		icecream1: { width: 230, height: 260 },
		icecream2: { width: 195, height: 210 },
		cake: { width: 300, height: 245 },
		coffee: { width: 160, height: 230 },
		beverage: { width: 165, height: 265 },
		dessert: { width: 140, height: 205 },
		gift: { width: 200, height: 175 },
		order: { width: 200, height: 200 },
		store: { width: 792, height: 467 },
		insta: { width: 240, height: 240 },
		// [모바일]
	},
	mobile: {
		bannerL: { width: 768, height: 822 },
		orderL: { width: 356, height: 356 },
		orderS: { width: 232, height: 232 },
		store: { width: 675, height: 368 },
	},
};

const menu = {
	'188/**': 'webp/menu/product/',
};

const convert = async (from, to) => {
	await imagemin([`${from}.{jpg,png,webp}`], {
		destination: to,
		plugins: [
			imageminWebp({
				quality: 100,
				method: 6,
				// lossless: true,
			}),
			// imageminOptipng({ optimizationLevel: 7 }),
		],
	});
};

Object.entries(store).forEach((e) => {
	let [from, to] = e;
	convert(from, to);
});
