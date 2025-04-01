import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const folderRef = ref(storage, "galeria/");
      const result = await listAll(folderRef);

      const urlPromises = result.items.map((item) => getDownloadURL(item));
      const urls = await Promise.all(urlPromises);

      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-2">Korábbi munkáim</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Itt találod néhány eddigi egyedi gravírozásom: kulcstartók, poharak, fa
        táblák és még sok más.
      </p>

      {images.length === 0 ? (
        <p>Még nincs feltöltött kép.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Gravírozás ${i}`}
              className="rounded w-full h-64 object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
