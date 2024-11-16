const clear = document.getElementById("clear");
const persen = document.getElementById("persen");
const backspace = document.getElementById("backspace");
const bagi = document.getElementById("bagi");
const satu = document.getElementById("1");
const dua = document.getElementById("2");
const tiga = document.getElementById("3");
const kali = document.getElementById("kali");
const empat = document.getElementById("4");
const lima = document.getElementById("5");
const enam = document.getElementById("6");
const kurang = document.getElementById("kurang");
const tujuh = document.getElementById("7");
const delapan = document.getElementById("8");
const sembilan = document.getElementById("9");
const tambah = document.getElementById("tambah");
const nolSatu = document.getElementById("0");
const koma = document.getElementById("koma");
const samaDengan = document.getElementById("samaDengan");
const hasil = document.getElementById("hasil");
const hasilKalulator = document.getElementById("hasilKalkulator");

satu.addEventListener("click", () => {
  hasil.textContent += "1";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

dua.addEventListener("click", () => {
  hasil.textContent += "2";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

tiga.addEventListener("click", () => {
  hasil.textContent += "3";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

empat.addEventListener("click", () => {
  hasil.textContent += "4";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

lima.addEventListener("click", () => {
  hasil.textContent += "5";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

enam.addEventListener("click", () => {
  hasil.textContent += "6";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

tujuh.addEventListener("click", () => {
  hasil.textContent += "7";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

delapan.addEventListener("click", () => {
  hasil.textContent += "8";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

sembilan.addEventListener("click", () => {
  hasil.textContent += "9";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

nolSatu.addEventListener("click", () => {
  hasil.textContent += "0";
  console.log(hasil.textContent.includes("+"));
  if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
    var kalkulator = eval(hasil.textContent);
    hasilKalulator.textContent = `${kalkulator}`;
  }
})

tambah.addEventListener("click", () => {
  if (hasil.textContent.length > 0 && (hasil.textContent[hasil.textContent.length - 1] !== "+" && hasil.textContent[hasil.textContent.length - 1] !== "-" && hasil.textContent[hasil.textContent.length - 1] !== "/" && hasil.textContent[hasil.textContent.length - 1] !== "*")) {
    hasil.textContent += "+";
    console.log(hasil.textContent);
  }
})

kurang.addEventListener("click", () => {
  if (hasil.textContent.length > 0 && (hasil.textContent[hasil.textContent.length - 1] !== "+" && hasil.textContent[hasil.textContent.length - 1] !== "-" && hasil.textContent[hasil.textContent.length - 1] !== "/" && hasil.textContent[hasil.textContent.length - 1] !== "*")) {
    hasil.textContent += "-";
    console.log(hasil.textContent);
  }
})

kali.addEventListener("click", () => {
  if (hasil.textContent.length > 0 && (hasil.textContent[hasil.textContent.length - 1] !== "+" && hasil.textContent[hasil.textContent.length - 1] !== "-" && hasil.textContent[hasil.textContent.length - 1] !== "/" && hasil.textContent[hasil.textContent.length - 1] !== "*")) {
    hasil.textContent += "*";
    console.log(hasil.textContent);
  }
})

bagi.addEventListener("click", () => {
  if (hasil.textContent.length > 0 && (hasil.textContent[hasil.textContent.length - 1] !== "+" && hasil.textContent[hasil.textContent.length - 1] !== "-" && hasil.textContent[hasil.textContent.length - 1] !== "/" && hasil.textContent[hasil.textContent.length - 1] !== "*")) {
    hasil.textContent += "/";
    console.log(hasil.textContent);
  }
})

backspace.addEventListener("click", () => {
  if (hasil.textContent.length > 0) {
    hasil.textContent = hasil.textContent.slice(0, -1);
    var kalkulator = eval(hasil.textContent);
    if (hasil.textContent.length > 0 && (hasil.textContent.includes("+") || hasil.textContent.includes("-") || hasil.textContent.includes("/") || hasil.textContent.includes("*"))) {
      hasilKalulator.textContent = `${kalkulator}`;
    } else {
      hasilKalulator.textContent = eval(hasil.textContent);
      console.log("hilang")
    }
  }
})

koma.addEventListener("click", () => {
  if (hasil.textContent.length > 0 && (hasil.textContent[hasil.textContent.length - 1] !== ",")) {
    hasil.textContent += ",";
  }
})

clear.addEventListener("click", () => {
  hasil.textContent = "";
  hasilKalulator.textContent = "";
})

samaDengan.addEventListener("click", () => {
  var kalkulator = eval(hasil.textContent);
  hasilKalulator.textContent = ``;
  hasil.textContent = `${kalkulator}`;
})
