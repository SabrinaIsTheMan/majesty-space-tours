import '../styles/Selection.css';
import { Link } from 'react-router-dom';

function Selection({ tourArray, handleTourClick, count } ) {

    return (
        <div className="selection">
            <h2>Select a destination to take a virtual tour:</h2>

            <ul className="tourOptions">
                { count === 0
                    ? tourArray.map(({ locationName }) =>
                        <li key={ locationName }>
                            <button
                                type="button"
                                disabled={ true }
                                value={ locationName }
                                onClick={(event) => { handleTourClick(event) } }
                            >{ locationName }</button>
                        </li>
                    )
                    : tourArray.map(({ locationName }) =>
                        <li key={ locationName }>
                            <Link to={ `${locationName}` }>
                                <button
                                type="button"
                                disabled={ false }
                                value={ locationName }
                                onClick={(event) => { handleTourClick(event) } }
                                >{ locationName }</button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Selection;
