
if (document.querySelector('.hNFq9')) {
    document.querySelectorAll('.hNFq9').forEach((button) => {
        button.addEventListener('click', (a) => {
            let t  = a.target.closest('.hNFq9')
            if (t.hasAttribute('data-focus')) {
                t.removeAttribute('data-focus');
            } else {
                t.setAttribute('data-focus', 'open');
            }
        });



    })
}

if (document.querySelector('.downloadLink')) {
    document.querySelectorAll('.downloadLink').forEach((button) => {
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
            button.href = 'https://news.bullets.app/APWq/siteios';
        } else {
            button.href = 'https://news.bullets.app/nOFn/siteand';
        }
    })
}