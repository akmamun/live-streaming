import React,{Suspense} from "react"; 
import Webcam from "./components/Webcam";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
  	    <Webcam/>
     </Suspense>
    );
}
