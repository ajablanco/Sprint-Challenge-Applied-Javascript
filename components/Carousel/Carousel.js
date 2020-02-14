/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// function createCarousel() {
  
//   const carousel = document.createElement('div');
//   const leftButton = document.createElement('div');
//   const img1 = document.createElement('img');
//   const img2 = document.createElement('img');
//   const img3 = document.createElement('img');
//   const img4 = document.createElement('img');
//   const rightButton = document.createElement('div');

//   carousel.classList.add('carousel');
//   carousel.classList.add('owl-carousel')
//   leftButton.classList.add('left-button');
//   rightButton.classList.add('right-button');
//   img1.classList.add('img');
//   img2.classList.add('img');
//   img3.classList.add('img');
//   img4.classList.add('img');

//   img1.src = "assets/bones.jpg";
//   img2.src = "assets/fido.jpg";
//   img3.src = "assets/max.jpg";
//   img4.src = "assets/puppers.jpg";

//   carousel.appendChild(leftButton);
//   carousel.appendChild(img1);
//   carousel.appendChild(img2);
//   carousel.appendChild(img3);
//   carousel.appendChild(img4);
//   carousel.appendChild(rightButton);

//   return carousel;
// }

// const carouselContainer = document.querySelector('.carousel-container');

// console.log(carouselContainer);
// console.log(createCarousel());

// carouselContainer.appendChild(createCarousel());

class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      this.imgs = this.carousel.querySelectorAll("img");
      this.leftBtn = this.carousel.querySelector(".left-button");
      this.rightBtn = this.carousel.querySelector(".right-button");
      this.index = 0;
      this.imgs[this.index].style.display = "block";

      this.rightBtn.addEventListener("click", () => this.toggleRight());
      this.leftBtn.addEventListener("click", () => this.toggleLeft());
  }
  toggleRight() {
      this.imgs[this.index].style.display = "none";

      if (this.index ===  this.imgs.length-1) {
          this.index = 0;
      } else {
          this.index++
      }
      this.imgs[this.index].style.display = "block";
  }

  toggleLeft() {
      this.imgs[this.index].style.display = "none";

      if (this.index === 0) {
          this.index = this.imgs.length -1;
      } else {
          this.index--;
      }
      this.imgs[this.index].style.display = "block";
  }

}


const carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => new Carousel(carousel));