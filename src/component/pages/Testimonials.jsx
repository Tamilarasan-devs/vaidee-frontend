import React, { useState } from 'react'

import img1 from '../../assets/reviews/im1.jpeg'
import img2 from '../../assets/reviews/im2.jpeg'
import img3 from '../../assets/reviews/im3.jpeg'
import img4 from '../../assets/reviews/im4.jpeg'
import img5 from '../../assets/reviews/im5.jpeg'
import img6 from '../../assets/reviews/im6.jpeg'
import img7 from '../../assets/reviews/im7.jpeg'
import img8 from '../../assets/reviews/im8.jpeg'

export default function Testimonials() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="bg-white py-12 px-4 md:px-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials
        </h2>
        <p className="text-pink-500 mt-2 tracking-widest">
          What Our Clients Say
        </p>
        <div className="w-20 h-1 bg-pink-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group"
          >
            <img
              src={image}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm">
              View Review
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
          <img
            src={selectedImage}
            alt="Full Review"
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