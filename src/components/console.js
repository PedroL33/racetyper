import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Results from './results.js'
import Display from './display.js'
import Countdown from './countdown.js'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/index';

const Console = () => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const current = useSelector(state => state.current);
    const counter = useSelector(state => state.countdown);
    const correct = useSelector(state => state.correct);
    const incorrect = useSelector(state => state.incorrect);
    const passage = useSelector(state => state.passage)
    const playing = useSelector(state => state.isPlaying);
    const end = useSelector(state => state.end);
    const start = useSelector(state => state.start)

    const props = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }})

    useEffect(() => {
        if(playing) {
            dispatch(actions.reset())
        }
    }, [playing])
    useEffect(() => {
        if(counter === 0) {
            inputRef.current.disabled = false;
            inputRef.current.focus()
            dispatch(actions.initializeStart());
            dispatch(actions.initializeLength(passage.length))
        }
    }, [counter])

    function handleKeyPress(e) {
        var compare = passage.split("")[0]
        console.log(end);
        if(e.key.match(/^[0-9a-zA-Z ,'.!@#$%^&*()?';":-]+$/) && incorrect.length < 5 && compare && e.key !== 'Enter') {
            dispatch(actions.initializeEnd())
            if(e.key === compare && incorrect.length===0) {
                dispatch(actions.addCorrect(compare))
                if(passage.length===1) {
                    dispatch(actions.initializeEnd())
                    dispatch(actions.togglePlaying())
                }
            }else {
                if(incorrect.length === 0) {
                    dispatch(actions.updateMistakes())
                }
                inputRef.current.classList.add("bg-danger")
                dispatch(actions.addIncorrect(compare));
            }
            dispatch(actions.add(e.key));
            dispatch(actions.removePassage())
        }
    }

    function handleKeydown(e) {
        if(e.keyCode === 8) {
            if(current !== "") {
                if(incorrect.length === 0 && correct.length !== 0) {
                    dispatch(actions.addPassage(correct.slice(correct.length-1, correct.lenth)))
                    dispatch(actions.removeCorrect())
                }else {
                    dispatch(actions.addPassage(incorrect.slice(incorrect.length-1, incorrect.lenth)))
                    dispatch(actions.removeIncorrect())
                } 
                if(incorrect.length === 1) {
                    inputRef.current.classList.remove("bg-danger")
                }
                dispatch(actions.remove());
            }
        }
    }

    function handleChange(e) {
        if(incorrect.length===0 && correct.split("").pop() === " ") {
            dispatch(actions.reset());
        }
    }

    return (
        <div className="console-container">
            <animated.div style={props} className="typing-console">
                { counter !== 0 && playing ? <Countdown /> : null }
                { counter === 0 && playing ? <div className="console-display"><div>{Math.round(((correct.length)/5)/((end-start)/1000)*60)}</div></div> : null}
                { playing ? <Display /> : <Results />}

                <div id="input">
                    {playing && <input type="text" disabled="disabled" ref={inputRef} className="form-control" onKeyDown={handleKeydown} onKeyPress={handleKeyPress} value={current} onChange ={handleChange}/> }
                </div>
            </animated.div>
        </div>
    )
}

export default Console;