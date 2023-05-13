
// window.setTimeout(function(){
// 	$.getScript("https://unpkg.com/pagedjs/dist/paged.polyfill.js", function(data, textStatus, jqxhr) {})
// 	});

// /* If you want to put a loading content, it's here. It will show the print prompt when it's done loading */
// async function preview() {
//     try {
//     console.log("preview");
//       await window.PagedPolyfill.preview();
//       window.print();
//
//     }
//     catch(err) {
//     }
//   }
// async function load_pagedjs() {
//   await $.getScript("https://unpkg.com/pagedjs/dist/paged.polyfill.js", function(data, textStatus, jqxhr) {});
//   preview();
// }
//
// var printbutton = document.getElementById("printbutton");
// printbutton.onclick = function(){
// console.log("bla");
//   var boxes = document.getElementsByName("print");
//           for (var i=0; i<boxes.length; i++) {
//               if (boxes[i].checked) {
//                   boxes[i].parentElement.parentElement.classList.add("print");
//               }
//           }
//
//   toprint = document.getElementsByClassName("print");
//   if (toprint.length == 0){
//     for (var i=0; i<boxes.length; i++) {
//         boxes[i].checked = true;
//                boxes[i].parentElement.parentElement.classList.add("print");
//     }
//     selectall.value = "Unselect All";
//   }
//
//   document.getElementsByTagName("body")[0].classList.add("pagedjs");
//
//   load_pagedjs();
// };
