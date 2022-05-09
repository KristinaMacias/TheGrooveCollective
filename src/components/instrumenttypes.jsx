import React from "react";

export default class InstrumentTypes extends React.Component {
    render() {
        return (
            <div className="container-fluid p-5 text-center">
                <div className="row p-5">
                    <div className="col">
                        <div className="card bg-secondary text-light">
                            <div className="card-header">
                                <h3>Synthesizers</h3>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, optio!</p>
                                <button className="btn btn-warning">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-secondary text-light">
                            <div className="card-header">
                                <h3>
                                    Samplers & Grooveboxes
                                </h3>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, sapiente!</p>
                                <button className="btn btn-warning">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-secondary text-light">
                            <div className="card-header">
                                <h3>Accessories</h3>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, optio.</p>
                                <button className="btn btn-warning">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}