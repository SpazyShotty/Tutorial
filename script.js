document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    
    // Optional: Add any additional functionality, such as autoplay or event listeners
    video.addEventListener('play', () => {
        console.log('Video is playing');
    });

    video.addEventListener('pause', () => {
        console.log('Video is paused');
    });
});
