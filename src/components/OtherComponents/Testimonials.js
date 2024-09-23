import React from "react";
import styles from "@/styles/Testimonials/Testimonials.module.css";
import { DoubleQuotes } from "@/svgs/OtherIcon";
const review = [
  {
    name: "Mrs. Preeti jain",
    para: "I had my wisdom tooth removed here, and the entire process was smooth and painless. The staff took great care of me, and I’m recovering very well. Highly recommend this clinic!",
  },
  {
    name: "Mrs. Salma Hussain ",
    para: "I was nervous about my root canal, but the procedure was completely pain-free, and the team was very professional. I’m really satisfied with the treatment I received.",
  },
  {
    name: "Master Parth wadhwani",
    para: "I started my braces treatment here, and everything has been going great so far. The orthodontist is very attentive, and I’m excited to see my new smile soon!",
  },
  {
    name: "Dr. Karishma Chawla",
    para: "I came in for scaling and filling, and the procedure was quick and comfortable. My teeth feel so much cleaner now, and the team was very thorough. Wonderful experience!",
  },
  {
    name: "Dr. Abha Aggarwal",
    para: "I recently got a dental implant here, and I am very happy with the results. The whole process was professional and efficient, and my new tooth looks and feels natural.",
  },
  {
    name: "Dr. Pauldeep kaur",
    para: "The implant procedure I underwent at this clinic was excellent. The staff was caring, and I’m very satisfied with how everything turned out. My smile feels complete again!",
  },
  {
    name: "Mr. Sanjay Katyal",
    para: "I had an implant and bridge done here, and I couldn’t be happier. The staff was knowledgeable and friendly, and the results are fantastic. My teeth feel strong and look great.",
  },
];

function Testimonials({ data }) {
  return (
    <div className={styles.testimonial_section}>
      <h2 className={styles.testimonial_title}>What Our Patients Say</h2>
      <div className={styles.testimonial_container}>
        {review.map((elem, index) => {
          return (
            <div className={styles.testimonial_card} key={index}>
              <p className={styles.testimonial_text}>
                <DoubleQuotes width={"4vh"} rotate={"rotate(180)"} />
                {elem.para ? elem.para : ""}
              </p>
              <h3 className={styles.testimonial_author}>{elem.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
