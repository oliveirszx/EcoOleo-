document.addEventListener("DOMContentLoaded", function () {

    let mapa = L.map('map').setView([-1.4558, -48.5039], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(mapa);

    let pontosCriados = false;

    function mostrarMapa() {
        if (pontosCriados) return;
        pontosCriados = true;

        L.marker([-1.4558, -48.5039]).addTo(mapa).bindPopup("Ponto de Coleta - Centro");
        L.marker([-1.4390, -48.4900]).addTo(mapa).bindPopup("Ponto de Coleta - Marco");
        L.marker([-1.4700, -48.4850]).addTo(mapa).bindPopup("Ponto de Coleta - Pedreira");

        alert("Pontos exibidos!");
    }

    function minhaLocalizacao() {
        if (!navigator.geolocation) {
            alert("Geolocalização não suportada");
            return;
        }
        navigator.geolocation.getCurrentPosition(function (pos) {
            L.marker([pos.coords.latitude, pos.coords.longitude])
                .addTo(mapa)
                .bindPopup("Você está aqui!")
                .openPopup();
            mapa.setView([pos.coords.latitude, pos.coords.longitude], 14);
        });
    }

    function mostrarQuiz() {
        const quiz = document.getElementById("quiz");
        quiz.style.display = "block";
        quiz.scrollIntoView({ behavior: "smooth" });
    }

    function respostaCorreta() {
        document.getElementById("resultadoQuiz").innerHTML =
            "✅ Correto! O óleo deve ser levado a um ponto de coleta.";
    }

    function respostaErrada() {
        document.getElementById("resultadoQuiz").innerHTML =
            "❌ Errado! Jogar óleo na pia causa poluição e entupimentos.";
    }

    // Expõe as funções pro HTML
    window.mostrarMapa = mostrarMapa;
    window.minhaLocalizacao = minhaLocalizacao;
    window.mostrarQuiz = mostrarQuiz;
    window.respostaCorreta = respostaCorreta;
    window.respostaErrada = respostaErrada;

});
