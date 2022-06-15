import { useFormik } from 'formik';
import React from 'react'
import Button from '../../UiElement/Button/Button';
import classes from './UserAuthentication.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { checkEmail } from '../../redux/userSlice';
const UserAuthentication = () => {
    const dispatch=useDispatch();
    const {isValid}=useSelector(state=>state.isValid);
    const validate = values => {
        const errors = {};  
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
      const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: values => {
        dispatch(checkEmail(values));
        },
      });
  return (
    <form className={classes.form}  onSubmit={formik.handleSubmit}>
    <div className={`${classes.inputs} ${formik.errors.email?classes.inputs_error:''}`} >
    <input 
       id="email"
       name="email"
       type="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.email}
       placeholder='Enter Your Email'
     />
       {formik.touched.email && formik.errors.email ? (
       <div>{formik.errors.email}</div>
     ) : null}
     {!isValid && 'Please Enter a Valid Email'}
    </div>
    <Button type='submit' disabled={!formik.dirty}>Sign in</Button>

  </form>
  )
}

export default UserAuthentication