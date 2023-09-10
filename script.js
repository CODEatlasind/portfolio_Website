const lscl=document.getElementById('left-scroll');
const rscl=document.getElementById('right-scroll');
const upscl=document.getElementById('move');


// upscl.addEventListener('click',function(){
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scrollTop > 500) {
//     if (!appended) {
//       document.body.appendChild(bookmark);
//       appended = true;
//     }
//   } else {
//     if (appended) {
//       document.body.removeChild(bookmark);
//       appended = false;
//     }
//   }
// });


lscl.addEventListener('click', function() {
    document.querySelector('.project-tile').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});

rscl.addEventListener('click', function() {
    document.querySelector('.project-tile').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
    
});
const scrollContainer = document.getElementById("project-section");
scrollContainer.addEventListener("wheel", (evt) => {
    // console.log("scroll");
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    behavior: 'smooth';
    // horizontal = evt.currentTarget.scrollLeft;
});
