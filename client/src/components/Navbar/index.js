import React from "react";
import "./style.css";
import ScriptTag from 'react-script-tag';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ScriptTag src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                    crossorigin="anonymous"></ScriptTag>

                <div className="container-fluid">

                    <a className="navbar-brand mb-0 h1">Julian Clay</a>

                    {/* <!--Navigation Page Size Toggler Button--> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    {/* <!--Nav Bar Inline List--> */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul className="nav">

                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div class="bg-img"></div>
        </div>
    )
}

export default Navbar;