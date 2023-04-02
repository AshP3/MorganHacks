import React from "react";

export default function NFTModal({ NFTisvisible }) {
    if ( !NFTisvisible ) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded space-y-2">
                <h1>NFT Sent to Wallet</h1>
                    <p>Thank you for choosing to become a VIP member!</p>
                    <p>With VIP membership, you can unmute during talks and share your screen.</p>
                    <p>This is your generated token:</p>
                    <code>Niuh4349sfz0023bZXy</code>
                <div className="flex space-x-10 items-center justify-center">
                    <button className="bg-green-400 mt-4 text-white px-3 py-2 rounded text-xl">Enter Talk as a VIP</button>
                </div>
            </div>
        </div>
    );
}

