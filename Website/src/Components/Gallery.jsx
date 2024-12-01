import React from 'react';
import './index.css'; // Ensure this imports your custom CSS with Tailwind directives

const images = [
  { src: "https://assets.codepen.io/1506195/unsplash-music-0.avif", alt: "guitar player at concert" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-1.avif", alt: "duo singing" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-2.avif", alt: "crowd cheering" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-3.avif", alt: "singer performing" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-4.avif", alt: "singer fistbumping crowd" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-5.avif", alt: "man with a guitar singing" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-6.avif", alt: "crowd looking at a lighted stage" },
  { src: "https://assets.codepen.io/1506195/unsplash-music-7.avif", alt: "woman singing on stage" }
];

const Gallery = () => {
  return (
    <article className="gallery grid grid-cols-[repeat(6,var(--size))] auto-rows-[var(--size)] mb-[var(--size)] place-items-start-center gap-[5px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`gallery-img object-cover w-[calc(var(--size)*2)] h-[calc(var(--size)*2)] clip-path-initial rounded-[5px] 
            ${index % 5 === 4 ? 'col-span-2' : ''}`}
        />
      ))}
    </article>
  );
};

export default Gallery;
