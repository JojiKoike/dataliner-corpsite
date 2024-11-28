import React from 'react';

interface Props {
  useImage: boolean;
  className: string;
}

const Logo: React.FC<Props> = ({ useImage, className }) => (
  <a href="/" className="flex items-center">
    {useImage && <img src="/logo.png" alt="会社ロゴ" className={className} />}
    <span className="text-xl font-bold">DataLiner</span>
  </a>
);

export default Logo;
