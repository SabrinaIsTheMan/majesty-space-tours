import '../styles/AboutAlt.css';

function AboutAlt() {
    return (
        <div className="about">
            <div className="wrapper">
                <h2>About Team Majesty</h2>

                <div className="profileGrid">
                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h4 className='button'><a href="#">About Mahmood</a></h4>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h4 className='button'><a href="#">About Julia</a></h4>
                    </div>

                    <div className="profile">
                            <div className="imgContainer">
                                <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                            </div>
                            <h4 className='button'><a href="#">About Sabrina</a></h4>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h4 className='button'><a href="#">About Triston</a></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutAlt;
