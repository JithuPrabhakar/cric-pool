const MatchCard = ({ match }) => {
  return (
    <div className="bg-white shadow-2xl border-2 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center px-4 py-2 bg-violet-100 text-muted">
        <h3 className="text-[12px] font-semibold">
          {match.tournament_name}
        </h3>
        <p className="text-[10px]">{match.date}</p>
      </div>

      <div className="px-4 py-2">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex flex-col items-center">
            <img
              src={match.team1_logo}
              alt={match.team1_name}
              className="w-10 h-10 object-contain"
            />
            <p className="text-ms font-medium">
              {match.team1_sname}
            </p>
            <p className="text-[12px] font-medium text-center">
              {match.team1_name}
            </p>
          </div>
          <div className="text-center text-lg font-bold text-gray-800">
            VS
          </div>
          <div className="flex flex-col items-center">
            <img
              src={match.team2_logo}
              alt={match.team2_name}
              className="w-10 h-10 object-contain"
            />
            <p className="text-ms font-medium">
              {match.team2_sname}
            </p>
            <p className="text-[12px] font-medium text-center">
              {match.team2_name}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-3">
        <div className="text-center flex items-center justify-around">
          <p className="text-sm font-medium text-gray-800 mb-1">
            {match.ground}
          </p>
          <p className="text-xs text-gray-600">
            {match.hour}:{match.minute} {match.am_pm}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
