import React ,{useEffect}from 'react'
import { Avatar } from '@mui/material'
import Image from 'next/image'
import styles from './styles/Doctor.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function DoctorCards( {name , avt , year}) {

  useEffect(()=>{
    AOS.init({
      delay:100,
      throttleDelay:100
    });
    
  },[])
  return (
        <div className={styles.docCards} data-aos="fade-up">
                <div className={'relative h-full w-full'}>
                  <Image
                    className={'rounded-xl drop-shadow-xl'}
                    src={avt? avt : "/image/avatars/avatar.jpg"}
                    alt="progile image"
                    style={{objectFit:"cover"}}
                    sizes='10vh'
                    loading='lazy'
                    fill
                  />
                </div>
                <h3 className={styles.docName}>{name ? name : "Doctor Name"}</h3>
                <p className=''>{year? year : "10 years"}</p>
        </div>
)
}

export default DoctorCards