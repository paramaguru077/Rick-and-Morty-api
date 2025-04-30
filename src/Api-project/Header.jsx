import React, { useState } from 'react'
import Card from './Card'
const Header = () => {
    const[formData,setFormData]= useState({
        name:"",
        status:"",
        gender:"",
    })
  
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})


    }
    const handleSubmit =(e)=>{
        e.preventDefault();
      
       
        

    }
    console.log(formData);
    const handleClear =()=>{
        setFormData({
            name:"",
            status:"",
            gender:""
        });
    }

  return (
    <div className='px-4 w-full py-7'>
        <div className='w-full mb-5'>
            <h1 className='text-2xl font-bold tracking-widest text-center '>Rick & Mprthy Character Explorer</h1>

           <div className=' flex flex-col sm:flex-row items-center gap-2 '>
           <form onSubmit={handleSubmit} className='flex  flex-wrap sm:flex-row mt-6  md:justify-center gap-3.5'>
                <input type="text" placeholder='Search by name ' className='px-2 py-3 ring-1 ring-offset-neutral-500 rounded   '  name="name" value={formData.name} onChange={handleChange} />
                <select name="status" className='px-2 py-3 ring-1 ring-offset-neutral-500 rounded text-neutral-500' value={formData.status} onChange={handleChange} >
                    <option value="All">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <select name="gender" className='px-2 py-3 ring-1 ring-offset-neutral-500 rounded text-neutral-500 ' value={formData.gender} onChange={handleChange} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>


            </form>
            <button onClick={handleClear} className='mt-5'>Reset</button>

           </div>
           
          
            
           
        </div>
       
        <Card formData=
        {formData}/>


    </div>
  )
}

export default Header