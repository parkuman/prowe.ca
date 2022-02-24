import db from "$lib/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const user = db.prepare("SELECT * FROM users WHERE id=?").get(params.id);

	if (user) {
		return {
			body: {
				user
			}
		};
	}

	return {
		status: 404
	};
}
