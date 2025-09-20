import React, { useState } from 'react';

const FileUpload = ({ label, onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}:</label><br />
      <input type="file" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" width="100" style={{ marginTop: '5px' }} />}
    </div>
  );
};

export default FileUpload;
