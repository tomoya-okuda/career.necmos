import React, { useState } from 'react';
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
    <div>
      <button onClick={toggleAccordion}>{question}</button>
      <div
        className={styles.accordion}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
        }}
      >
        <div className={styles.panel}>{answer}</div>
      </div>
    </div>
  );
};

export default React.memo(QuestionAccordion);
