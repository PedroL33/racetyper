import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActive, togglePlaying, choosePassage, resetCorrect, resetIncorrect, resetCountdown, resetMistakes } from '../actions/index';
import getScores from '../apiCalls/getScores';
import getAllScores from '../apiCalls/getAllScores';

const Results = () => {

    const drop = useSpring({marginTop: 0, from: {marginTop: -400}}, {config: {duration: 3000}})
    const length = useSelector(state => state.length)
    const start = useSelector(state => state.start)
    const end = useSelector(state => state.end)
    const mistakes = useSelector(state => state.mistakes)
    const passages = useSelector(state => state.passages)
    const dispatch = useDispatch()

    function handleClick(e, overview) {
        e.preventDefault()
        dispatch(getScores())
        dispatch(getAllScores())
        var index = Math.floor(Math.random() * 723)
        dispatch(choosePassage(passages[index].text))
        dispatch(resetCorrect())
        dispatch(resetIncorrect())
        dispatch(resetCountdown())
        dispatch(resetMistakes())
        if(overview) {
            dispatch(toggleActive())
        }else {
            dispatch(togglePlaying())
        }
    }

    return (
        <div className="container mt-5">
            <animated.div style={drop} className="col-md-6 mx-auto">
                <h4>Speed: {Math.round((length/5)/((end-start)/1000) * 60)} WPM</h4> 
                <h4>Accuracy: {Math.round(((length-mistakes)/length)*100)}%</h4>
                <div className="container mt-5">
                    <button onClick={(e) => {handleClick(e, true)}} className="btn btn-outline-secondary text-white form-control">
                        Back to overview.
                    </button>
                    <button onClick={e => handleClick(e, false)} className="btn btn-outline-primary form-control">New Passage</button>
                </div>
            </animated.div>
        </div>
    )
}

export default Results;