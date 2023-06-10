import '../styles/Selection.css';
import { Link } from 'react-router-dom';

function Selection({ tourArray, handleTourClick, count } ) {

    return (
        <div className="selection">
            <h2>Select a destination below to take a virtual tour:</h2>

            <ul className="options">

                {tourArray.map(({ locationName }) =>
                    <li key={ locationName }>
                        <Link to={ `${locationName}` }>
                            <button
                            type="button"
                            disabled={ count === 0 ? true : false }
                            value={ locationName }
                            onClick={(event) => { handleTourClick(event) } }
                            >{ locationName }</button>
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    );
}

export default Selection;
