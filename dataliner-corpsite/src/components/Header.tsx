import Logo from './Logo';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴと会社名 */}
          <div className="flex flex-shrink-0 items-center">
            <Logo useImage={false} className="mr-2 h-8 w-8" />
          </div>
          {/* PC用ナビゲーション */}
          <div className="hidden md:flex">
            <nav className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500"
              >
                ホーム
              </a>
              <a
                href="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500"
              >
                事業概要
              </a>
              <a
                href="/blog"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500"
              >
                ブログ
              </a>
              <a
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
          {/* モバイル用ハンバーガーメニュー */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-blue-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                // 閉じるアイコン
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // ハンバーガーアイコン
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500"
            >
              ホーム
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500"
            >
              事業概要
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500"
            >
              ブログ
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
