import "./historyheader.css"

export default function HistoryHeader(){


    return(
        <div className="historyheader"> 
        <div className="leftcontainer">
         <h3 className="marginfix">Job application status</h3>
         <p>Not getting views on your CV? Hightlight your application.</p>
        </div>
        <div className="rightcontainer">
            <h1 className="headerfix">13</h1>
            <p  className="parafix">Total applies</p>
            <h1 className="headerfix">01</h1>
            <p  className="parafix">Application updates</p>
        </div>
        </div>
    )
}