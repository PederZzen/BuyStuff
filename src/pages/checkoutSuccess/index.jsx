
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../../components/button/style'
import Meta from '../../utils/Meta'
import { Icon, Wrapper } from './style'

const CheckoutSuccess = () => {
  return (
    <>
      <Meta title="Checkout" description="Thank you for shopping at BuyStuff.no!"/>
      <Wrapper>
        <Icon icon={faCircleCheck}></Icon>
        <h1>Thank you for your purchase!</h1>
        <Link to="/"><ButtonStyle>Continue Shopping</ButtonStyle></Link>
      </Wrapper>
    </>
  )
}

export default CheckoutSuccess
