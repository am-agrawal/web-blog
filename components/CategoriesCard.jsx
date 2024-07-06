import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryCard from './CategoryCard';

const CategoriesCard = () => {
  const categoriesData = [
    {
      id: 'javascript',
      name: 'JavaScript',
      image: '/images/javascript.png',
    },
    {
      id: 'python',
      name: 'Python',
      image: '/images/python.png',
    },
    {
      id: 'react-js',
      name: 'React JS',
      image: '/images/react.png',
    },
    {
      id: 'node-js',
      name: 'Node JS',
      image: '/images/node.png',
    },
    // {
    //   id: 'mongo-db',
    //   name: 'MongoDB',
    //   image: '/images/mongodb.png',
    // },
    // {
    //   id: 'express-js',
    //   name: 'Express JS',
    //   image: '/images/express.png',
    // },
  ];

  return (
    <div
      className="bg-[#EFF0F3] px-32 py-10 flex flex-col gap-12"
      id="categories"
    >
      <div className="flex justify-between text-slate-700 text-lg font-semibold">
        <button>Browse The Categories &mdash;&mdash;</button>
        <button>
          See All Categories
          <FontAwesomeIcon icon={faAngleRight} size="sm" className="ml-2" />
        </button>
      </div>
      <div className='flex gap-8'>
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
