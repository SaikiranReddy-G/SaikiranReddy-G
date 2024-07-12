function showAlert(title, description) {
    alert(`Project: ${title}\nDescription: ${description}`);
}

function submitForm(event) {
    event.preventDefault();
    
    // Fetch values from inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // For demonstration purposes, logging the values
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    
    // Clear form fields after submission (optional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
