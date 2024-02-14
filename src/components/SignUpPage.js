import '../styles/Page.css';
import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

function SignUpPage({ tourDate, location }) {

    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const [showHomeButton, setShowHomeButton] = useState(false);

    const [bookingInfo, setBookingInfo] = useState({
        name: "",
        tour: location,
        date: tourDate
    });

    const Filter = require('bad-words'), filter = new Filter();

    const handleChange = (e) => {

        setBookingInfo({
            ...bookingInfo, //spreading existing state back into new state value
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (bookingInfo.name === ""){
            setModalMessage("Please input your name!");
            onOpenModal();
        }
        else if (filter.isProfane(bookingInfo.name)) {
            setModalMessage("Please watch your language!");
            onOpenModal();
        } else {
            const database = getDatabase(firebase);
            const dbRef = ref(database);

            push(dbRef, bookingInfo);

            setModalMessage(`Your tour to the ${location} on ${tourDate} has been booked!`);
            setShowHomeButton(true);
            onOpenModal();
        }
    }

    const onOpenModal = () => setOpen(true);

    const onCloseModal = () => {
        setOpen(false);
        setShowHomeButton(false);

        setBookingInfo({
            name: "",
            tour: location,
            date: tourDate
        });
    }

    return (
        <section className="signUpPage page">
            <div className="wrapper">
                <h2>Book Your Tour to {location} on {tourDate}</h2>

                <form action="submit" onSubmit={handleSubmit}>
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
                    <button type='submit'>Book Tour</button>
                </form>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modalContent">
                        <p>{modalMessage}</p>
                        <Link to="/" style={{ display: showHomeButton ? 'block' : 'none' }}>
                            <button>Return to Homepage</button>
                        </Link>
                    </div>
                </Modal>
            </div>
        </section>
    );
}

export default SignUpPage;
