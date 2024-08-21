import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleButtonClick = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
      <div className="App">
        <button onClick={handleButtonClick}>Turn on Camera</button>
        {stream && <video ref={videoRef} autoPlay playsInline />}
      </div>
  );
}

export default App;