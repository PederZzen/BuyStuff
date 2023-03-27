import * as yup from 'yup'

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const schema = yup 
 .object({
    fullName: yup
     .string()
     .min(3, '* Minimum 3 characters')
     .required("* Please enter your name"),
    subject: yup
     .string()
     .min(3, '* Minimum 3 characters')
     .required("* Please fill in subject"),
    email: yup 
     .string()
     .matches(emailRegex, "* Must be a valid email")
     .required("* Please fill in email"),
    body: yup
     .string()
     .min(3, "* Minimum 3 characters")
     .required("* Please enter a message")
 })
 .required()