import React, { useState } from "react";
import axios from 'axios';

const Pictures = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            await axios.post('/api/upload', formData, {  // Updated endpoint to match backend
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image. Please try again.');
        }
    }

    return (
        <>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Pictures;
