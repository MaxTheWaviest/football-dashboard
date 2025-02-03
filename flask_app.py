from flask import Flask, jsonify
import pandas as pd
import requests

app = Flask(__name__)

@app.route('/api/process-data')
def process_data():
    # Fetch data from football API
    response = requests.get('https://api.football-data.org/v4/matches', headers={
        'X-Auth-Token': 'a60544158a024385bdcbf2f0ef200dba'
    })
    data = response.json()

    # Process data with Pandas (e.g., calculate possession difference)
    matches = data['matches']
    processed_data = []

    for match in matches:
        home_possession = match['homeTeamStats']['possession']
        away_possession = match['awayTeamStats']['possession']
        processed_data.append({
            'home_team': match['homeTeam']['name'],
            'away_team': match['awayTeam']['name'],
            'possession_diff': home_possession - away_possession
        })

    return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
