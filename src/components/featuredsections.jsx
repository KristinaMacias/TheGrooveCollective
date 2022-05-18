import React from "react";

export default class FeaturedSections extends React.Component {
    render() {
        return (
            <div className="container-fluid p-5 text-center">
                <div className="row p-5">
                    {/* News Card */}
                    <div className="col">
                        <div className="card bg-secondary text-light p-3">
                            <div className="card-body">
                                <h3>News</h3>
                                <img className="m-3"src={'https://static.thenounproject.com/png/117956-200.png'} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, optio!</p>
                                <button className="btn btn-warning mt-3">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Meetups Card */}
                    <div className="col">
                        <div className="card bg-secondary text-light mb-2 p-3">
                            <div className="card-body">
                                <h3>Meetups</h3>
                                <img className="m-3" src={'https://static.thenounproject.com/png/661480-200.png'} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, sapiente!</p>
                                <button className="btn btn-warning mt-3">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}