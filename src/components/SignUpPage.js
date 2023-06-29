import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

function SignUpPage({ tourDate, location }) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
;
    const [bookingInfo, setBookingInfo] = useState({
        name: "",
        tour: location,
        date: tourDate
    });

    const handleChange = (e) => {

        setBookingInfo({
            ...bookingInfo, //spreading existing state back into new state value
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, bookingInfo);

        setBookingInfo({
            name: "",
            tour: location,
            date: tourDate
        });
    }

    const onClick = (e) => {
        handleSubmit(e);
        onOpenModal(e);
    }

    const onClose = () => {
        window.location = '/';
        setOpen(false);
    }

    return (
        <section className="signUpPage">
            <div className="wrapper">
                <h2>Book Your Tour to {location} on {tourDate}</h2>

                <form action="submit">
                    <label htmlFor="newName">Name: </label>
                    <input
                        type="text"
                        id="newName"
                        name="name"
                        onChange={handleChange}
                        value={bookingInfo.name}
                    />

                    <button onClick={onClick} >Book Tour</button>
                </form>

                <Modal open={open} onClose={onClose} center>
                    <h3>Your tour to {location} on {tourDate} has been booked!</h3>
                    <Link to="/">
                        <button>Return to the Homepage</button>
                    </Link>
                </Modal>

            </div>
        </section>
    );
}

export default SignUpPage;
