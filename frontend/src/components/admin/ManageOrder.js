import React from 'react'
import { useState, useEffect } from 'react';

const ManageOrder = () => {

    const [userList, setUserList] = useState([]);

    // for holding user data to update
    const [userFormData, setUserFormData] = useState(null);
    
    // to show or hide update form
    const [showForm, setShowForm] = useState(false);

    // this will fetch user data from backend
    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/order/getall');
        const data = await response.json();
        console.log(data);
        setUserList(data);
    }

    const deleteUser = async (id) => { 
        console.log(id);
        const response = await fetch('http://localhost:5000/order/delete/'+id, {method : 'DELETE'})
        if(response.status === 200){
            console.log('user deleted');
            // toast.success('User Deleted 😎');
            getDataFromBackend();
        }
     }

    // Effect Hook
    // this will tell react what to do when component opens
    useEffect(() => {
      getDataFromBackend();
    }, []);

    const displayUsers = () => {
        return <table className='table bg-white'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>User</th>
                    <th>Created At</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.product}</td>
                            <td>{user.quantity}</td>
                            <td>{user.price}</td>
                            <td>{user.user}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={ () => { deleteUser(user._id) } }>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                            
                        </tr>
                    ) )
                }
            </tbody>
        </table>
    }

  return (
    <div className='container-fluid'>
        <h1 className='text-center'>Order Manager</h1>
        <div className="row">
            <div className="col-md">
                {displayUsers()}
            </div>
           
        </div>
    </div>
  )
}

export default ManageOrder;