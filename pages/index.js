import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
import { getAllPosts } from "../lib/posts";
import { useEffect } from "react";

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  useEffect(() => console.log(allPostsData));
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Personal Blog by{" "}
          <a href="https://twitter.com/amanofordinary" target="_blank">
            Yunus Bahtiar
          </a>
        </p>
        <p className={utilStyles.headingMd}>Hello, I am a web developer 👋</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, meta }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{meta.title}</Link>
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
