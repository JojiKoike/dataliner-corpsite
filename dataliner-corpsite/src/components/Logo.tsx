import React from 'react';

interface Props {
  className: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <a href="/" className="flex items-center">
    <img src="/logo.png" alt="会社ロゴ" className={className} />
    <span className="text-xl font-bold">DataLiner</span>
  </a>
);

export default Logo;
