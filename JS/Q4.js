function completeSequences() {
    const sequenceA = [1, 3, 5, 7, 9]; 
    const sequenceB = [2, 4, 8, 16, 32, 64, 128];
    const sequenceC = [0, 1, 4, 9, 16, 25, 36, 49];
    const sequenceD = [4, 16, 36, 64, 100];
    const sequenceE = [1, 1, 2, 3, 5, 8, 13];
    const sequenceF = [2, 10, 12, 16, 17, 18, 19, 20];

    document.getElementById("sequenceResult").innerText =
        `a) ${sequenceA.join(', ')}\n` +
        `b) ${sequenceB.join(', ')}\n` +
        `c) ${sequenceC.join(', ')}\n` +
        `d) ${sequenceD.join(', ')}\n` +
        `e) ${sequenceE.join(', ')}\n` +
        `f) ${sequenceF.join(', ')}`;
}