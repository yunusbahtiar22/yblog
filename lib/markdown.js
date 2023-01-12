import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
