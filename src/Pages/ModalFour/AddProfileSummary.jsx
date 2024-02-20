import "./addprofilesummary.css"

export default function AddProfileSummary(){


    return(
        <div className="apsbody"> 
        <div className="headerflex"> 
        <span className="headertitle">Profile Summary </span>
        <span className="rightadd"> Add 8%</span>
        </div>
        <section className="sectionstyle"> 
            Your Profile Summary should mention the highlights of your careerand education, what your professional interests are, 
            and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.
        </section>
        <textarea id="textareadid" rows="4" cols="48" className="textareadesign"></textarea>
        <span className="characterleftprompt">1000 character(s) left</span>
        <div className="bottombtnflex">
         <button className="cancelbtn">Cancel</button>
         <button className="savebtn">Save</button>
        </div>
        </div>
    )
}