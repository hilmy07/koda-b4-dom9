const konversi = {
  f: function (c) {
    return (c * 9) / 5 + 32;
  },
  r: function (c) {
    return (c * 4) / 5;
  },
  k: function (c) {
    return c + 273.15;
  },
};

function tambahData() {
  const input = document.getElementById("inputCelcius");
  const c = parseFloat(input.value);

  if (isNaN(c)) {
    alert("Masukkan angka yang valid untuk suhu dalam Celcius.");
    return;
  }

  const table = document.getElementById("suhuTable");
  const row = table.insertRow();

  const cell1 = row.insertCell();
  cell1.textContent = c;

  const cell2 = row.insertCell();
  cell2.textContent = konversi.f(c).toFixed(2);

  const cell3 = row.insertCell();
  cell3.textContent = konversi.r(c).toFixed(2);

  const cell4 = row.insertCell();
  cell4.textContent = konversi.k(c).toFixed(2);

  input.value = "";
  input.focus();
}
