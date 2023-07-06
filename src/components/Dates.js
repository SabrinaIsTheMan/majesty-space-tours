import '../styles/Dates.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoadingOverlay from '@speedy4all/react-loading-overlay';

function Dates({ handleDateClick, selectedDate, location, datesObject, loading }) {

    const today = new Date()
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [dangerousDates, setDangerousDates] = useState([]);

    useEffect(() => {

        // the api payload is an object (the week of dates) with nested objects, where the key:value pairs are date:array of objects (asteroids)
        // we need to loop through the days and look for asteroids that are dangerous - if there is a dangerous asteroid, we delete the day from the week so that no tours happen

        // we don't want to deal with keys, so we can use a for-of loop that iterates through values

        for (const [date, asteroids] of Object.entries(datesObject)) {
            // Object.entries returns an array of [key, value] pairs (converts the first layer of the object to an array)

            let dangerous = asteroids.some(asteroid => asteroid.is_potentially_hazardous_asteroid)
            // .some() checks for anything that contains .is_potentially_hazardous_asteroid===true aka if one true comes up, that whole date object is marked dangerous (we don't need to check every asteroid, just any asteroid)

            if (!dangerous) { // delete the dates that are not dangerous (aka safe) - we want an array of dangerous dates for the calendar to disable
                delete datesObject[date];
            }
        }

        const filteredDatesArray = Object.keys(datesObject).sort();
        // Object.keys returns an array of keys (the dates)
        // this isn't in order so we need to sort the dates before we set state and map through it in the return

        // convert this back into an array of Date objects using Date constructor (so that calendar can disable them) in tileDisabled
        const convertedArray = filteredDatesArray.map((date) => {
            const newDateObject = new Date(date);
            return newDateObject;
        });

        setDangerousDates(convertedArray);

    }, []); //we want this to be called when the component is mounted (console will give a warning and want us to put currentDate here but that doesn't make sense)

    // values and props for Calendar
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 28);

    const [calendarDate, setCalendarDate] = useState(new Date());

    const unavailableDates = useCallback(({ date }) => {
        return dangerousDates.find(dDate => isSameDay(dDate, date));
    }, [dangerousDates]);

    const isSameDay = (a, b) => {
        return differenceInCalendarDays(a, b) === 0;
    }

    const onClick = (value) => {
        handleDateClick(value);
        onOpenModal();
    }

    return (
        <section className="dates">
            <div className="wrapper">

                <h3>{location} Tour Dates</h3>
                <h4>All available departure dates below are free of asteroid/near-earth objects.</h4>

                <div className="calendarContainer">
                    <LoadingOverlay active={loading} spinner>
                        <Calendar
                            calendarType='US'
                            minDate={today}
                            maxDate={maxDate}
                            activeStartDate={today}
                            showNeighboringMonth={true}
                            view="month"
                            tileDisabled={unavailableDates}
                            prev2Label={null}
                            next2Label={null}
                            value={calendarDate}
                            onClickDay={onClick}
                        />
                    </LoadingOverlay>
                </div>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modalContent">
                        <p>Book a Tour on {selectedDate} to the {location}?</p>
                        <Link to={selectedDate}>
                            <button>Book Now</button>
                        </Link>
                    </div>
                </Modal>
            </div>
        </section>
    );
}

export default Dates;
