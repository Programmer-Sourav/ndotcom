import DiscoverJob from "./DiscoverJob/DiscoverJob";
import Featured from "./FeaturedCom/Featured";
import FindYourJobs from "./FindYourJobs/FindYourJobs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PrepareInterview from "./PrepareInterview/PrepareInterview";
import SponsoredCompanies from "./SponsorCom/SonsoredCompanies";
import TopHiring from "./TopHiring/TopHiring";
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent";
import VideoProfile from "./VideoProfile/VideoProfile";

export default function PageOne() {
  return <>
  <Header/>
  {/* <FindYourJobs/>  */}
   <TopHiring/>
  <Featured/>
  <PrepareInterview/>
  <DiscoverJob/> 
  <SponsoredCompanies/> 
 <UpcomingEvent/>
  <VideoProfile/>
  <Footer/>
  </>;
}
