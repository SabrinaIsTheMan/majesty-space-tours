import '../styles/Gallery.css';
import Form from './Form';
import Counter from './Counter';

function Gallery() {
    return (
        <div className="gallery">
            <h2>Select a destination below to take a virtual tour:</h2>
            <Form />
            <Counter />
        </div>
    );
}

export default Gallery;
