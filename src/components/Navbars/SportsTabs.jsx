const SportsTabs = () => {
  const sports = ['Cricket', 'Football', 'Kabaddi', 'Basketball', 'Hockey']

  return (
    <div className='flex overflow-x-auto'>
      {sports.map((sport, index) => (
        <button
          key={index}
          className={`flex-1 py-2 text-center ${
            sport === 'Cricket' ? 'text-red-600 border-b-2 border-red-600' : ''
          }`}
        >
          {sport}
        </button>
      ))}
    </div>
  )
}

export default SportsTabs
