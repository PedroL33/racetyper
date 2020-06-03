import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useSelector } from 'react-redux';

const Display = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}})
    const passage = useSelector(state => state.passage)
    const correct = useSelector(state => state.correct)
    const incorrect = useSelector(state => state.incorrect)

    return (
        <div>
            <animated.div style={fade} className="console-passage">
                <span id="correct">{ correct }</span>
                <span id="incorrect">{ incorrect }</span>
                <span id="passage">{ passage }</span>
            </animated.div>
        </div>
    )
}

export default Display;