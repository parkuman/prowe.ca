// returns the total amount of blog post views for the whole site
import pb from "$lib/db";

export const GET = async () => {
	const allViewRecords = await pb.collection("views").getFullList();
	const totalViews: number = allViewRecords.reduce(
		(accumulator, currentValue) => accumulator + currentValue.count,
		0,
	);

	return {
		body: totalViews.toString(),
	};
};
