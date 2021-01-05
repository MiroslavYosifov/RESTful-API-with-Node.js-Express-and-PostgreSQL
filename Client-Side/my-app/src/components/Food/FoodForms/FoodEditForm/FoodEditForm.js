import React, { Component } from 'react';
import  classes from './FoodEditForm.module.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editFoods } from '../../../../store/actions/index';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

const FoodEditForm  = (props) => {
    //console.log(props);
    let { values, errors, touched, isSubmitting, initialValues, food } = props;

    return(
            <Form className={classes.FoodEditForm} >
                <div className={classes.Fields}>
                   { touched.name && errors.name && <p>{errors.name}</p>}
                  <Field type="text" name="name" placeholder="Food Name"/>
                 </div>
                 <div className={classes.Fields}>
                  <Field className={classes.Fields} component="select" name="kind">
                    <option value="vegatables">Vegatables</option>
                    <option value="fruits">Fruits</option>
                    <option value="nuts">Nuts, legumes, grain and seeds</option>
                    <option value="meat">Meat</option>
                    <option value="fish">Fish and seafood</option>
                    <option value="dairy">Dairy foods</option>
                    <option value="eggs">Eggs</option>
                  </Field>
                </div>
                <div className={classes.Fields}>
                   { touched.protein && errors.protein && <p>{errors.protein}</p>}
                   <Field type="text" name="protein" placeholder="Protein"/>
                </div>
                <div className={classes.Fields}>
                   { touched.fat && errors.fat && <p>{errors.fat}</p>}
                   <Field type="text" name="fat" placeholder="Fat"/>
                </div>
                <div className={classes.Fields}>
                   { touched.carbohydrate && errors.carbohydrate && <p>{errors.carbohydrate}</p>}
                   <Field type="text" name="carbohydrate" placeholder="Carbohydrate"/>
                </div>
                <div className={classes.Fields}>
                   { touched.imgUrl && errors.imgUrl && <p>{errors.imgUrl}</p>}
                   <Field type="text" name="imgUrl" placeholder="Image URL"/>
                </div>          
                <button type="Submit" >Submit</button>
            </Form>
    )
};

const FormikFoodAddForm = withFormik({
    mapPropsToValues({ name, kind, protein, fat, carbohydrate, imgUrl }) {
        return {
            name: name || '',
            kind: kind || 'vegetables',
            protein: protein || '',
            fat: fat || '',
            carbohydrate: carbohydrate || '',
            imgUrl: imgUrl || '',
        }
    },
    validationSchema: yup.object().shape({
      name: yup.string().min(1, 'must be 1 symbols').required(),
      kind: yup.string().min(1, 'must be 1 symbols').required(),
      protein: yup.number().min(1, 'must be 1 symbols').required(),
      fat: yup.number().min(1, 'must be 1 symbols').required(),
      carbohydrate: yup.number().min(1, 'must be 1 symbols').required(),
      imgUrl: yup.string().min(1, 'must be 1 symbols').required(),
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
      const { onEditFood } = props;
      const foodData = { ...values, id: props.food.id }
      onEditFood(foodData, props).then(() => setSubmitting(false));
    },
})(FoodEditForm);

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onEditFood: (foodData, props) => dispatch(editFoods(foodData, props)),
    }
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikFoodAddForm);