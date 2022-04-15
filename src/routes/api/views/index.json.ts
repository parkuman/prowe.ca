// returns the total amount of blog post views for the whole site

import prisma from "$lib/db";

export const get = async () => {
	const allViews = await prisma.views.aggregate({
		_sum: {
			count: true,
		},
	});

	return {
		body: allViews._sum.count.toString(),
	};
};
