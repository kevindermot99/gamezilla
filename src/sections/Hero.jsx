import bg1 from "../assets/images/1.jpg"
import bg2 from "../assets/images/2.jpg"

function Hero() {
  return (
    <section id="#home" className="bg-grey-50 bg-default grid grid-cols-2 ">
      <div>
        <h4 className=""></h4>
        <h1>Book Title</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores explicabo quis pariatur illum velit totam optio error natus repudiandae, doloribus ab perspiciatis nemo, id aspernatur reprehenderit impedit neque illo.</h3>
        <button>Read</button>
      </div>
      <div>
        <img src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" />
      </div>

    </section>
  )
}

export default Hero