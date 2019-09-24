import React, {Component} from "react";
import "./WebCam.css"
class Webcam extends Component {

    capture = () => {
        let camera = document.getElementById('camera');
        document.getElementById('capture').addEventListener('click', () => {
            document.getElementById('canvas').getContext('2d').drawImage(camera,
                0, 0)
        });
    };

    componentDidMount() {
            this.capture();
    };


    render() {

        if (navigator.getUserMedia)
            navigator.getUserMedia({video: true},
                stream => {
                    let camera = document.getElementById('camera');
                    camera.srcObject = stream;
                    camera.onloadedmetadata = () => {
                        camera.play();
                    }
                }, 
                err => {console.log(err)}
            );

        return (
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <h4 className="title">Camera Live Stream</h4>  
                            <video id='camera' width="800" autoPlay/>
                             <div className="button-holder">
                                <button id="capture" onClick={this.capture} 
                                    className="btn btn-secondary"> Take Capture </button>
                            </div>
                        </div>  
                        <canvas id="canvas" width="700" height="700" />
                    </div>
                </div>
        );
    }

}


export default Webcam;
