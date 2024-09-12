import loupeIcon from "../assets/images/icons/loupe.svg";
import pokoj2 from "../assets/images/rooms-photos/Pokoj 1/Pokoj_2.jpg";

function RoomsPhotos() {
  // var slideIndex = 1;

  // var slideNumber = slideIndex;

  // function openSlides(n: number) {
  //   var i = slideNumber;
  //   var slides = document.getElementsByClassName("slide-box");
  //   var miniatures = document.getElementsByClassName("mini");
  //   if (n > slides.length) {
  //     slideNumber = 1;
  //   }
  //   if (n < 1) {
  //     slideNumber = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < miniatures.length; i++) {
  //     miniatures[i].className = miniatures[i].className.replace(" current", "");
  //   }
  //   slides[slideNumber - 1].style.display = "block";
  //   miniatures[slideNumber - 1].className += " current";
  // }

  // function thisSlide(n: number) {
  //   openSlides((slideNumber = n));
  // }

  // const openModal = () => {
  //   document.getElementById("myModal").style.display = "block";
  //   thisSlide(slideNumber);
  // }

  return (
    <div className="col-10 rooms-container">
      <div className="room-box">
        <div className="slideshow-container">
          <div>
            <img className="loupe" src={loupeIcon} alt="Icon" />
          </div>
          <div className="img-inside">
            <div
            // className="mySlides fade"
            >
              <img
                src={pokoj2}
                // onclick="openModal();thisSlide(1)"
                alt=""
              />
            </div>
            <div className="mySlides fade">
              <img
                src="../assets/images/rooms-photos/Pokoj 1/Pokoj_3.jpg"
                // onclick="openModal();thisSlide(2)"
                alt=""
              />
            </div>
            <div className="mySlides fade">
              <img
                src="../assets/images/rooms-photos/Pokoj 1/Pokoj_1.jpg"
                // onclick="openModal();thisSlide(3)"
                alt=""
              />
            </div>
            <div className="mySlides fade">
              <img
                src="../assets/images/rooms-photos/Pokoj 1/Lazienka_1.jpg"
                // onclick="openModal();thisSlide(4)"
                alt=""
              />
            </div>
            <div className="mySlides fade">
              <img
                src="../assets/images/rooms-photos/Pokoj 1/Lazienka_2.jpg"
                // onclick="openModal();thisSlide(5)"
                alt=""
              />
            </div>
          </div>
          {/* Next and previous buttons */}
          <a
            className="prev"
            //   onclick="plusSlides(-1)"
          >
            &#10094;
          </a>
          <a
            className="next"
            //   onclick="plusSlides(1)"
          >
            &#10095;
          </a>
        </div>
        {/* The dots/circles */}
        <div id="clear" style={{ textAlign: "center" }}>
          <span
            className="dot"
            //   onclick="currentSlide(1)"
          ></span>
          <span
            className="dot"
            //   onclick="currentSlide(2)"
          ></span>
          <span
            className="dot"
            //   onclick="currentSlide(3)"
          ></span>
          <span
            className="dot"
            //   onclick="currentSlide(4)"
          ></span>
          <span
            className="dot"
            //   onclick="currentSlide(5)"
          ></span>
        </div>
        <p>
          <b>Pokój 1</b>
          <br />3 osobowy
        </p>
      </div>
    </div>
  );
}

export default RoomsPhotos;
