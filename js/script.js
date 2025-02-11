function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const calculationInput = document.getElementById("calculation");
  
  if (celsiusInput.value !== "") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit;
    
    // Menampilkan output cara kalkulasi 
    calculationInput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
  } else {
    calculationInput.value = "Masukkan suhu dalam Celsius!";
  }
}

function resetForm() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverseConversion() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const calculationInput = document.getElementById("calculation");

  // Jika Fahrenheit terisi, konversi ke Celsius
  if (fahrenheitInput.value !== "") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius;

    // Menampilkan ouput cara kalkukasi
    calculationInput.value = `(${fahrenheit}°F - 32) * (5/9) = ${celsius}°C`;
  }
  // Jika Celsius terisi, konversi ke Fahrenheit
  else if (celsiusInput.value !== "") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit;

    // Menampilkan output cara kalkulasi
    calculationInput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
  }
  // Jika kedua input kosong
  else {
    calculationInput.value = "Masukkan suhu dalam Celsius atau Fahrenheit!";
  }
}