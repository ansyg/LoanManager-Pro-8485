import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

interface ContentLayoutProps {
  title: string;
  sections: Section[];
}

const ContentLayout: FC<ContentLayoutProps> = ({ title, sections }) => {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </div>

      {/* Table of Contents */}
      <div className="w-72 hidden lg:block">
        <div className="sticky top-24">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <TableOfContentsItem key={section.id} id={section.id} title={section.title} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const Section: FC<Section> = ({ id, title, content }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0.3, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="prose max-w-none">{content}</div>
    </motion.section>
  );
};

const TableOfContentsItem: FC<{ id: string; title: string }> = ({ id, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <a
      href={`#${id}`}
      ref={ref}
      className={`block py-2 px-4 rounded transition-colors ${
        inView
          ? 'bg-primary-50 text-primary-600 font-medium'
          : 'text-gray-600 hover:text-primary-600'
      }`}
    >
      {title}
    </a>
  );
};

export default ContentLayout;