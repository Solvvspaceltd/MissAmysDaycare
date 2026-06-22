/* ============================================================ */
/* WHATSAPP SVG PATH CONSTANT */
/* ============================================================ */

var WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z';

/* ============================================================ */
/* ICON SVG CONSTANTS */
/* ============================================================ */

var ICON_IG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';

var ICON_FB = '<svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';

var ICON_TT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>';

/* ============================================================ */
/* UTILITY FUNCTION: WhatsApp Icon */
/* ============================================================ */

/**
 * Creates a WhatsApp SVG icon with specified size and color
 * @param {number} size - Icon size in pixels
 * @param {string} color - Icon fill color
 * @returns {string} SVG markup
 */
function waIcon(size, color) {
	return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + color + '" style="display:block;flex-shrink:0"><path d="' + WA_PATH + '"/></svg>';
}

/* ============================================================ */
/* FUNCTION: Render Navigation Bar */
/* ============================================================ */

/**
 * Renders the main navigation bar
 * @param {string} activePage - Current page filename to highlight
 */
function renderNav(activePage) {
	var pages = [
		{
			href: 'about.html',
			label: 'About'
		},
		{
			href: 'services.html',
			label: 'Services & Fees'
		},
		{
			href: 'daily-routine.html',
			label: 'Daily Routine'
		},
		{
			href: 'sen.html',
			label: 'SEN'
		},
		{
			href: 'gallery.html',
			label: 'Gallery'
		},
		{
			href: 'waiting-list.html',
			label: 'Waiting List'
		}
	];

	/* Build desktop navigation links */
	var links = pages.map(function(p) {
		return '<li><a href="' + p.href + '" class="' + (activePage === p.href ? 'active' : '') + '">' + p.label + '</a></li>';
	}).join('');

	/* Build mobile navigation links */
	var mobileLinks = pages.map(function(p) {
		return '<a href="' + p.href + '">' + p.label + '</a>';
	}).join('');

	/* Inject navigation HTML into placeholder */
	document.getElementById('nav-placeholder').innerHTML =
		'<nav>' +
			'<a href="index.html" class="logo">' +
				'<div class="logo-mark"><img src="Img/MISSAMY_LOGO.png" alt="Miss Amy\'s Daycare Logo"></div>' +
				'<div class="logo-text"><span>Miss Amy\'s Daycare</span><span>Seek God &middot; Grow in Knowledge</span></div>' +
			'</a>' +
			'<ul class="nav-links">' + links +
				'<li><a href="https://wa.me/447502312859" target="_blank" class="nav-whatsapp">' + waIcon(15, 'white') + ' WhatsApp</a></li>' +
			'</ul>' +
			'<button class="hamburger" onclick="toggleMobile()" aria-label="Menu"><span></span><span></span><span></span></button>' +
		'</nav>' +
		'<div class="mobile-menu" id="mobileMenu">' + mobileLinks +
			'<a href="https://wa.me/447502312859" target="_blank" style="color:#25D366;display:flex;align-items:center;gap:8px;">' + waIcon(16, '#25D366') + ' WhatsApp Us</a>' +
		'</div>' +
		'<a href="https://wa.me/447502312859" target="_blank" class="wa-float" title="Chat on WhatsApp" aria-label="WhatsApp">' + waIcon(28, 'white') + '</a>';
}

/* ============================================================ */
/* FUNCTION: Render Footer */
/* ============================================================ */

/**
 * Renders the site footer with links and social media
 */
