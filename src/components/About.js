import '../styles/About.css';

function About() {
    return (
        <section className="about">
            <div className="wrapper">
                <h2>About Team Majesty</h2>

                <div className="profileFlex">
                    <div className="profile">
                        <div className="imgContainer">
                            <img src="avatarJulia.png" alt="Julia's Icon" />
                        </div>
                        <h6 className='button'><a href="https://github.com/juliarwong" target="_blank" rel="noopener noreferrer">Julia</a></h6>
                    </div>

                    <div className="profile">
                            <div className="imgContainer">
                                <img src="avatarSabrina.png" alt="Sabrina's Icon" />
                            </div>
                        <h6 className='button'><a href="https://github.com/SabrinaIsTheMan" target="_blank" rel="noopener noreferrer">Sabrina</a></h6>
                    </div>

                    <div className="profile">
                        <div className="imgContainer">
                            <img src="avatarTriston.png" alt="Triston's Icon" />
                        </div>
                        <h6 className='button'><a href="https://github.com/tr1st0n" target="_blank" rel="noopener noreferrer">Triston</a></h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
