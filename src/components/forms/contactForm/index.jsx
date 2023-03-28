import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { FormStyled } from './style';
import { ButtonStyle } from '../../button/style';

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
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <input {...register('fullName')} placeholder="Full name"></input>
            <span>{errors.fullName?.message}</span>
            <input {...register('subject')} placeholder="Subject"></input>
            <span>{errors.subject?.message}</span>
            <input {...register('email')} placeholder="Email"></input>
            <span>{errors.email?.message}</span>
            <textarea {...register('body')} placeholder="Message"></textarea>
            <span>{errors.body?.message}</span>
            <ButtonStyle>Submit</ButtonStyle>
        </FormStyled>
    )
}

export default ContactForm
