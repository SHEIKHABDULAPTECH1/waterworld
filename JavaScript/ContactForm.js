function subscribe(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    
    const email = document.getElementById('email').value;
    
    if (email == email) {
      alert("Thank you for subscribing to our newsletter!");
    } 
    // else {
    //   alert("Please enter a valid email address.");
    // }
    
    // Optional: Clear the input field after subscription
    document.getElementById('email').value = '';
  }