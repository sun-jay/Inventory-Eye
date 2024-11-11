// components/WebCam.jsx
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const WebCam = ({ setImage }) => {
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const capture = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setImage(screenshot);
    }
  };

//   print 

  return (
    <div>
      <h2>Webcam Display</h2>
      {/* Continuous webcam feed */}
      <Webcam
        audio={false}
        height={720}
        width={1280}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture Photo</button>
    </div>
  );
};

export default WebCam;
