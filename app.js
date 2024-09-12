// Funktion zur Weiterleitung
const redirectTo = (url) => {
    window.location.href = url;
};

// Login-Weiterleitung
document.getElementById('login-redirect').addEventListener('click', () => {
    console.log('Button wurde geklickt');
    redirectTo('/login');
});


// Buchungsformular-Handler
document.getElementById('rental-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Formulardaten sammeln
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Felder validieren
    if (name && date && time) {
        // Nachricht an den Nutzer
        alert(`Vielen Dank, ${name}! Ihre Buchungsanfrage für den ${date} um ${time} wurde gesendet.`);

        // Optional: Senden der Anfrage an den Server (Platzhalter)
        try {
            const response = await fetch('/submit-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, date, time })
            });

            const result = await response.json();
            if (response.ok) {
                alert('Buchungsanfrage erfolgreich gesendet!');
            } else {
                alert(`Fehler: ${result.message}`);
            }
        } catch (error) {
            console.error('Fehler bei der Anfrage:', error);
            alert('Es gab ein Problem mit der Buchungsanfrage. Bitte versuchen Sie es später erneut.');
        }
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});
