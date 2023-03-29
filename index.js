function dosyaAdiniBul(path) {
  const path1 = path.substring(path.lastIndexOf("/")+1)
  return path1;
}



function ortalamaBul(array) {
  let toplama = array.reduce((total,sayi) => {return total + sayi},0)
  let average = toplama/array.length
  if(array.length==0){
    return null
  }else{
    return average;
  }
}


/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

const ornek = [109, 216, 288, 143, 71, 185, -278, 194, 5];

function ortalamadanBuyukleriBul(array,callback) {
  const big = []
  const sayilar = array.filter((sayi) => {return sayi >= callback(array)});
  sayilar.map((rakam) => big.push(rakam));
  if(array.length==0){
    return null
  }else{
    return big
  }
}
console.log(ortalamadanBuyukleriBul(ornek,ortalamaBul))
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
