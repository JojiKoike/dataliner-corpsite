import React from 'react';

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const H2: React.FC<Props> = ({ id, className, children }) => {
  return (
    <h2 id={id} className={`mb-6 text-2xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

export default H2;
