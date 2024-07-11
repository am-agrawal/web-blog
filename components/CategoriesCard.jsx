import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryCard } from '.';
import Link from 'next/link';

const CategoriesCard = ({ categories }) => {
  return (
    <div
      className="bg-[#EFF0F3] lg:px-32 md:px-24 px-4 py-10 flex flex-col gap-12"
      id="categories"
    >
      <div className="flex justify-between text-slate-700 md:text-lg text-xs font-semibold">
        <div>Browse The Categories &mdash;&mdash;</div>
        <Link href="/category">
          <button>
            See All Categories
            <FontAwesomeIcon icon={faAngleRight} size="sm" className="ml-2" />
          </button>
        </Link>
      </div>
      <div className="flex gap-8 lg:w-[calc(100vw-16rem)] md:w-[calc(100vw-12rem)] w-[calc(100vw-2rem)] overflow-x-scroll">
        {categories &&
          categories.map((category) => (
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

export default CategoriesCard;
