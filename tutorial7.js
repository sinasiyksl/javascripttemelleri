/*function belirli taskleri yerine getirebilmek için oluşturulan,tekrar tekrar
kullanıma uygun kod bloklarıdır. parametreler alır, geriye bir veri döndürür
(return).
Bu parametrelere fonksiyon kullanılmak için çağırıldığında bir değer atanır.
Ama atanmadığında da çalışabilmesi için fonksiyon oluşturulurken default bir
değer atanabilir.*/

//Declaration Function
//fonksiyon metoduyla oluşturulur bir isim alır.
function functionName(){
    console.log("test")
}
/*bu fonksiyonun oluşturulmasıdır fakat bir fonksiyon var diye işlem yapmaz.
Çalışması için çağırılması gerekir. Basitçe fonksiyon aslında bir taslaktır.*/
//çağırma
functionName()
/*fonksiyon ismi ve parantez ile çağırılır. fonksiyonun parametreleri varsa
parantez içine bu parametreler de girilir.*/
function toplamaFonk(sayi1,sayi2){
    let toplam = sayi1 + sayi2
    return toplam
}
/*burada fonksiyon isminden sonra parantez içinde iki parametremiz olacak
dedik. çağırırken bu parametrelere vereceğimiz değerler de fonksiyon
sonucuna müdahale ederek bize bir sonuç sunacak. return kısmı fonksiyon
parametreleri verilerek çağırıldığında artık fonksiyonun bir değere eşit
olabilmesi için döndüreceği değerin neye karşılık geldiğini belirtmek
için kullanılır.*/
console.log(toplamaFonk(5,3))
/*çağırılan fonksiyon bir değere sahip olduğu için döndürdüğü değer direkt
ekrana basılabilir*/
function fullName(isim,soyIsim){
    return `${isim} ${soyIsim}`
}
console.log(fullName("Şinasi","Yüksel"))
/*fonksiyon birçok parametre alabilir. Eğer kaç değerle işlem yapacağımız
belli ise bunu argüman olarak önceden belirleriz fakat bilemiyorsak da
sıkıntı yok limitsiz parametre için de çözüm var.
Parametre kısmı boş bırakıldığı halde sonradan parametre girildiğinde
program bu verileri arguments adlı bir yerleşik dizide tutar. arguments[]
dizisinden de istedğimiz elemana ulaşarak parametremizle işlem yapmamız 
mümkündür.*/
function sumAllNums(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(5,7,12))

//Anonymous-Expression Function
/*fonksiyon metodu yerine direkt ttanımlanıp bir değişkene atanan
fonksiyondur.*/
const squareFuntion = function(sayi){
    return sayi**2
}
console.log(squareFuntion(5))
/*değişken de olsa artık fonksiyon özelliği gösterdiği için parantezle
çağırılır ve varsa parametresi girilir.*/

/*Self invoking kendi kendini çağıran fonksiyon yani daha tanımlanırken 
çalıştırılan fonksiyon. buna isim vermeye ya da bir değişkene atamaya da
gerek yok. zaten tekrarlı kullanım için değil de daha ziyade okunaklı
bölümlendirilmiş kod blokları oluşturmak için kullanılan bir yöntem.
Önemli not kendisinden önce kod bulunuyorsa muhhakak başlangıcında
noktalı virgül ; ifadesi bulunmalıdır yoksa hata verir.*/
;(function(n){
    console.log(n**2)
})(2)
//kendi kendini çalıştırması için sonuna parametre değerini de verdik

//Arrow Function
/*burada da bir değişkene atanmış fonksiyon var ana fark function diye
yazmak yerine => şu işaret ile fonksiyon olduğunu belli edebiliyoruz.
parametre tek ise onu da paranteze almaya gerek yok ama birden çoksa şart.*/

const qubeFonk = n => {
    return n**3
}

console.log(qubeFonk(3))


const printFullName = (isim,soyisim) => {
    return `${isim} ${soyisim}`
}

console.log(printFullName("Şinasi","Yüksel"))

//limitsiz parametreli arrow function
/*normal fonksiyonda default olarak geleni arguments dizisine atıyordu.
Burada limitsiz parametre varsa parametre bölümünde (...args) şeklinde 
belirtmemiz lazım. ayrıca burada (sayi1,sayi2,...args,) şeklinde de belirli
bir kısım parametreyi önceden tanımlayıp kalanını args dizisinden çekebiliriz.*/
const summaryOfNums = (...args) =>{
    let sum = 0
    for(let number of args){
        sum += number
    }
    return sum
}

console.log(summaryOfNums(5,7,9))

const carpim = (sayi1,sayi2,...args)=>{
    let sonuc = 1
    sonuc = sonuc*sayi1*sayi2
    for(let element of args){
        sonuc *= element
    }
    return sonuc
}

console.log(carpim(3,5,2,1))
/*default değer de (sayi1 = 5) şeklinde parametre belirlenirken verilir
fonksiyon çağırılırken parametre girilmeze ya da o parametre atlanırsa
default değeri kullanılır işlem için*/



