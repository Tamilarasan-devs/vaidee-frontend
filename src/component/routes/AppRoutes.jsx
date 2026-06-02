import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../common/Layout'
import About from '../pages/About'
import ContactPage from '../pages/Contact'
import Courses from '../pages/Courses'
import Gallery from '../pages/Gallery'
import Testimonials from '../pages/Testimonials'
import AdmissionForm from '../pages/AdmissionForm'
import RecordedCourses from '../pages/RecordedCourses'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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