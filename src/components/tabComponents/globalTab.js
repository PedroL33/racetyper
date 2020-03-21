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
        <div className="container">
            <div className="row justify-content-center bg-primary"><h2 className="my-3">Globals Stats:</h2></div>
            <div className="row">
                <div className="col-xl-6">
                    <h4 className="row py-4 justify-content-center bg-secondary">Daily Leaderboard</h4>
                    <div className="row">
                        <div className="col text-center">Speed</div>
                        <div className="col text-center">Username</div>
                        <div className="col text-center">Played At</div>
                    </div>
                    {topThisWeek.length ? topThisWeek.map(item => 
                    <div className="row">
                        <div className="col text-center">{item.wpm}</div>
                        <div className="col text-center">{item["user_id"]["username"]}</div>
                        <div className="col text-center">{moment(item["played_at"]).fromNow()}</div>
                    </div>) : <div>No data yet...</div>}
                </div>
                <div className="col-xl-6">
                    <h4 className="row justify-content-center bg-secondary py-4">All time Fastest</h4>
                    {topScore.wpm ? <h4 className="row justify-content-center my-3">{topScore.wpm}</h4> : <div>No data yet...</div>}
                    {topScore.accuracy && <p className="row justify-content-center">Accuracy: {topScore.accuracy}</p>}
                    {topScore.username && <p className="row justify-content-center">By: {t(topScore, 'user_id.username').safeObject}</p>}
                </div>
            </div>
            <div className="row bg-primary justify-content-center">
                <p className="my-5 col-md-8">Out of {allScores.success ? allScores.payload.length : 0} games played, our users on average type {avg} WPM with an accuary of {avgAcc}%.</p>
            </div>
        </div>
    )
}

export default GlobalTab;