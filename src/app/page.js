
import Concepts from './components/Concepts'
import Header from './components/Header'
import Examples from './components/Examples'

const Home = () => {
  return (
    <div className='bg-[#9768be] flex flex-col items-center gap-16 pb-48'>
      <Header headerClass='text-6xl' headerText='React Essentials'/>
      <Concepts/>
      <Examples/>
    </div>
  )
}

export default Home