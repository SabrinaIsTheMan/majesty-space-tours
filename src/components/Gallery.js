import '../styles/Gallery.css';
import Selection from './Selection';
import Location from './Location';
import Dates from './Dates';
import Counter from './Counter';

function Gallery() {
    return (
        <div className="gallery">
            <Dates />
            <Counter />
        </div>
    );
}

export default Gallery;
