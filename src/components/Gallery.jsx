import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
    const [galleries, setGalleries] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/galleries");
                if (response && response.data) {
                    setGalleries(response.data);
                    setError(null);
                } else {
                    setError("Invalid response from the server");
                }
            } catch (error) {
                console.error("Error fetching galleries:", error);
                setError("Error fetching galleries");
            }
        };

        fetchGalleries();
    }, []);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex items-center justify-center bg-background">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {galleries.map((gallery) => {
                    const imageUrl = `http://localhost:5000/uploads/${gallery.imageData}`;
                    return (
                        <div
                            className="group relative cursor-pointer items-center justify-center overflow-hidden hover:shadow-black/30 rounded-lg"
                            key={gallery._id}
                            onClick={() => handleImageClick(imageUrl)}
                        >
                            <div className="h-96 w-72 rounded-lg">
                                <h2>{gallery.imageName}</h2>
                                <img className="h-full w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" src={imageUrl} alt="activityPicture" />
                            </div>
                        </div>
                    );
                })}
            </div>
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleCloseModal}
                >
                    <img className="max-h-full max-w-full" src={selectedImage} alt="selectedImage" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
