import vs from "../assets/vs.png"

const MatchCard = ({ match }) => {
  return (
    <div className="bg-white shadow-2xl border-2 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center px-4 py-2 bg-violet-100 text-muted">
        <h3 className="text-sm font-semibold">
          {match.tournament_name}
        </h3>
        <p className="text-xs">{match.date}</p>
      </div>

      <div className="px-4 pb-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <img
              src={match.team1_logo}
              alt={match.team1_name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-lg font-medium">
              {match.team1_name}
            </p>
            <p className="text-sm font-medium">
              {match.team1_name}
            </p>
          </div>
          <div className="text-center">
            <img
              src={vs}
              alt="versus"
              className="w-12 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={match.team2_logo}
              alt={match.team2_name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-lg font-medium">
              {match.team2_name}
            </p>
            <p className="text-sm font-medium">
              {match.team2_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
