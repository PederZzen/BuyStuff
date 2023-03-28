import { Rating, Wrapper } from './style'

const Review = (props) => {
  return (
    <Wrapper>
        <div>
            <p>{props.name}</p>
            <Rating disabled defaultValue={props.rating} />
        </div>
        <p>{props.desc}</p>
    </Wrapper>
  )
}

export default Review
