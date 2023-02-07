/*Değişkenler programlamanın ana parçasıdır. Çeşitli veri tiplerini
depolamak için değişkenler tanımlarız. Değişken tanımlayabilmek için 
var,let,const anahtar kelimlerinden birini kullanırız. Bu bölümde
nerede ne şekilde değişken tanımlarsak kapsamı etki alanı ne olur onu 
göreceğiz.*/
/*Aslında kapsam normalde iki ana başlıktır.
Global Scope
Local Scope

Fakat Kullanmaya hiç gerek de olmayan bir de windiow scope var.
başına var let const koymaksızın tanımlanan ve aynı pencere üzerinden
ulaşılan değişkendir. Bu şekilde oluşturulmuş bir değişken yerleşik window
objesine değeriyle birlikte bir property olarak atanır aslında.
Boş bir şey sen değiken declare anahtar kelimelerini kullan yine(var,let,const)*/


/*Global Scope: Herhangi bir kod bloğu içine hapsolmamış ve bu sebeple dosya
içinde her yerden erişilebilen değişkenin kapsamı global scopetur.

KOD BLOĞU: {} iki süslü parantez arasındaki koda bir koda bloğu denir

Local Scope: İki çeşittir.
    Block Scope: let ya da const ile tanımlanmış bir değişken eğer bir kod
    bloğu içinde tanımlanmışsa(iki süslü parantez) etki alanı sadece o
    kod bloğudur.(burada kod bloğu fonksiyon,if bloğu, döngü vb. olabilir)

    Function Scope: değişken var ile tanımlanmışsa ve fonksiyon kod bloğu
    içinde tanımlanmışsa kapsamı sadece fonksiyon içinde geçerlidir.
    var'la tanımlanmasının diğerlerinden farkı ise var ile tanımlanan
    fonksiyon hariç bir kod bloğunda tanımlanırsa yine de global olur.*/

let number1 = 8
let number2 = 13
/*Görüldüğü gibi herhangi iki süslü parantez arasına girmediğinden dosya
içinde bu değişkenlere her yerden erişilir yani global scopetur.*/
if(true){
    let number1 = 3
    let number2 = 5
    /*Kod bloğu dışında bulunan aynı isimli global değişkenleri bir de
    kod bloğu içinde oluşturduk. Bu değişken block scope yani local 
    erişilebilir değişkenler artık.sadece bu kod bloğu içinde bu verilen
    değerlerle işlem yapacak blok bittiğinde ise globalde aldığı değerle 
    çalışmaya devam edecek*/
    console.log(number1+number2)
}

console.log(number1+number2)


if(true){
    var name = "Şinasi"
    var surName = "Yüksel"
    console.log(`${name} ${surName}`)
}
console.log(`${name} ${surName}`)
/*varla oluşturulan değişkenler funtion scope olduğu için sadece fonksiyon
içinde oluşturulursa local scope oluyor yani burada blok içinde de olsa 
global scope değişkenlerimiz var ve içerde dde dışarda da aynı değerle 
işlem görecek.*/

function functionName(){
    var name = "Ali"
    var surName = "Desidero"
    console.log(`${name} ${surName}`)
} 
functionName()
console.log(`${name} ${surName}`)
/*işte burada fonksiyon içinde varla oluşturulduğu için local kalacak
fonksiyon içinde verilen değerle sadece fonksiyon içinde işlem yapacak dışında
ise global değerine geri dönecek.*/

/*Object
Objeler içinde propertyler olan ve bu propertylere ait değerler olan,
yani key-value dengesi ile var olan non-primitve değişken tipidir.
Property ismi yani key sadece string olabilir(oluşturulurken tırnak içinde
    yazılmasına gerek yok), ama value değeri her değişken olabilir.dizi,sayı,
    string,fonksiyon,obje ...

Obje sabitini oluşturmak için bir değişken adı ve eşitlik olarak süslü 
parantez içinde propertiler(iki süslü parantez içinde olup kod bloğu olmayan
    tek şey objedir)
*/

const obje1 = {} //boş obje oluşturma
/*objeleri fonksiyonları dizileri genelde baştan sona yeni eşitlemelere
maruz bırakmadığımız için constla tanımlıyoruz. Bu nonprimitve değişkenlerin
mutable(değiştirilebilir) özelliğini bozmuyor.hala eleman ekleyebiliyor,
silebiliyor,değer değiştirebiliyoruz.*/

