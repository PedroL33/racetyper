import React from 'react';
import { useSelector } from 'react-redux';
import t from 'typy';
import moment from 'moment';

function GlobalTab() {
    const allScores = useSelector(state => state.allScores)
    const thisWeek = allScores.success && allScores.payload.length ? allScores.payload.filter(item => item.played_at > (Date.now() - (60*60*24*1000))).sort((a,b) => a.wpm < b.wpm) : []
    const topThisWeek = thisWeek.length > 5 ? thisWeek.slice(0,5) : thisWeek
    const topScore = allScores.success && allScores.payload.length ? allScores.payload.sort((a,b) => a.wpm < b.wpm)[0] : {}
    const avg = Math.round(allScores.success && allScores.payload.length ? Object.values(allScores.payload).reduce((t, {wpm}) => t+wpm, 0)/allScores.payload.length : 0)
    const avgAcc = Math.round(allScores.success && allScores.payload.length ? Object.values(allScores.payload).reduce((t, {accuracy}) => t+accuracy, 0)/allScores.payload.length : 0)

    return (
        <div className="overview-tab">
            <div className="row global-body">
                <div className="col-md-8 global-leaderboard">
                    <h4 className="row py-4 justify-content-center">Daily Leaderboard</h4>
                    <div className="row">
                        <div className="col text-center">Speed</div>
                        <div className="col text-center">Username</div>
                        <div className="col text-center">Played At</div>
                    </div>
                    <div className="row global-leaderboard-data">
                        {topThisWeek.length ? topThisWeek.map(item => 
                        <div className="row">
                            <div className="col text-center">{item.wpm}</div>
                            <div className="col text-center">{item["user_id"]["username"]}</div>
                            <div className="col text-center time-text">{moment(item["played_at"]).fromNow()}</div>
                        </div>) : <div className="mt-5 text-center">No data yet...</div>}
                    </div>
                </div>
                <div className="col-md-4 global-alltime">
                    <h4 className="row">All time Fastest</h4>
                    {topScore.wpm ? <h4 className="row global-top-score">{topScore.wpm}</h4> : <div>No data yet...</div>}
                    {topScore.accuracy && <p className="row">Accuracy: {topScore.accuracy}</p>}
                    {topScore.username && <p className="row">By: {t(topScore, 'user_id.username').safeObject}</p>}
                </div>
            </div>
            <div className="row global-footer">
                <p>Out of {allScores.success ? allScores.payload.length : 0} games played, our users on average type {avg} WPM with an accuary of {avgAcc}%.</p>
            </div>
        </div>
    )
}

export default GlobalTab;