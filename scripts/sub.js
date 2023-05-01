
// document.querySelectorAll('.hNFq9').forEach((button) => {
//     button.addEventListener('click', (a) => {
//         let t = a.target.closest('.hNFq9')
//         console.log('target', t)
//         if (t.hasAttribute('data-focus')) {
//             t.removeAttribute('data-focus');
//         } else {
//             t.setAttribute('data-focus', 'open');
//         }
//     });



// })

document.querySelectorAll('.downloadLink').forEach((button) => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) {
        button.href = 'https://onelink.to/newsreels.app';
    } else {
        button.href = 'https://onelink.to/newsreels.app';
    }
})


const videos = document.querySelectorAll("video");
const options = {
    rootMargin: "0px",
    threshold: 0.18,
};

videos.forEach(video => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    observer.observe(video);

    video.addEventListener("ended", () => {
       video.currentTime = video.duration;
    });
});