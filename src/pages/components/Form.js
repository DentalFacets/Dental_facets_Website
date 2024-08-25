import React ,{ useCallback, useEffect, useState } from 'react' 
import styles from "./styles/Contact.module.css"
import { CircularProgress } from '@mui/material'  
import AOS from 'aos';
import 'aos/dist/aos.css' 

function Form() {

  useEffect(()=>{
    AOS.init({
      delay:100,
      throttleDelay:100
    });
  },[])
  
  const [ firstName , setFirstName] = useState("")
  const [ lastName , setlastName] = useState("")
  const [ age , setAge] = useState(0)
  const [ phone , setphone] = useState(0)
  const [ Email , setEmail] = useState("")
  const [ Message , setMessage] = useState("")
  const [validate , isValidate] = useState(false);
  const [btnText , setBtnText] =useState("submit")
  const [loading , isloading] = useState(false)

    useEffect(() => {
      const validateForm = () =>{
      let err ={};
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      if( firstName.length == 0 ){ err.name = 'Enter a valid name' } else { err.name = true }
      
      if (age >= 100 || age == 0){ err.age = false } else { err.age = true}

      if (phone.length >= 11 || phone.length <= 9) { err.phone = false  } else { err.phone = true }

      if ( Email.match(validRegex)) { err.Email = true } else { err.Email = false}


      if (err.name == true && err.age == true && err.phone == true && err.Email == true) {
        return isValidate(true)
      }else{
        isValidate(false)
      }

   }
      validateForm();     
    }, [firstName, lastName , age , phone , Email, Message ]);


    async function handleSubmit(event) {
    event.preventDefault();
    isloading(true)
    setBtnText(<CircularProgress/>)

    const formData = new FormData(event.target);

      formData.append("access_key", "d77457fb-b913-4204-b2c7-6c0a457fc9b6");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();

      if (result.success) {
          console.log(result);
      }
    event.target.disabled = true

    setTimeout(() => {  
      setBtnText("submitted!!")
      
    }, 4000);
}
  return (
    <div className={styles.FormContainer} data-aos="fade-up">

      <h2 className={'text-3xl font-extrabold pb-5'}>Book Your Appointment</h2>

      <form method='post' className={styles.bookForm} onSubmit={handleSubmit}>
        <div className='md:grid md:grid-flow-row md:grid-cols-2'>

          <div className={'md:my-5 md:mx-5 lg:my-5 lg:mx-5'}>
            <label className = {'font-semibold'}> First Name :</label>
            <input 
              className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`}
              type="text"
              name="firstName"
              placeholder='Example:Harshit'
              onChange={e=>setFirstName(e.target.value)}
              disabled={loading}
              required 
              />
          </div>

          <div className={'md:my-5 md:mx-5 lg:my-5 lg:mx-5'}>
            <label className = {'font-semibold'}> Last Name :</label>
            <input 
            className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`}
            type="text" 
            name="lastName" 
            placeholder='Example:varun'
            onChange={e=>setlastName(e.target.value)}
            disabled={loading}
            />
          </div>

          <div className={'md:my-5 md:mx-5 lg:my-5 lg:mx-5'}>
            <label className = {'font-semibold'}> Age :</label>
            <input 
              className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`}
              type="number"
              name="age"
              placeholder='Example:21'
              onChange={e=>setAge(e.target.value)}
              disabled={loading}
              required
              />
          </div>

          <div className={'md:my-5 md:mx-5 lg:my-5 lg:mx-5'}>
             <label className = {'font-semibold'}> Contact No. :</label>
            <input  
              className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`} 
              type="number" 
              name="phone" 
              placeholder='Example:844*****06'
              onChange={e=>setphone(e.target.value)}
              disabled={loading}
              required
              />
          </div>

          <div className={'md:my-5 md:mx-5 lg:my-5 lg:mx-5'}>
             <label className = {'font-semibold'}> Email Id :</label>
            <input  
              className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`} 
              type="text" 
              name="email" 
              placeholder='Example:@844*****06.com'
              onChange={e=>setEmail(e.target.value)}
              disabled={loading}
              required
              />
          </div>

          <div className={'md:m-5 lg:m-5'}>
            <label className = {'font-semibold'}> Problem/message for Us :</label>
            <textarea
              className={` ${styles.inp} ${validate? "focus:outline-lime-300" : "focus:outline-red-500"}`}
              placeholder='Example: Consultant'
              maxLength={200}
              name='message'
              onChange={e=>setMessage(e.target.value)}
              disabled={loading}
              />
          </div>
        </div>

        <div className={'flex items-center justify-center'}>
          <button className='w-full bg-lime-500 rounded-md p-4 text-xl' type='submit' disabled={loading}>{btnText}</button>
        </div>

      </form>
    </div>
  )
}

export default Form