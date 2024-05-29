import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<select className="custom-select" id="inputGroupSelect01" onChange={(event) => {}}>
    <option defaultValue>Currency (£ Pound)</option>
    <option value="$ Dollar" name="$ Dollar"> $ Dollar</option>
    <option value="ϵ Euro" name="ϵ Euro">ϵ Euro</option>
    <option value="₹ Rupee" name="₹ Rupee">₹ Rupee</option>
    <option value="£ Pound" name="£ Pound">£ Pound</option>
</select></div>
    );
};
export default Currency;
