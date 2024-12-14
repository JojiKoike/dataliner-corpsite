import type { Article } from '../types/docs/article';

export const NavigationArticleList = ({
  articles,
  current,
}: {
  articles: Article[];
  current?: Article;
}) => {
  return (
    <ul className="pl-2">
      {articles.map((article) => (
        <li className="pl-6 text-base" key={article._id}>
          <a
            href={`/docs/${article.slug}`}
            className="relative inline-block py-[3px] text-gray-500 transition-colors hover:text-gray-800"
            aria-current={current?.slug === article.slug}
          >
            {article.title}
            <span className="absolute left-[-18px] top-3 h-1 w-1 rounded-full bg-gray-800"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};
