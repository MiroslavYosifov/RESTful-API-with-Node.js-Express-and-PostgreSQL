import React, { useState } from 'react';
import  classes from './FoodAddForm.module.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFood } from '../../../../store/actions/index';

import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const FoodAddForm  = ({ values, errors, touched, isSubmitting, initialValues }) => {

  return (
    <Form className={classes.FoodAddForm}>
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
        <div>
           { touched.price && errors.price && <p>{errors.price}</p>}
           <Field type="text" name="price" placeholder="Price"/>
        </div>
        <div>
             <label>
              <Field type="radio" name="pickedTypeOfAvailability" value="quantity" />
              Quantity
            </label>
            <label>
              <Field type="radio" name="pickedTypeOfAvailability" value="count" />
              Count
            </label>
        </div>
        <div>
          <div>
             { touched.availability && errors.availability && <p>{errors.availability}</p>}
             <Field type="text" name="availability" placeholder="Availability"/>
          </div>
        </div>
        <div>
           { touched.imgUrl && errors.imgUrl && <p>{errors.imgUrl}</p>}
           <Field type="text" name="imgUrl" placeholder="Image URL"/>
        </div>      
        <button>Submit</button>
      </Form>
  );
} 

const FormikFoodAddForm = withFormik({
  mapPropsToValues({ name, kind, protein, fat, carbohydrate, price, availability, pickedTypeOfAvailability, imgUrl }) {
    return {
        name: name || '',
        kind: kind || 'vegetables',
        protein: protein || '',
        fat: fat || '',
        carbohydrate: carbohydrate || '',
        price: price || '',
        availability: availability || '',
        pickedTypeOfAvailability: pickedTypeOfAvailability || '',
        imgUrl: imgUrl || '',
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().min(1, 'must be 1 symbols').required(),
    kind: yup.string().min(1, 'must be 1 symbols').required(),
    protein: yup.number().min(1, 'must be 1 symbols').required(),
    fat: yup.number().min(1, 'must be 1 symbols').required(),
    carbohydrate: yup.number().min(1, 'must be 1 symbols').required(),
    price: yup.number().min(1, 'must be 1 symbols').required(),
    availability: yup.number().min(1, 'must be 1 symbols').required(),
    pickedTypeOfAvailability: yup.string().required(),
    imgUrl: yup.string().min(1, 'must be 1 symbols').required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const { onAddFood } = props;
    const foodData = { ...values }
    foodData.availability = {[foodData.pickedTypeOfAvailability]: foodData.availability};
    console.log(foodData);
    onAddFood(foodData, props).then(() => setSubmitting(false));
  },
})(FoodAddForm);


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onAddFood: (foodData, props) => dispatch(addFood(foodData, props)),
    }
  )
};

export default connect(null, mapDispatchToProps)(FormikFoodAddForm);