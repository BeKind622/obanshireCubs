import React, { useState, useEffect } from "react";
import axios from 'axios';
import Gallery from "../../components/Gallery";

const Pictures = () => {
    const [picture, setPicture] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in (you can implement your authentication logic here)
        const checkLoginStatus = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token); // Update isLoggedIn based on the presence of a token
        };

        checkLoginStatus();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPicture(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageData", picture);

        try {
            const response = await axios.post("http://localhost:5000/api/galleries", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Image uploaded successfully:", response.data);
            window.location.reload();
            setPicture(null);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <>
            <div className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
                <img src="https://plus.unsplash.com/premium_photo-1663126398413-5a20aa3125c6?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
                <div className="relative z-20 mx-auto max-w-screen-xl flex gap-20 justify-center">
                    <div className="w-2/3">
                        <span className="text-orange-600 uppercase font-medium mb-4 block">Obanshire Cub Scouts</span>
                        <h1 className="text-7xl text-white font-extrabold">Gallery</h1>
                        <div className="flex items-center gap-3 text-white my-6 text-4xl">    
      
                        </div>
                    </div>
                    <div className="w-1/3">
                    </div>
                </div>
            </div>

            {/* Conditionally render the form only if the user is logged in */}
            {isLoggedIn && (
                <form className="mt-8 space-y-3 flex flex-col max-w-64 mx-auto" onSubmit={handleSubmit}>
                    <input type="file" id="imageData" name="imageData" onChange={handleFileChange} />
                    <input type="text" id="filename" name="filename" placeholder="File Name" />
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Upload
                    </button>
                </form>
            )}

            <Gallery />
        </>
    );
};

export default Pictures;
