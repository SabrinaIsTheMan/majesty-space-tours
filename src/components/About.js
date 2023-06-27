import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="wrapper">
                <h2>About Team Majesty</h2>

                <div className="profileGrid">
                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/mahmkhat4206">About Mahmood</a></h6>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/juliarwong">About Julia</a></h6>
                    </div>

                    <div className="profile">
                            <div className="imgContainer">
                                <img src="iconSabrina.png" alt="Placeholder Puppy" />
                            </div>
                        <h6 className='button'><a href="https://github.com/SabrinaIsTheMan">About Sabrina</a></h6>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="http://place-puppy.com/500x500" alt="Placeholder Puppy" />
                        </div>
                        <h6 className='button'><a href="https://github.com/tr1st0n">About Triston</a></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
