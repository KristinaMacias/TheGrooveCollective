import React from "react";

export default class About extends React.Component {
    render() {
        return (
        <div className="about-img container-fluid bg-dark text-light p-5" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1610980532362-2e89ed3b964a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")` }}>
                <div className="about-sub container p-5">
                    <h1 className="text-center mb-4">The Groove Collective</h1>
                    <div className="text-center">
                        <img src={'https://cdn3.iconfinder.com/data/icons/music-210/100/Music-90-512.png'} className="synth-icon" alt="synth icon"/>
                    </div>
                    <p className="lead text-center mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur harum tenetur ea provident quibusdam aperiam sapiente porro? Iste aspernatur rem atque tempore perferendis sed, veritatis veniam libero maxime nihil, velit voluptate omnis aliquid nesciunt provident autem? Nulla, aut. Qui dignissimos nisi vero quia harum ratione autem nobis provident culpa.</p>
                    <div className="text-center">
                        <button className="btn btn-dark mt-4">Contact</button>
                    </div>
                </div>
            </div>
        )
    }
}