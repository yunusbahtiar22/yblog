import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { getAllPosts, getPostById } from "../../lib/posts";
import { markdownToHtml } from "../../lib/markdown";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ meta, content }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{meta.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={meta.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(({ id }) => {
      return {
        params: {
          id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      ...post,
      content,
    },
  };
}
