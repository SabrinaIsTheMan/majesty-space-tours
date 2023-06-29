import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function SearchPage() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [searchName, setSearchName] = useState("");

    const [passengers, setPassengers] = useState([]);
    const [searchResult, setSearchResult] = useState({});

    useEffect (() => {
        const database = getDatabase(firebase);

        const dbRef = ref(database);

        onValue(dbRef, (res) => {

            const newState = [];
            const data = res.val();

            for (let key in data) {
                newState.push(data[key]);
            }

            setPassengers(newState);
        })
    }, []);

    const handleChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(passengers);

        const result = passengers.find(passengers => passengers.name === searchName);

        setSearchResult(result);
    }

    const onClick = (e) => {
        handleSubmit(e);
        onOpenModal(e);
    }

    return (
        <section className="searchPage">
            <div className="wrapper">
                <h2>Search For Your Tour</h2>
                <h3>Forgot which tour you booked? Use the form below!</h3>

                <form action="submit">
                    <label htmlFor="newName">Name: </label>
                    <input
                        type="text"
                        id="newName"
                        name="name"
                        onChange={handleChange}
                        value={searchName}
                    />
                    <button onClick={onClick}>Search Tours</button>
                </form>

                <Modal open={open} onClose={onCloseModal} center>
                    <h3>{searchResult.name}'s tour to {searchResult.tour} is on {searchResult.date}!</h3>
                </Modal>
            </div>
        </section>
    )
}

export default SearchPage;
