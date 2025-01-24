export const myMatches = [
  // upcoming match before linups out
  {
    match_id: 1,
    name: 'Match 1',
    team1: {
      team_name: 'team 1',
      short_name: 'T1',
      logo: 'logo image of team',
    },
    team2: {
      team_name: 'team 2',
      short_name: 'T2',
      logo: 'logo image of team',
    },
    match_status: 'scheduled',
    team_status: '',
    match_venue: 'venue 1',
    match_date: '',
    match_time: '',
    prizes: 'Mega 12 Crores',
    top_players: ['', ''],
    scores: {
      team1: {
        runs: '',
        wickets: '',
        overs: '',
      },
      team2: {
        runs: '',
        wickets: '',
        overs: '',
      },
    },
    result: '',
  },
  // ongoing match with live results
  {
    match_id: 2,
    name: 'Match 2',
    team1: {
      team_name: 'team 3',
      short_name: 'T3',
      logo: 'logo image of team',
    },
    team2: {
      team_name: 'team 4',
      short_name: 'T4',
      logo: 'logo image of team',
    },
    match_status: 'ongoing',
    team_status: '',
    match_venue: 'venue 2',
    match_date: '',
    match_time: '',
    prizes: 'Mega 10 Crores',
    top_players: ['', ''],
    scores: {
      team1: {
        runs: 'current runs',
        wickets: 'current wicket',
        overs: 'current over',
      },
      team2: {
        runs: 'current runs',
        wickets: 'current wicket',
        overs: 'current over',
      },
    },
    result: '',
  },
  // completed match with results and scores
  {
    match_id: 3,
    name: 'Match 3',
    team1: {
      team_name: 'team 5',
      short_name: 'T5',
      logo: 'logo image of team',
    },
    team2: {
      team_name: 'team 6',
      short_name: 'T6',
      logo: 'logo image of team',
    },
    match_status: 'completed',
    team_status: '',
    match_venue: 'venue 3',
    match_date: '',
    match_time: '',
    prizes: 'Mega 14 Crores',
    top_players: ['M Stoinis', 'J Vince'],
    scores: {
      team1: { runs: 261, wickets: 8, overs: 20 },
      team2: { runs: 262, wickets: 4, overs: 18.2 },
    },
    result: 'T5 won by 6 wickets',
  },
  // scheduled matches with Lineups out
  {
    match_id: 4,
    name: 'Match 4',
    team1: {
      team_name: 'team 5',
      short_name: 'T5',
      logo: 'logo image of team',
    },
    team2: {
      team_name: 'team 6',
      short_name: 'T6',
      logo: 'logo image of team',
    },
    match_status: 'scheduled',
    team_status: 'Lineups out',
    match_venue: 'venue 4',
    match_date: '',
    match_time: '',
    prizes: 'Mega 20 Crores',
    top_players: ['', ''],
    scores: {
      team1: {
        runs: '',
        wickets: '',
        overs: '',
      },
      team2: {
        runs: '',
        wickets: '',
        overs: '',
      },
    },
    result: '',
  },
]
