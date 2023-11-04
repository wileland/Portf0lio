// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {

    // Lightbox feature for project images
    const lightbox = document.getElementById('lightbox') || document.createElement('div');
    if (!lightbox.id) {
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
    }
  
    const thumbnails = document.querySelectorAll('.img-thumbnail');
    
    // Function to show lightbox with selected image
    const showLightbox = (imageSrc) => {
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      const img = document.createElement('img');
      img.src = imageSrc;
      lightbox.appendChild(img);
      lightbox.classList.add('active');
    };
  
    // Add click event to all thumbnails
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        showLightbox(thumbnail.src);
      });
    });
  
    // Click event to hide the lightbox
    lightbox.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) return;
      lightbox.classList.remove('active');
    });
  
    // Form validation for contact form
    const form = document.querySelector('#contact-form');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple validation
      if (emailInput.value === '' || messageInput.value === '') {
        alert('Please fill out all fields.');
        return;
      }
      // Add more complex email validation if needed here
      alert('Thank you for your message!');
      form.reset(); // Reset form after submission
    });
  
    // Interactive elements for portfolio pieces
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    portfolioItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
        // Additional interactive behavior can go here
      });
  
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
        // Reset any interactive behavior here
      });
    });
  
  });
  