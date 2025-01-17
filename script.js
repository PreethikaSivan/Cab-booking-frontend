document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const cabType = document.getElementById('cab-type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    let ratePerKm;
    if (cabType === 'economy') {
        ratePerKm = 10;
    } else if (cabType === 'premium') {
        ratePerKm = 15;
    } else if (cabType === 'suv') {
        ratePerKm = 20;
    }
    const fare = distance * ratePerKm;

    
    const bookingDetails = `
        Pick-Up Location: ${pickup}
        Drop-Off Location: ${drop}
        Distance: ${distance} km
        Cab Type: ${cabType.charAt(0).toUpperCase() + cabType.slice(1)}
        Fare: ₹${fare}
        Date: ${date}
        Time: ${time}
    `;

    localStorage.setItem('bookingDetails', bookingDetails);

  
    window.location.href = 'booking-details.html';
});
