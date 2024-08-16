const likeButtonOne = document.getElementById('like-btn-1');
const likeButtonTwo = document.getElementById('like-btn-2');
const likeButtonThree = document.getElementById('like-btn-3');
const likeButtonFour = document.getElementById('like-btn-4');
const likeButtonFive = document.getElementById('like-btn-5');

const markButtonOne = document.getElementById('mark-btn-1');
const markButtonTwo = document.getElementById('mark-btn-2');
const markButtonThree = document.getElementById('mark-btn-3');
const markButtonFour = document.getElementById('mark-btn-4');
const markButtonFive = document.getElementById('mark-btn-5');

const bookRegular = "assets/bookmark-regular.svg";
const bookSolid = "assets/bookmark-solid.svg";
const heartRegular = "assets/heart-regular.svg";
const heartSolid = "assets/heart-solid.svg";
const heartRedSolid = "assets/heart-red-solid.svg";
const heartPinkSolid = "assets/heart-bright-pink-solid.svg";
const heartNeonPinkSolid = "assets/heart-neon-pink-solid.svg";

likeButtonOne.addEventListener('click', () => {
  if (likeButtonOne.src.includes(heartRegular)) {
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrates for 200 milliseconds
      likeButtonOne.src = heartSolid;
    } else {
      likeButtonOne.src = heartSolid;
      console.log('Vibration API not supported on this device.');
    }
  } else {
    likeButtonOne.src = heartRegular;
  }
});

likeButtonTwo.addEventListener('click', () => {
  if (likeButtonTwo.src.includes(heartRegular)) {
    likeButtonTwo.src = heartRedSolid;
  } else {
    likeButtonTwo.src = heartRegular;
  }
});

likeButtonThree.addEventListener('click', () => {
  if (likeButtonThree.src.includes(heartRegular)) {
    likeButtonThree.src = heartPinkSolid;
  } else {
    likeButtonThree.src = heartRegular;
  }
});

likeButtonFour.addEventListener('click', () => {
  if (likeButtonFour.src.includes(heartRegular)) {
    likeButtonFour.src = heartNeonPinkSolid;
  } else {
    likeButtonFour.src = heartRegular;
  }
});

likeButtonFive.addEventListener('click', () => {
  if (likeButtonFive.src.includes(heartRegular)) {
    likeButtonFive.src = heartSolid;
  } else {
    likeButtonFive.src = heartRegular;
  }
});

markButtonOne.addEventListener('click', () => {
  if (markButtonOne.src.includes(bookRegular)) {
    markButtonOne.src = bookSolid;
  } else {
    markButtonOne.src = bookRegular;
  }
});

markButtonTwo.addEventListener('click', () => {
  if (markButtonTwo.src.includes(bookRegular)) {
    markButtonTwo.src = bookSolid;
  } else {
    markButtonTwo.src = bookRegular;
  }
});

markButtonThree.addEventListener('click', () => {
  if (markButtonThree.src.includes(bookRegular)) {
    markButtonThree.src = bookSolid;
  } else {
    markButtonThree.src = bookRegular;
  }
});

markButtonFour.addEventListener('click', () => {
  if (markButtonFour.src.includes(bookRegular)) {
    markButtonFour.src = bookSolid;
  } else {
    markButtonFour.src = bookRegular;
  }
});

markButtonFive.addEventListener('click', () => {
  if (markButtonFive.src.includes(bookRegular)) {
    markButtonFive.src = bookSolid;
  } else {
    markButtonFive.src = bookRegular;
  }
});