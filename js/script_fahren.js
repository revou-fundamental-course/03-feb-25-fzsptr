function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const calculationInput = document.getElementById("calculation");
    
    // jika fahrenheit terisi, konversi ke celsius
    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius;
    
        // Menampilkan ouput cara kalkukasi
        calculationInput.value = `(${fahrenheit}°F - 32) * (5/9) = ${celsius}°C`;
    } else {
      calculationInput.value = "Masukkan suhu dalam Fahrenheit!";
    }
}
    
function reverseConversion() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const calculationInput = document.getElementById("calculation");
  
    // Jika Fahrenheit terisi, konversi ke Celsius
    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit;
        
        // Menampilkan Cara Kalkulasi 
        calculationInput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
    // Jika Celsius terisi, konversi ke Fahrenheit
    } else if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius;
    
        // Menampilkan ouput cara kalkukasi
        calculationInput.value = `(${fahrenheit}°F - 32) * (5/9) = ${celsius}°C`;
        
    } else {
        // Jika kedua input kosong
        calculationInput.value = "Masukkan suhu dalam Fahrenheit atau Celsius!";
    }
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
  }