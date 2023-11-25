modalWrapper = document.querySelector(".modal-wrapper");
modalWrapper2 = document.querySelector(".modal-wrapper2");
modalWrapper3 = document.querySelector(".modal-wrapper3");
modalWrapper4 = document.querySelector(".modal-wrapper4");

cardWrapper = document.querySelector(".card-wrapper");
cardWrapper2 = document.querySelector(".card-wrapper2");
cardWrapper3 = document.querySelector(".card-wrapper3");
cardWrapper4 = document.querySelector(".card-wrapper4");





exitOverlayButton = document.querySelector(".exit-button");
exitOverlayButton2 = document.querySelector(".exit-button2");
exitOverlayButton3 = document.querySelector(".exit-button3");
exitOverlayButton4 = document.querySelector(".exit-button4");
body = document.getElementById("body");

const openModal = function () {
    modalWrapper.classList.remove("close-modal");
    modalWrapper.classList.add("open-modal");
    body.classList.add("disable-body-scroll");

  };
  
  cardWrapper.addEventListener("click", openModal);
  

  const closeModal = function () {
    modalWrapper.classList.remove("open-modal");
    modalWrapper.classList.add("close-modal");
    body.classList.remove("disable-body-scroll");
  };
  
  exitOverlayButton.addEventListener("click", closeModal);


  

  const openModal2 = function () {
    modalWrapper2.classList.remove("close-modal");
    modalWrapper2.classList.add("open-modal");
    body.classList.add("disable-body-scroll");

  };
  
  cardWrapper2.addEventListener("click", openModal2);
  

  const closeModal2 = function () {
    modalWrapper2.classList.remove("open-modal");
    modalWrapper2.classList.add("close-modal");
    body.classList.remove("disable-body-scroll");
  };
  
  exitOverlayButton2.addEventListener("click", closeModal2);


  const openModal3 = function () {
    modalWrapper3.classList.remove("close-modal");
    modalWrapper3.classList.add("open-modal");
    body.classList.add("disable-body-scroll");

  };
  
  cardWrapper3.addEventListener("click", openModal3);
  

  const closeModal3 = function () {
    modalWrapper3.classList.remove("open-modal");
    modalWrapper3.classList.add("close-modal");
    body.classList.remove("disable-body-scroll");
  };
  
  exitOverlayButton3.addEventListener("click", closeModal3);


  const openModal4 = function () {
    modalWrapper4.classList.remove("close-modal");
    modalWrapper4.classList.add("open-modal");
    body.classList.add("disable-body-scroll");

  };
  
  cardWrapper4.addEventListener("click", openModal4);
  

  const closeModal4 = function () {
    modalWrapper4.classList.remove("open-modal");
    modalWrapper4.classList.add("close-modal");
    body.classList.remove("disable-body-scroll");
  };
  
  exitOverlayButton4.addEventListener("click", closeModal4);