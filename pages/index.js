import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
    </Layout>
  );
}
