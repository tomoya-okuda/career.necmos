'use client';

import React, { useState } from 'react';
import ArrowIcon from '@/components/ArrowIcon';
import styles from 'src/components/styles/QuestionAccordion.module.scss';

interface QuestionAccordionProps {
  question: string;
  answer: React.ReactNode;
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleAccordion}>
        {question}
        <ArrowIcon isOpen={isOpen} color="#222222" />
      </button>
      <div
        className={styles.accordion}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          transition: isOpen
            ? 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            : 'max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className={styles.panel}>{answer}</div>
      </div>
    </div>
  );
};

export default React.memo(QuestionAccordion);
