import type NavLink from "$types/NavLink";

export const metadata = {
	title: "Parker Rowe - Engineer, Developer.",
	description: "Computer Engineer with a passion for Web and Computer Vision technologies.",
	baseUrl: import.meta.env.VITE_SITE_URL,
};

export const navLinks: NavLink[] = [
	{ href: "/", text: "About" },
	{ href: "/projects", text: "Projects" },
	{ href: "/blog", text: "Blog" },
];
