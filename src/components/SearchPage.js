// import firebase from '../firebase';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import { useState, useEffect } from 'react';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

// function SearchPage() {

//     const [open, setOpen] = useState(false);

//     const [searchName, setSearchName] = useState("");

//     const [passengers, setPassengers] = useState([]);

//     const [searchResult, setSearchResult] = useState({});
//     const [passengerArray, setPassengerArray] = useState([]);

//     useEffect(() => {
//         const database = getDatabase(firebase);

//         const dbRef = ref(database);

//         onValue(dbRef, (res) => {

//             const newState = [];
//             const data = res.val();

//             for (let key in data) {
//                 newState.push(data[key]);
//             }

//             setPassengers(newState);
//         })
//     }, []);

//     const handleChange = (e) => setSearchName(e.target.value);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const resultObject = passengers.findLast(passenger => passenger.name === searchName); //look for most recent booking

//         if (resultObject === undefined) {
//             setSearchResult({}) //this person doesn't have a booking
//         } else {
//             setSearchResult(resultObject);

//             const resultArray = passengers.filter(passenger => passenger.date === resultObject.date && passenger.tour === resultObject.tour)

//             setPassengerArray(resultArray);
//         }
//     }

//     const onOpenModal = () => setOpen(true);

//     const onCloseModal = () => {
//         setOpen(false);
//         setSearchName("");
//         setSearchResult({});
//         setPassengerArray([]);
//     }

//     const onClick = (e) => {
//         handleSubmit(e);
//         onOpenModal(e);
//     }

//     return (
//         <section className="searchPage">
//             <div className="wrapper">
//                 <h2>Search For Your Tour</h2>
//                 <h4>Forgot which tour you booked? Use the form below!</h4>

//                 <form action="submit">
//                     <div className="formBar">
//                         <label htmlFor="newName">Name: </label>
//                         <input required
//                             type="text"
//                             placeholder="Type your name..."
//                             id="newName"
//                             name="name"
//                             onChange={handleChange}
//                             value={searchName}
//                         />
//                     </div>
//                     <button onClick={onClick}>Search Tours</button>
//                 </form>

//                 <Modal open={open} onClose={onCloseModal} center>
//                     <div className="modalContent">
//                         {searchName === "" ? <p>Please input your name!</p>
//                             : Object.keys(searchResult).length === 0 ? <p>{searchName} has not booked a tour!</p>
//                                 : <>
//                                     <p>{searchResult.name}'s tour to the {searchResult.tour} is on {searchResult.date}!</p>
//                                     <p>Number of passengers on this tour: {passengerArray.length} </p>
//                                 </>

//                         }
//                     </div>
//                 </Modal>
//             </div>
//         </section>
//     )
// }

// export default SearchPage;
