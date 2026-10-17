// Mobile menu, FAQ (one open at a time) and footer year.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  var items = document.querySelectorAll('.faq-list details');
  items.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Enquiry form: send in the background and show a thank-you in place.
  var form = document.getElementById('enquiry');
  if (form && window.fetch) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      var status = form.querySelector('.form-status');
      btn.disabled = true; btn.textContent = 'Sending\u2026';
      status.textContent = '';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d.success) {
            form.innerHTML = '<p class="eyebrow">Thank you</p><h3 style="font-style:italic;font-size:1.6rem">Your enquiry is on its way</h3><p class="lead">Anthony will be in touch within one working day. If it is urgent, call or WhatsApp <a href="tel:+353871176676">087 117 6676</a>.</p>';
          } else { throw new Error(d.message || 'error'); }
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = 'Send enquiry';
          status.textContent = 'Sorry, that did not send. Please try again or email anthonybrophyceremonies@gmail.com.';
        });
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
