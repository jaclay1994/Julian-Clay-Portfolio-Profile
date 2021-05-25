import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";

function Portfolio() {
    return (
        <div>
            <Container>
                <Column size="col-md-9">
                    <h3>Portfolio</h3>

                    <hr />

                    <div class="row row-cols-1 row-cols-md-2 g-4">

                        <div class="col">
                            <div class="card">

                                <img src="./assets/images/Screenshot1.png" class="card-img-top" alt="Client demo website screenshot." />

                                <div class="card-body">

                                    <h5 class="card-title">Client Demo site</h5>
                                    <a class="card-text" href="https://jaclay1994.github.io/Client-Website-Assessability/">Application Link</a>
                                    <br />
                                    <a class="card-text" href="https://github.com/jaclay1994/Client-Website-Assessability">Github Link</a>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">

                                <img src="./assets/images/project_2.png" class="card-img-top" alt="Pass Me The Aux Mobile Screenshot" />

                                <div class="card-body">

                                    <h5 class="card-title">Pass Me The Aux</h5>
                                    <a class="card-text" href="https://jpecheverryp.github.io/pass-me-the-aux/index.html">Application Link</a>
                                    <br />
                                    <a class="card-text" href="https://github.com/jaclay1994/pass-me-the-aux">Github Link</a>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">

                                <img src="./assets/images/project3.png" class="card-img-top" alt="Photo by Anna Shvets from Pexels Picture of a cat with a pink bouffant." />

                                <div class="card-body">

                                    <h5 class="card-title">Work Schedule App</h5>
                                    <a class="card-text" href="https://jaclay1994.github.io/Work-Schedule/">Application link</a>
                                    <br />
                                    <a class="card-text" href="https://github.com/jaclay1994/Work-Schedule">Github link</a>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">


                                <img src="./assets/images/IMG_E4907C83C1C4-1.jpeg" class="card-img-top" alt="Knowtations mobile website screenshot." />

                                <div class="card-body">

                                    <h5 class="card-title">Knowations</h5>
                                    <p class="card-text">Here is a sneak peek at my project site designed in Squarespace.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">


                                <img src="./assets/images/outWrite.png" class="card-img-top" alt="OutWrite project website screenshot." />

                                <div class="card-body">

                                    <h5 class="card-title">Client Demo site</h5>
                                    <a class="card-text" href="https://strawberry-crisp-31516.herokuapp.com/">Application Link</a>
                                    <br />
                                    <a class="card-text" href="https://github.com/jaclay1994/outWrite">Github Link</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </Column>
            </Container>
        </div>
    )
}

export default Portfolio;