const rectangle = {
    length: 20,
    width: 10  
}
//key:value şeklinde tanımladık
const person = {
    firstName: "Şinasi",
    lastName: "Yüksel",
    age: 23,
    country: "Tr",
    skills:[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    isMarried: false,
    siblings:{
        firstName:"Zehranur",
        lastName:"Yüksel"
    },
    'phone number': 05347895
}
/*Görüldüğü üzere sadece string türünden keyler oluşturabilsek de
her türden value yazabildik.*/
/*Eğer key olan string içinde boşluk bulunuyorsa tırnak içinde verilir.*/
console.log(person)
//obje içinden değerlere erişme
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.country)
/*Bu şekilde obje ismi nokta key değeri ile o propertieye ve valuesuna 
erişebiliyoruz.*/
console.log(person.skills)
console.log(person.skills[2])
//bu şekilde de obje içindeki dizinin elemanlarına ulaşabiliriz
person.skills.push("React")
//Hatta bu şekilde obje içindeki diziye işlem yapabiliriz

//obje içindeki obje propertiesine erişme
console.log(person.siblings.lastName)

/*İçinde boşluk olan key değerleri tanımlanırken nasıl tırnak içinde 
tanımlanıyorsa çağırılırken de tırnak içinde çağırılması lazım. Bu yüzden 
obje içine nokta ile erişmek yerine dizideki gibi köşeli parantez içinden
çift tırnak key ismi şeklinde erişilir*/

console.log(person["phone number"])

/*Ayrıca bu köşeli parantez dinamik olarak değiştirmek istediğimiz bir
key değerini değişkene atayarak bunu yaparsak onu da çağırmamızı sağlıyor*/
let key1 = "isMarried"

console.log(person[key1])

//objeye yeni propertie ekleme
person.ogrenimDurumu = "Üniversite"

console.log(person)

/*Not: obje elemanları sırasız depolanır sırasız getirilir.*/

//Obje metodu oluşturmak.
/*Obje metodu obje içinde oluşturulan ve objenin propertieleri üzerinden
işlem yapan metodlardır.*/
const person2 = {
    firstName: "Şinasi",
    lastName: "Yüksel",
    age: 23,
    country: "Tr",
    skills:[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    isMarried: false,
    siblings:{
        firstName:"Zehranur",
        lastName:"Yüksel"
    },
    'phone number': 05347895,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
/*Burasa this. demek obje içinde bulunduğumuz objenin elemanlarına
erişmek için kullanılan bir yerleşik yöntem. Ama arrow fonksiyonda bu this 
tanımlı değil. Orada tıpkı dışardan eriştiğimizde yaptığmız gibi
person2.lastName şeklinde propertieye ulaşılır*/

const person3 = {
    firstName: "Şinasi",
    lastName: "Yüksel",
    age: 23,
    country: "Tr",
    skills:[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    isMarried: false,
    siblings:{
        firstName:"Zehranur",
        lastName:"Yüksel"
    },
    'phone number': 05347895,
    getFullName: ()=>{
        return `${person3.firstName} ${person3.lastName}`
    }
}

console.log(person2.getFullName())
console.log(person3.getFullName())

//Obje Metodları
/*Object.assign(): Obje üstünde hiçbir değişiklik yapmadan objeyi 
kopyalayan metoddur. Bu metoda ihtiyaç var çünkü direkt yeni bir 
değişken adı oluşturup const person4 = person2 şeklinde tanımlasan 
ve person2de bir değişiklik yapsan ikisinde de değişecek çünkü referans
eşitledik*/
const copyPerson = Object.assign({},person3)
//bu şekilde kullanılır
console.log(copyPerson)

//Object.keys(): objenin keylerini getirir.
console.log(Object.keys(copyPerson))

//Object.values(): objenin valuelarını getirir
console.log(Object.values(copyPerson))


//Object.entries(): key value şeklinde objenin tüm propertielerini getirir
for(let [key,val] of Object.entries(copyPerson)){
    console.log(`${key}      ${val}`)
}
/*Bu şekilde iki parametre ile key value değerlerini de dönebilir.*/

//hasOwnProperty():parantez içindeki key objede var mı true false döndürür
let propertieCheck = person2.hasOwnProperty("country")
console.log(propertieCheck? "var":"yok")

/*Object.freeze(): Objeye property eklenemez, property silinemez, mevcut
propertylerin değeri değiştirilemez. Adı üstünde dondurma*/
Object.freeze(person)

/*Object.seal(): Objeye ekleme çıkartılma yapılamaz ama mevcut olanın
değeri değiştirilebilir*/
Object.seal(person3)