import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import remarkTwoslash from "remark-shiki-twoslash";

export async function markdownToHtml(markdown) {
  const result = await remark()
    // .use(prism)
    .use(html, { sanitize: false })
    .use(remarkTwoslash, {theme: "dark-plus"})
    .process(markdown);
  return result.toString();
}
