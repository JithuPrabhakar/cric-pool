const CommentaryItem = ({ over, description, type }) => (
  <div className='flex gap-4 border-b border-gray-200 p-4'>
    <div className='flex-shrink-0 w-16'>
      <div className={`rounded-lg p-2 ${getTypeStyles(type)}`}>{over}</div>
    </div>
    <div className='flex-grow'>
      <p className='text-gray-800 leading-relaxed'>{description}</p>
    </div>
  </div>
)

const getTypeStyles = (type) => {
  const styles = {
    WICKET: 'bg-red-100 text-red-600',
    FOUR: 'bg-green-100 text-green-600',
    SIX: 'bg-purple-100 text-purple-600',
    WIDE: 'bg-yellow-100 text-yellow-600',
    NO_BALL: 'bg-orange-100 text-orange-600',
    DEFAULT: 'bg-gray-100 text-gray-600',
  }
  return styles[type] || styles.DEFAULT
}

const getOverNumber = (overString) => {
  return parseFloat(overString)
}

const Commentary = () => {
  const commentaryData = [
    {
      over: '19.5',
      description:
        'Avesh Khan to Rahul Tewatia, OUT! RUN OUT! More drama! They had to go for the third run and Rahul Tewatia has sacrificed his wicket for the team here. Gujarat get 2 off the penultimate ball though which leaves them needing 2 off the last ball.',
      type: 'WICKET',
      bowler: 'Avesh Khan',
      batsman: 'Rahul Tewatia',
      runs: 0,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '19.4',
      description:
        'Avesh Khan to Rahul Tewatia, OUT! RUN OUT! More drama! They had to go for the third run and Rahul Tewatia has sacrificed his wicket for the team here. Gujarat get 2 off the penultimate ball though which leaves them needing 2 off the last ball.',
      type: 'WICKET',
      bowler: 'Avesh Khan',
      batsman: 'Rahul Tewatia',
      runs: 0,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '19.2',
      description:
        "Avesh Khan to Rashid Khan, FOUR! Not where he intended but it does not matter one bit. Gujarat will take it any which way they come. The balance of power firmly in Gujarat's favour now. Rashid gets 5 runs off three balls.",
      type: 'FOUR',
      bowler: 'Avesh Khan',
      batsman: 'Rashid Khan',
      runs: 4,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '19.2',
      description:
        'Avesh Khan to Rashid Khan, WIDE! The bowler loses control under pressure and sends it down the leg side.',
      type: 'WIDE',
      bowler: 'Avesh Khan',
      batsman: 'Rashid Khan',
      runs: 1,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '19.1',
      description:
        'Avesh Khan to Rashid Khan, SIX! A maximum off the first ball and Rajasthan are under the pump now. Avesh Khan almost nails the yorker but Rashid Khan dispatches it over long-on!',
      type: 'SIX',
      bowler: 'Avesh Khan',
      batsman: 'Rashid Khan',
      runs: 6,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '18.5',
      description:
        'Kuldeep Sen to Rashid Khan, WIDE! Sen gets it wrong again as slips in a slower delivery, full in length, down in leg, Rashid Khan misses out on the connection. Wide called.',
      type: 'WIDE',
      bowler: 'Kuldeep Sen',
      batsman: 'Rashid Khan',
      runs: 1,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '18.4',
      description:
        'Kuldeep Sen to Rashid Khan, Taken at deep square leg but it will not count as it was a Free Hit. Kuldeep brings it on a shortish length, over off and middle, Rashid Khan tries to take on the short ball but gets a top edge that is taken by Shubham Dubey running in from deep square leg. The batters cross for a couple of runs.',
      type: 'DEFAULT',
      bowler: 'Kuldeep Sen',
      batsman: 'Rashid Khan',
      runs: 0,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '18.3',
      description:
        'Kuldeep Sen to Rashid Khan, FOUR! Would you believe it? Kuldeep Sen has overstepped and the siren goes off for a NO BALL. Kuldeep goes searching for the yorker but ends up dishing a low full toss, outside off, Rashid Khan clears his front leg and carves it for extra cover. Free Hit to follow now. Can Rashid make the most of it?',
      type: 'FOUR',
      bowler: 'Kuldeep Sen',
      batsman: 'Rashid Khan',
      runs: 4,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '18.2',
      description:
        'Kuldeep Sen to Rahul Tewatia, Kuldeep rolls his fingers over the ball and bowls it on a good length, outside off, Rahul Tewatia mistimes his pull to deep mid-wicket and will have to be content with just a single. Gujarat need to find the fence at least twice in this over, if not on all three balls.',
      type: 'DEFAULT',
      bowler: 'Kuldeep Sen',
      batsman: 'Rahul Tewatia',
      runs: 1,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '18.1',
      description:
        'Kuldeep Sen to Rahul Tewatia, FOUR! Rahul Tewatia finds the fence. A valiant effort though by Jos Butler. Kuldeep misses his mark and serves a wide low full toss, outside off, Rahul Tewatia moves to the off side and lofts it extra cover. Butler at mid off, gives it a chase and puts in the dive but fails to prevent the boundary.',
      type: 'FOUR',
      bowler: 'Kuldeep Sen',
      batsman: 'Rahul Tewatia',
      runs: 4,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '17.6',
      description:
        'Avesh Khan to Rashid Khan, WIDE! At pace this time and Avesh tries to make the batter fetch it but it goes away from the wide guideline. Wide called by the umpire.',
      type: 'WIDE',
      bowler: 'Avesh Khan',
      batsman: 'Rashid Khan',
      runs: 2,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '17.3',
      description:
        'Avesh Khan to Shahrukh Khan, OUT! Given LBW! A huge shout and up goes the finger! It looks dead straight but Shahrukh Khan has decided to send it upstairs. It looks like there than anything else. A low full toss by Avesh, homing in at the stumps, Shahrukh Khan shuffles across a bit and goes for a heave across the line. He fails to get any bat on it and the ball pings him low on the front pad. There is nothing on UltraEdge. It is three reds on Ball Tracking and Shahrukh will have to make the long walk back.',
      type: 'WICKET',
      bowler: 'Avesh Khan',
      batsman: 'Shahrukh Khan',
      runs: 0,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '17.2',
      description:
        'Avesh Khan to Rahul Tewatia, Bowls it at 125.4 kph, on a hard length, around off, Rahul Tewatia hangs back and dabs it wide of point for a run.',
      type: 'DEFAULT',
      bowler: 'Avesh Khan',
      batsman: 'Rahul Tewatia',
      runs: 1,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
    {
      over: '17.1',
      description:
        'Avesh Khan to Shahrukh Khan, Steams in from over the wicket and serves it on a length, near the tramline on off, Shahrukh Khan reaches out and knocks it to deep point for a single.',
      type: 'DEFAULT',
      bowler: 'Avesh Khan',
      batsman: 'Shahrukh Khan',
      runs: 1,
      isWicket: false,
      isNoball: false,
      isBoundary: false,
      isWide: false,
      isRunOut: false,
    },
  ]

  const groupedByOver = commentaryData.reduce((acc, ball) => {
    const overNum = Math.floor(getOverNumber(ball.over))
    if (!acc[overNum]) {
      acc[overNum] = []
    }
    acc[overNum].push(ball)
    return acc
  }, {})

  const currentOver = Math.max(...Object.keys(groupedByOver).map(Number))
  const lastBallInCurrentOver = commentaryData.find(
    (ball) =>
      Math.floor(getOverNumber(ball.over)) === currentOver &&
      getOverNumber(ball.over) % 1 === 0.5
  )

  const headerInfo = lastBallInCurrentOver || commentaryData[0]

  return (
    <div className='max-w-2xl mx-auto bg-white rounded-lg shadow'>
      {headerInfo && getOverNumber(headerInfo.over) % 1 === 0.5 && (
        <div className='border-b border-gray-200 p-4'>
          <h2 className='text-lg font-semibold text-gray-800'>
            End of over {Math.floor(getOverNumber(headerInfo.over))}
          </h2>
          <p className='text-sm text-gray-600'>
            {headerInfo.bowler} • {headerInfo.runs} Runs • {headerInfo.wickets}{' '}
            Wicket{headerInfo.wickets !== 1 ? 's' : ''} • {headerInfo.score}
          </p>
        </div>
      )}

      <div className='divide-y divide-gray-200'>
        {commentaryData.map((item, index) => (
          <CommentaryItem
            key={index}
            over={item.over}
            description={item.description}
            type={item.type}
          />
        ))}
      </div>
    </div>
  )
}

export default Commentary
