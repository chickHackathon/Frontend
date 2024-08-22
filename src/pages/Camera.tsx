import React, { useState, useRef, useEffect } from 'react';
import { CameraContainer, Button, Video, Canvas, Image } from '../styled/CameraStyles';

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
        <CameraContainer>
            <Button onClick={handleButtonClick}>Turn on Camera</Button>
            <Button onClick={handleTakePhoto} disabled={!stream}>Take Photo</Button>
            {stream && <Video ref={videoRef} autoPlay playsInline />}
            <Canvas ref={canvasRef} width="640" height="480"></Canvas>
            {photo && <Image src={photo} alt="Captured" />}
        </CameraContainer>
    );
};

export default Camera;