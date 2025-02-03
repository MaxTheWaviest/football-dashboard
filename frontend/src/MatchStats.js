import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchStats = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/match-data')
      .then(response => setMatchData(response.data))
      .catch(error => console.error("Error fetching data", error));
  }, []);

  if (!matchData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Football Match Stats</h1>
      <div>Goals: {matchData.matches[0].score.fullTime.homeTeam} - {matchData.matches[0].score.fullTime.awayTeam}</div>
      <div>Possession: {matchData.matches[0].homeTeamStats.possession}% (Home) / {matchData.matches[0].awayTeamStats.possession}% (Away)</div>
      <div>Passes: {matchData.matches[0].homeTeamStats.passes} (Home) / {matchData.matches[0].awayTeamStats.passes} (Away)</div>
    </div>
  );
};

export default MatchStats;
