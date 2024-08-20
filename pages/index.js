import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Benny's Blog</title>
        <meta name="description" content="I blog about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

// 1) Hero section => Present ourselves
// 2) Featured Posts
