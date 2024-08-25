import React, { useState } from "react";
import styles from "./styles/ServicePage.module.css";
import { ReadMore } from "../lib/svgs/OtherIcon";

function Faq() {
  let [visibleFaq, setvisibleFaq] = useState(false);
  let [state, setstate] = useState(0);

  const handleClick = (e) => {
    setstate(e);
    setvisibleFaq((prev) => !prev);
  };
  const handleClickchange = (key) => {
    if (key == state && visibleFaq == false) {
      return true;
    }
  };

  const FaqData = [
    {
      head: "Do I really need to floss?",
      para: "There's no getting around the need to get around your teeth daily with dental floss. It clears food and plaque from between teeth and under the gumline. If you don't, plaque hardens into tartar, which forms wedges and widens the space between teeth and gums, causing pockets. Over time, gums pull away and teeth loosen.",
      key: 1,
    },

    {
      head: "How often should I visit the dentist?",
      para: "It’s generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, the frequency may vary based on your individual oral health needs.",
      key: 2,
    },

    {
      head: "Why are regular dental cleanings important?",
      para: "Regular cleanings help remove plaque and tartar buildup that can lead to cavities and gum disease, ensuring your teeth and gums stay healthy.",
      key: 3,
    },

    {
      head: "What is fluoride treatment, and do I need it?",
      para: "Fluoride treatment strengthens teeth and helps prevent cavities. It’s especially beneficial for children, but adults at high risk for cavities may also benefit from it.",
      key: 4,
    },

    {
      head: "What is teeth whitening, and how long does it last?",
      para: "Teeth whitening is a cosmetic procedure that lightens teeth and removes stains. The results can last from several months to a few years, depending on your lifestyle and oral care habits.",
      key: 5,
    },
  ];
  return (
    <div className="flex flex-col justify-center p-5">
      <h3 className="bg-cyan-950 p-5 rounded-t-xl text-white text-center text-lg font-bold">
        Frequently Asked Questions (FAQs)
      </h3>
      <div>
        {FaqData.map((elem, index) => {
          return (
            <div className={styles.perFaq} key={index}>
              <button
                className={styles.faqBtn}
                onClick={() => handleClick(index)}
              >
                <span className={"text-left"}>{elem.head}</span>
                <i>
                  <ReadMore />
                </i>
              </button>
              <div
                className={` ${styles.paraDiv} ${
                  handleClickchange(index) ? "max-h-[28rem]" : "max-h-[0]"
                }`}
              >
                <p>{elem.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
