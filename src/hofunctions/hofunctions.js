import React from 'react'
const companies = [
    {name:"Company-One",category:"Finance",start:1981,end:2003},
    {name:"Company-Two",category:"Retail",start:1992,end:2008},
    {name:"Company-Three",category:"HealthCare",start:1999,end:2007},
    {name:"Company-Four",category:"Finance",start:1989,end:2013},
    {name:"Company-Five",category:"Retail",start:1986,end:2010},
    {name:"Company-Six",category:"HealthCare",start:1987,end:2001},
    ]
    
const ages=[10,20,40,5,30,60,70,15,35,55];
let tempArr=""; 
function hofunctions() {
    const ageFilter = ages.filter(age => age >= 20);
    tempArr += ageFilter;
    console.log(tempArr);
   return (
       /*map exp*/
     // <div>
    //  {companies.map(item => <div>{item.name}</div>)}
    //  </div>
      /*map exp*/
    /*filter exp*/
  
        <div>{tempArr}
        
        </div>
    /*filter exp*/
  )
}

export default hofunctions


