const form = document.getElementById('expense-form');
const gastoInput = document.getElementById('gasto');
const montoInput = document.getElementById('monto');
const categoriaInput = document.getElementById('categoria');
const fechaInput = document.getElementById('fecha');

const expensesList = document.getElementById('expenses-list');

const totalElement = document.getElementById('total');

const errorMessage = document.getElementById('error-message');

const clearBtn = document.getElementById('clear-btn');

let gastos = [];

function calcularTotal() {
  let total = 0;

  for (let i = 0; i < gastos.length; i++) {
    total = total + gastos[i].monto;
  }
  totalElement.textContent = formatearMoneda(total);
}
function formatearMoneda(valor) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(valor);
}
function eliminarGasto(id) {
  gastos = gastos.filter((gasto) => gasto.id !== id);

  guardarGastos();
  renderGastos();
  calcularTotal();
}

function borrarTodosLosGastos() {
  gastos = [];

  guardarGastos();
  renderGastos();
  calcularTotal();
}
function mostrarError(mensaje) {
  errorMessage.textContent = mensaje;

  if (mensaje === '') {
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
}
function cargarGastos() {
  const gastosGuardados = localStorage.getItem('gastos');

  if (gastosGuardados !== null) {
    gastos = JSON.parse(gastosGuardados);
  }
}
function guardarGastos() {
  localStorage.setItem('gastos', JSON.stringify(gastos));
}
function renderGastos() {
  expensesList.innerHTML = '';

  for (let i = 0; i < gastos.length; i++) {
    const gastoActual = gastos[i];

    const card = document.createElement('div');
    card.classList.add('expense-card');

    card.innerHTML = `
  <h3>${gastoActual.gasto}</h3>
  <p>Monto: ${formatearMoneda(gastoActual.monto)}</p>
  <p>Categoria: ${gastoActual.categoria}</p>
  <p class="date">Fecha: ${gastoActual.fecha}</p>
  <button class="delete-btn">Eliminar</button>
`;
    const deleteBtn = card.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', () => {
      eliminarGasto(gastoActual.id);
    });
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
    mostrarError('El gasto es obligatorio');
    return;
  }
  if (monto <= 0) {
    mostrarError('El monto debe ser mayor a 0');
    return;
  }
  if (categoria === '') {
    mostrarError('La categoria del gasto es obligatoria');
    return;
  }
  if (fecha === '') {
    mostrarError('La fecha es obligatoria');
    return;
  }
  mostrarError('');
  const nuevoGasto = {
    id: Date.now(),
    gasto,
    monto,
    categoria,
    fecha,
  };
  gastos.push(nuevoGasto);
  guardarGastos();
  renderGastos();
  calcularTotal();
  form.reset();
});
cargarGastos();
renderGastos();
calcularTotal();

clearBtn.addEventListener('click', borrarTodosLosGastos);
