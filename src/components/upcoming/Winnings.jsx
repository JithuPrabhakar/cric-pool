const Winnings = () => {
  const prizes = [
    {
      rank: "1",
      prize: "₹1.50 Lakhs",
    },
    { rank: "2", prize: "₹35,000" },
    { rank: "3", prize: "₹15,000" },
    { rank: "4", prize: "₹9,500" },
    { rank: "5", prize: "₹4,500" },
    { rank: "6", prize: "₹3,500" },
    { rank: "7", prize: "₹2,500" },
    { rank: "8", prize: "₹2,000" },
  ]

  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-2 font-medium text-sm py-2">
        <p>RANK</p>
        <p className="text-right">WINNINGS</p>
      </div>
      {prizes.map((prize, index) => (
        <div key={index} className="grid grid-cols-2 py-2 text-sm border-t">
          <p className="ml-4">
            {prize.rank === "1" ? prize.rank + " 🏆" : prize.rank}
          </p>
          <p className="text-right font-medium">{prize.prize}</p>
          {prize.note && (
            <p className="col-span-2 text-xs text-gray-500 mt-1">
              {prize.note}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Winnings
