import React, { useState, useRef, useEffect } from 'react';

interface CameraProps {}

const Camera: React.FC<CameraProps> = () => {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleButtonClick = async (): Promise<void> => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: { exact: 'environment' } }
            });
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
        <div className="camera">
            <button onClick={handleButtonClick}>Turn on Camera</button>
            {stream && <video ref={videoRef} autoPlay playsInline />}
        </div>
    );
};

export default Camera;