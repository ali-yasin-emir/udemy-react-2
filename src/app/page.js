
import CoreConcepts from './components/Concepts'
import ConceptsTwo from './components/ConceptCardTwo'
import Header from './components/Header'

const Home = () => {
  return (
    <div className='bg-[#9768be] flex flex-col items-center gap-16 pb-24'>
      <Header headerClass='text-6xl' headerText='React Essentials'/>
      <CoreConcepts/>
      
    </div>
  )
}

export default Home