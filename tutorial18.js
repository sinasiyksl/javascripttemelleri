/*
Gerçek hayatta sözler veririz ve bilindiği üzere sözlere bir zaman atanır.
Mesela berberden randevu alırız der akşam yedi gibi boşum gel der berber.
Bu bir pormisedir. Bu sözün gerçkleşme ve gerçekleşmeme ihtimali ve bu 
durumlarda yapılacaklar vardır. Bu yapının Javascriptteki karşılığı promise
yapısıdır. Söz yerine geldiğinde promise datayı getirir gelmediğinde error
sebebini.*/

/*Promise yapısını oluşturan temeller: 

*pending: henüz henüz promisein gerçekleşip gerçekleşmemesinin belli olmadığı
bekleme evresidir.

fulfilled: promise başarıyla gerçekleştirildiği durumdur.

rejected: promisein gerçekleşmediği durumdur.
*/

/*Promiselerin gerçekleştiğinde ve gerçkleşmediğinde olacakları çalıştırmak
için .then() ve .catch() fonksiyonları zincir halinde çalıştırılabilir.*/

/*promisei yerleşik promise constructuru ile oluşturabiliriz.*/
const promise = new Promise((resolve,reject)=>{
    resolve("success")
    reject("failure")
})
/*görüldüğü gibi promiseler bir callback fonksiyonnuyla çalışıyor istersek 
bu fonksiyonu dışardan tanımlayıp içeri değişkenini de girebiliriz.*/
console.log(promise)
/*bu şekilde doğruda nekrana basıldığında bir obje gibi propertileriyle
gelecektir. Bu propertielerden fullfilled ya da rejected olduğunu ve
karşılığında döndürdüğü değeri ya da hatayı da görebilirsiniz.*/


/*Dediğimiz gibi promise bir söz bir vaaat olduğu için beeli bir sürede
gerçekleşebilir. Bu süreyi bizim belirleyebildiğimiz bir sistem kodda 
çok kullanılmasa da mümkündür. setTimeout yapısı ile.*/
const doPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills = ["HTML","CSS","JavaScript"]
        if(skills.length > 0){
            resolve(skills)
        }else{
            reject("something wrong happened")
        }
    },2000)
})
/*Tabi burada ekrana promisei basıp fullfilled mi rejected mi geldiğini
döndürdüğü değeri falan toplu obje gibi görebiliriz. Ama haliyle biz gelenle
bir şey yapmak istediğimiz için yukarda da bahsettiğimiz gibi .then().catch()
kullancağız.*/
doPromise.then(result => {console.log(result)})
.catch(error => console.log(error))
/*Zincirleme dediğimiz olay da bu hemen art arda iki fonksiyonu da 
işleyebildik. then içine gelen fonksiyondaki parametreye gerçekleşmesi 
durumunda promisein alacağı değer geldi catche de hatada yapılacak
senaryo.*/
//Ve işlem sonucu koyduğumuz timera uygun zamanda getirildi.

//Bir tane de promisein gerçekleşmediği reject olduğu örnek yapalım
const doesPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills = ["HTML","CSS","JavaScript"]
        if(skills.includes("Node")){
            resolve("fullstack developer")
        }else{
            reject("something wrong happened")
        }
    },2000)
})

doesPromise.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})

/*Fetch API. fetch kelime manası gibi bir yerlerden veriyi çeker getirir.
kendi dosylaramızdan değil dışardan falan da bir veriyi alıp ekleriz.
Yukarda da belirttiğimiz gibi promise yapısının zmanlamasını elle girmek
pek makul değil bunun asıl amacı böyle işlemlerde veri aktarımı 
gerçekleştiğinde işlemleri tüm koda paralel bir şekilde gerçekleştirebilen
bir blok yapısı oluşturmak.*/
const url = 'https://restcountries.com/v2/all'//ülkelerin olduğu bir api
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
/*şimdi buradaki ilk önemli detay fetch api direkt bir promise yapısı
olarak asenkron işlediği için bunu bir pormise oluşturup falan içinde
getirmeye gerek yok. hemen ardına zincir olarak then ve catchleri 
kullanabiliriz.
İkinci bir önemli nokta ise .then().then() şeklinde zinciri birden fazla 
then ile de oluşturabildiğimizi gördük.
Burada bunu kullanmay ihtiyaç duyma sebebimiz ise gelen dataya erişmek için
.json adında bir işlem daha yapmamız gerekmesiydi.
Peki bunları niye tek bir thende yazmadık dersek de bu da adımlara bölmek
içindi. Yani bir then gerçekleşmeden diğer then gerçekleşmeyeceği için bu
asenkron işlemleri bir adımlamaya müddahil ettik.
*/

/*Async await promise oluşturmanın daha iyi bir yoludur. Hem anlaşılırlığı 
hem de yazması daha kolaydır. Async-await ayrı düşünülemez ancak birlikte
kullanılır. async, function keyinden önce ya da değişkene atanarak 
yapılıyorsa da parametrelerden önce yazılarak fonksiyonu promise 
dönüştürür. await de fonksiyonda datalardan önce key olarak yazılır
ve işlemleri sıraya sokar. bir önceki gerçekleşmeden diğeri gerçekleşmez 
ve bu toplamdaki koda paralel olarak ilerler.*/

const fetchData = async() =>{
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
}
fetchData()
/*tabi burada diğer promise oluşturmadaki gibi resolve reject yok 
try catch ile hata yakalayıp yapılacak işlemi belirliyoruz*/
const fetchDatas = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }finally{
        console.log('===== async and await')
    }
  }
  
  fetchDatas()