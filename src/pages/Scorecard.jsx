const Scorecard = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-xl font-bold mb-6'>Match Scorecard</h1>
      <table className='w-full bg-white rounded-md shadow'>
        <thead>
          <tr className='bg-primary-500 text-white'>
            <th className='py-2'>Player</th>
            <th className='py-2'>Runs</th>
            <th className='py-2'>Balls</th>
            <th className='py-2'>Fours</th>
            <th className='py-2'>Sixes</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Player A', runs: 50, balls: 30, fours: 4, sixes: 2 },
            { name: 'Player B', runs: 20, balls: 15, fours: 2, sixes: 0 },
          ].map((player, index) => (
            <tr key={index} className='text-center border-b'>
              <td className='py-2'>{player.name}</td>
              <td className='py-2'>{player.runs}</td>
              <td className='py-2'>{player.balls}</td>
              <td className='py-2'>{player.fours}</td>
              <td className='py-2'>{player.sixes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scorecard
