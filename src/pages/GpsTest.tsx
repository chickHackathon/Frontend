import React, { useState, useEffect } from 'react';

const GpsTest: React.FC = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (err) => {
                    if (err.code === err.PERMISSION_DENIED) {
                        setError('User denied Geolocation');
                    } else {
                        setError(err.message);
                    }
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div>
            <h1>GPS Test</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                </div>
            )}
        </div>
    );
};

export default GpsTest;