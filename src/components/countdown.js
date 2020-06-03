import React, { useEffect } from 'react';
import { tick } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const Countdown = () => {
    const dispatch = useDispatch()
    const countdown = useSelector(state => state.countdown);

    useEffect(()=> {
        var timer = countdown > 0 && setInterval(function() {
            dispatch(tick())
        },
        1000)
        return () => clearInterval(timer)
    }, [countdown])

    return(
        <div>
            <div className="console-display"><div>{countdown}</div></div>
        </div>
    )
}

export default Countdown;