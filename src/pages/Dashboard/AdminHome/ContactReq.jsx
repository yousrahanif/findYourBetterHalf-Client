import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const ContactReq = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment data from the server
    fetch('https://matrimony-server-eight.vercel.app/payments')
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch payment data.',
        });
      });
  }, []);

  const handleApprove = (email) => {
    // Send a PATCH request to update the member_type to premium
    fetch('https://matrimony-server-eight.vercel.app/api/users/make-premium', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `User with email ${email} has been upgraded to Premium.`,
          });

          // Update the local state to reflect the change
          setPayments((prev) =>
            prev.map((payment) =>
              payment.email === email
                ? { ...payment, member_type: 'premium' }
                : payment
            )
          );
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Failed to update member type for ${email}.`,
          });
        }
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while updating the member type.',
        });
      });
  };

  return (
    <div className="mx-auto w-11/12 p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Payments</h1>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Biodata ID</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {payments.map((payment) => (
            <Table.Row key={payment._id} className="bg-white">
              <Table.Cell>{payment.email}</Table.Cell>
              <Table.Cell>{payment.biodataId}</Table.Cell>
              <Table.Cell>
                <Button
                  size="xs"
                  color="green"
                  onClick={() => handleApprove(payment.email)}
                >
                  Approve Contact Req
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ContactReq;
