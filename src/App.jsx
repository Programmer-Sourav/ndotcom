import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import TestPage from './Pages/TestPage'
import PageOne from './Pages/pageOne/pageone'
import PageTwo from './Pages/pageTwo/PageTwo'
import { Route, Routes } from 'react-router'
import RightSide from './Pages/pageThree/RightSide'
import LeftSide from './Pages/pageThree/LeftSide'
import PageFour from './Pages/PageFour/PageFour'
import ProfileSummary from './Pages/PageFive/ProfileSummary'
import Accomplishments from './Pages/PageFive/Accomplishments'
import CareerProfile from "./Pages/PageFive/CareerProfile"
import PersonalProfile from './Pages/PageFive/PersonalProfile'
import AddProjects from './Pages/PageFive/AddProjects'
import BasicDetails from './Pages/ModalOne/BasicDetails'
import ResumeTitle from './Pages/ModalTwo/ResumeTitle'
import SkillsModal from './Pages/ModalThree/SkillsModal'
import AddProfileSummary from './Pages/ModalFour/AddProfileSummary'
import PendingActions from './Pages/PageSix/PendingActions'


function App() {
  
  const [count, setCount] = useState(0)


  const setCountHandler = () =>{
    setCount(count =>count + 1)
  }

  return (
    <>
     {/* <Home/>
     <TestPage/> */}
     {/* <PageOne/> */}
     {/* <button onClick={setCountHandler}>Increment Counter</button>
     <p>{count}</p> */}
     {/* <PageTwo/> */}
     {/* <Routes>
      <Route path='/index' element={PageOne}>Index</Route>
      <Route path='/home' element={PageTwo}>Home</Route>
     </Routes> */}
     {/* <PageOne/> */}
     {/* <RightSide/>    */}
      {/* <PageFour/> */}
      {/* <ProfileSummary/> */}
      {/* <Accomplishments/> */}
      {/* <CareerProfile/> */}
      {/* <PersonalProfile/> */}
      {/* <AddProjects/> */}
      {/* <BasicDetails/> */}
      {/* <ResumeTitle/> */}
      {/* <SkillsModal/> */}
      {/* <AddProfileSummary/> */}
      <PendingActions/>
    </>
  )
}

export default App
