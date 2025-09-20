import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file); // ส่งไฟล์กลับไปเก็บในฟอร์ม
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" width="100" />}
    </div>
  );
};

export default FileUpload;
