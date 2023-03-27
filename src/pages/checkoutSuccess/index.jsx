
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../../components/button/style'
import { Icon, Wrapper } from './style'

const CheckoutSuccess = () => {
  return (
    <Wrapper>
      <Icon icon={faCircleCheck}></Icon>
      <h1>Thank you for your purchase!</h1>
      <Link to="/"><ButtonStyle>Continue Shopping</ButtonStyle></Link>
    </Wrapper>
  )
}

export default CheckoutSuccess
