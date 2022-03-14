// most of this was from scott spence, thanks scott! https://scottspence.com/posts/make-a-sitemap-with-sveltekit

import { metadata } from "$lib/config";

export async function get() {
	const pages = ["/", "/blog", "/projects", "/tags"];

	const blogPostRes = await fetch(`${metadata.baseUrl}/api/blog.json`);
	const postFrontmatters = await blogPostRes.json();
	const body = sitemap(postFrontmatters, pages);

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};
	return {
		headers,
		body,
	};
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${metadata.baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>

  ${pages
		.map(
			(page) =>
				`
        <url>
        <loc>${metadata.baseUrl}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
        `,
		)
		.join("")}
  ${posts
		.map(
			(post) =>
				`
          <url>
            <loc>${metadata.baseUrl}/blog/${post.slug}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `,
		)
		.join("")}

</urlset>`;
