import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('fullName')} placeholder="Full name"></input>
            <span>{errors.fullName?.message}</span>
            <input {...register('subject')} placeholder="Subject"></input>
            <span>{errors.subject?.message}</span>
            <input {...register('email')} placeholder="Email"></input>
            <span>{errors.email?.message}</span>
            <input {...register('body')} placeholder="Message"></input>
            <span>{errors.body?.message}</span>
            <input type='submit'></input>
        </form>
    )
}

export default ContactForm
