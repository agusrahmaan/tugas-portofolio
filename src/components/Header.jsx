import {PiHandWavingBold} from 'react-icons/pi'
const Header = () => {
  return (
    <div className="m-5">
      <div className='flex flex-row'>        
        <span className='text-white font-semibold text-6xl'>Hiiii</span><PiHandWavingBold size={64} color='blue'/><span className="text-amber-300 font-extrabold text-6xl"> !!!!</span>
      </div>
          <h1  className="font-bold text-blue-400 text-5xl flex flex-row pt-3">
          <span className='pr-2 text-neutral-100'>I am </span>  Agus Rahman Hidayat</h1>          
          <h3 className="text-slate-300 pt-10 text-justify w-auto font-mono">A web developer who is very enthusiastic about learning many programming languages
            . Have basic language .Net ASP and have created projects using the language. Have excellent skills in public speaking. Ready to work as team or individually.</h3>
          <div className='flex flex-row justify-center pt-10'>
            <img className='w-64 rounded-full pb-10' src="/anonymus.jpg" alt="" />    
          </div>
        <div className='border-4 border-transparent rounded-md border-t-cyan-300 p-10 font-mono text-5xl font-bold justify-center text-sky-900 flex flex-col sm:flex-row'>
          <p >{`"`}Victorious,</p>
          <p> Passionate,</p>
          <p> Number 1{`"`}</p>
        </div>
    </div>
  )
}

export default Header