function renderFooter() {
	document.getElementById('footer-placeholder').innerHTML =
		'<footer>' +
			'<div class="footer-grid">' +
				/* Brand Section */
				'<div class="footer-brand">' +
					'<a href="index.html" class="footer-logo">' +
						'<div class="footer-logo-mark"><img src="Img/MISSAMY_LOGO.png" alt="Miss Amy\'s Daycare Logo"></div>' +
						'<div class="footer-logo-text"><strong>Miss Amy\'s Daycare</strong><span>Seek God &middot; Grow in Knowledge</span></div>' +
					'</a>' +
					'<p>A professional, Ofsted-registered early years setting in Surrey Quays, SE16; nurturing children from 3 months to school age. Ofsted number (2514998)</p>' +
					'<div class="social-links">' +
						'<a href="https://instagram.com/" target="_blank" class="social-btn" title="Instagram" aria-label="Instagram">' + ICON_IG + '</a>' +
						'<a href="https://tiktok.com/" target="_blank" class="social-btn" title="TikTok" aria-label="TikTok">' + ICON_TT + '</a>' +
									'<a href="https://wa.me/447502312859" target="_blank" class="social-btn" title="WhatsApp" aria-label="WhatsApp">' + waIcon(17, 'rgba(255,255,255,0.7)') + '</a>' +
					'</div>' +
				'</div>' +
				/* Setting Links */
				'<div class="footer-col"><h4>Setting</h4><ul>' +
					'<li><a href="about.html">About Miss Amy</a></li>' +
					'<li><a href="services.html">Services &amp; Fees</a></li>' +
					'<li><a href="daily-routine.html">Daily Routine</a></li>' +
					'<li><a href="gallery.html">Gallery</a></li>' +
				'</ul></div>' +
				/* Parents Links */
				'<div class="footer-col"><h4>Parents</h4><ul>' +
					'<li><a href="waiting-list.html">Waiting List</a></li>' +
					'<li><a href="sen.html">SEN &amp; Inclusion</a></li>' +
					'<li><a href="index.html#testimonials">Reviews</a></li>' +
					'<li><a href="index.html#faqs">FAQs</a></li>' +
				'</ul></div>' +
				/* Legal Links */
				'<div class="footer-col"><h4>Legal</h4><ul>' +
					'<li><a href="policies.html">Safeguarding Policy</a></li>' +
					'<li><a href="policies.html#gdpr">Privacy &amp; GDPR</a></li>' +
					'<li><a href="policies.html#complaints">Complaints Policy</a></li>' +
					'<li><a href="policies.html#fees">Fees Policy</a></li>' +
				'</ul></div>' +
			'</div>' +
			/* Footer Bottom */
			'<div class="footer-bottom">' +
				'<span>&copy; 2026 Miss Amy\'s Daycare. All rights reserved.</span>' +
			'<span>Surrey Quays, SE16 &middot; Ofsted Registered (2514998) &middot; <a href="policies.html" style="color:inherit">Privacy Policy</a></span>' +
				'<span style="color:rgba(255,255,255,0.2);font-size:11px;">Designed &amp; built by <a href="#" style="color:rgba(200,145,26,0.5);text-decoration:none;" onmouseover="this.style.color=\'#c8911a\'" onmouseout="this.style.color=\'rgba(200,145,26,0.5)\'">Solvvspace</a></span>' +
			'</div>' +
		'</footer>';
}

/* ============================================================ */
/* FUNCTION: Toggle Mobile Menu */
/* ============================================================ */

/**
 * Toggles the visibility of the mobile navigation menu
 */
function toggleMobile() {
	document.getElementById('mobileMenu').classList.toggle('open');
}

/* ============================================================ */
/* FUNCTION: Initialize Fade-In Animation */
/* ============================================================ */

/**
 * Initializes Intersection Observer for fade-in animations
 * on scroll elements with .fade-in class
 */
function initFadeIn() {
	var observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(e) {
			if (e.isIntersecting) {
				e.target.classList.add('visible');
			}
		});
	}, { threshold: 0.08 });

	document.querySelectorAll('.fade-in').forEach(function(el) {
		observer.observe(el);
	});
}

/* ============================================================ */
/* FUNCTION: Handle Form Submission */
/* ============================================================ */

/**
 * Handles form submission with success feedback
 * @param {Event} e - Form submit event
 * @param {string} successId - ID of success message element to display
 */
function handleFormSubmit(e, successId) {
	e.preventDefault();

	var btn = e.target.querySelector('button[type=submit]');

	/* Update button appearance */
	btn.textContent = 'Submitted successfully!';
	btn.style.background = '#4ade80';
	btn.style.color = '#065f46';
	btn.disabled = true;

	/* Show success message if provided */
	if (successId) {
		document.getElementById(successId).classList.add('show');
	}
}
