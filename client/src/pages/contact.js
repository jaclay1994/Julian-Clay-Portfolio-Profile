import React from "react";
import Container from "../components/Container";
import Column from "../components/Column";

function Contact() {
    return (
        <div>
            <Container>
                <Column size="col-md-6 card p-4">


                    <h3>Contact</h3>

                    <hr />

                        <label for="Name Input" className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name Input" placeholder="name" />

                            <br />

                                <label for="Email Input" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="Email Input" placeholder="name@example.com" />

                                    <br />

                                        <label for="Message Input" className="form-label">Message</label>
                                        <textarea className="form-control" id="Message Input" rows="3"></textarea>

                                        <br />

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>

                                        <br />


                </Column>
            </Container>
        </div>
)};

export default Contact;