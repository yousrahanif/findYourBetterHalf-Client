

import React, { useState } from 'react';
import { TextInput, Textarea, Button, Label } from 'flowbite-react';
import Swal from 'sweetalert2';

const GotMarried = () => {
  const [selfBiodataId, setSelfBiodataId] = useState('');
  const [partnerBiodataId, setPartnerBiodataId] = useState('');
  const [url, setUrl] = useState('');
  const [marriageDate, setMarriageDate] = useState('');
  const [successStory, setSuccessStory] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = {
      selfBiodataId,
      partnerBiodataId,
      coupleImage: url,
      marriageDate,
      storyText: successStory,
      reviewStars: review,
    };

    fetch('https://matrimony-server-eight.vercel.app/success', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Done!',
            text: 'Your story has been shared successfully.',
            icon: 'success',
          });
          setSelfBiodataId('');
          setPartnerBiodataId('');
          setUrl('');
          setMarriageDate('');
          setSuccessStory('');
          setReview('');
        }
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error',
          text: 'Failed to share your story.',
          icon: 'error',
        });
        console.error('Error:', err);
      });
  };

  return (
    <div className="p-4 mx-auto w-10/12">
      <h2 className="text-4xl font-bold text-center mb-4">Share Your Story</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Self Biodata ID */}
        <div>
          <Label htmlFor="selfBiodataId" value="Self Biodata ID" />
          <TextInput
            id="selfBiodataId"
            type="text"
            name="selfBiodataId"
            placeholder="Enter your biodata ID"
            value={selfBiodataId}
            onChange={(e) => setSelfBiodataId(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="partnerBiodataId" value="Partner Biodata ID" />
          <TextInput
            id="partnerBiodataId"
            type="text"
            name="partnerBiodataId"
            placeholder="Enter your partner's biodata ID"
            value={partnerBiodataId}
            onChange={(e) => setPartnerBiodataId(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="url" value="Couple Image URL" />
          <TextInput
            id="url"
            type="url"
            name="url"
            placeholder="Enter the Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="marriageDate" value="Marriage Date" />
          <TextInput
            id="marriageDate"
            type="date"
            name="marriageDate"
            value={marriageDate}
            onChange={(e) => setMarriageDate(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="successStory" value="Success Story" />
          <Textarea
            id="successStory"
            name="successStory"
            placeholder="Share your success story"
            rows={4}
            value={successStory}
            onChange={(e) => setSuccessStory(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="review" value="Rate Your Experience (1-5)" />
          <TextInput
            id="review"
            type="number"
            name="review"
            min="1"
            max="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Rate from 1 to 5"
            required
          />
        </div>

        <div className="flex justify-center">




          <Button type="submit" className="bg-red-500 text-black">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;

