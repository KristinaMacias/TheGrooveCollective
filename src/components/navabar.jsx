import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-5 lead">
                <a class="navbar-brand" href="#">The Groove Collective</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Featured Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Reviews</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}