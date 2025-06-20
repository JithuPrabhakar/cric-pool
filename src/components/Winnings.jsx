const Winnings = ({ prizes }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 font-medium text-sm pb-2 mt-4 border-b">
        <p>RANK</p>
        <p className="text-right">WINNINGS</p>
      </div>
      {prizes?.map((prize) => (
        <div
          key={prize.position}
          className="grid grid-cols-2 py-2 text-sm border-b"
        >
          <p className="ml-2">
            {prize.position === "1"
              ? prize.position + " 🏆"
              : prize.position}
          </p>
          <p className="text-right font-medium mr-4">
            {prize.prize_details}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Winnings
