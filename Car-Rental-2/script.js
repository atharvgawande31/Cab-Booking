// Main JavaScript functionality

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'browse':
            initializeBrowsePage();
            break;
        case 'car-details':
            initializeCarDetailsPage();
            break;
        case '404':
            // 404 page doesn't need initialization
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === '' || filename === 'index.html') return 'index';
    if (filename === 'browse.html') return 'browse';
    if (filename === 'car-details.html') return 'car-details';
    if (filename === '404.html') return '404';
    
    return 'index';
}

// Home page initialization
function initializeHomePage() {
    loadFeaturedCars();
}

function loadFeaturedCars() {
    const featuredCarsContainer = document.getElementById('featured-cars');
    if (!featuredCarsContainer) return;
    
    const featuredCars = getFeaturedCars();
    featuredCarsContainer.innerHTML = featuredCars.map(car => createCarCard(car)).join('');
}

// Browse page initialization
function initializeBrowsePage() {
    loadAllCars();
    setupFilters();
}

function loadAllCars() {
    const carsGrid = document.getElementById('cars-grid');
    if (!carsGrid) return;
    
    const cars = getAllCars();
    displayCars(cars);
}

function displayCars(cars) {
    const carsGrid = document.getElementById('cars-grid');
    const resultsCount = document.getElementById('results-count');
    const noResults = document.getElementById('no-results');
    
    if (cars.length === 0) {
        carsGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = '0 Cars Available';
    } else {
        carsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        carsGrid.innerHTML = cars.map(car => createCarCard(car)).join('');
        resultsCount.textContent = `${cars.length} Car${cars.length !== 1 ? 's' : ''} Available`;
    }
}

function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const clearFilters = document.getElementById('clear-filters');
    
    if (!searchInput || !categoryFilter || !priceFilter) return;
    
    function applyFilters() {
        const searchTerm = searchInput.value;
        const category = categoryFilter.value;
        const price = priceFilter.value;
        
        const filteredCars = filterCars(searchTerm, category, price);
        displayCars(filteredCars);
    }
    
    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    
    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            searchInput.value = '';
            categoryFilter.value = 'all';
            priceFilter.value = 'all';
            applyFilters();
        });
    }
}

// Car details page initialization
function initializeCarDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    
    if (!carId) {
        showCarNotFound();
        return;
    }
    
    const car = getCarById(carId);
    
    if (!car) {
        showCarNotFound();
        return;
    }
    
    displayCarDetails(car);
}

function showCarNotFound() {
    const detailsContent = document.getElementById('car-details-content');
    const notFound = document.getElementById('car-not-found');
    
    if (detailsContent) detailsContent.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
}

function displayCarDetails(car) {
    const detailsContent = document.getElementById('car-details-content');
    const notFound = document.getElementById('car-not-found');
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    
    if (notFound) notFound.style.display = 'none';
    if (!detailsContent) return;
    
    // Update page title and meta
    if (pageTitle) pageTitle.textContent = `${car.name} - DriveRent`;
    if (pageDescription) pageDescription.setAttribute('content', car.description);
    
    detailsContent.innerHTML = createCarDetailsHTML(car);
    detailsContent.style.display = 'block';
    
    // Setup booking form
    setupBookingForm(car);
}

