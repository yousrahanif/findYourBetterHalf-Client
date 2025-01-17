import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='md:w-4/12  mx-auto  text-center my-8'>
            <p className='text-4xl uppercase border-y-4 py-4 text-red-700'>{heading}</p>
        </div>
    );
};

export default SectionTitle;