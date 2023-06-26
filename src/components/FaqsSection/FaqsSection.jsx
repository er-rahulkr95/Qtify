import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import styles from "./FaqsSection.module.css";
const FaqsSection = ({ faqs }) => {
  console.log(faqs);
  const [showIndex, setShowIndex] = useState(1);
  return (
    <div className={styles.faqsWrapper}>
      <div className={styles.faqs}>
        <h1 className={styles.faqHeading}>FAQs</h1>
        {faqs.map((faqsItem) => (
          <Accordion
            key={faqsItem.id}
            faqsContent={faqsItem}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqsSection;