function createCarDetailsHTML(car) {
    return `
        <div class="car-details-grid">
            <!-- Car Image -->
            <div class="space-y-1rem">
                <div class="car-details-image">
                    <img src="${car.image}" alt="${car.name}">
                </div>
            </div>

            <!-- Car Details -->
            <div class="car-details-info space-y-2rem">
                <div class="car-details-header">
                    <div class="car-title-row">
                        <h1 class="car-details-title">${car.name}</h1>
                        <span class="car-badge">${car.category}</span>
                    </div>
                    <div class="car-rating-details">
                        <div class="rating-row">
                            <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span class="rating-number">${car.rating}</span>
                            <span class="rating-reviews">(124 reviews)</span>
                        </div>
                    </div>
                    <p class="car-description">${car.description}</p>
                </div>

                <!-- Quick Stats -->
                <div class="details-card">
                    <h3 class="card-title">Quick Stats</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>${car.passengers} Passengers</span>
                        </div>
                        <div class="stat-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                            <span>${car.transmission}</span>
                        </div>
                        <div class="stat-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 16.5v2A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-2"/>
                                <path d="M8 21V10a4 4 0 0 1 8 0v11"/>
                                <path d="M12 3v1"/>
                                <path d="M12 6v1"/>
                            </svg>
                            <span>${car.fuel}</span>
                        </div>
                        <div class="stat-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>Available Now</span>
                        </div>
                    </div>
                </div>

                <!-- Features -->
                <div class="details-card">
                    <h3 class="card-title">Features</h3>
                    <div class="features-grid-details">
                        ${car.features.map(feature => `
                            <div class="feature-item">
                                <div class="feature-dot"></div>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Specifications -->
                <div class="details-card">
                    <h3 class="card-title">Specifications</h3>
                    <div class="specs-list">
                        ${Object.entries(car.specs).map(([key, value]) => `
                            <div class="spec-row">
                                <span class="spec-label">${key.replace(/([A-Z])/g, ' $1')}</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Pricing & Booking -->
                <div class="details-card booking-card">
                    <div class="booking-header">
                        <div>
                            <span class="booking-price">$${car.price}</span>
                            <span class="booking-period">/day</span>
                        </div>
                        <div class="booking-total">
                            <div class="total-label">Total for 3 days</div>
                            <div class="total-amount">$${car.price * 3}</div>
                        </div>
                    </div>
                    
                    <form class="booking-form" id="booking-form">
                        <div class="date-inputs">
                            <div class="input-group">
                                <label>Pick-up Date</label>
                                <input type="date" id="pickup-date" value="2024-02-15" required>
                            </div>
                            <div class="input-group">
                                <label>Return Date</label>
                                <input type="date" id="return-date" value="2024-02-18" required>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-full btn-lg">
                            Book This Car
                        </button>
                        
                        <div class="booking-features">
                            <div class="booking-feature">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                <span>Free Cancellation</span>
                            </div>
                            <div class="booking-feature">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span>Instant Confirmation</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function setupBookingForm(car) {
    const bookingForm = document.getElementById('booking-form');
    const pickupDate = document.getElementById('pickup-date');
    const returnDate = document.getElementById('return-date');
    
    if (!bookingForm || !pickupDate || !returnDate) return;
    
    // Update total price when dates change
    function updateTotal() {
        const pickup = new Date(pickupDate.value);
        const returnVal = new Date(returnDate.value);
        
        if (pickup && returnVal && returnVal > pickup) {
            const days = Math.ceil((returnVal - pickup) / (1000 * 60 * 60 * 24));
            const total = car.price * days;
            
            const totalElement = document.querySelector('.total-amount');
            const totalLabel = document.querySelector('.total-label');
            
            if (totalElement) totalElement.textContent = `$${total}`;
            if (totalLabel) totalLabel.textContent = `Total for ${days} day${days !== 1 ? 's' : ''}`;
        }
    }
    
    pickupDate.addEventListener('change', updateTotal);
    returnDate.addEventListener('change', updateTotal);
    
    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pickup = new Date(pickupDate.value);
        const returnVal = new Date(returnDate.value);
        
        if (!pickup || !returnVal) {
            alert('Please select both pickup and return dates.');
            return;
        }
        
        if (returnVal <= pickup) {
            alert('Return date must be after pickup date.');
            return;
        }
        
        const days = Math.ceil((returnVal - pickup) / (1000 * 60 * 60 * 24));
        const total = car.price * days;
        
        alert(`Booking confirmed!\n\nCar: ${car.name}\nPickup: ${pickup.toDateString()}\nReturn: ${returnVal.toDateString()}\nDays: ${days}\nTotal: $${total}\n\nThank you for choosing DriveRent!`);
    });
}

// Navigation active state management
function updateNavigationState() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if ((currentPage === 'index' && (href === '/' || href === '/index.html')) ||
            (currentPage === 'browse' && href === '/browse.html')) {
            link.classList.add('active');
        }
    });
}

// Update navigation on page load
updateNavigationState();