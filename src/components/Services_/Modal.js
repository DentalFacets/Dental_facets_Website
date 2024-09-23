import styles from "@/styles/Modal/Modal.module.css"; // Create a modal CSS file for styling
import { useEffect, useRef } from "react";
import Image from "next/image";

const Modal = ({ show, onClose, item }) => {
  const modalRef = useRef(null); // Create a reference for the modal content

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the clicked element is outside the modal content
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener when the component is unmounted or updated
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackground}>
      <div ref={modalRef} className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <Image
          src={item.img}
          alt={item.label}
          className={styles.modalImage}
          width={300}
          height={200}
          style={{ width: "100%", height: "auto" }}
        />
        <h2 className={styles.modalTitle}>{item.label}</h2>
        <p className={styles.modalParagraph}>{item.para}</p>
      </div>
    </div>
  );
};

export default Modal;
