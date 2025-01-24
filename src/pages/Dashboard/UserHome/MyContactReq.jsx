import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import Swal from 'sweetalert2';

const MyContactReq = () => {
  const [approvedContacts, setApprovedContacts] = useState([]);

  useEffect(() => {
    fetch('https://matrimony-server-eight.vercel.app/api/approved-contacts')
      .then((res) => res.json())
      .then((data) => {
        setApprovedContacts(data);
      })
      .catch((error) => {
        console.error('Error fetching approved contacts:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch approved contacts.',
        });
      });
  }, []);

  return (
    <div className="mx-auto w-11/12 p-4">
      <h1 className="text-2xl font-bold mb-4">My Approved Contact Requests</h1>
      {approvedContacts.length > 0 ? (
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {approvedContacts.map((contact) => (
              <Table.Row key={contact._id} className="bg-white">
                <Table.Cell>{contact.email}</Table.Cell>
                <Table.Cell>
                  <span className="text-green-500 font-bold">Approved</span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p className="text-gray-500">No approved contacts found.</p>
      )}
    </div>
  );
};

export default MyContactReq;
