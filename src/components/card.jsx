import PropTypes from 'prop-types'
import { badgeVariants } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'

function Card({
  bookName,
  originalPrice,
  author,
  discountedPrice,
  imgSrc,
  imgAlt,
  badgeText,
  discountPercent,
  _id,
  genre,
  isLiked,
  handleLikeBtnClick,
}) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.stopPropagation()
    handleLikeBtnClick(_id)
  }
  return (
    <div
      className='w-[250px]  shadow-2xl p-5 rounded-b-[30px] bg-slate-200 border-gray-500 cursor-pointer p-1 text-center relative'
      onClick={() => navigate('/product/' + _id)}
    >
      <span
        className={`${badgeVariants({
          variant: 'destructive',
        })} absolute top-0 left-0 rounded-none`}
      >
        {badgeText}
      </span>
      <span
        onClick={handleClick}
        className='{`inline-block absolute top-0 right-0 rounded-none w-[40px] h-[40px]`}'
      >
        {!isLiked ? <i className="fa-solid fa-heart text-2xl text-blue-500"></i> : <i class="fa-regular fa-heart text-2xl text-blue-500"></i>}
      </span>
      <img
        src={imgSrc}
        alt={imgAlt}
        className='w-[150px] mx-auto mt-2 h-[200px] object-contain'
      />
      <h3 className='font-bold font-["Edu TAS Beginner"] '>{bookName}</h3>
      <span className='my-4 inline-block'>by {author}</span>
      <div className='flex justify-between items-center'>
        <p>R.S {discountedPrice}</p>
        <del>R.S {originalPrice}</del>
        <span className='text-red-500 text-[12px]'>({discountPercent}%)</span>
      </div>
      <span>{genre}</span>
    </div>
  )
}
export default Card

Card.propTypes = {
  bookName: PropTypes.string,
  originalPrice: PropTypes.number,
  author: PropTypes.string,
  discountedPrice: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  badgeText: PropTypes.string,
  discountPercent: PropTypes.number,
  _id: PropTypes.string,
  genre: PropTypes.string,
  isLiked: PropTypes.any,
  handleLikeBtnClick: PropTypes.func,
}
