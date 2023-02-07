/*Array yani dizi her türden(number,string,obje,array..) bir ya da birden
fazla veriyi içinde liste olarak depolayan veri türüdür.
Non-primitive olduğu içine modifiye edilebilirdir.
Yani stringlerde bir fonksiyon uyguladığımızda onu ancak bir değişkene
atarsak o haliyle tutabiliyorduk. Ama dizilerde yapılan değişiklik 
üzerinde çalışılan dizide de kalıyor. yani slice edip diziden bir parça 
böldüğümüzde hem o parça diziden çıkmış oluyor hem de eğer bir değişkene atarsak
böldüğümüz parçayı kullanabiliyoruz
*/

/*Array oluşturmak

let dizi = [] //bu şekilde direkt değişken veri şeklinde 

let dizi2 = Array()//ya da array fonksiyonuyla tanımlanabilir

İkisinin farkı fonksiyonda Array(sayı) yazarak dizinin boş da olsa
kaç elemanlık bir fonksiyon olduğu belirlenebilir*/

//array her tipden veriyi barındırabilir
const arr = [
    1,
    2,//number
    "Ali",//string
    [1,2,3],//dizi
    {country:"finland",city:"helsinki"}//obje
]

console.log(arr)

/*Tıpkı stringteki gibi dizide de indexleriyle dizinin her elemanına
ulaşılabilir. Buna ek olarak dizide istenirse bu eleman değiştirilebilir bile*/

let names = ["ali","ayşe","cabbar","ahmet","elif","aydın"]

names[0] = "şinasi"
names[2] = "kral"

console.log(names)

/*Stringden hatırlayacağımız üzere split() fonksiyonu da stringi diziye
çeviriyordu.*/

/*Yukarda da gördüğümüz gibi dizinin içinde barındırabildiği elemanlardan
biri de dizi olabilir. ve dizi içindeki dizinin dahi elemanlarına erişip
işlem yapmak mümkündür.*/

let ages = [25,6,13,19,7,[2,5,8,[12,14,15],5]]
//örnekte dizi içinde dizi içinde dizi var en içteki dizinin bir elemanına ulaşalım
ages[5][3][1] = "değişti"
console.log(ages)

//Array Metodları
//fill= eleman sayısı belli olan boş dizinin tüm elemanlarını parantez içindekini yapar
let arr1 = Array(8).fill(0)
//mesela burada sekiz elemanlı diziyi full 0,0 yapacak
console.log(arr1)

//concat iki veya daha fazla diziyi birleştirme
let arr2 = [1,2,3],
    arr3 = [4,5,6],
    arr4 = [7,8]

let arr5 = arr2.concat(arr3,arr4)
//burada arr2,arr3,arr4 sırasında birleştiriyor sıralı halde istediğiniz şekle göre sırayı değişebilirsizniz
console.log(arr5)

//length stringteki gibi burada da eleman sayısını veriyor
let uzunlukArr5 = arr5.length
console.log(uzunlukArr5)

/*indexOf ilk bulduğu belirtilen elemanın indexini verir o eleman yoksa
-1 döndürür. yani elemanın bulunup bulunmadığı da bu metodla çeklenebilir*/
let arr6 = ["muz","elma","kiraz","portakal"]
let dahilMi = arr6.indexOf("ananas")
if(dahilMi == -1){
    console.log("listede değil")
}
else{
    console.log("listede var")
}

/*lastIndexOf da elemandan birden fazla varsa indexofun dersi olarak
ilkini değil sonuncusunun indexini getirir. bu da aranan eleman yoksa -1
döndürür.*/

//includes bu da direkt aranan var mı yok mu true false olarak döndürür
let resultMeyve = arr6.includes("portakal")
console.log(resultMeyve)

/*isArray bu da array de oluşturabildiğimiz yerleşik array objesinden gelen
bir fonksiyon. parantez içindeki değişkenin değerinin array olup olmadığını
true false olarak getiriyor.*/
console.log(Array.isArray(arr6))

/*toString() arrayi standart şekilde elemanlar arasın  virgül atarak 
stringe çevirir.*/
let meyvelerSt = arr6.toString()
console.log(meyvelerSt)

/*join() arrayi stringe çevirir. parantez içine hiçbir şey yazılmazsa
bışluksuz virgüllerle boş string konulursa boşluksuz boşluk konulursa boşluklu
birleştirir*/
 let meyvelerJo = arr6.join("")
 console.log(meyvelerJo)

/*slice(1,2) birinci sayı başlangıç indexi ikinci sayı kaç eleman gidileceği
olup seçili alanı array içinden kopyalar*/
let arr7 = arr6.slice(3,1)
console.log(arr7)

/*splice(1,2) ilki başlangıç indexi ikincisi bitiş indexidir. başlangıç dahil
bitiş dahil değildir. bu seçili alanı keser o yüzden içinden kesildiği
diziden de silinir. kesili alanı kullanmak için atamak gerekir.*/

let arr8 = arr6.splice(0,2)
console.log(arr6)
console.log(arr8)

/*push() parantez içindeki elemanı dizinin sonuna ekler*/
arr8.push("çilek")
console.log(arr8)
/*pop() dizinin sonundaki elemanı siler*/
arr8.pop()
console.log(arr8)
/*unshift() parantez içindeki elemanı dizinin başına ekler*/
arr8.unshift("kivi")
console.log(arr8)
/*shift() dizinin baştaki elemanını siler*/
arr8.shift()
console.log(arr8)

//reverse() dizinin eleman sırasını tersine çevirir
arr5.reverse()
console.log(arr5)

//sort() harf sırasına göre dizi elemanlarını sıralar
let sehir = ["diyarbakır", "istanbul", "malatya","kars","ardahan","trabzon"]
sehir.sort()
console.log(sehir)