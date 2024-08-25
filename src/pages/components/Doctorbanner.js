import React , {Fragment, useEffect} from 'react'
import DoctorCards from './DoctorCards'
import styles from './styles/Doctor.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Doctorbanner() {
    useEffect(()=>{
        AOS.init({
          delay:100,
          throttleDelay:100
        });
        
      },[])

    const DocData = [
        {name : "Dr. Promod ", year : "10 year" , avt:"" , key:0},
        {name : "Dr. Promod ", year : "10 year", avt:"", key:1},
        {name : "Dr. Promod ", year : "10 year" , avt:"", key:2},
    ]
  return (
    <div className={styles.docCardBg}>
      <h2 className={styles.docHead}>Our Doctor</h2>
      <div className={'md:flex md:justify-evenly md:items-center md:w-full'}>
      {DocData.map((elem)=>{
        return (
          <Fragment key={elem.key}>
            <DoctorCards name={elem.name} year={elem.year} avt={elem.avt}/>
          </Fragment >
        )
      })}
      </div>
    </div>
  )
}

export default Doctorbanner