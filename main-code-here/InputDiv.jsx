import React from 'react';
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const InputDiv = ({req,res,handleChange}) => {
    return (
        <div>
            <label htmlFor="">{alpha[req]}</label>
            <input name={req} value={res}  type='text' onChange={(e)=>handleChange(e)} />
        </div>
    );
};

export default InputDiv;