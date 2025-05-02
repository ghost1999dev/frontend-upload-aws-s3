import React, {useState} from "react";

export const Aside = ({saveImageElement}) => {
  const [title, setTitle] = useState("")
  const [file, setFile] = useState(null)
  const handleTitle = (event)=>{
    setTitle(event.target.value)
  }
  const handleFile =(event)=>{
    setFile(event.target.files[0])
  }
  const saveElements =async (event)=>{
    event.preventDefault()
    if(!file){
      alert("Please select a file")
      return;
    }
    const formData = new FormData()
    formData.append("name", title)
    formData.append("file", file)
    try {
      const response = await fetch("http://localhost:5050/file/upload",{
        method: "POST",
        body: formData
      })
      if (response.ok) {
        alert("The image was uploded succesfully")
        const newImage = await response.json()
        saveImageElement(newImage)  
        setFile(null)
        setTitle("")
      } 
    } catch (error) {
      console.log("There was an error to uploading the file");
      
    }
  }
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Search</h3>
        <form action="">
          <input type="text" />
        </form>
      </div>
      <div className="add">
        <h3 className="title">Save your image</h3>
        <form onSubmit={saveElements}>
          <input 
             type="text"
             placeholder="Title"
             onChange={handleTitle}
           />
          <input 
            type="file"
            onChange={handleFile}
           />
          <input type="submit" value="Save" />
        </form>
      </div>
    </aside>
  );
};
