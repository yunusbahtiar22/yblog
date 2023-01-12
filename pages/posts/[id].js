import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { getAllPosts, getPostById } from "../../lib/posts";
import { markdownToHtml } from "../../lib/markdown";

export default function Post({ meta, content }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <h1 className="text-2xl font-extrabold mb-2">{meta.title}</h1>
        <div className="font-light text-gray-500 text-md mb-4">
          <Date dateString={meta.date} />
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
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
