import React from 'react';
import { CategoryCard } from '../../components';
import { getCategories } from '../../services';

export default function Category({ categories }) {
  return (
    <div className="bg-[#EFF0F3] lg:px-32 md:px-24 px-8 py-10 min-h-[calc(100vh-4rem)]">
      <div className="text-slate-700 md:text-lg text-sm font-semibold mb-12">
        Browse The Categories &mdash;&mdash;
      </div>
      <div className="grid justify-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-14 items-center">
        {categories && categories.map((category) => (
          <CategoryCard
            key={category.slug}
            _id={category.slug}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || []

  return {
    props: { categories }
  }
}
