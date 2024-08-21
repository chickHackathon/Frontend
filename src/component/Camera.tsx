import React, { useState, useRef, useEffect } from 'react';

interface CameraProps {}

const Camera: React.FC<CameraProps> = () => {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null!);
    const canvasRef = useRef<HTMLCanvasElement>(null!);

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

    const handleTakePhoto = (): void => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = canvasRef.current.toDataURL('image/png');
                setPhoto(imageData);
            }
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
            <button onClick={handleTakePhoto} disabled={!stream}>Take Photo</button>
            {stream && <video ref={videoRef} autoPlay playsInline />}
            <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480"></canvas>
            {photo && <img src={photo} alt="Captured" />}
        </div>
    );
};

export default Camera;