import React, { Component } from 'react';
import  classes from './AuthLoginForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

import userService from '../../../../services/user-service';


const AuthLogoutForm = () => (
    <Form>
      <button>Logout</button>
    </Form>
);

const FormikAuthLogoutForm = withFormik({
  handleSubmit() {
    userService.logout().then(res => {
      console.log(res);
    });
  }
})(AuthLogoutForm);

export default FormikAuthLogoutForm;