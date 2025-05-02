import React from "react";

export const Content = ({ images }) => {
    return (
      <section className="content">
        {images.map((image) => (
          <article className="peli-item" key={image.id || image.url}>
            <h3 className="title">{image.name}</h3>
            <p className="description">{image.description || ""}</p>
            {image.fileUrl && <img src={image.fileUrl} alt="" />}
            
          </article>
        ))}
        {images.length === 0 && <p>No images yet.</p>}
      </section>
    );
  };
