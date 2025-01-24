import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const LoveStory = () => {
    const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/success')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => {
        console.error('Error fetching success stories:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch success stories.',
        });
      });
  }, []);

  const handleViewStory = (story) => {
    Swal.fire({
      title: `Story of Self Biodata ID: ${story.selfBiodataId} & Partner Biodata ID: ${story.partnerBiodataId}`,
      text: story.storyText,
      imageUrl: story.coupleImage,
      imageWidth: 400,
      imageAlt: 'Couple Image',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="mx-auto w-11/12 p-4">
      <h1 className="text-2xl font-bold mb-4">Success Stories</h1>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Self Biodata ID</Table.HeadCell>
          <Table.HeadCell>Partner Biodata ID</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {stories.map((story) => (
            <Table.Row key={story._id} className="bg-white">
              <Table.Cell>{story.selfBiodataId}</Table.Cell>
              <Table.Cell>{story.partnerBiodataId}</Table.Cell>
              <Table.Cell>
                <Button
                  size="xs"
                  color="purple"
                  onClick={() => handleViewStory(story)}
                >
                  View Story
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default LoveStory;