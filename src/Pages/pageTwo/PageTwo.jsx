import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProfileSection from "./ProfileSection/ProfileSection";
import ResumeSection from "./ResumeSection/ResumeSection";
import "./pagetwo.css";

export default function PageTwo(){


    return(
        <>
        <Header/>
        <div className="profilesec">
        <ProfileSection/>
        </div>
        <div className="resumesec">
        <ResumeSection/>
        </div>
        <div className="footersec">
        <Footer/>
        </div>
        </>
    )
}