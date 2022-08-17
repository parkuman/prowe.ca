import prisma from "$lib/db";

// returns the total amount of blog post views for a given slug
export const GET = async ({ params }) => {
	const { slug } = params;
	
	const views = await prisma.views.findUnique({
		where: {
			slug,
		},
	});

	if (!views) {
		return {
			status: 404,
			body: { message: "Sorry, no views with the given slug could be found" },
		};
	}

	return {
		body: {
			total: views.count.toString(),
		},
	};
};

// increments the total amount of views for a given slug / creates a new one if it doesn't exist
export const POST = async ({ params }) => {
	const { slug } = params;

	const upsertViews = await prisma.views.upsert({
		where: {
			slug,
		},
		update: {
			count: {
				increment: 1,
			},
		},
		create: {
			slug,
		},
	});

	return {
		body: {
			total: upsertViews.count.toString(),
		},
	};
};
