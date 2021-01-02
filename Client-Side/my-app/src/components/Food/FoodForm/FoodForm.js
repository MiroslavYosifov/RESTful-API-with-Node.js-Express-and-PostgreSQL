import React, { Component } from 'react';
import  classes from './FoodForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

const FoodForm = ({ values, errors, touched, isSubmitting }) => (
  <Form className={classes.AuthLoginForm}>
      <div>
         { touched.name && errors.name && <p>{errors.name}</p>}
         <Field type="text" name="name" placeholder="Food Name"/>
       </div>
       <div>
        <Field component="select" name="kind">
          <option value="vegatables">Vegatables</option>
          <option value="fruits">Fruits</option>
          <option value="nuts">Nuts, legumes, grain and seeds</option>
          <option value="meat">Meat</option>
          <option value="fish">Fish and seafood</option>
          <option value="dairy">Dairy foods</option>
          <option value="eggs">Eggs</option>
        </Field>
      </div>
      <div>
         { touched.protein && errors.protein && <p>{errors.protein}</p>}
         <Field type="text" name="protein" placeholder="Protein"/>
      </div>
      <div>
         { touched.fat && errors.fat && <p>{errors.fat}</p>}
         <Field type="text" name="fat" placeholder="Fat"/>
      </div>
      <div>
         { touched.carbohydrate && errors.carbohydrate && <p>{errors.carbohydrate}</p>}
         <Field type="text" name="carbohydrate" placeholder="Carbohydrate"/>
      </div>        
      <button>Submit</button>
    </Form>
);



const FormikFoodForm = withFormik({
  mapPropsToValues({ name, kind, protein, fat, carbohydrate }) {
    return {
        name: name || '',
        kind: kind || 'vegetables',
        protein: protein || '',
        fat: fat || '',
        carbohydrate: carbohydrate || '',
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().min(1, 'must be 1 symbols').required(),
    kind: yup.string().min(1, 'must be 1 symbols').required(),
    protein: yup.number().min(1, 'must be 1 symbols').required(),
    fat: yup.number().min(1, 'must be 1 symbols').required(),
    carbohydrate: yup.number().min(1, 'must be 1 symbols').required(),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    
  },
})(FoodForm);

export default FormikFoodForm;