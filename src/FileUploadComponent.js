
import React, { useState } from "react";
import axios from 'axios';

const FileUploadComponent = () => {
    const [files, setFiles ] = useState([]);
    const[progress, setProgress] = useState([]);
    const[status, setStatus] = useState("");
    const[selectedImage, setSelectedImage] = useState("");


    const handleUpload = (event) => {
        const uploadFiles = Array.from(event.target.files);
        setFiles(uploadFiles);

        setProgress(Array(uploadFiles.length).fill(0));
        setStatus("");

        uploadFiles.forEach((file, index) => {
            const formData = new FormData();
            formData.append('file', file);

            //backend api

            // axios.post('/upload', formData,... )
        

        });
    };

const handlePreview = (ImageName) => {
    setSelectedImage(ImageName);

    // image displays new page

    window.open(`/images/${ImageName}`);
};

return (
    <div>
        <input type="file" multiple onChange={handleUpload}/>

        {files.length > 0 && ( 
            <div>
                <h3>upload progress</h3>
                {files.map((file,index) => (
                    <div key = {file.name}>
                        <p>{file.name}</p>
                        <progress value={progress[index]} max={100} />
                    </div>   
                ))}

    </div>

)}

<div>
    <h3> Image Gallery</h3>
    <button onClick={() =>
    handlePreview(files[0]?.name)}>handlePreview
    </button>

    {files.map((file) => (
        <p key={file.name}>{file.name} </p>
    ))}

   </div>
  </div>
  );
};
 


 export default FileUploadComponent;




