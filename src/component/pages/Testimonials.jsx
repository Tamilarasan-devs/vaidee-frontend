import React, { useState, useEffect } from 'react'
import BASE_URL from '../../apiConfig'

export default function Testimonials() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchImages = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/api/images?category=testimonial&page=${page}&limit=8`)
      const data = await response.json()
      if (data.success) {
        setImages(data.data)
        setTotalPages(data.pagination.pages || 1)
      }
    } catch (error) {
      console.error("Error fetching testimonial images:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])

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
      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading testimonials...</div>
      ) : images.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No testimonials found.</div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {images.map((image, index) => (
              <div
                key={image._id || index}
                onClick={() => setSelectedImage(image.url)}
                className="cursor-pointer relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group"
              >
                <img
                  src={image.url}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 border border-pink-300 rounded-xl text-pink-600 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all"
              >
                Previous
              </button>
              <span className="text-gray-600 font-semibold text-sm">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                className="px-4 py-2 border border-pink-300 rounded-xl text-pink-600 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

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