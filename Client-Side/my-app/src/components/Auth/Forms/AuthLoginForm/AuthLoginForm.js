import React, { Component } from 'react';
import  classes from './AuthLoginForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

import userService from '../../../../services/user-service';


const AuthLoginForm = ({ values, errors, touched, isSubmitting }) => (
  <Form className={classes.AuthLoginForm}>
      <div>
         { touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
         <Field type="text" name="firstName" placeholder="First Name"/>
       </div>
      <div>
         { touched.password && errors.password && <p>{errors.password}</p>}
         <Field type="password" name="password" placeholder="Password"/>
      </div>
      <div>
         <label>
           <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
           Join to us.
         </label>
      </div>
      <div>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
);



const FormikAuthLoginForm = withFormik({
  mapPropsToValues({ firstName, password, newsletter, plan }) {
    return {
      firstName: firstName || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'premium'
    }
  },
  validationSchema: yup.object().shape({
    firstName: yup.string().min(1, 'must be 1 symbols').required(),
    password: yup.string().min(1, 'must be 1 symbols').required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    userService.login(values).then(res => {
      console.log(res);
    });
  },
})(AuthLoginForm);

export default FormikAuthLoginForm;