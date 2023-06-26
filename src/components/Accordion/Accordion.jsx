import React from "react";
import styles from "./Accordion.module.css";
import { ReactComponent as UpArrow } from "../../assets/upArrow.svg";
import { ReactComponent as DownArrow } from "../../assets/downArrow.svg";
const Accordion = ({ faqsContent, showIndex, setShowIndex }) => {
  let handleShow = (id) => {
    if (showIndex !== id) {
      setShowIndex(id);
    } else {
      setShowIndex(-1);
    }
  };
  return (
    <div className={styles.accordionWrapper}>
      <div
        className={styles.accordion}
        onClick={() => handleShow(faqsContent.id)}
      >
        {/* {showIndex === faqsContent.id && (
              <img
                src="/bannerimg.png"
                className="h-[46px] w-full  -z-20 absolute object-cover "
                alt="faq selected backround"
              />
            )} */}
        <p className={styles.faqsQuery}>{faqsContent.query}</p>
        {/* {showIndex !== faqsContent.id ? (
              <img
                src="/minusSign.svg"
                alt="Click to expand"
                className="pr-2 md:pr-8"
              />
            ) : (
              <img
                src="/plusSign.svg"
                alt="Click to Collapse"
                className="pr-2 md:pr-8"
              />
            )} */}

        {/* {showIndex !== faqsContent.id ? (
              <DownArrow className={styles.arrows}/>
            ) : (
              <UpArrow className={styles.arrows}/>
            )} */}

        {/* <DownArrow className={`${styles.arrows} ${showIndex !== faqsContent.id && styles.arrowActive}`}/> */}
        <svg
          width="31"
          height="19"
          viewBox="0 0 31 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.arrow} ${showIndex !== faqsContent.id ? "" : styles.arrowActive}`}
        >
          <path
            d="M13.7031 17.2969C14.6406 18.3125 16.2812 18.3125 17.2188 17.2969L29.7188 4.79688C30.7344 3.85938 30.7344 2.21875 29.7188 1.28125C28.7812 0.265625 27.1406 0.265625 26.2031 1.28125L15.5 11.9844L4.71875 1.28125C3.78125 0.265625 2.14062 0.265625 1.20312 1.28125C0.1875 2.21875 0.1875 3.85938 1.20312 4.79688L13.7031 17.2969Z"
            fill="#34C94B"
          />
        </svg>
      </div>
      <div>
        <p
          className={`${styles.faqsDescription} ${
            showIndex === faqsContent.id && styles.active
          }`}
        >
          {faqsContent.desc}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
