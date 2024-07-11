import React from 'react';
import { Intro, CategoriesCard } from '../../components';
import { getCategories, getConfigs } from '../../services';

export default function Home({ intro, categories }) {
  console.log('intro', intro);
  return (
    <div>
      <Intro intro={intro} />

      <CategoriesCard categories={categories} />

      {/* Blogs Grid */}
    </div>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || []
  const configs = (await getConfigs(['user_intro'])) || []
  const intro = configs.find(config => config.name === 'user_intro')?.configJson || {}

  return {
    props: { intro, categories }
  }
}
