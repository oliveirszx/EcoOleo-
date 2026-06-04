let mapa = L.map('map').setView([-1.4558, -48.5039], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(mapa);

let pontosCriados = false;

function mostrarMapa() {

    if (pontosCriados) return;

    pontosCriados = true;

    L.marker([-1.4558, -48.5039])
        .addTo(mapa)
        .bindPopup("Ponto de Coleta - Centro de Belém");

    L.marker([-1.4390, -48.4900])
        .addTo(mapa)
        .bindPopup("Ponto de Coleta - Marco");

    L.marker([-1.4700, -48.4850])
        .addTo(mapa)
        .bindPopup("Ponto de Coleta - Pedreira");

    alert("Pontos de coleta exibidos!");
}

function minhaLocalizacao() {

    if (!navigator.geolocation) {
        alert("Seu navegador não suporta geolocalização.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (pos) {

            L.marker([
                pos.coords.latitude,
                pos.coords.longitude
            ])
                .addTo(mapa)
                .bindPopup("Você está aqui!")
                .openPopup();

            mapa.setView([
                pos.coords.latitude,
                pos.coords.longitude
            ], 14);

        },
        function () {
            alert("Não foi possível obter sua localização.");
        }
    );
}

function quiz() {

    let resposta = prompt(
        "Você deve jogar óleo de cozinha na pia? (sim/não)"
    );

    if (!resposta) return;

    if (resposta.toLowerCase() === "não" ||
        resposta.toLowerCase() === "nao") {

        alert("✅ Correto! O óleo deve ser armazenado e levado a um ponto de coleta.");

    } else {

        alert("❌ Errado! Jogar óleo na pia causa poluição e entupimentos.");
    }
}