import type { Faq } from '../types/page/page';
import H2 from './atoms/H2';
import FAQItem from './FaqItem';

const FAQ = ({ faq }: { faq: Faq }) => {
  return (
    <section className="lg:px-15 mx-auto mb-16 max-w-screen-lg px-6 sm:mb-24 sm:px-10">
      <H2 id="landing-page-qa-title" className="text-center">
        よくある質問
      </H2>
      <div className="lg:px-15 text-gray-600">
        {faq.data.items.map((item) => (
          <FAQItem key={faq._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
