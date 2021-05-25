import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";


function Main() {
    return (
        <div>
            <Container>

                <Row>
                    <Column size="col-md-7 card p-4">
                        <h3>About Me</h3>

                        <hr />

                        <figure className="clearfix">

                            <img src="../images/IMG_5621" className="figure-img img-fluid rounded col-md-6 float-md-start p-4"
                                alt="Photo by Julian Clay of Julian riding a motorcycle in PR." />


                            <p>
                                Hello there! Welcome to my portfolio website. I'm in the process learning
                                how to code. I believe in freedom in all areas of life, along with
                                maining a balanced lifestyle to contain that freedom. My dream is to one
                                day be able to live abroad and pursue my dream routine of being able to write,
                                meditate, produce music, and surround myself with nature everyday! Having to
                                get up at a specified time everyday, being locked into one location and
                                operating around in an environment where I'm not growing is a result of
                                my career choice as storekeeper at Georgia Power. I am very grateful for
                                the opportunity that my company has given me, however the position that I'm
                                filling is stopping me from taking for advantage of my time and energy. I would
                                love to work at anytime that I designate! If I want to code at 2am to 10am
                                I could make that happen or if I wanted to work at home or on the beach, I could
                                make that happen. I plan to move to abroad to Puerto Rico and Ghana within the next
                                5 years and I will need a way to sustain myself without having to be employed
                                by physical location. Coding has also opened up the pathway to helping create
                                content for my company called Knowations. Knowtations is an agency that promotes
                                thought processing through forms of recording anything within the mental space.
                                Collaboration and organization are key components that are worked on through
                                various platforms and processes offered to all. Coding in itself is something
                                that I enjoy because I love a challenge. From all my years of playing video games,
                                coding allows me to re-enter the phase of never giving up in the face of finding
                                a solution and having played aroung with emulators, my googling skills finally find
                                relevency within my career path.

                            </p>
                        </figure>
                    </Column>
                </Row>
                <Row>
                    <Column size="col-md-3 card p-4 ms-3 h-50">
                        <p>
                            <h3>Contact Information</h3>
                            <hr />
                                Julian Clay
                            <br />
                                    Mobile#: 678-836-5753
                            <br />
                                        Email: jaclay94@gmail.com
                            <br />
                            <span> Resume: <a href="./assets/files/Julian_Clay_Resume.pdf" download>Download</a> </span>
                            <span> Github: <a href="https://github.com/jaclay1994">Julian's Repo</a> </span>
                            <span> LinkedIn: <a href="https://www.linkedin.com/in/julian-clay-6a2bb71ba/">Click Here</a> </span>
                            <br />
                            <a href="https://www.instagram.com/j_sizzless/">Instagram</a>
                            <br />
                            <a href="https://www.facebook.com/jay.clay.5836">Facebook</a>
                        </p>
                    </Column>
                </Row>

            </Container>
        </div>
    );
}

export default Main;