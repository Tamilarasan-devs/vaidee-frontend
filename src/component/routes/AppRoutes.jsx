import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../common/Layout'
import About from '../pages/About'
import ContactPage from '../pages/Contact'
import Courses from '../pages/Courses'
import Gallery from '../pages/Gallery'
import Testimonials from '../pages/Testimonials'
import AdmissionForm from '../pages/AdmissionForm'
import RecordedCourses from '../pages/RecordedCourses'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="courses" element={<Courses />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="admission" element={<AdmissionForm />} />
          <Route path="recorded-courses" element={<RecordedCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}