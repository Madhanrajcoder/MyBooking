import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './Textfield.css'

export default function TextField({...props}) {
    
    const [field, meta] = useField(props)
 
    
  return <div className='text-box'>
      <input {...field} {...props}/>
      <span className='error-msg'> <ErrorMessage  name={field.name}/></span>
     
  </div>;
}
