import '../styles/Page.css';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function SearchPage() {

    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const [searchName, setSearchName] = useState("");

    const [passengers, setPassengers] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const Filter = require('bad-words'), filter = new Filter();

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (res) => {

            const newState = [];
            const data = res.val();

            for (let key in data) {
                newState.push({key: key, entry: data[key]});
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
            setModalMessage("Please input your name!");
            onOpenModal();
        } else if (filter.isProfane(searchName)) {
            setModalMessage("Please watch your language!");
            onOpenModal();
        } else {
            filterSearch();
        }
    }

    const filterSearch = () => {

        const filteredResult = passengers.filter(passenger => passenger.entry.name === searchName);

        if (filteredResult.length === 0) {
            setModalMessage(`There are no booked tours for ${searchName}!`);
            onOpenModal();
        } else {
            const sortedResult = filteredResult.sort(function (a, b) { return a.entry.date > b.entry.date });
            setSearchResult(sortedResult);
        }
    }

    const filterNew = () => {
        const filteredResult = passengers.filter(passenger => passenger.entry.name === searchName);

        if (filteredResult.length === 0) {
            setSearchResult([]);
        } else {
            const sortedResult = filteredResult.sort(function (a, b) { return a.entry.date > b.entry.date });
            setSearchResult(sortedResult);
        }
    }

    const onOpenModal = () => {
        setOpen(true);
    }

    const onCloseModal = () => {
        filterNew();
        setOpen(false);
    }

    const handleDelete = (entryKey) => {

        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${entryKey}`);
        remove(dbRef);

        setModalMessage("You've cancelled your tour.");
        onOpenModal();
    }

    return (
        <section className="searchPage page">
            <div className="wrapper">
                <h2>Search For Your Tour</h2>
                <h4>Forgot which tour you booked? Use the form below!</h4>

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
                    {searchResult.map( (result) => {
                        return (
                            <tr key={result.key}>
                                <td><p>{result.entry.date}</p></td>
                                <td><p>{result.entry.tour}</p></td>
                                <td><button
                                    className="cancelButton"
                                    onClick={ () => handleDelete(result.key) }><p>Cancel</p>
                                    </button></td>
                            </tr>
                        )
                    }) }
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
