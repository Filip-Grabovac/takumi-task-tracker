

// Preuzimanje tokena iz local storage
const authToken = localStorage.getItem('authToken');

// Postavljanje URL-a API endpointa
const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb/auth/me';

// Slanje GET zahteva sa tokenom u Authorization headeru
fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${authToken}`
    }
})
    .then(response => response.json())
    .then(data => {
        // Prikazivanje odgovora sa servera
        console.log(data);
    })
    .catch(error => {
        console.error('Greška pri pozivanju API-ja:', error);
    });