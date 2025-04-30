import React, {  useEffect, useState } from 'react'
import axios from 'axios';


function Card({formData}) {
     const name = formData.name||"" ;
     const gender= formData.gender ||"";
     const status=formData.status||"";
 
    const[data,setData]= useState([]);
    const [loading,setLoading]=useState(false);
    const [count,setCount]= useState(1);
    
       const api =`https://rickandmortyapi.com/api/character/?page=${count}&name=${name}&gender=${gender}&status=${status}`
    const fetchapi = async()=>{
       try{
        setLoading(true);
        
        const response= await axios.get(api);
        const datas = response.data;
        console.log(datas.results);
        setData(datas.results)
        
       }
       catch(e){
         if(e.response && e.response.status===404){
            setData([]);
         }
         else{
            console.log(e);
         }
       }
       finally{
        setLoading(false);
       }
    }
    
     console.log(data);
    useEffect(()=>{
        fetchapi();
    },[count,name,gender,status])
    const handleIncrement =()=>{
        
            setCount(count+1);
        

    }
    const handleDecrement =()=>{
        if( count>1){
            setCount(count-1)
        }

    }

    if(loading){
        return <p className='text-center'> Loading...</p>
    }
   
  return (
    <div className='max-w-[1220px] mx-auto px-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 justify-center   '>
           {
            data.length===0 && !loading ?(
                <p className='text-center text-red-600'>
                    No such Character
                </p>

            ):(
                
                    data.map((item,i)=>(
                      
                             <div key={i} className='flex flex-col px-4  pb-3 pt-4 border border-neutral-500 items-center '>
                            <div className='mb-6' >
                            
                             <img src={item.image} alt="image" className='rounded-xl'  />  
                                
                            </div>
                            <div className='flex-col gap-3'>
                                <h1 className='text-xl text-black mb-3 font-bold'>{item.name}</h1>
                                <p> Status: {item.status}</p>
                                <p> Gender: {item.gender}</p>
    
    
                            </div>
    
                        </div>
    
                      
                       
                    ))
                
            )
           }


        </div>
        <div className='flex gap-7 justify-center mt-2.5 cursor-pointer'>
            <button disabled={count==1} onClick={  handleDecrement}> prev page</button>
            <button onClick={handleIncrement} >Next Page</button>


        </div>

    </div>
  )
}

export default Card