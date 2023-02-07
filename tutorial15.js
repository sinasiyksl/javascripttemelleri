/*JavaScript object-oriented bir dil olduğundan javascriptteki her şey 
aslında bir objedir. Classlar içlerindeki yerleşik constructor metodları 
ile bir obje taslağıdır. Bu taslaklar üzerinden birebir aynı ya da eğip
büküp ekleyip geliştirerek sınırsız sayıda obje oluşturabiliriz.*/
/*class da tıpkı obje gibi süslü parantezler arasına tanımlanır. Ama
classlar bir veri değil de kullanıma hazır taslaklar olduğu için onları
bir değişkene atamaya gerek yoktur isimlendirmek yeterlidir.*/
class Examp {
    //taslağın özelliklerinin bulunduğu kod bloğu
}

const examp = new Examp()
console.log(examp)
/*örnekte class ile oluşturduğumuz taslaktan birebir aynısı bir obje ürettik.
taslağa bir şey tanımlamadığımız için objemiz de boş bir obje olarak karşımıza
geldi.*/

/*Class Constructor: Yukarda da bahsettiğimiz gibi class constructor
taslağı şekillendirmek ve özelliklerini belirlemek için class içinde 
kullandığımız bir yerleşik fonksiyondur.*/
class Person {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
/*yukarda tanımlaığımız classda da görüldüğü üzere tıpkı fonksiyon 
yapısındaki gibi burada da içerdeki değişkenleri işaret etmek için
this. yapısını kullanıyoruz.*/
const person = new Person("şinasi", "yüksel")
console.log(person)
/*construcctorda parametrelerimiz bulunduğu için bu parametrelerin çalışa-
bilmesi için obje türetirken de değerlerini giriyoruz. Değer girilmediği-
nde de objenin undefined kalmaması için yukarda class parametreleri 
belirlenirken default değerler de atılabilir.*/
class Person1{
    constructor(firstName="asabenah",lastName="lecture"){
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new Person1()
console.log(person1)
//değer girmememize rağmen default değeri olduğu için değer aldı.
/*Ve en başta da dediğimiz gibi bir classtan sınırsız obje üretebiliriz
ve bu taslakların da zaten ana amaçlarından biri budur.*/
const person2 = new Person1("ali","desidero")
const person3 = new Person1("nihat","kahveci")
const person4 = new Person1("arda","güler")
console.log(person1,person2,person3,person4)

/*Bazı değerler taslak yapısı gereği ondan oluşturulacak tüm objelerde de
aynı değerde olacağı için parametre olarak verilmeden direkt class 
içinde değeri belirlenebilir.mesela bir oyunda başlangıç skoru herkes için 
sıfır olabilir.*/
class Person2{
    constructor(isim,soyisim,yas,city){
        this.isim = isim
        this.soyisim = soyisim
        this.yas = yas
        this.score = 0
        this.city = city
    }
}

const persona = new Person2("şinasi","yüksel","23","istanbul")
const personb = new Person2("ataberk","balaban","24","Ankara")
console.log(persona,personb)

/*Class metodları: Diğer fonksiyonlardan ya da obje fonksiyonlarından
pek bir farkı yok. farkı bir değişkene atamadan ya da function() tarzı
bir şey yazmaksızın ismini koyup patküte yazbiliyorsun. Yine class içindeki
değişkenler erişmek için this. kullanmak mecburi. constructor dışında 
tanımlanır.*/
class Person3{
    constructor(isim,soyisim,yas,city){
        this.isim = isim
        this.soyisim = soyisim
        this.yas = yas
        this.score = 0
        this.city = city
    }
    getFullName(){
        return this.isim + " " + this.soyisim
    }
}

const personA = new Person3("Şinasi","Yüksel","23","İstanbul")
console.log(personA.getFullName())
//standart obje içinden fonksiyon çağırma şekli de çağırılıyor

/*bir de getter setter metodu olayımız var normal fonksiyondan bir farkı
yok. değer getirenler için fonksiyon başına get değer atayanlar için fonk
başına set yazılıyor. Zaruri değil.*/

class Person4 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getSkill() {
      return this.skills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
  }

  const person7 = new Person4("Ali","Başkesen",32,"TR","Malatya")
  console.log(person7.getSkill)
  person7.setSkill = "Html"
  person7.setSkill = "CSS"
  person7.setSkill = "JS"
  console.log(person7.getSkill)
  //NOT: örnekte de görüldüğü üzere getter fonksiyon()parantezsiz çağırılıyor
  

/*Static Metod: classı bir obje oluşturmak suretiyle başlatmaya gerek 
olmadan doğrudan class üzerinden kullanılabilir metodlar. metod başında
static anahtar kelimesi koyarak tanımlanır.*/
class Person5 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getSkill() {
      return this.skills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        return year
    }
  }

  console.log(Person5.showDateTime())
  //Görüldüğü gibi bir obje oluşturmadan direkt classtan static fonk çalıştı.


/*Inheritance (Kalıtım):
  Bir class kendinden oluşturulan objelere özelliklerini aktarabildiği 
  gibi kendiyle parent-child(inheritance) bağı kurularak türetilen bir
  classa da özelliklerini aktarır. Tıpkı obje oluşturmada olduğu gibi
  eğilip bükülüp modifiye edilebilir. Ana amacı temel özellikleri bir
  üst kalıtım sırasından alan ve kendi içlerinde özelleşen classlar
  oluşturmaktır.*/
  /*class child extends parent{} şeklinde kurulur child class extendden
  önce kapsayıcı parent class da extendden sonra belirtilir.*/

  class Teacher extends Person5{
    wordOfTeacher(){
        console.log("çocuklar sessiz")
    }
  }
  
  class Student extends Person5{
    wordOfStudent(){
        console.log("öğretmenim tuvalete gidebilir miyim")
    }
  }
  const student1 = new Student("li","cooper",7,"TR","Urfa")
  const teacher1 = new Teacher("kemal","kuş",27,"TR","İzmir")
  console.log(student1)
  console.log(teacher1)
  /*Görüldüğü gibi parent classa ek olarak düz fonksiyon ekleyebiliyoruz
  ancak constructor gibi ana özellik eklemek içim overriding meteda 
  ihtiyaç var. Bu metodda child class oluşturuşurken constructor metod
  tanımlanır ve ekleyeceğimiz özellik ve kalıtımdan gelen tüm özellik 
  parametreleri birlikte yazılır içine ekleyeceklerimizden önce kalıtım 
  özelliklerini alabilmesi için super(isim,soyisim,yas,country,city) 
  şeklinde parent özellikleri aktarılır*/
  class Hademe extends Person5{
    constructor(isim,soyisim,yas,country,city,gender){
        super(isim,soyisim,yas,country,city)
        this.gender = gender
    }
    get getGender(){
        return this.gender
    }
  }

  const hademe1 = new Hademe("Baykuş","Nuri",45,"TR","Manisa","Erkek")
  /*Parentta olmayan cinsiyet özelliğini child classta getirdik ve ondan
  oluşturduğumuz objede de değer verip kullanabildik.*/
  console.log(hademe1.getGender)