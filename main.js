const dataAtual = newDate();
let dataObjetivo = prompt("Data final (formato 2024-05-25");
dataObjetivo = new Date (dataObjetivo+ "T23:59:59");
let diasQueFaltam = Math.floor ((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restante").textContent = diasQueFaltam+ " dias";
