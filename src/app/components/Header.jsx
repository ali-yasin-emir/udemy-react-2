
const Header = ({headerText, headerClass}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 pt-16 px-6'>
        <h1 className={`${headerClass} bg-clip-text text-transparent bg-gradient-to-r from-[#ffbadd] to-[#ff82bc7e] font-semibold`}>{headerText}</h1>
        <p className='text-justify text-lg text-gray-100 opacity-75'>Fundamental React concepts you will need for almost any app you are going to build!</p>
    </div>  
  )
}

export default Header