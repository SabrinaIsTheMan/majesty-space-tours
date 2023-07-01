import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

function SignUpPage({ tourDate, location }) {

    const [open, setOpen] = useState(false);

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
    }

    const onOpenModal = () => setOpen(true);

    const onCloseModal = () => {
        setOpen(false);

        setBookingInfo({
            name: "",
            tour: location,
            date: tourDate
        });
    }

    const onClick = (e) => {
        if (bookingInfo.name === "") {
            onOpenModal(e);
        } else {
            handleSubmit(e);
            onOpenModal(e);
        }
    }

    return (
        <section className="signUpPage">
            <div className="wrapper">
                <h2>Book Your Tour to {location} on {tourDate}</h2>

                <form action="submit">
                    <div className="formBar">
                        <label htmlFor="newName">Name: </label>
                        <input
                            type="text"
                            required
                            placeholder="Type your name..."
                            id="newName"
                            name="name"
                            onChange={handleChange}
                            value={bookingInfo.name}
                        />
                    </div>
                    <button onClick={onClick}>Book Tour</button>
                </form>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modalContent">
                        {
                            bookingInfo.name === ""
                                ? <p>Please input your name!</p>
                                : <p>Your tour to the {location} on {tourDate} has been booked!</p>
                        }
                        <Link to="/">
                            <button>Return to Homepage</button>
                        </Link>

                    </div>
                </Modal>

            </div>
        </section>
    );
}

export default SignUpPage;
