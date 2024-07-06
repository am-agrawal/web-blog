import React from 'react';
import dynamic from 'next/dynamic';
import CodeVector from '/assets/images/code.svg';

const CategoryCard = ({ name, _id }) => {
  const SvgIcon = dynamic(
    () => import(`/assets/images/${_id}.svg`).then((mod) => mod.default),
    {
      loading: () => <CodeVector className="w-12 h-12 text-sm " />,
      ssr: false,
    }
  );
  return (
    <div
      key={_id}
      className="bg-white rounded-lg p-10 h-64 w-48 flex flex-col justify-center items-start gap-8 font-semibold text-lg cursor-pointer hover:bg-violet-500 hover:text-white"
    >
      <SvgIcon className="w-12 h-12" />
      <h1>{name}</h1>
    </div>
  );
};

export default CategoryCard;
