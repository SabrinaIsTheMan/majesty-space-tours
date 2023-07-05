import '../styles/About.css';

function About() {
    return (
        <section className="about">
            <div className="wrapper">
                <h2>About Team Majesty</h2>

                <div className="profileGrid">
                    <div className="profile">
                        <div className="imgContainer">
                            <img src="109559504.png" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/mahmkhat4206" target="_blank" rel="noopener noreferrer">About Mahmood</a></h6>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/juliarwong" target="_blank" rel="noopener noreferrer">About Julia</a></h6>
                    </div>

                    <div className="profile">
                            <div className="imgContainer">
                                <img src="iconSabrina.png" alt="Placeholder Puppy" />
                            </div>
                        <h6 className='button'><a href="https://github.com/SabrinaIsTheMan" target="_blank" rel="noopener noreferrer">About Sabrina</a></h6>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/tr1st0n" target="_blank" rel="noopener noreferrer">About Triston</a></h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
