// Function to convert BGN to Euro
function convertToEuro(bgnPrice) {
    const conversionRate = 0.511; // Example conversion rate from BGN to Euro
    return (bgnPrice * conversionRate).toFixed(2); // Convert and format to 2 decimal places
}

// Function to update prices based on selected language
function updatePrices(language) {
    const priceElements = document.querySelectorAll('.current-price, .original-price');
    
    priceElements.forEach(element => {
        const bgnPrice = parseFloat(element.dataset.bgnPrice); // Assuming you store the BGN price in a data attribute
        if (language === 'en') {
            const euroPrice = convertToEuro(bgnPrice);
            element.textContent = `${euroPrice} €`; // Update text to show Euro price
        } else {
            element.textContent = `${bgnPrice} лв`; // Update text to show BGN price
        }
    });
}

// Example of how to call the function when the language changes
document.getElementById('language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updatePrices(selectedLanguage);
}); 