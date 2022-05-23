// From this tutorial as an example how to connect client and server 
// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3


import React from 'react'

export const Users = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}

