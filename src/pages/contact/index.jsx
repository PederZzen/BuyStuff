import React from 'react'
import ContactForm from '../../components/forms/contactForm'
import { Wrapper } from './style'

const Contact = () => {
  return (
    <Wrapper>
      <h1>Contact</h1>
      <p>If successful, the data will be displayed in the console</p>
      <ContactForm />
    </Wrapper>
  )
}

export default Contact
