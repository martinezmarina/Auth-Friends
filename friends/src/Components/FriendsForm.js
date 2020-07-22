import React from 'react';

export default function FriendsForm(props) {
    const {
        values,
        onChange,
        onSubmit
    } = props

    return (
        <form className='form'>
            <h1>New Friend Form</h1>

 
            <label>Name:
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                >
                </input>
            </label>
            <label>Age:
                <input
                    value={values.age}
                    onChange={onChange}
                    name='age'
                    type='number'
                >
                </input>
            </label>
            <label>Email:
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                >
                </input>
            </label>
            <button onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}