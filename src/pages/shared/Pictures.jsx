import React, { useState } from "react";
import axios from 'axios';
import Gallery from "../../components/Gallery";

const Pictures = () => {
    const [picture, setPicture] = useState(null);

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
            console.log("Image uploaded successfully:", response.data);
            setPicture(null);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <>

            <form className="mt-8 space-y-3 flex flex-col max-w-64 mx-auto" onSubmit={handleSubmit}>
                <input type="file" id="imageData" name="imageData" onChange={handleFileChange} />
                <input type="text" id="imageName" name ="imageName" placeholder="Image Name" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upload
                </button>
            </form>
            <Gallery />
        </>
    );
};

export default Pictures;
