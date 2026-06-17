const form = document.getElementById('expense-form');
const gastoInput = document.getElementById('gasto');
const montoInput = document.getElementById('monto');
const categoriaInput = document.getElementById('categoria');
const fechaInput = document.getElementById('fecha');

const expensesList = document.getElementById('expenses-list');

const totalElement = document.getElementById('total');

let gastos = [];

function calcularTotal() {
  let total = 0;

  for (let i = 0; i < gastos.length; i++) {
    total = total + gastos[i].monto;
  }

  totalElement.textContent = `$${total}`;
}

function renderGastos() {
  expensesList.innerHTML = '';

  for (let i = 0; i < gastos.length; i++) {
    const gastoActual = gastos[i];

    const card = document.createElement('div');
    card.classList.add('expense-card');

    card.innerHTML = `
      <h3>${gastoActual.gasto}</h3>
      <p>Monto: $${gastoActual.monto}</p>
      <p>Categoria: ${gastoActual.categoria}</p>
      <p>Fecha: ${gastoActual.fecha}</p>
    `;

    expensesList.appendChild(card);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const gasto = gastoInput.value;
  const monto = Number(montoInput.value);
  const categoria = categoriaInput.value;
  const fecha = fechaInput.value;

  if (gasto === '') {
    console.log('El gasto es obligatorio');
    return;
  }
  if (monto <= 0) {
    console.log('El monto debe ser mayor a 0');
    return;
  }
  if (categoria === '') {
    console.log('La categoria del gasto es obligatoria');
    return;
  }
  if (fecha === '') {
    console.log('La fecha es obligatoria');
    return;
  }
  const nuevoGasto = {
    id: Date.now(),
    gasto,
    monto,
    categoria,
    fecha,
  };
  gastos.push(nuevoGasto);
  renderGastos();
  calcularTotal();
  form.reset();
});
