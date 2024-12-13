import type { Faq } from '../types/page/page';
import FAQItem from './FaqItem';

const FAQ = ({ faq }: { faq: Faq }) => {
  return (
    <section className="lg:px-15 mx-auto mb-16 max-w-screen-lg px-6 sm:mb-24 sm:px-10">
      <h2 className="mb-7 text-center text-2xl font-bold leading-snug sm:mb-12 sm:text-3xl">
        よくある質問
      </h2>
      <div className="lg:px-15 text-gray-600">
        {faq.data.items.map((item) => (
          <FAQItem key={faq._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
