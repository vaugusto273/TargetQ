function countLetter() {
    const str = document.getElementById("stringInput").value;
    const count = str.match(/a/gi)?.length || 0;
    document.getElementById("stringResult").innerText = `A letra 'a' aparece ${count} vezes em "${str}".`;
}