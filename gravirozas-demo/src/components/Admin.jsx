import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import { storage } from "../firebaseConfig";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("Nincs fájl kiválasztva");

  const fetchImages = async () => {
    const folderRef = ref(storage, "galeria/");
    const result = await listAll(folderRef);
    const urls = await Promise.all(
      result.items.map(async (item) => ({
        url: await getDownloadURL(item),
        path: item.fullPath,
      }))
    );
    setImages(urls);
  };

  const handleDelete = async (path) => {
    const confirmDelete = window.confirm("Biztosan törlöd ezt a képet?");
    if (!confirmDelete) return;

    try {
      const imageRef = ref(storage, path);
      await deleteObject(imageRef);
      alert("Kép törölve!");
      await fetchImages(); // újra lekérjük a friss listát
    } catch (error) {
      console.error("Törlési hiba:", error);
      alert("Nem sikerült törölni a képet.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleLogin = () => {
    if (password === "Admin123") {
      setAuthorized(true);
    } else {
      alert("Hibás jelszó");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setFileName(file.name);
    } else {
      setImage(null);
      setFileName("Nincs fájl kiválasztva");
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Előbb válassz ki egy képet!");
      return;
    }

    try {
      const storageRef = ref(storage, `galeria/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);
      setUrl(downloadUrl);
      alert("Sikeres feltöltés!");
      fetchImages();

      setTimeout(() => {
        setFileName("Nincs fájl kiválasztva");
        setImage(null);
      }, 1000);
    } catch (error) {
      console.error("Hiba történt feltöltés közben:", error);
      alert("Nem sikerült feltölteni a képet.");
    }
  };

  if (!authorized) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Admin belépés</h2>
        <input
          type="password"
          placeholder="Jelszó"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Belépés
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Képfeltöltés</h2>

      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded inline-block"
      >
        📁 Válassz képet
      </label>

      <p className="mt-2 text-gray-700">
        Kiválasztott fájl: <strong>{fileName}</strong>
      </p>

      <button
        onClick={handleUpload}
        disabled={!image}
        className={`mt-4 px-4 py-2 rounded text-white ${
          image
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Feltöltés
      </button>

      {url && (
        <div className="mt-6">
          <p className="mb-2 text-gray-700">Feltöltött kép előnézete:</p>
          <img
            src={url}
            alt="feltöltött"
            className="mx-auto max-w-xs rounded shadow"
          />
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Feltöltött képek</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="border rounded p-2 shadow flex flex-col items-center"
              >
                <img
                  src={img.url}
                  alt={`Kép ${i}`}
                  className="rounded mb-2 max-h-60 object-contain"
                />
                <button
                  onClick={() => handleDelete(img.path)}
                  className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors text-white py-1 rounded font-semibold"
                >
                  🗑️ Kép törlése
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
