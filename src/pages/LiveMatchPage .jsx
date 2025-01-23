import LiveMatchTabs from '../components/live/LiveMatchTabs'
import LiveMatchHeader from '../components/live/LiveMatchHeader'
import { matches } from '../data/matches'
import { useParams } from 'react-router-dom'

const LiveMatchPage = () => {
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
      <LiveMatchHeader match={match} onBack={handleBack} />
      <LiveMatchTabs />
    </div>
  )
}

export default LiveMatchPage
