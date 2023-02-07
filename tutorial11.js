/*Destructuring
Dizileri ya da objeleri açmak ve istediğimiz değerleri farklı değişkenlere
aktarma işlemleridir.*/

//Array Destructuring
const numbers = [1,2,3]

let [numOne, numTwo, numThree] = numbers
/*şeklinde değişken isimleri vererek verdiğimiz sıranın değerini yazdığımız
değişkene atamış oluruz. Dizilerde bu verdiğimiz ismin bir önemi yoktur
doğru değeri alması için doğru sıralama yeterlidir*/

let [num1, ,num3] = numbers

/*İstersek vigül boşluk yapıp o sıradaki değişkeni atlayadabiliriz mesela
illa sıralı hepsini atamak zorunlu değil*/
let [nummer1,nummer2] = numbers
/*Ya da sadece ilkler lazımdır direkt kalanını yazmasak da olur.*/

console.log(numOne,numTwo,numThree,num1,num3,nummer1,nummer2)

const fullStack = [
    ["HTML","CSS","JavaScript","React"],
    ["Node","Express","MongoDB"]
]

let [frondtend,[firstLanguage, secondLanguage] ] = fullStack

/*İç içe dizi yapılarında da içteki dizide isim de bulunmadığından direkt
içerde birköşeli parantez daha açarak iç diziyi de destruct edebiliriz.
Bir içte daha olsaydı ona da aynı şekilde erişebilirdik.*/
console.log(secondLanguage)

/*Destruct edip atama yaptığımız değişkene hiçbir değer gelmemesi ya da 
undefined değer gelmesi durumuna karşı işlem yapabilmek için destruct
değişkenlerine default değer atayabiliriz*/
const names = [undefined,"Ali","Ahmet"]

let [firstPerson = "Şinasi",
 secondPerson, 
 thirdPerson, 
 lastPerson = "Faruk"] = names
 /*örnekte ilk eleman undefined dördüncü ise hiç var olmamaısına rağmen 
 işlemde default verilen değerler dönecek. Eğer ilerde bir değer alırlarsa da 
 onu döndürürler*/
 console.log(firstPerson,lastPerson)

/*For of Array diziler için loop aslında destruct kavramından başka
bir şey değil. for içine destruct değişkeni belirleniyor sırayla o 
değeri alıyor.*/
const countries = [["Finland","Helsinki"],["Sweden","Stockholm"],["Norway","Oslo"]]

for(const [country, city] of countries){
    console.log(country,city)
}

for(const [,sehir] of countries){
    console.log(sehir)
}
//bu şekilde içinden belirli değeri de destruct edebiliriz tabi

//Destructuring Object
/*Dizidekinin aksine objelerin propertileri sıralı olmadığından objelerde
destruct edip içinden değer alırken verilen isim key isminin aynısı 
olmalıdır.*/
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let {width, height, area, perimeter="nope"} = rectangle
console.log(width,perimeter)
/*Yine görüldüğü üzere burada da default değer verilebiliyor.*/

/*Ayrıca değişken belirleme yapılırken key ismiyle yapmak zorunlu olsa da
bu atama esnasında yeni isim de belirlenebilir.*/

let {width : w, height: h, area: a, perimeter: p = "nope"} = rectangle
//ama artık eski key ismiyle çağırılamaz sadece yeni isim
console.log(w, h, a, p)

const calculatePerimeter = ({width,height}) =>{
    return 2 * (width+height)
}
console.log(calculatePerimeter(rectangle))

//Döngü Esnasında Object Destruct
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    for (const {task, time, completed} of todoList){
        console.log(task, time, completed)
      }


/*Spread ya da rest operatörü
    Diziyi ya da objeyi destruct ettiğimiz zaman istediğimiz değerleri 
    değişkenlerimize aldıktan sonra kalan elemanları da başka bir dizi
    altında toplayabiliriz. Bu işleme spreading bunu yapan operatöre de
    rest operatör denir.*/
const nums = [1,2,3,4,5,6,7,8,9,10]
let[numero1,numero2,numero3,...rest] = nums
/*burada rest yazmak mecburi değil ...isim hangi isimse kalanların olduğu
dizi de o isimle çağırılır.*/

const countries2 = [
    "Germany","France","Belgium","Finland","Sweden","Norway","Denmark"
]
let [gem,fra, ...restCountry] = countries2
console.log(gem,fra)
console.log(restCountry)


/*Diziler ve objeler referans karşılaştırılmasına tabi olduğu için 
bir dizi/objeyi yeni bir dizi/objeye eşitleyincce düzgün kopyalanmış olmuyor
çünkü birinden birinde yapılacak refereanstan dolayı diğerini de etkiliyor.
Bu yüzden spread işlemini kopyalamak için de kullanabiliriz.*/
const evens = [0,2,4,6,8,10]
const evenNums = [...evens]
//bu şekilde evens dizisini evenNums dizisi içine yaydık
//şu şekilde de ekstra elemanlar eklenebilirdi
const evenNums2 = [...evens,12,14]
console.log(evenNums2)

/*daha önce de gördüğümüz üzere dizileri de spread operatörleriyle 
birleştirebiliriz.*/
const frontEnd1 = ['HTML', 'CSS', 'JS', 'React']
const backEnd1 = ['Node', 'Express', 'MongoDB']
const fullStack1 = [...frontEnd1, ...backEnd1]
console.log(fullStack1)

//Spread ile obje kopyalama
const persona = {
    isim: "Şinasi",
    soyIsim: "Yüksel",
    yas: "23"
}

const persona2 = {...persona}
console.log(persona2)
/*Burada da dizideki gibi direkt eşitlesek referans aynılığından birinde 
yapılan işlem diğerinde etki oluşturacaktı ama bu şekilde düzgün kopylandı 
ve referans yönünden de iki farklı obje olud.*/

const persona3 = {...persona,isim:"Zehra"}
/*örnekteki gibi kopylama işlemi esnasında bile değişiklik yapılabilir*/
console.log(persona3)