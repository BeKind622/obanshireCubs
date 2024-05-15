import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
    const [galleries, setGalleries] = useState([]);
    const [error, setError] = useState(null);

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

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex items-center justify-center bg-background">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {galleries.map((gallery) => {
                    const imageUrl = `http://localhost:5000/uploads/${gallery.imageData}`;
                    return (
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg" key={gallery._id}>
                            <div className="h-96 w-72 rounded-lg">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={imageUrl} alt="activityPicture" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
