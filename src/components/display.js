import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useSelector } from 'react-redux';

const Display = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}})
    const passage = useSelector(state => state.passage)
    const correct = useSelector(state => state.correct)
    const incorrect = useSelector(state => state.incorrect)
    const start = useSelector(state => state.start)
    const end = useSelector(state => state.end)
    const counter = useSelector(state => state.countdown);

    return (
        <div>
            { counter===0 ? <h2>{Math.round(((correct.length)/5)/((end-start)/1000)*60)}</h2> : null }
            <animated.div style={fade} className="text-left">
                <span id="correct">{ correct }</span>
                <span id="incorrect">{ incorrect }</span>
                <span id="passage">{ passage }</span>
            </animated.div>
        </div>
    )
}

export default Display;