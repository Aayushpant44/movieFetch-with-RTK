import { useFormik } from 'formik';
import React, { useState } from 'react'

const Home = () => {


  const [count, setCount] = useState(0);

  const formik = useFormik({
    //this initial value contains the the props that we pass in the input like name ,type ,value

    initialValues: {
      post: ''
    },
    //e is the initial values obj passed before
    onSubmit: (e) => {
      console.log(e);
    }
  });


  return (
    <div className='p-5'>
{/* it calls the formik func on handle submit  AND  calls the on submit function inside the formik func*/}
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col max-w-[150px]'>
          <label htmlFor="post">Add Info</label>
          {/* handle change will update the initial values with the new values */}
          <input
            onChange={formik.handleChange} className='bg-gray-100'
            type="text"
            placeholder='post add' name='post' />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Home