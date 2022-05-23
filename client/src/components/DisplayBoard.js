// From this tutorial as an example how to connect client and server 
// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3

import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}