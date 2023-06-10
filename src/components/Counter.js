import '../styles/Counter.css';
import { useState, useEffect } from 'react';

function Counter({count}) {

    const countWording = () => {
        if (count === 0) {
            return 'You have no virtual tours left today!';
        } else if (count === 1) {
            return 'You have 1 virtual tour left today!';
        } else {
            return `You have ${count} virtual tours left today!`;
        }
    }

    return (
        <div className="counter wrapper">
            <div className="counterBubble">
                {count === 0 ? 'You have no virtual tours left today!'
                : count === 1 ? 'You have 1 virtual tour left today!'
                : `You have ${count} virtual tours left today!`
                }
            </div>
        </div>
    );
}

export default Counter;
