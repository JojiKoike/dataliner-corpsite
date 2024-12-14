import React, { useEffect, useState } from 'react';
import type { Category } from '../types/docs/category';
import type { Article } from '../types/docs/article';

export const NavigationCategory = ({
  category,
  current,
  children,
}: {
  category: Category;
  current?: Article;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (current && current.category._id === category._id) {
      setIsOpen(true);
    }
  }, [category, current]);

  return (
    <dl className="mb-3">
      <dt
        className="relative -ml-1.5 mb-2 inline-block cursor-pointer text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="relative mr-1 inline-block h-4 w-4"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#888"
              fillRule="nonzero"
              d="M13.825 7.15833333 10 10.975 6.175 7.15833333l-1.175 1.175 5 4.99999997 5-4.99999997z"
            />
          </svg>
        ) : (
          <svg
            className="relative mr-1 inline-block h-4 w-4"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#888"
              fillRule="nonzero"
              d="m8.33333333 5-1.175 1.175L10.975 10l-3.81666667 3.825 1.175 1.175 4.99999997-5z"
            />
          </svg>
        )}
        {category.name}
      </dt>
      {isOpen && <dd className="ml-2 border-l border-gray-300">{children}</dd>}
    </dl>
  );
};
