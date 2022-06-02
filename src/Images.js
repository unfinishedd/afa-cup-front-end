import { useState } from "react";
import axios from "axios";


function Images() {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [uploadProgress, setUploadProgress] = useState ('');

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myfile", file);

    axios
      .post("/upload", formData, {
        headers: {
          "enc-type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          const totalUpload = Math.floor((event.loaded / event.total) * 100)
          setUploadProgress(totalUpload)
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Images">
      {uploadProgress && <h1> {uploadProgress}% Uploaded </h1>}
      {file && <img src={preview} alt={file.name} style={{ width: "200px" }} />}
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={(e) => handleChange(e)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Images;
