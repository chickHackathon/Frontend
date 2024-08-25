import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SnackbarContainer = styled.div<{ show: boolean }>`
    visibility: ${props => (props.show ? 'visible' : 'hidden')};
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
`;

interface SnackbarProps {
    message: string;
    duration: number;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, duration }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => setShow(false), duration);
        return () => clearTimeout(timer);
    }, [message, duration]);

    return <SnackbarContainer show={show}>{message}</SnackbarContainer>;
};

export default Snackbar;