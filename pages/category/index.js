import React from 'react';
import CategoryCard from '../../components/CategoryCard';

const Category = () => {
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
    <div className="bg-[#EFF0F3] lg:px-32 md:px-24 px-8 py-10 min-h-screen">
      <div className="text-slate-700 md:text-lg text-sm font-semibold mb-12">
        Browse The Categories &mdash;&mdash;
      </div>
      <div className="md:grid flex flex-col lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-14 items-center">
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

export default Category;
