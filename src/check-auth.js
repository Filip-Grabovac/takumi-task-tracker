async function checkAuth() {
    // Preuzimanje tokena iz local storage
    const authToken = localStorage.getItem('authToken');

    // Postavljanje URL-a API endpointa
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb/auth/me';

    try {
        // Slanje GET zahteva sa tokenom u Authorization headeru
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        // Čekanje na odgovor i konvertovanje u JSON
        const data = await response.json();
        console.log(data)
        // Vraćanje odgovora sa servera
        return data;
    } catch (error) {
        console.error('Greška pri pozivanju API-ja:', error);
    }
}

window.checkAuth = checkAuth;