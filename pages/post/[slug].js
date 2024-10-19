import React from 'react';
import { useRouter } from 'next/router';

import {
  getPosts,
  getPostDetails,
  getCategories,
  getComments,
  getSimilarPosts,
  getRecentPosts,
} from '../../services';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';

const PostDetails = ({ post, categories, comments, relatedPosts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments comments={comments} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
              relatedPosts={relatedPosts}
            />
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const categories = (await getCategories()) || [];
  const comments = (await getComments(params.slug)) || [];
  let relatedPosts = [];
  if (params.slug) {
    const categoriesSlugs = categories.map((category) => category.slug);
    relatedPosts = (await getSimilarPosts(categoriesSlugs, params.slug)) || [];
  } else {
    relatedPosts = (await getRecentPosts()) || [];
  }

  return {
    props: { post: data, categories, comments, relatedPosts },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
