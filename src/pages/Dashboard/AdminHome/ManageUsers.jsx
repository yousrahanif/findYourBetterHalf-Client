import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // Set users in state
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch users.',
        });
      });
  }, []);

  // Handle Make Admin
  const handleMakeAdmin = (userId) => {
    fetch(`http://localhost:5000/users/make-admin/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User promoted to Admin.',
          });
          // Optionally refresh users
          setUsers((prev) =>
            prev.map((user) =>
              user._id === userId ? { ...user, role: 'admin' } : user
            )
          );
        }
      });
  };

  // Handle Make Premium
  const handleMakePremium = (userId) => {
    fetch(`http://localhost:5000/users/make-premium/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User promoted to Premium.',
          });
          // Optionally refresh users
          setUsers((prev) =>
            prev.map((user) =>
              user._id === userId ? { ...user, role: 'premium' } : user
            )
          );
        }
      });
  };

  return (
    <div className="mx-auto w-11/12 p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user._id} className="bg-white">
              <Table.Cell>{user.displayName || 'N/A'}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>
  <div className="flex space-x-2">
    {user.role !== 'admin' && (
      <Button
        size="xs"
        color="purple"
        onClick={() => handleMakeAdmin(user._id)}
      >
        Make Admin
      </Button>
    )}
    {user.role !== 'premium' && (
      <Button
        size="xs"
        color="green"
        onClick={() => handleMakePremium(user._id)}
      >
        Make Premium
      </Button>
    )}
  </div>
</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageUsers;
