import '../styles/Page.css';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function SearchPage() {

    const [modalMessage, setModalMessage] = useState("");

    const [open, setOpen] = useState(false);

    const [searchName, setSearchName] = useState("");

    const [passengers, setPassengers] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect (() => {
        const database = getDatabase(firebase);

        const dbRef = ref(database);

        onValue(dbRef, (res) => {

            const newState = [];
            const data = res.val();

            for (let key in data) {

                const passengerData = {
                    key: key,
                    entry: data[key]
                }

                newState.push(passengerData);
            }

            setPassengers(newState);
        })

    }, []); //every time modal closes we check again

    const handleChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchName === "") {
            setModalMessage("Please input a name!");
            onOpenModal();
        } else {
            filterSearch();
        }
    }

    const filterSearch = () => {
        const filteredResult = passengers.filter(passenger => passenger.entry.name === searchName);

        if (filteredResult.length === 0) {

            console.log(filteredResult.length);
            setModalMessage(`${searchName} has not booked a tour!`);
            onOpenModal();

        } else {

            const sortedResult = filteredResult.sort(function (a, b) { return a.entry.date - b.entry.date });
            setSearchResult(sortedResult);
        }
    }

    const onOpenModal = () => {
        setOpen(true);
    }

    const onCloseModal = () => {
        setOpen(false);
    }

    const handleDelete = (entryID) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${entryID}`);
        remove(dbRef);

        setModalMessage("You've cancelled your tour.");
        onOpenModal();

        setSearchName("");
        setPassengers([]);
        setSearchResult([]);
    }

    return (
        <section className="searchPage">
            <div className="wrapper">
                <h2>Search For Your Tour</h2>
                <h3>Forgot which tour you booked? Use the form below!</h3>

                <form action="submit">
                    <div className="formBar">
                        <label htmlFor="newName">Name: </label>
                        <input required
                            type="text"
                            placeholder="Type your name..."
                            id="newName"
                            name="name"
                            onChange={handleChange}
                            value={searchName}
                        />
                    </div>
                    <button onClick={handleSubmit}>Search Tours</button>
                </form>

                <table>
                    <tr>
                        <th><h5>Date</h5></th>
                        <th><h5>Tour</h5></th>
                        <th><h5>Cancel?</h5></th>
                    </tr>
                    {searchResult.map((result) => {
                        return (
                            <tr>
                                <td><p>{result.entry.date}</p></td>
                                <td><p>{result.entry.tour}</p></td>
                                <td><button
                                    className="cancelButton"
                                    key={result.key}
                                    onClick={() => {handleDelete(result.key)} }><p>Cancel</p></button></td>
                            </tr>
                        )
                    })}
                </table>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modalContent">
                        <p>{modalMessage}</p>
                    </div>
                </Modal>
            </div>
        </section>
    )
}

export default SearchPage;
