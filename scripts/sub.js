
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
        button.href = 'https://news.bullets.app/APWq/siteios';
    } else {
        button.href = 'https://news.bullets.app/nOFn/siteand';
    }
})

