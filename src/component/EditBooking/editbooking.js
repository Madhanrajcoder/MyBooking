import { Formik, Form } from 'formik';
import  TextField  from "../Textfield/textfield";
import * as Yup from 'yup';
import axios from "axios";
import React from 'react'
import './Editbooking.css'

export default function editbooking() {

    const validate=Yup.object({
        productname:Yup.string().required("Fill the field"),
        modelno:Yup.string().required("Fill the field"),
        dateofpurchase:Yup.string().required("Fill the field"),
        contactno:Yup.string().matches("^[0-9]{10}$", 'Phone number is not valid').required("Fill the field"),
        problem:Yup.string().max(200, 'Must be 200 characters or less').required("Fill the field"),
        availableslots:Yup.string().required("Fill the field")

          })

        //   const handleOnSubmit = async (value) => {
        //     try {
        //         const res = await axios({
        //             method: 'PUT',
        //             url: editURL,
        //             data: value
        //         });
        //         localStorage.setItem('data',JSON.stringify(res.data));
        //         props.getCardtoEdit();
        //         alert('Updated Sucessfully');
        //     } catch (err) {
        //         console.log('error update: ',err);
        //         alert("Error while updating")
        //     }
        // }
        

  return (
      <Formik initialValues={{
        productname :'',
        modelno:'',
        dateofpurchase:'',
        contactno:'',
        problem:'',
        availableslots:''
    }}
    validationSchema={validate}
    onSubmit={(value)=>{
        // handleOnSubmit(value);
        console.log(value);
    }
}
>
              <Form>
                  <div className='container'>
                <div className='Top'>
                <h1 className='edit'>EDIT BOOKING</h1>
                  </div>
                <div className='productdetails'>
                <h3 class="text_letter">Enter the product details</h3>
                    <form>
                   
                    <TextField name='productname' id='editproductName' type='text' placeholder='Enter name of product'/>
                    <TextField name='modelno' id='editmodelno' type='text' placeholder='Model of product'/>
                    <TextField name='dateofpurchase' id='editdateofpurchase' type='text' placeholder='Enter date of purchase'/>
                    <TextField name='contactno' id='editcontactnumber' type='text' placeholder='Enter contact number'/>
                    <TextField name='problem' id='enterproblem' type='text' placeholder='Enter problem of product'/>
                    <table>
                        <tr>
                            <th>
                            <TextField name='availableslots' id='editmodelno' spacing='' type='text' placeholder='Available Slots'/>
                            </th>
                            <th>
                            <button type="button" class="button">Update</button>
                            </th>
                        </tr>
                    </table>
                    </form>
                </div>
                  </div>
                  
            </Form>
      </Formik>

  )
}
