// most of this was from scott spence, thanks scott! https://scottspence.com/posts/make-an-rss-feed-with-sveltekit

import { metadata } from "$lib/config";
import type { PostFrontmatter } from "$types/BlogPost";

/**
 * Get an RSS pubDate from a Javascript Date instance.
 * @param Date
 * @return String
 * @author https://gist.github.com/samhernandez/5260558
 */
function pubDate(date: Date) {
	const pieces = date.toString().split(" "),
		offsetTime = pieces[5].match(/[-+]\d{4}/),
		offset = offsetTime ? offsetTime : pieces[5],
		parts = [pieces[0] + ",", pieces[2], pieces[1], pieces[3], pieces[4], offset];

	return parts.join(" ");
}

export async function get() {
	const blogPostRes = await fetch(`${metadata.baseUrl}/api/blog.json`);
	const postFrontmatters = await blogPostRes.json();

	const body = xml(postFrontmatters);

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};

	return {
		headers,
		body,
	};
}

const xml = (
	postFrontmatters: PostFrontmatter[],
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
<channel>
  <title>
    <![CDATA[ Parker Rowe's Blog! ]]>
  </title>
  <description>
    <![CDATA[ A place where I write about tech and other stuff in my life :) ]]>
  </description>
  <link>${metadata.baseUrl}</link>
  <generator>RSS for Node</generator>
  <lastBuildDate>${new Date()}</lastBuildDate>
  <atom:link href="${metadata.baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
  ${postFrontmatters
		.map(
			(postFrontmatter) =>
				`
      <item>
        <title>
          <![CDATA[ ${postFrontmatter.title} ]]>
        </title>
        <description>
          <![CDATA[ ${postFrontmatter.summary} ]]>
        </description>
        <link>${metadata.baseUrl}/blog/${postFrontmatter.slug}/</link>
        <guid isPermaLink="false">${metadata.baseUrl}/blog/${postFrontmatter.slug}/</guid>
        <dc:creator>
          <![CDATA[ ${postFrontmatter.author} ]]>
        </dc:creator>
        <pubDate>
          ${pubDate(new Date(postFrontmatter.date))}
        </pubDate>
        <content:encoded>
          <div style="margin-top: 50px; font-style: italic;">
            <strong>
              <a href="${metadata.baseUrl}/blog/${postFrontmatter.slug}">
                Keep reading
              </a>.
            </strong>  
          </div>
        </content:encoded>
      </item>
    `,
		)
		.join("")}
</channel>
</rss>
`;
