import { useState,useEffect } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";
import { Content } from "./components/Content";

function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    getImages()
  }, [])
  
  const getImages = async ()=>{
    try {
      const response = await fetch("https://aws-file-upload-spring.onrender.com/file/get-all")
      if (response.ok) {
        const data = await response.json()
        setImages(data)
      }
    } catch (error) {
      console.log("Error ", error);
      
    }
  }
  const saveNewImage=(newImage)=>{
    setImages([...images, newImage])
  }

  
  return (
    <div className="layout">
      <Header/>
      <Nav/>
      <Content images={images}/>
      <Aside saveImageElement={saveNewImage}/>
      <footer class="footer">
            &copy; 2023 - fernandoX_0 All rights reserved
        </footer>
    </div>
  );
}

export default App;
