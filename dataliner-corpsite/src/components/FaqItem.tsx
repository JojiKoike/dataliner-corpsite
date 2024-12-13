import type { FaqItem } from '../types/page/page';
import { useState } from 'react';

const FAQItem = ({ item }: { item: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dl className="mb-4 overflow-hidden rounded-md border border-gray-300">
      {/* Question */}
      <dt
        className="flex cursor-pointer items-center px-5 py-4 text-lg font-bold leading-snug sm:px-7 sm:py-6 sm:text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <em className="w-8 flex-shrink-0 text-base font-normal sm:text-lg">
          Q.
        </em>
        <span className="mr-4 mt-1 sm:mt-0">{item.question}</span>
        {isOpen ? (
          <svg
            className="ml-auto flex-shrink-0 rotate-180 transform transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        ) : (
          <svg
            className="ml-auto flex-shrink-0 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        )}
      </dt>
      {/* Answer */}
      {isOpen && (
        <dd className="flex border-t border-gray-300 bg-gray-100 px-5 py-2 sm:px-7 sm:py-4">
          <em className="w-8 flex-shrink-0 text-base font-normal sm:text-lg">
            A.
          </em>
          <p className="mt-1">{item.answer}</p>
        </dd>
      )}
    </dl>
  );
};

export default FAQItem;
