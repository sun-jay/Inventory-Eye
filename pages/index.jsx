import React, { useState, useEffect } from "react";
import WebCam from '../components/WebCam';

async function callGPT4API(image) {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image }),
    });

    const data = await response.json();
    return data.analysis;
  } catch (error) {
    console.error('Error fetching analysis:', error);
    return "Error";
  }
}

export default function Home() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState("");

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (image) {
        setAnalysis("Pending");
        var analysisResult = await callGPT4API(image);

        // it looks lie: ```json { "sunglasses": 1, "pen": 1 } ```
        // remove the backticks and the json keyword and parse the string to an object
        analysisResult = JSON.parse(analysisResult.replace('json', '').replace(/`/g, ''));


        setAnalysis(analysisResult);
      }
    };

    fetchAnalysis();
  }, [image]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <WebCam setImage={setImage} />
      <p className="z-20 pt-4 text-center">Hello</p>

      {/* Display the captured image below the live webcam feed */}
      {image && (
        <div className="mt-4">
          <h3>Captured Image:</h3>
          <img src={image} alt="Captured" style={{ width: '200px', height: 'auto' }} />
          <p>Analysis: {JSON.stringify  (analysis)}</p>
        </div>
      )}
    </div>
  );
}