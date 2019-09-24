import React, {Component} from "react";

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
                    <video id='camera' width="800" autoPlay/>
                    <button id="capture" onClick={this.capture} 
                            className="btn btn-secondary"> Capture </button>
                <canvas id="canvas" width="600" height="600" />
            </div>

        );
    }

}


export default Webcam;
