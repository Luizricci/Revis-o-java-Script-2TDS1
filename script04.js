let palmas = 25;
let aplausos = "";

for (let i = 1; i <= palmas; i++) {
  aplausos += "👏";
  if (i % 5 === 0) {
    aplausos += "🎉";
  }
}
console.log(aplausos);
