'use strict';

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
});

const videos = document.querySelectorAll('video');
const options = {
  rootMargin: '0px',
  threshold: 0.18,
};

videos.forEach((video) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, options);

  observer.observe(video);

  video.addEventListener('ended', () => {
    video.currentTime = video.duration ;
  });
});

const forms = document.querySelectorAll('form');
const waitlistSubmitBtns = document.querySelectorAll('.waitlist-btn');
const popup = document.querySelector('.popup-container');
const close = document.querySelector('.popup-container::after');
const content = document.querySelector('#msg-content');
const closeBtn = document.querySelector('.popup-container > div:last-child');

console.log(forms);

forms.forEach((form) =>
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  })
);

waitlistSubmitBtns.forEach((btn) =>
  btn.addEventListener('click', async function (evt) {
    evt.preventDefault();

    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
    const emailInput = evt.target.previousElementSibling.children[0];
    console.log(emailInput);
    const emailVal = emailInput.value;

    // show error
    if (emailVal === '' || !emailVal.match(emailRegex)) {
      content.innerText = 'Please enter a valid email';
      popup.classList.remove('popup-container-hide');
      setTimeout(() => popup.classList.add('popup-container-hide'), 2000);
      return;
    }

    try {
      const response = await fetch(
        'https://manager.newsreels.studio/api/v1/app/newsletter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailVal }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        content.innerText = 'You successfully subscribed to our waiting list!';
        popup.classList.remove('popup-container-hide');
        setTimeout(() => {
          popup.classList.add('popup-container-hide');
        }, 2000);
      } else if (!response.ok && data.error) {
        content.innerText = data.error;
        popup.classList.remove('popup-container-hide');
        setTimeout(() => {
          popup.classList.add('popup-container-hide');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  })
);

closeBtn.addEventListener('click', function (ev) {
  popup.classList.add('popup-container-hide');
});
