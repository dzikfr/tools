import React, { useState } from 'react';

const ResizePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);
  const [resizedImage, setResizedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleResize = async () => {
    if (!image) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('width', width.toString());
    formData.append('height', height.toString());

    try {
      const response = await fetch(`/api/resize`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResizedImage(data.url);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error resizing image:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resize Image</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="mb-4">
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>
      <button
        onClick={handleResize}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Resize
      </button>

      {resizedImage && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Resized Image:</h2>
          <img src={resizedImage} alt="Resized" className="mt-4 border" />
          <div className="mt-4">
            <a
              href={resizedImage}
              download="resized-image.jpg"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Download Resized Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResizePage;
