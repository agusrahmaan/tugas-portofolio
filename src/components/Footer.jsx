import {BiLogoReact} from 'react-icons/bi'
import {DiDotnet} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {FaBootstrap} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='border-4 border-transparent rounded-md border-t-cyan-300'>
        <div className='flex flex-row m-2'>
            <p className='text-bold text-gray-50'>Support by: </p>
            <BiLogoReact size={32} className='hover:text-cyan-400'/>
            <DiDotnet size={32} className='hover:text-white'/>
            <AiFillHtml5 size={32} className=' hover:text-amber-600'/>
            <BiLogoTailwindCss size={32} className='hover:text-cyan-400'/>
            <FaBootstrap size={32} className='hover:text-blue-700'/>
        </div>
        <div className='text-center text-white'>&copy;2023 Agus Rahman</div>
    </div>
  )
}

export default Footer