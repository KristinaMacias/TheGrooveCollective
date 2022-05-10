import React from "react";

export default class GrooveboxRack extends React.Component {
    render() {
        return (
            <div className="about-img container-fluid bg-dark text-light p-5" style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1628452800825-c2d5682e016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80")`, backgroundSize: 'cover', }}>
                    <div className="about-sub container p-5">
                        <div class="jumbotron jumbotron-fluid">
                            <div className="row text-center">
                                <h1>Samplers & GrooveBoxes</h1>
                                <hr className="mb-5 mt-3" />
                                <div className="col">
                                    {/* Good place for props */}
                                    <h3>Roland SP404 MkII</h3>
                                    <img className="sp" src={'https://djmag.com/sites/default/files/article/image/Roland-SP-404-MKII-Elektronauts%401400x1050_0.jpeg'} alt="" />
                                    <br />
                                    <button className="btn btn-warning mt-3">Specs</button>

                                </div>
                                <div className="col">
                                    <h3>Overview</h3>
                                    <p>Roland's compact cult sampler SP-404 undergoes an extensive revision with the version MkII, which can be seen. With now 17 velocity sensitive pads you have access to even more samples than before. The internal memory holds an impressive 16 GB and gives access to 2560 samples and 2560 patterns, distributed over 16 samples x 10 banks and 16 projects. The display (finally) allows graphical displays, so you can cut sounds and loops directly on the device, among other things. Inputs for microphone/guitar and line signals allow the recording of audio material in the device, resampling is also integrated and finished sounds and loops with the desired settings can be created as a new sample. In chromatic mode samples can be played with a fixed pitch, this is especially useful for synth sounds. With the sequencer, beats and loops with a length of up to 64 steps (4 bars) can be recorded. Live functions such as Reverse and Roll provide the necessary variation when recording and jamming. The tempo of loops is automatically detected.</p>
                                </div>
                                <div className="discussion row mt-5">
                                    <h3>Discussion</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}