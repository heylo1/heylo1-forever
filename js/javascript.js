

document.getElementById('btnmodal').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "flex";
});

document.querySelector('.modal__content--close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});

let navi = document.getElementById("navi-toggle");

function addEventListener() {     
   let bm1 = document.getElementById("bm1");
   bm1.addEventListener('click', function swapper() {

       navi.checked= false;
  })

   let bm2 = document.getElementById("bm2");
   bm2.addEventListener('click', function swapper() {

       navi.checked= false;
  })

   let bm3 = document.getElementById("bm3");
   bm3.addEventListener('click', function swapper() {

       navi.checked= false;
  })

   let bm4 = document.getElementById("bm4");
   bm4.addEventListener('click', function swapper() {

       navi.checked= false;
  })

   let bm5 = document.getElementById("bm5");
   bm5.addEventListener('click', function swapper() {

       navi.checked= false;
  })

}


window.onload = function() {
   addEventListener()
}