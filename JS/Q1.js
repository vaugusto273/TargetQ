function CheckFib(){
    const n = parseInt(document.getElementById("FibInput").value);
    let a = 0, b = 1, F = a + b;
    let isFib = (n === 0 || n === 1);
    
    while (F <= n) {
        if (F === n) {
            isFib = true;
            break;
            }
            a = b;
            b = F;
            F = a + b;
            }

            const result = isFib ? `${n} Pertence à sequência de Fibonacci.` : `${n} Não pertence à sequência de Fibonacci.`;
            document.getElementById("Q1R").innerText = `${result}`;
        }