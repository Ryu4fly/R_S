import 'bootstrap';

window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('.navs');

  setTimeout(() => {
    transition_el.classList.remove('is-active');

    // var options = {
    //   strings: ['フルスタックデベロッパー'],
    //   typeSpeed: 20,
    //   backSpeed: 20,
    //   smartBackspace: true, // this is a default
    //   loop: true
    // };

    // var typed = new Typed('.title', options);

  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 500);

    });
  }

}
