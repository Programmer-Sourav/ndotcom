import "./pending.css"


export default function PendingActions(){


    return(
        <div className="pbody"> 
        <div className="leftcontainer">
        <div className="leftcard">
            <div className="headerflex">
            <span className="titlestyle">Verify Mobile</span> <span className="addbtnstyle">Add 10%</span>
            </div>
            <section className="graytext">Verify your mobile number to increase your chances of getting contacted by recruiters.</section>
            <div className="bottomflex">
            <span className="graytextbold">9999900000</span> <span className="bluetextbold">Verify</span> <span className="bluesection"> |</span> <span className="bluetextbold">Edit</span>
            </div>
        </div>

        <div className="deptcard">
            <div className="deptheaderflex">
            <span className="titlestyle">Department</span> <span className="addbtnstyle">Add 10%</span>
            <span className="bluebuttondesign"> ADD DEPARTMENT</span>
            </div>
            <section className="graytext">Tell us more about what department you currently or recently worked in.</section>
        </div>


        <div className="deptcard">
            <div className="deptheaderflex">
            <span className="titlestyle">Upload photo</span> <span className="addbtnstyle">Add 5%</span>
            <span className="bluebuttondesign"> UPLOAD PHOTO</span>
            </div>
            <section className="graytext">Upload a professional photograph showing your entire face, neck and possibly top of your shoulders clearly.</section>
        </div>



        <div className="deptcard">
            <div className="deptheaderflex">
            <span className="titlestyle">Personal Details</span> <span className="addbtnstyle">Add 2%</span>
            <span className="bluebuttondesign"> ADD PERSONAL DETAILS</span>
            </div>
            <section className="graytext">Your personal details will make your profile richer and will help recruiters find out more about you.</section>
        </div>


        <div className="deptcard">
            <div className="deptheaderflex">
            <span className="titlestyle">Languages</span> <span className="addbtnstyle">Add 2%</span>
            <span className="bluebuttondesign"> ADD LANGUAGES</span>
            </div>
            <section className="graytext">Tell recruiters about the languages you know and your proficiency level in those languages.</section>
        </div>

  
        </div>
        <div className="rightcontainer">
          <div className="percentagedesign">20%</div>
          <section className="textstyle">of your profile is completed.</section>
        </div>

        </div>
    )
}