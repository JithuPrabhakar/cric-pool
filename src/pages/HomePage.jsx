import MatchesList from '../components/Matches/MatchesList'

const HomePage = () => {
  return (
    <section className='w-full text-black'>
      <MatchesList title='Upcoming Matches' link={'upcoming'} />
    </section>
  )
}

export default HomePage
