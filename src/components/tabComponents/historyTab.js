import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function HistoryTab() {
    const getScores = useSelector(state => state.getScores);

    const scores = getScores.success && getScores.payload.length ? getScores.payload.sort((a,b) => b.played_at - a.played_at) : []
    const [page, setPage] = useState(1);
    const pageNumbers = [];

    for(var i=1; i<=Math.ceil(scores.length/10); i++) {
        pageNumbers.push(i);
    }

    var startIndex = 10*(page-1)
    var endIndex = page*10>scores.length ? scores.length : page*10;

    return (
        <div className="overview-tab">
            <div className="row history-header">
                <div className="col">Speed(WPM)</div>
                <div className="col">Accuracy</div>
                <div className="col">Date</div>
            </div>
            <div className="history-body">
            {scores.slice(startIndex, endIndex).map(element => 
                <div>
                    <div className="row">
                        <div className="col text-center">{element.wpm}</div>
                        <div className="col text-center">{element.accuracy}</div>
                        <div className="col text-center time-text">{moment(element.played_at).fromNow()}</div>
                    </div>
                </div>
            )}
            </div>
            <nav aria-label="..." className="history-footer">
                <ul className="pagination">
                    {pageNumbers.map(element => 
                        <div>
                            <li className="page-item" onClick={()=> {setPage(element)}}>
                                <button className="page-link">{element}</button>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </div>
    )
}