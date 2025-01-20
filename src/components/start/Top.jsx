import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Top = ({ title }) => {
  return (
    <div className=' text-white items-center w-full py-4 px-8 flex'>
      <button className='text-3xl'>
        <NavLink to={'/'}>
          <IoIosArrowRoundBack />
        </NavLink>
      </button>
      <h3 className='font-bold text-lg uppercase text-center w-full'>
        {title}
      </h3>
    </div>
  )
}

export default Top
