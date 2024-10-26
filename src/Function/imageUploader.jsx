import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image first");
      return;
    }

    try {
      setUploading(true);
      setError("");

      // Create a unique filename
      const filename = `${Date.now()}-${image.name}`;

      // Create a reference to the file location in Firebase Storage
      const storageRef = ref(storage, `images/${filename}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, image);

      // Get the download URL
      const downloadUrl = await getDownloadURL(snapshot.ref);

      setUrl(downloadUrl);
      setImage(null);

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
          "
          disabled={uploading}
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!image || uploading}
        className={`w-full py-2 px-4 rounded-md font-medium text-white
          ${
            !image || uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}

      {url && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Uploaded Image URL:</p>
          <input
            type="text"
            value={url}
            readOnly
            className="w-full p-2 text-sm bg-gray-50 rounded border"
          />
          <img
            src={url}
            alt="Uploaded"
            className="mt-4 max-w-full rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
