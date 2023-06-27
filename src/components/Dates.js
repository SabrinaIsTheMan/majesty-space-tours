import '../styles/Dates.css';

function Dates( {tourDates} ) {

    return (
        <div className="dates">

            <h2>Location 1</h2>
            <h2>Departure Dates</h2>
            <h4>Our clients' safety is paramount - all departure dates are free of scheduled near-Earth objects and asteroids.</h4>

            {tourDates.length === 0
            ? <h4 className="noTours">There are no safe departure dates in the next week, please try again later!</h4>
            : <ul className="options">
                {tourDates.map((date) =>
                <li key={date}>
                    <button value={date}>{date}</button>
                </li>
                )}
            </ul>
            }
        </div>
    );
}

export default Dates;
