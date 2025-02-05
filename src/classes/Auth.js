class Auth {

    checkAuth() {
        // Preuzimanje tokena iz local storage
        const authToken = localStorage.getItem("authToken");

        if(authToken === '') {
            window.location.href = "https://briliaton-com.webflow.io/log-in";
        }

        // Postavljanje URL-a API endpointa
        const apiUrl = "https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb/auth/me";

        try {
            // Slanje GET zahteva sa tokenom u Authorization headeru
            const response = fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            });

            // Čekanje na odgovor i konvertovanje u JSON
            const data = response.json();

            if (data.code === "ERROR_CODE_UNAUTHORIZED") {
            window.location.href = "https://briliaton-com.webflow.io/log-in";
            }

            // Vraćanje odgovora sa servera
            return data;
        } catch (error) {
            console.error("Error connectin with API: ", error);
        }
    }

}