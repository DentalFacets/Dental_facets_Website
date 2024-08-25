import React from 'react'
import { Gauge } from '@mui/x-charts/Gauge';


function PageCharts() {

    const graphdata = [
      {label : "Modern Equipment", value : 90 , key: 0},
      {label : "Experience Equipment", value : 80, key: 1},
      {label : "Patient Satisfaction", value : 70 , key: 2},
    ]

  return (
    <div className={` flex flex-col items-center justify-center text-center font-bold md:flex-row lg:grid-flow-row md:gap-5` }>          
            {graphdata.map((elem)=>{
              return (
                <div className='flex flex-col items-center' key={elem.key}>
                  <Gauge width={150} height={180} value={elem.value} startAngle={-90} endAngle={90}/>
                  <h3>{elem.label}</h3>
               </div>
              )
            })}
    </div>
  )
}

export default PageCharts