import { useState } from 'react';
import React from "react";

export default function Modal({ isvisible, onClose }) {

  const [showNFTModal, setShowNFTModal] = useState(false);
  const handleOnClose = () => {
    onClose()
  };

    if ( !isvisible ) return null;
    return (
        <div onClose={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded space-y-2">
                <h1>Select a Join Link</h1>
                    <p>Thank you for joining a Truth Talk!</p>
                    <p>Please select the general admission link or the VIP link for special access.</p>
                <div className="flex space-x-10 items-center justify-center">
                <button className="bg-blue-400 mt-4 text-white px-3 py-2 rounded text-xl">General</button>
                <button 
                    onClick={() => {
                        setShowNFTModal(true);
                        }} className="bg-red-400 mt-4 text-white px-3 py-2 rounded text-xl">VIP</button>
                </div>
            </div>
        </div>
    );
}

