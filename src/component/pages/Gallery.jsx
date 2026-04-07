import React, { useState } from 'react'

import img1 from '../../assets/gallery/img1.jpeg'
import img2 from '../../assets/gallery/img2.jpeg'
import img3 from '../../assets/gallery/img3.jpeg'
import img4 from '../../assets/gallery/img4.jpeg'
import img5 from '../../assets/gallery/img5.jpeg'
import img6 from '../../assets/gallery/img6.jpeg'
import img7 from '../../assets/gallery/img7.jpeg'
import img8 from '../../assets/gallery/img8.jpeg'
import img9 from '../../assets/gallery/img9.jpeg'
import img10 from '../../assets/gallery/img10.jpeg'
import img11 from '../../assets/gallery/img11.jpeg'

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen py-10 px-4 md:px-10 ">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Vaidhee Design Academy
        </h1>
        <p className="text-pink-500 mt-2 tracking-widest">
          Fashion · Design · Boutique
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl group"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm">
              Click to View
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 mt-24"
          onClick={() => setSelectedImage(null)}
        >
          {/* Image */}
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
          />

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}