export default function Nav(){
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidebar").style.width = "265px";
        document.getElementById("main").style.marginLeft = "265px";
        console.log(document.getElementsByClassName("openbtn"))
        document.getElementById("open").style.visibility = "hidden"
        
    }
    
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("open").style.visibility = "visible"
    }
    return(
        <div className="absolute">
            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Resume</a>
                <a href="#">Reset</a>
                <a href="#">Instructions</a>
                <a href="#">About</a>
                </div>

                <div id="main">
                <button className="openbtn" id="open" onClick={openNav} onTouchMove={openNav}>&#9776;</button>
            </div>
        </div>
    )
}