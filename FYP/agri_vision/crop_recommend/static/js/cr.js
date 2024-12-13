document.getElementById('submitButton').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('cropForm'));
    const resultDiv = document.getElementById('result');

    fetch('/recommend-crop/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': '{{ csrf_token }}',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.textContent = `Recommended Crop: ${data.recommended_crop}`;
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.textContent = 'An error occurred. Please try again.';
    });
});