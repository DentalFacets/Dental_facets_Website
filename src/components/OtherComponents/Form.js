import React, { useEffect, useState } from "react";
import styles from "@/styles/Contact.module.css";
import Loader from "../transition/Loader";

function Form() {
  const Form_API = process.env.NEXT_PUBLIC_FORM_KEY;
  const [FullName, setFullName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState(0);
  const [Phone, setphone] = useState(0);
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [validate, isValidate] = useState(false);
  const [btnText, setBtnText] = useState("submit");
  const [loading, isloading] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      let err = {};
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (FullName.length == 0) {
        err.name = "false";
      } else {
        err.name = true;
      }

      if (Gender !== "") {
        err.Gender = true;
      } else {
        err.Gender = false;
      }

      if (Age >= 100 || Age == 0) {
        err.Age = false;
      } else {
        err.Age = true;
      }

      if (Phone == 0 || Phone.length >= 11 || Phone.length < 10) {
        err.Phone = false;
      } else {
        err.Phone = true;
      }

      if (Email.match(validRegex)) {
        err.Email = true;
      } else {
        err.Email = false;
      }

      if (
        err.name == true &&
        err.Age == true &&
        err.Phone == true &&
        err.Email == true &&
        err.Gender == true
      ) {
        return isValidate(true);
      } else {
        isValidate(false);
      }
    };
    validateForm();
  }, [FullName, Gender, Age, Phone, Email, Message]);

  async function handleSubmit(event) {
    event.preventDefault();
    isloading(true);
    setBtnText(<Loader />);

    const formData = new FormData(event.target);

    formData.append("access_key", Form_API);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      console.log(result);
    }
    event.target.disabled = true;

    setTimeout(() => {
      setBtnText("submitted!!");
    }, 3000);
  }

  return (
    <div className={styles.FormContainer}>
      <h2 className={"text-3xl font-extrabold pb-5"}>Book Your Appointment</h2>

      <form method="post" onSubmit={handleSubmit} autoComplete="on">
        <div className="md:grid md:grid-flow-row md:grid-cols-2">
          <div className={"md:my-5 md:mx-5 lg:my-5 lg:mx-5"}>
            <label className={"font-semibold"}>
              Full Name :
              <input
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                type="text"
                name="FullName"
                placeholder="Example:Harshit"
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                autoComplete="given-name"
                required
              />
            </label>
          </div>

          <div className={"md:my-5 md:mx-5 lg:my-5 lg:mx-5"}>
            <label className={"font-semibold"}>
              Gender :
              <select
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                name="Gender"
                onChange={(e) => setGender(e.target.value)}
                disabled={loading}
                required
                defaultValue={"DEFAULT"}
              >
                <option disabled value="DEFAULT" hidden>
                  choose gender..
                </option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"others"}>others</option>
              </select>
            </label>
          </div>

          <div className={"md:my-5 md:mx-5 lg:my-5 lg:mx-5"}>
            <label className={"font-semibold"}>
              Age :
              <input
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                type="number"
                name="Age"
                placeholder="Example:21"
                onChange={(e) => setAge(e.target.value)}
                disabled={loading}
                autoComplete="on"
                required
              />
            </label>
          </div>

          <div className={"md:my-5 md:mx-5 lg:my-5 lg:mx-5"}>
            <label className={"font-semibold"}>
              Contact No. :
              <input
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                type="number"
                name="Phone"
                placeholder="Example:844*****06"
                onChange={(e) => setphone(e.target.value)}
                disabled={loading}
                autoComplete="tel-local"
                required
              />
            </label>
          </div>

          <div className={"md:my-5 md:mx-5 lg:my-5 lg:mx-5"}>
            <label className={"font-semibold"}>
              Email Id :
              <input
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                type="text"
                name="email"
                placeholder="Example:@844*****06.com"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <div className={"md:m-5 lg:m-5"}>
            <label className={"font-semibold"}>
              Appointment for :
              <select
                className={` ${styles.inp} ${
                  validate ? "focus:outline-lime-300" : "focus:outline-red-500"
                }`}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              >
                <option value={"Consultant"}>Consultation</option>
                <option value={"root canal Treatment"}>
                  Root Canal Treatment
                </option>
                <option value={"crown and bridge"}>Crown and Bridge</option>
                <option value={"Dental Implant"}>Dental Implants</option>
                <option value={"Teeth whitening"}>Zoom Teeth Whitening</option>
                <option value={"Oral and Gum care"}>Oral and Gum care</option>
                <option value={"Braces and Aligners"}>
                  Braces and Aligners
                </option>
                <option value={"Wisdom Tooth Surgery"}>
                  Wisdom Tooth Surgery
                </option>
                <option value={"Wisdom Tooth Surgery"}>
                  Facial and TMD Disorder
                </option>
              </select>
            </label>
          </div>
        </div>

        <div className={"flex items-center justify-center"}>
          <button
            className="w-full bg-lime-500 rounded-md p-4 text-xl text-slate-900 font-bold"
            type="submit"
            disabled={loading}
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
