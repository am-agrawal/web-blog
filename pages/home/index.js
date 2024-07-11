import React from 'react';
import { Intro, CategoriesCard } from '../../components';
import { getCategories } from '../../services';

export default function Home({ categories }) {
  return (
    <div>
      <Intro />

      <CategoriesCard categories={categories} />

      {/* Blogs Grid */}
    </div>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || []

  return {
    props: { categories }
  }
}
