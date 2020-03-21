import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Results from './results.js'
import Display from './display.js'
import Countdown from './countdown.js'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/index';
import postScores from '../apiCalls/postScores';

const Console = () => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const current = useSelector(state => state.current);
    const counter = useSelector(state => state.countdown);
    const correct = useSelector(state => state.correct);
    const incorrect = useSelector(state => state.incorrect);
    const passage = useSelector(state => state.passage)
    const playing = useSelector(state => state.isPlaying);
    const mistakes = useSelector(state => state.mistakes);
    const start = useSelector(state => state.start);
    const end = useSelector(state => state.end);
    const length = useSelector(state => state.length);

    const props = useSpring({opacity: 1, from: {opacity: 0}})

    useEffect(() => {
        if(playing) {
            dispatch(actions.reset())
        }else {
            dispatch(actions.initializeEnd());
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
        if(e.key.match(/^[0-9a-zA-Z ,'.!@#$%^&*()?';":-]+$/) && incorrect.length < 5 && compare && e.key !== 'Enter') {
            if(e.key === compare && incorrect.length===0) {
                dispatch(actions.addCorrect(compare))
                if(passage.length===1) {
                    dispatch(actions.togglePlaying())
                    dispatch(actions.initializeEnd())
                    const wpm = Math.round((length/5)/((end-start)/1000) * 60)
                    const accuracy = Math.round(((length-mistakes)/length)*100)
                    dispatch(postScores(wpm, accuracy));
                }
            }else {
                if(incorrect.length === 0) {
                    dispatch(actions.updateMistakes())
                }
                inputRef.current.classList.add("bg-danger")
                dispatch(actions.addIncorrect(compare));
            }
            dispatch(actions.initializeEnd())
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
        <div className="container col-md-8 mt-5 text-center">
            <animated.div style={props} className="col-md-8 mx-auto">
                { counter ? <Countdown /> :null }
                { playing ? <Display /> : <Results />}

                <div id="input" class="mt-5 col-md-6 mx-auto">
                    {playing && <input type="text" disabled="disabled" ref={inputRef} className="form-control" onKeyDown={handleKeydown} onKeyPress={handleKeyPress} value={current} onChange ={handleChange}/> }
                </div>
            </animated.div>
        </div>
    )
}

export default Console;