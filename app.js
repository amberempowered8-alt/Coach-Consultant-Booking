// =========================================================================
// COACH & CONSULTANT BOOKING TEMPLATE — CONFIG
// Edit everything in the CONFIG object below. You don't need to touch
// index.html or style.css to customize the content.
// =========================================================================

const CONFIG = {
    coachName: "Coach Name",

    heroHeadline: "Your next breakthrough starts with one session.",
    heroSubtext: "I help driven people get unstuck and move forward with clarity — no fluff, just a plan that works.",

    // CLIENT ACTION REQUIRED: replace with your real Calendly / Cal.com link
    bookingLink: "https://www.booking-link.com",

    // Shown in the "This Week" ledger on the hero. Keep it short — 4-6 rows reads best.
    availability: [
        { day: "Mon", time: "10:00 AM", status: "Open" },
        { day: "Mon", time: "2:00 PM", status: "Booked" },
        { day: "Wed", time: "11:00 AM", status: "Open" },
        { day: "Thu", time: "9:00 AM", status: "Open" },
        { day: "Fri", time: "1:00 PM", status: "Booked" }
    ],

    credentials: [
        "10+ Years Experience",
        "200+ Clients Coached",
        "Certified Practitioner"
    ],

    aboutHeading: "A little about how I work",
    aboutBody: "Replace this with your own story — what led you here, who you help, and why your approach gets results. Two or three honest sentences work better than a long bio.",
    aboutFacts: [
        "Sessions held virtually or in-person",
        "Personalized plan after your first call",
        "No long-term contracts required"
    ],

    services: [
        {
            name: "Discovery Call",
            price: "Free — 20 min",
            desc: "A short call to see if we're a good fit, and to talk through where you're stuck.",
            featured: false
        },
        {
            name: "1:1 Session",
            price: "$150 / session",
            desc: "A focused, single session to work through a specific challenge and leave with a clear next step.",
            featured: true
        },
        {
            name: "4-Session Package",
            price: "$525 total",
            desc: "Ongoing support across a month — best for working through something bigger than one call can solve.",
            featured: false
        }
    ],

    testimonials: [
        { quote: "I came in stuck and left with an actual plan I could use that week.", name: "— Client Name" },
        { quote: "Direct, honest, and genuinely helpful. Worth every session.", name: "— Client Name" },
        { quote: "Best decision I made this year for my business.", name: "— Client Name" }
    ]
};

// =========================================================================
// Rendering — you shouldn't need to edit anything below this line.
// =========================================================================

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderText() {
    document.getElementById('brand-name').textContent = CONFIG.coachName;
    document.getElementById('footer-name').textContent = CONFIG.coachName;
    document.getElementById('hero-subtext').textContent = CONFIG.heroSubtext;
    document.getElementById('about-heading').textContent = CONFIG.aboutHeading;
    document.getElementById('about-body').textContent = CONFIG.aboutBody;

    const heroH1 = document.querySelector('.hero-copy h1');
    if (heroH1) heroH1.textContent = CONFIG.heroHeadline;

    const bookingLink = document.getElementById('booking-link');
    if (bookingLink) bookingLink.href = CONFIG.bookingLink;
}

function renderLedger() {
    const strip = document.getElementById('ledger-strip');
    if (!strip) return;
    strip.innerHTML = CONFIG.availability.map(slot => {
        const isOpen = slot.status.toLowerCase() === 'open';
        return `
            <div class="ledger-row ${isOpen ? 'is-open' : ''}">
                <span class="ledger-day">${escapeHTML(slot.day)}</span>
                <span class="ledger-time">${escapeHTML(slot.time)}</span>
                <span class="ledger-status">${escapeHTML(slot.status)}</span>
            </div>`;
    }).join('');
}

function renderTrust() {
    const row = document.getElementById('trust-row');
    if (!row) return;
    row.innerHTML = CONFIG.credentials.map(c => `<span>${escapeHTML(c)}</span>`).join('');
}

function renderAboutFacts() {
    const list = document.getElementById('about-facts');
    if (!list) return;
    list.innerHTML = CONFIG.aboutFacts.map(f => `<li>${escapeHTML(f)}</li>`).join('');
}

function renderServices() {
    const grid = document.getElementById('service-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.services.map(s => `
        <div class="service-card ${s.featured ? 'is-featured' : ''} reveal">
            <p class="service-name">${escapeHTML(s.name)}</p>
            <p class="service-price mono">${escapeHTML(s.price)}</p>
            <p class="service-desc">${escapeHTML(s.desc)}</p>
            <a href="#booking" class="btn btn-brass btn-small">Book This</a>
        </div>`).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonial-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.testimonials.map(t => `
        <div class="testimonial-card reveal">
            <p class="testimonial-quote">"${escapeHTML(t.quote)}"</p>
            <p class="testimonial-name">${escapeHTML(t.name)}</p>
        </div>`).join('');
}

function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || items.length === 0) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(el => observer.observe(el));
}

function init() {
    renderText();
    renderLedger();
    renderTrust();
    renderAboutFacts();
    renderServices();
    renderTestimonials();
    initScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
