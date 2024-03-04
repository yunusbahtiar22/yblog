import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getAllPosts } from "../lib/posts";
import Markdown from "react-markdown";
import { octokit } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  const raw = await octokit.rest.repos.getContent({
    owner: "yunusbahtiar22",
    repo: "yblog",
    path: "README.md",
    mediaType: {
      format: "raw"
    }
  })
  const dirs = await octokit.rest.repos.getContent({
    owner: "yunusbahtiar22",
    repo: "yblog",
    mediaType: {
      format: "raw"
    }
  })
  const { data: content } = JSON.parse(JSON.stringify(raw))
  const { data: directories } = JSON.parse(JSON.stringify(dirs))
  directories
    .filter(({ type }) => type === "dir")
    .forEach(({ name }, idx) => {
      console.log(`${idx}. ${name}`)
    });

  return {
    props: {
      allPostsData,
      content
    },
  };
}

export default function Home({ allPostsData, content }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <h2 className="text-xl my-4">Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, meta }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className="font-extrabold" href={`posts/${id}`}>
                {meta.title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={meta.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Markdown>
          {content}
        </Markdown>
      </section>
    </Layout>
  );
}
