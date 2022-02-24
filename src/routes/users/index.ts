import db from "$lib/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const users = await db.prepare("SELECT * FROM users").all();

	if (users) {
		return {
			body: {
				users
			}
		};
	}

	return {
		status: 404
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const body = await request.json();
	console.log(body);

	if (body.firstName && body.lastName) {
		console.log("adding to db: ", body);

		const insert = db.prepare(
			"INSERT INTO users (firstName, lastName) VALUES (@firstName, @lastName)"
		);

		const query = db.transaction(() => {
			insert.run(body);
		});

		query();

		return {
			status: 200
		};
	}

	return {
		status: 500
	};
}
