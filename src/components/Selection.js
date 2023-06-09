import '../styles/Selection.css';

function Selection() {
    return (
        <div className="selection">
            <h2>Select a destination below to take a virtual tour:</h2>
            <div className="options">
                <button value="tbh">Location 1</button>
                <button value="tbh">Location 2</button>
                <button value="tbh">Location 3</button>
            </div>
        </div>
    );
}

export default Selection;
