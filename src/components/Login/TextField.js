import React from 'react';
import { useField, ErrorMessage } from 'formik'
import classes from './Login.module.css'

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='mb-3'>
            <label htmlFor={field.name}>{label}</label>
            <input
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props}
            autoComplete='off'
            />
            <ErrorMessage className={classes.error} component='div' name={field.name}/>
        </div>
    )
}
