



import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [premiumEmails, setPremiumEmails] = useState([]);


  useEffect(() => {
    fetch('https://matrimony-server-eight.vercel.app/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
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
  useEffect(() => {
    fetch('https://matrimony-server-eight.vercel.app/premiumCollection')
      .then((res) => res.json())
      .then((data) => {
        const emails = data.map((user) => user.email);
        setPremiumEmails(emails); // Store premium emails
      })
      .catch((error) => {
        console.error('Error fetching premium emails:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch premium collection.',
        });
      });
  }, []);


  const handleAdmin = (userId) => {
        fetch(`https://matrimony-server-eight.vercel.app/users/update-membership/${userId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role: 'admin' }), 
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Membership upgraded to Admin.',
              });
              setUsers((prev) =>
                prev.map((user) =>
                  user._id === userId ? { ...user, role: 'admin' } : user
                )
              );
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update membership.',
              });
            }
          })
          .catch((error) => {
            console.error('Error updating membership:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while updating membership.',
            });
          });
      };

      const handleMakePremium = (contactEmail) => {
        fetch(`https://matrimony-server-eight.vercel.app/biodata/update-member-type`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contact_email: contactEmail, member_type: 'premium' }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `User with contact email ${contactEmail} has been upgraded to Premium.`,
              });
      
              setUsers((prev) =>
                prev.map((user) =>
                  user.email === contactEmail ? { ...user, role: 'premium' } : user
                )
              );
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update biodata.',
              });
            }
          })
          .catch((error) => {
            console.error('Error updating biodata:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while updating biodata.',
            });
          });
      };
      
  
  return (
    <div className="mx-auto w-11/12 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Users</h1>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Membership Type</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user._id} className="bg-white">
              <Table.Cell>{user.displayName || 'N/A'}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role || 'normal'}</Table.Cell>
              <Table.Cell>
                <div className="flex space-x-2">
                  {user.role !== 'admin' && (
                    <Button className='bg-red-500 text-black'
                      size="xs"
                     
                      onClick={() => handleAdmin(user._id)}
                    >
                      Make Admin
                    </Button>
                  )}
               {premiumEmails.includes(user.email) && user.role !== 'premium' && (
                    <Button
                    className='bg-red-500 text-black'
                      size="xs"
                     
                      onClick={() => handleMakePremium(user.email)}
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

