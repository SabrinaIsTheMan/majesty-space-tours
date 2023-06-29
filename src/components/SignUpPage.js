import firebase from '../firebase';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

function SignUpPage({ tourDate, location }) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [passengers, setPassengers] = useState([]);
    const [userInput, setUserInput] = useState({
        name: "",
        tour: "",
        date: ""
    });

    useEffect(() => {
        const database = getDatabase(firebase);

        const dbRef = ref(database);

        onValue(dbRef, (response) => {

            const newState = [];
            const data = response.val();

            for (let key in data) {
                newState.push(data[key]);
            }

            setPassengers(newState);
        })
    }, []);

    const handleChange = (e) => {

        setUserInput({
            ...userInput, //spreading existing state back into new state value
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, userInput);

        setUserInput({
            name: "",
            tour: { location },
            date: { tourDate }
        });
    }

    const onClick = (e) => {
        handleSubmit(e);
        onOpenModal(e);
    }

    const onClose = () => {
        window.location = '/';
    }

    return (
        <div className="signUpPage">
            <div className="wrapper">
                <h2>Book Your Tour to {location} on {tourDate}</h2>

                <form action="submit">
                    <label htmlFor="newName">Name: </label>
                    <input
                        type="text"
                        id="newName"
                        name="name"
                        onChange={handleChange}
                        value={userInput.name}
                    />

                    <button onClick={onClick} >Book Tour</button>
                    <Modal open={open} onClose={onClose} center>
                        <h3>Your tour to {location} on {tourDate} has been booked!</h3>
                        <Link to="/">
                            <button>Return to the Homepage</button>
                        </Link>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
