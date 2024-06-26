import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import TestPage from './Pages/TestPage'
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
import ProfileRightModal from './Pages/ModalFive/ProfileRightModal'
import HistoryHeader from './Pages/PageSeven/HistoryHeader.jsx/HistoryHeader'
import Leftcontainer from './Pages/PageSeven/LeftContainer/LeftContainer'
import RightContainer from './Pages/PageSeven/RightContainer/RightContainer'
import SendOTP from "./Pages/PageFour/SendOTP"
import ResumeSection from './Pages/pageTwo/ResumeSection/ResumeSection'
import ChakraModal from './Pages/pageTwo/ResumeSection/ChakraModal'
import { ChakraProvider } from '@chakra-ui/react'
import AddProjectModal from './Pages/PageFive/AddProjectModal'
import OnlineProfileModal from './Pages/PageFive/OnlineProfileModal'
import AddIndustry from './Pages/PageFive/AddIndustry'
import AddDepartment from './Pages/PageFive/AddDepartment'
import DesiredJobTypeModal from './Pages/PageFive/DesiredJobTypeModal'
import DesiredEmployementType from './Pages/PageFive/DesiredEmployementType'
import AddPrefferedShift from './Pages/PageFive/AddPrefferedShift'
import AddPreferredWorkLocationModal from './Pages/PageFive/AddPreferredLocationModal'
import AddPersonalDetailsModal from './Pages/PageFive/AddPersonalDetailsModal'
import AddDateOfBirthModal from './Pages/PageFive/AddDateOfBirthModal'


function App() {
  
  const [count, setCount] = useState(0)


  const setCountHandler = () =>{
    setCount(count =>count + 1)
  }

  return (
    <>
    {/* <AddProjectModal/> */}
    <ChakraProvider>
    {/* <AddProjectModal/> */}
    {/* <Accomplishments/>  */}
     {/* <SendOTP/> */}
     {/* <Home/>
     <TestPage/> */}
     {/* <PageOne/> */}
     {/* <button onClick={setCountHandler}>Increment Counter</button>
     <p>{count}</p> */}
     {/* <OnlineProfileModal/> */}
     {/* <AddIndustry/> */}
     {/* <AddPreferredWorkLocationModal/> */}
     {/* <DesiredJobTypeModal/> */}
     {/* <DesiredEmployementType/> */}
     {/* <AddPrefferedShift/> */}
     {/* <AddPersonalDetailsModal/> */}
     {/* <AddDateOfBirthModal/> */}
     <PageTwo/>
     {/* <Routes>
      <Route path='/index' element={PageOne}>Index</Route>
      <Route path='/home' element={PageTwo}>Home</Route>
     </Routes> */}
     {/* <PageOne/> */}
     {/* <RightSide/>    */}
      {/*<PageFour/> */}
      {/***Currently working */}
      {/* <SkillsModal/> */}
      {/* <BasicDetails/> */}
      {/* <ResumeTitle/> */}
      {/* <AddProfileSummary/> */}
      {/* <PendingActions/> */}
      {/* <ProfileRightModal/> */}
      {/* <HistoryHeader/> */}
      {/* <Leftcontainer/> */}
      {/* <RightContainer/> */}
      {/* <ResumeSection/> */}
      {/* <ResumeTitle/> */}
      </ChakraProvider>
    </>
  )
}

export default App
