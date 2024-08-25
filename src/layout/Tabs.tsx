import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #ccc;
`;

const TabLink = styled(NavLink)`
    padding: 10px;
    text-decoration: none;
    color: #000;

    &.active {
        font-weight: bold;
        color: #007bff;
    }
`;

const Tabs: React.FC = () => {
    return (
        <TabsContainer>
            <TabLink to="/camera" className={({ isActive }) => (isActive ? 'active' : '')}>Camera</TabLink>
            <TabLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Login</TabLink>
            <TabLink to="/map" className={({ isActive }) => (isActive ? 'active' : '')}>GPS Test</TabLink>
            <TabLink to="/memo" className={({ isActive }) => (isActive ? 'active' : '')}>Memo</TabLink>
        </TabsContainer>
    );
};

export default Tabs;