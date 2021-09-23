import React from 'react';
import { addToLocalStorage, removeFromLocalStorage } from '../../utilities/LocalStorage';

const Cosmetic = (props) => {
    console.log(props.cosmetic)
    const { _id, about, gender, age, email } = props.cosmetic;
    const handleParchase = (id) => {
        addToLocalStorage(id)
    }
    const handleRemove = (id) => {
        removeFromLocalStorage(id)
    }
    return (
        <div style={{ border: '2px solid green', margin: '20px', padding: '20px' }}>
            <h3>Id: {_id}</h3>
            <h3>Email: {email}</h3>
            <h3>Age: {age}</h3>
            <button onClick={() => handleParchase(_id)}>Add To localStorage</button>
            <button onClick={() => handleRemove(_id)}>Remove Fro localStorage</button>
        </div>
    );
};

export default Cosmetic;