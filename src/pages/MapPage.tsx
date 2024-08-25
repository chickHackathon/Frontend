import React, { useState, useEffect, useCallback } from 'react';

const MapPage: React.FC = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getGeolocation = useCallback(() => {
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
    }, []);

    const requestGeolocation = useCallback(() => {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'granted') {
                getGeolocation();
            } else if (result.state === 'prompt') {
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
            } else if (result.state === 'denied') {
                setError('Geolocation permission denied');
            }
        });
    }, [getGeolocation]);

    useEffect(() => {
        requestGeolocation();
    }, [requestGeolocation]);

    return (
        <div>
            <h1>GPS Test</h1>
            <button onClick={requestGeolocation}>Request Geolocation</button>
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

export default MapPage;