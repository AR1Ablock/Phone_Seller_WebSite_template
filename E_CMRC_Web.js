        // some variables.
        let nav = document.getElementById('nav');
        let button = document.querySelector(".btn");
        let left = document.querySelector(".left");
        let rotate = document.querySelector(".rotate");

        // A function.
        function navtoggle() {
            nav.classList.toggle("left");
            button.classList.toggle("rotate");
        }

        // real action call by here when button is clicked.
        button.addEventListener('click', navtoggle);
 
        
        function slideImages() {
            const container = document.querySelector('.trnd_img');
            const images = document.querySelectorAll('.img_file1');
          
            // Get the width of each image
            const imageWidth = images[0].offsetWidth;
          
            // Add CSS transition to the first image
            images[0].style.transition = 'transform .5s ease-in-out';
            images[0].style.transform = `translateX(-${imageWidth}px)`;
          
            // Move the first image to the end of the container after the transition has completed
            setTimeout(() => {
              container.appendChild(images[0]);
              images[0].style.transform = 'translateX(0)';
            }, 500); // Add a delay that matches the duration of the transition
          
          }
          
          // Set the interval for sliding the images
          setInterval(slideImages, 500); // Adjust the time interval as needed
  