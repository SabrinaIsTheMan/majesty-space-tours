import '../styles/Location.css';

function Location() {
    return (
        <div className="location wrapper">
            <div className="locationImg">
                <div className="imgContainer">
                    <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                </div>
            </div>

            <div className="locationInfo">
                <h3>Location</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum ea officiis magni asperiores ipsam unde minus? Vitae consequuntur impedit aperiam itaque quia iste ea similique modi fugiat nostrum animi, nemo eos odio culpa sed quis inventore aliquid ratione tempore nam a voluptatem molestiae eligendi. Debitis quae velit facere architecto quibusdam ipsa cupiditate provident alias a nesciunt doloremque, deserunt voluptates expedita nihil eveniet, ea ab id tempore non enim amet! Unde molestias quos, pariatur perferendis tenetur quaerat ea quasi tempore sapiente. Beatae velit facilis aliquid fugit corrupti minima, officiis facere ex mollitia quaerat illum modi doloremque enim reiciendis tempore illo.
                </p>
                <button>Tour Dates</button>
                <button className='backButton'>Back</button>
            </div>
        </div>
    );
}

export default Location;
