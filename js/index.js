    function downloadImage() {
        source = 'assets/image/cv-img.png';
      const fileName = 'test-image.png';
      var el = document.createElement("a");
      el.setAttribute("href", source);
      el.setAttribute("download", fileName);
      document.body.appendChild(el);
      el.click();
      el.remove();
      }
   
document.querySelectorAll('.nav-item a').forEach(function(link, index){

link.addEventListener('click', function() {

  if(this.classList.contains('is-active')) {

    this.classList.remove('is-active');

  } else {

    const activeLink = document.querySelector('a.is-active'); // **

    if (activeLink) {                                         // **

        activeLink.classList.remove('is-active');             // **

    }                                                         // **

    this.classList.add('is-active');

  }

});

});

document.querySelectorAll('#myBtnContainer button').forEach(function(link, index){

link.addEventListener('click', function() {

  if(this.classList.contains('active_button')) {

    this.classList.remove('active_button');

  } else {

    const activeLink = document.querySelector('#myBtnContainer button.active_button'); // **

    if (activeLink) {                                         // **

        activeLink.classList.remove('active_button');             // **

    }                                                         // **

    this.classList.add('active_button');

  }

});

});

      $(window).scroll(function(){
         
         if ($(window).scrollTop() >= 113) {
         
         $('header').addClass('fixed-header');
         $('.banner-main-con').addClass('banner-main-con2');
         
         }
         
         else {
         
         $('header').removeClass('fixed-header');
         $('.banner-main-con').removeClass('banner-main-con2');
         
         }
         
         });
         
             filterSelection("all")
         function filterSelection(c) {
         var x, i;
         x = document.getElementsByClassName("filterDiv");
         if (c == "all") c = "";
         for (i = 0; i < x.length; i++) {
         w3RemoveClass(x[i], "show");
         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
         }
         }
         
         function w3AddClass(element, name) {
         var i, arr1, arr2;
         arr1 = element.className.split(" ");
         arr2 = name.split(" ");
         for (i = 0; i < arr2.length; i++) {
         if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
         }
         }
         
         function w3RemoveClass(element, name) {
         var i, arr1, arr2;
         arr1 = element.className.split(" ");
         arr2 = name.split(" ");
         for (i = 0; i < arr2.length; i++) {
         while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);     
         }
         }
         element.className = arr1.join(" ");
         }
         