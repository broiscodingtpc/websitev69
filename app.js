// Simple SPA Router
class SimpleRouter {
    constructor() {
        this.routes = {
            '': 'home',
            '#home': 'home',
            '#launchpad': 'launchpad',
            '#neuralinker': 'neuralinker'
        };
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Handle initial load
        this.handleRoute();
        
        // Handle hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Handle navigation clicks
        document.querySelectorAll('a[data-route]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                window.location.hash = route;
            });
        });
    }

    handleRoute() {
        const hash = window.location.hash || '';
        const page = this.routes[hash] || 'home';
        
        if (page !== this.currentPage) {
            this.showPage(page);
            this.currentPage = page;
        }
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Show selected page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.style.display = 'block';
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Update active nav link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`nav a[data-route="#${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SimpleRouter();
    
    // Initialize card glow effect for launchpad
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.card-glow').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

