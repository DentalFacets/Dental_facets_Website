import React, { Fragment , useEffect } from 'react'
import styles from "./components/styles/ServicePage.module.css"
import Faq from './components/Faq'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Contactbanner from './components/Contactbanner';

function ServicePage() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      throttleDelay:100
    });
    
  },[])

  const rows = [
    {key : 1 , label : " Preventive Care "},
    {key : 2 , label : " Restorative Dentistry "},
    {key : 3 , label : " Cosmetic Dentistry "},
    {key : 4 , label : " Orthodontics " , href:"#sec3"},
    {key : 5 , label : " Periodontal (Gum) Care "},
    {key : 6 , label : " Oral Surgery "},
    {key : 7 , label : " Pediatric Dentistry "},
  ]

  const defDAta =[
    {head :"Preventive Care" , defi : "Regular check-ups, cleanings, and other preventive measures to maintain your oral health and prevent issues before they arise",  key : 0},

    {head :"Restorative Dentistry " , defi :"Restorative Dentistry involves repairing and restoring damaged or missing teeth to improve their function and appearance.", key : 1},

    {head :"Cosmetic Dentistry" , defi : "Cosmetic Dentistry focuses on enhancing the appearance of your smile through treatments like teeth whitening, veneers, and bonding.", key : 2},

    {head :"Orthodontics" , defi : "Orthodontics is the branch of dentistry that corrects misaligned teeth and jaws using braces, clear aligners, and other treatments.", key : 3},


    {head :"Periodontal (Gum) Care" , defi : "Treatment and prevention of gum diseases to maintain healthy gums and supporting structures around the teeth.",  key : 4},

    {head :"Oral Surgery" , defi : "Surgical procedures in dentistry, including tooth extractions, wisdom teeth removal, and dental implants.", key : 5},

    {head :"Pediatric Dentistry" , defi : "Specialized dental care focused on the oral health of children, including exams, cleanings, and preventive treatments.",  key : 6},
  ]

  return (
    <div>
       <h1 className ={styles.ServiceHeading}>Services</h1>

        <div className={styles.SerContainer}>
          <h1 className={styles.containerHead}>Our Services</h1>
          <p className={'text-justify text-lg my-2 md:text-xl '}>At Dental Facets, we provide a full range of dental services, including cleanings, exams, cosmetic treatments, and restorative care. Our dedicated team is here to help you achieve a healthy, beautiful smile in a comfortable and welcoming environment.</p>
          <h1 className={styles.containerHead}>Some of our services... </h1>
        <div className='flex items-center justify-center text-2xl '>
          <table className={'text-white rounded-md shadow-2xl bg-zinc-700 w-full md:m-5 lg:m-5'}>
            <tbody >
              <tr className={styles.tableRows}>
                <th className={'text-lime-300'}>S.no</th>
                <th className={'text-lime-300'}>Works</th>
              </tr>
                {rows.map((elem)=>{
                  return (
                    <Fragment key={elem.key}>
                      <tr className={styles.tableRows}>
                        <td className={`${styles.tdatas}`}>{elem.key}</td>
                        <td className={`${styles.tdatas}`}>{elem.label}</td>
                      </tr>
                    </Fragment>
                  )
                })}
            </tbody>
          </table>
        </div>
        </div>
        <Contactbanner/>
        <div className='flex justify-center flex-wrap bg-slate-200 m-5 rounded-2xl shadow-xl '>
            {defDAta.map((elem)=>{
              return(
                <div className={styles.moreInfoContainer} key={elem.key} id={elem.id} data-aos="fade-up">
                  <h3 className={'text-2xl underline underline-offset-4 md:text-4xl py-4'}>{elem.head}</h3>
                  <p className={'text-lg md:text-xl'}>{elem.defi}</p>
                </div>
              )
            })}
        </div>
        <Faq/>
    </div>
  )
}

export default ServicePage