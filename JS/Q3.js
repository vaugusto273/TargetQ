function calculateSOMA() {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    document.getElementById("somaResult").innerText = `O valor final de SOMA é ${SOMA}.`;
}