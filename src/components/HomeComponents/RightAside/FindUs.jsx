import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn justify-start bg-base-100 py-5 join-item"><FaFacebook/> Facebook</button>
        <button className="btn justify-start bg-base-100 py-5 join-item"><FaTwitter/> Twitter</button>
        <button className="btn justify-start bg-base-100 py-5 join-item"><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;