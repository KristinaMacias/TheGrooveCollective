import React from "react";

export default class About extends React.Component {
    render() {
        return (
        <div className="about-img container-fluid bg-dark text-light p-5" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1610980532362-2e89ed3b964a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")`, backgroundSize: 'cover', }}>
                <div className="about-sub container p-5 text-center">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4 mb-4">The Groove Collective</h1>
                            <img src={'https://cdn3.iconfinder.com/data/icons/music-210/100/Music-90-512.png'} className="synth-icon" alt="synth icon"/>
                            <p class="lead mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum incidunt ex numquam id sed maiores quaerat deserunt consectetur veniam in, sit esse omnis odio magni asperiores dolore quidem quibusdam deleniti modi quis vero sequi reiciendis harum nulla. Cum, quibusdam doloremque.</p>
                            <div className="text-center">
                                <button className="btn btn-dark mt-4">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}