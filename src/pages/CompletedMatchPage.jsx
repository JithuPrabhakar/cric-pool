import CompletedMatchTabs from '../components/completed/CompletedMatchTabs'
import CompletedMatchHeader from '../components/completed/CompletedMatchHeader'
import { matches } from '../data/matches'
import { useParams } from 'react-router-dom'

const CompletedMatchPage = () => {
  const { id } = useParams()

  const match = matches.find((item) => item.id === parseInt(id, 10))
  console.log(match)

  const handleBack = () => {
    console.log('Back button clicked')
  }

  if (!match) {
    return <div className='text-center text-red-500 mt-10'>Match not found</div>
  }

  return (
    <div className='rounded-lg'>
      <CompletedMatchHeader match={match} onBack={handleBack} />
      <CompletedMatchTabs />
    </div>
  )
}

export default CompletedMatchPage
