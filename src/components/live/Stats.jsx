const Stats = () => {
  const players = [
    {
      name: 'J Bairstow',
      team: 'PBKS - WK',
      points: 168,
      percentage: '34.68%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'S Narine',
      team: 'KKR - ALL',
      points: 145,
      percentage: '94.91%',
      img: 'path-to-image',
      isSelected: true,
    },
    {
      name: 'S Singh',
      team: 'PBKS - BAT',
      points: 104,
      percentage: '53.56%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'P Singh',
      team: 'PBKS - WK',
      points: 86,
      percentage: '13.56%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'V Iyer',
      team: 'KKR - BAT',
      points: 58,
      percentage: '17.93%',
      img: 'path-to-image',
      isSelected: true,
    },
    {
      name: 'S Iyer',
      team: 'KKR - BAT',
      points: 53,
      percentage: '78.91%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'A Singh',
      team: 'PBKS - BOWL',
      points: 50,
      percentage: '48.07%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'R Rossouw',
      team: 'PBKS - BAT',
      points: 39,
      percentage: '23.47%',
      img: 'path-to-image',
      isSelected: false,
    },
    {
      name: 'A Russell',
      team: 'KKR - ALL',
      points: 34,
      percentage: '89.25%',
      img: 'path-to-image',
      isSelected: true,
    },
    {
      name: 'S Curran',
      team: 'PBKS - ALL',
      points: 31,
      percentage: '93.73%',
      img: 'path-to-image',
      isSelected: false,
    },
  ]

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between'>
        <p className='ml-8 text-md font-semibold'>Player</p>
        <p className='text-md font-semibold'>Points</p>
      </div>
      {players.map((player, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-2 rounded-md ${
            player.isSelected ? 'bg-primary-50' : 'bg-white'
          } mb-2 shadow-sm`}
        >
          <div className='flex items-center gap-2'>
            <img
              src={player.img}
              alt={player.name}
              className='w-8 h-8 rounded-full object-cover'
            />
            <div>
              <p className='text-sm font-medium'>{player.name}</p>
              <p className='text-xs text-gray-500'>{player.team}</p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-sm font-semibold'>{player.points}</p>
            <p className='text-xs text-gray-500'>{player.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats
