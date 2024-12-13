const Logo = ({
  useImage,
  className,
}: {
  useImage: boolean;
  className: string;
}) => (
  <a href="/" className="flex items-center">
    {useImage && <img src="/logo.png" alt="会社ロゴ" className={className} />}
    <span className="text-xl font-bold">DataLiner</span>
  </a>
);

export default Logo;
