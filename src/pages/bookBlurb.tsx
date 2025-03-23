import TBook1 from "@/assets/images/bookgal/TBook1.jpg"
import TBook2 from "@/assets/images/bookgal/TBook2.jpg"
import TBook3 from "@/assets/images/bookgal/TBook3.jpg"

const BookBlurb = () => {
  return (
    <>
 <article>

    <div className="book">
        <img src={TBook1} alt="Book One"/>
        <h2>Tyrannophis</h2>
            <br/>
        <h3>Grad student James Forge gets caught up in an armed robbery and is abducted by a shadowy mercenary company. Fighting the firm's old enemies, can he make it out alive?</h3>
    </div>

    <div className="book">
        <img src={TBook2} alt="Book Two"/>
        <h2>War of the Tyrannophis</h2>
            <br/>
            <h3>With TeraDyne mercenary company in shambles, James and his team pursue his former commander Dean Knox as the executive goes on the run to initiate his last, desperate plan to conquer humanity.</h3>
    </div>

    <div className="book">
        <img src={TBook3} alt="Book Three"/>
        <h2>Sic Semper Tyrannophis</h2>
            <br/>
            <h3>With The Tyrannophis having destroyed Earth, James Forge assembles his friends and enemies to take revenge on the mad despot, taking flight to a city in the stars. </h3>
    </div>



</article>
</>
  )
}

export default BookBlurb;