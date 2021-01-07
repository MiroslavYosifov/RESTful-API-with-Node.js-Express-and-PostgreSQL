import React, { Component } from 'react';
import  classes from './AuthRegistrationForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

// import userService from '../../../../services/user-service';
import { services } from '../../../../services/index';


const AuthRegistrationForm = ({ values, errors, touched, isSubmitting }) => (
  <Form className={classes.AuthRegistrationForm}>
        <div>
          { touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username"/>
        </div>
        <div>
          { touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          <Field type="text" name="firstName" placeholder="First Name"/>
        </div>
        <div>
          { touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          <Field type="text" name="lastName" placeholder="Last Name"/>
        </div>
        <div>
          { touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email"/>
        </div>
        <div>
           { touched.password && errors.password && <p>{errors.password}</p>}
           <Field type="password" name="password" placeholder="Password"/>
        </div>
        <div>
           { touched.comfirmPassword && errors.comfirmPassword && <p>{errors.comfirmPassword}</p>}
           <Field type="password" name="comfirmPassword" placeholder="Comfirm Password"/>
        </div>
      <button>Sign up</button>
    </Form>
);



const FormikAuthRegistrationForm = withFormik({
    mapPropsToValues({ username, firstName, lastName, email, password, comfirmPassword }) {
        return {
            username: username || '',
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            password: password || '',
            comfirmPassword: comfirmPassword || ''
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().min(3, 'must be 3 symbols').required(),
        firstName: yup.string().min(1, 'must be 1 symbols').required(),
        lastName: yup.string().min(1, 'must be 1 symbols').required(),
        email: yup.string().email().required(),
        password: yup.string().min(1, 'must be 1 symbols').required(),
        comfirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').min(1, 'must be 1 symbols').required()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        services.userServices.registration().registration(values).then(res => {
        console.log(res);
    });
  },
})(AuthRegistrationForm);

export default FormikAuthRegistrationForm;