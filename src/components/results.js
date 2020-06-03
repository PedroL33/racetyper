import React, {useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActive, togglePlaying, choosePassage, resetCorrect, resetIncorrect, resetCountdown, resetMistakes } from '../actions/index';
import postScores from '../apiCalls/postScores';
import getScores from '../apiCalls/getScores';
import getAllScores from '../apiCalls/getAllScores';
import checkAuth from '../authorization/checkAuth';

const Results = () => {

    const drop = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 1000}})
    const length = useSelector(state => state.length)
    const start = useSelector(state => state.start)
    const end = useSelector(state => state.end)
    const mistakes = useSelector(state => state.mistakes)
    const passages = useSelector(state => state.passages)
    const dispatch = useDispatch()

    useEffect(()=> {
        const wpm = Math.round((length/5)/((end-start)/1000) * 60)
        const accuracy = Math.round(((length-mistakes)/length)*100)
        checkAuth() && dispatch(postScores(wpm, accuracy));
    }, [])

    function handleClick(e, overview) {
        e.preventDefault()
        if(checkAuth()) {
            dispatch(getScores())
            dispatch(getAllScores())
        }
        var index = Math.floor(Math.random() * 723)
        dispatch(choosePassage(passages[index].text))
        dispatch(resetCorrect())
        dispatch(resetIncorrect())
        dispatch(resetCountdown())
        dispatch(resetMistakes())
        overview ? dispatch(toggleActive()) : dispatch(togglePlaying())
    }

    return (
        <animated.div style={drop} className="results">
            <div>
                <h4>Speed: {Math.round((length/5)/((end-start)/1000) * 60)} WPM</h4> 
                <h4>Accuracy: {Math.round(((length-mistakes)/length)*100)}%</h4>
            </div>
            <div>
                { checkAuth() && <button onClick={(e) => {handleClick(e, true)}} className="results-button">Overview.</button> }
                <button onClick={e => handleClick(e, false)} className="results-button">New Passage</button>
            </div>
        </animated.div>
    )
}

export default Results;