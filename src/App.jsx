import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

// Page imports
import PageOne from './Pages/pageOne/PageOne'
import PageTwo from './Pages/pageTwo/PageTwo'
import LeftSide from './Pages/pageThree/LeftSide'
import RightSide from './Pages/pageThree/RightSide'
import PageFour from './Pages/PageFour/PageFour'
import ProfileSummary from './Pages/PageFive/ProfileSummary'
import Accomplishments from './Pages/PageFive/Accomplishments'
import CareerProfile from "./Pages/PageFive/CareerProfile"
import PersonalProfile from './Pages/PageFive/PersonalProfile'
import AddProjects from './Pages/PageFive/AddProjects'
import PendingActions from './Pages/PageSix/PendingActions'
import MyHistory from './Pages/PageSeven/MyHistory'
import HistoryHeader from './Pages/PageSeven/HistoryHeader.jsx/HistoryHeader'

// Registration Page Component
function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-left">
        <LeftSide />
      </div>
      <div className="register-right">
        <RightSide />
      </div>
    </div>
  )
}

// Job History Page with Header
function JobHistoryPage() {
  return (
    <>
      <HistoryHeader />
      <MyHistory />
    </>
  )
}

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Home/Landing Page */}
          <Route path="/" element={<PageOne />} />

          {/* User Profile Page */}
          <Route path="/profile" element={<PageTwo />} />

          {/* Registration Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* OTP Verification */}
          <Route path="/verify-otp" element={<PageFour />} />

          {/* Job History */}
          <Route path="/history" element={<JobHistoryPage />} />

          {/* Pending Actions */}
          <Route path="/pending-actions" element={<PendingActions />} />

          {/* Profile Sections */}
          <Route path="/profile/summary" element={<ProfileSummary />} />
          <Route path="/profile/accomplishments" element={<Accomplishments />} />
          <Route path="/profile/career" element={<CareerProfile />} />
          <Route path="/profile/personal" element={<PersonalProfile />} />
          <Route path="/profile/projects" element={<AddProjects />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
