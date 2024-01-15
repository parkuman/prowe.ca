import pb from "$lib/db";

// returns the total amount of blog post views for a given slug
export const GET = async ({ params }) => {
	const { slug } = params;

	try {
		const existingRecord = await pb.collection("views").getFirstListItem(`slug="${slug}"`);

		return {
			body: {
				total: existingRecord.count.toString(),
			},
		};
	} catch (err) {
		return {
			status: 404,
			body: {
				message: err.message,
			},
		};
	}
};

// increments the total amount of views for a given slug / creates a new one if it doesn't exist
export const POST = async ({ params }) => {
	const { slug } = params;

	console.log("ENV", import.meta.env.VITE_ENV);

	try {
		const existingRecord = await pb.collection("views").getFirstListItem(`slug="${slug}"`);
		const updatedRecord = await pb.collection("views").update(existingRecord.id, {
			count: existingRecord.count + 1,
		});

		return {
			body: {
				total: updatedRecord.count.toString(),
			},
		};
	} catch (err) {
		if (err.status === 404) {
			const newRecord = await pb.collection("views").create({
				slug,
				count: 1,
			});

			return {
				body: {
					total: newRecord.count.toString(), // should be 1 since we just made it
				},
			};
		}

		return {
			status: 500,
			body: {
				message: err.message,
			},
		};
	}
};
