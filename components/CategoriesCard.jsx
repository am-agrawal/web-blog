import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryCard } from '.';
import Link from 'next/link';

const CategoriesCard = () => {
  const categoriesData = [
    {
      id: 'javascript',
      name: 'JavaScript',
    },
    {
      id: 'python',
      name: 'Python',
    },
    {
      id: 'react-js',
      name: 'React JS',
    },
    {
      id: 'next-js',
      name: 'Next JS',
    },
    {
      id: 'vue-js',
      name: 'Vue JS',
    },
    {
      id: 'node-js',
      name: 'Node JS',
    },
    {
      id: 'mongo-db',
      name: 'MongoDB',
    },
    {
      id: 'express-js',
      name: 'Express JS',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
    },
    {
      id: 'html',
      name: 'HTML',
    },
    {
      id: 'css',
      name: 'CSS',
    },
    {
      id: 'aws',
      name: 'AWS',
    },
    {
      id: 'django',
      name: 'Django',
    },
    {
      id: 'flask',
      name: 'Flask',
    },
    {
      id: 'fast-api',
      name: 'Fast API',
    },
    {
      id: 'docker',
      name: 'Docker',
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
    },
    {
      id: 'git',
      name: 'Git',
    },
    {
      id: 'github',
      name: 'GitHub',
    },
    {
      id: 'cpp',
      name: 'C++',
    },
    {
      id: 'mysql',
      name: 'MySQL',
    },
    {
      id: 'android-dev',
      name: 'Android Dev',
    },
    {
      id: 'angular-js',
      name: 'Angular JS',
    },
    {
      id: 'redis',
      name: 'Redis',
    },
  ];

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
        {categoriesData.map((category) => (
          <CategoryCard
            key={category.id}
            _id={category.id}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
