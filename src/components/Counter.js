import '../styles/Counter.css';

function Counter({ count, counterDisplay }) {

    return (
        <div className="counter wrapper" style={{display: counterDisplay ? "none" : "block" }}>
            <p className="counterBubble">
                {count === 0 ? 'You have no virtual tours left today!'
                : count === 1 ? 'You have 1 virtual tour left today!'
                : `You have ${count} virtual tours left today!`
                }
            </p>
        </div>
    );
}

export default Counter;
