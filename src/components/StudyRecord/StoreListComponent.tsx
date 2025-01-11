import React from 'react';

interface StoreListComponentProps {
    cafes: any[];
}

const StoreListComponent: React.FC<StoreListComponentProps> = ({ cafes }) => {
    return (
        <div>
            <h2>카페 목록</h2>
            <ul>
                {cafes.map((cafe, index) => (
                    <li key={index}>
                        <h3>{cafe.place_name}</h3>
                        <p>{cafe.address_name}</p>
                        <p>{cafe.phone || '전화번호 없음'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoreListComponent;