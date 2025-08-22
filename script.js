const output = document.getElementById("output");

output.innerHTML = `
  <tr>
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;

function createPromise(name) {
  const time = Math.floor(Math.random() * 3) + 1;
  const ms = time * 1000;

  return new Promise(resolve => {
    setTimeout(() => resolve({ name, time }), ms);
  });
}

const start = performance.now();

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then(results => {
  const totalTime = (performance.now() - start) / 1000;

  output.innerHTML = "";

  results.forEach(p => {
    output.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.time}</td>
      </tr>
    `;
  });

  output.innerHTML += `
    <tr class="table-info fw-bold">
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    </tr>
  `;
});
