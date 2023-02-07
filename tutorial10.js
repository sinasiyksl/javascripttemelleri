/*Set
Basitçe matematikte kümelerdir. Tıpkı diziler gibi her türen veriyi
tutabilir fakat farklı olarak bunda her veri uniqtir. yani bir veriden
dizideki gibi birden fazla bulunamaz.*/
//boş set oluşturma
const companies = new Set()
console.log(companies)


//bir diziyi sete çevirme
const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French"
]
const setOfLang = new Set(languages)

console.log(setOfLang)
/*burada sete dönen dizi tekrarlayan elemanlarını tekrarlı olarak sete
taşıyamadı uniq özelliğinden dolayı.*/

/*Set bir dizi değildir bu yüzden fonksiyonları da diziden farklıdır.
diziye çevirmediğin sürece dizinin yerleşik metodlarını kullanamazsın.*/
//Sete element ekleme
setOfLang.add("Chinesee")
setOfLang.add("Turkish")
setOfLang.add("English")
console.log(setOfLang)
/*dizideki push metodu gibi sonuna ekledi. Ama sonuncuyu eklemedi çünkü
ondan zaten dizide var.*/

//Setten element silme
setOfLang.delete("Turkish")
console.log(setOfLang)


//clear() Bu da direkt tüm setin elemanlarını siliyor.

//Setleri birleştirme
let a = [1,2,3,4,5],
    b = [3,4,5,6]
    c = [...a,...b]
    console.log(c)
    /*buraya kadar düz dizi birleştirmesi yaptık ama ikisinde de bulunan
    eş elemanlar da sorgususz birleşti.Şimdi eldeyi sete çevirince o tekrarlar
    da ortadan kalkacak.*/
    let C = new Set(c)
    console.log(C)

//Setlerin kesişimi
let A = new Set(a),
    B = new Set(b),
    d = a.filter((num) => B.has(num))
    console.log(d)

//Setlerin farkı

let f = a.filter((num) => !B.has(num))
//a nın b den farkı
console.log(f)

let g = b.filter(num => !A.has(num))
//bnin a dan farkı
/*farklı elemanı bulunacak olanda filter metodu kuulandığımız için
dizi halini alabildik.*/
console.log(g)

/*Map : objenin key kısmı herhangi bir türden eleman olabilen hali.
Bildiğimiz üzere objede key kısmı sadece string olabiliyordu.*/
//boş map oluşturma
const map = new Map()
console.log(map)

//diziden map oluşturma
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map2 = new Map(countries)
  console.log(map2)
  console.log(map2.size)
/*dizide objede .length varken set mapte .size var*/
//mape propertie ekleme
map2.set("Turkey", "İstanbul")
console.log(map2)

//maptene veri getirme
console.log(map2.get("Turkey"))

//has sette olduğu gibi mapte de propertienin varlığını çek eder true-false döndürür
map2.has("Sweden")? console.log("var"):console.log("yok")


