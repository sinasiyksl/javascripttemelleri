/*DOM: (Document Object Model):
Javascript içinde seçili html dosyasının tüm elementlerinin bulunduğu
objedir. Bu obje ve dahili bu objenin metodları sayesinde, HTML dosyasına
element ekleyebilir, çıkartabilir, var olana erişebilir ver tüm özellikleri
ve değerleri üzerinde oynama yapabiliriz.

Varlığının temel amacı arayüz ve javascript arasında kurduğu köprü ile 
görsel işlemlere bir işlev kazandırmasıdır. Örneğin bir inputu döngü özelinde
alıp depolamak geri buna bağlı bir şeyler döndürmek...*/

/*Getting Element:
HTML elementleri üstünde yapılabilecek herhangi bir işlem için önce onlara 
erişip getirebilmemiz gerekir. HTML elementlerine DOM sayesinde, etiket adı,
id, sınıf ya da diğer özellikleriyle erişebiliriz. Getirirken birden fazla
element getiriyorsa HTMLcollection diye bir dizi benzeri obje içinde getirir. 
Dizi olmadığı için dizi fonksiyonları uygulanamaz ama düz for loopu 
kullanılarak içinde dönülebilir. Tabi string ve dizinin ortak metodu 
length kullanılabilir. Ayrıca getirdiği elementler tagleri ve tagler içinde
tanımlanmış tüm özellikleriyle birliktedir. Meselela "<h1 class="a">ayı</h1>"
şeklinde.
*/

/*getElementsByTagName(): 
Bu dom metodu parantez içine tırnaklar içinde girili etiketteki tüm 
elemanları HTMLcollection diye bir dizi benzeri obje içinde getirir. 
Dizi olmadığı için dizi fonksiyonları uygulanamaz ama düz for loopu 
kullanılarak içinde dönülebilir. Tabi string ve dizinin ortak metodu 
length kullanılabilir.*/
const allTitles = document.getElementsByTagName("h1")

console.log(allTitles)
console.log(allTitles[2])//sıralı tutulurp indexler getirilebilirler

for(let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}

/*getElementsByClassName():
Tırnak içinde girilen class ismindeki elementleri getirir.*/
const evenClassTitles = document.getElementsByClassName("even")
const oddClassTitles = document.getElementsByClassName("odd")

console.log(`${evenClassTitles}
${oddClassTitles}`)

for(let i = 0; i < evenClassTitles.length; i++){
    console.log(evenClassTitles[i])
}

/*getElementById():
Diğer document get metodlarından farklı olarak elements değil element yazdık
çünkü id uniq bir özellik olduğu için id ile de tek bir element çağırılabilir.*/
const sonKisim = document.getElementById("sonkisim")
console.log(sonKisim)

/*querySelector: 
Elementi cssdeki gibi seçmemize yarayan metod. direkt tag yazarsak tag
nameine göre, # ile yazarsak o id ye göre, noktayla da o classa göre 
element getirir. Bunlar da parantezde tırnak içinde yazılır. Yukardakiler
gibi uyanların hepsini getirmez sadece ilkini getirir uyan hepsini getirmek
için querySelectorAll kullanılır.*/
const ilkTitle = document.querySelector("h1")
const ilkTekClass = document.querySelector(".odd")
const idSahibi = document.querySelector("#sonkisim")

console.log(ilkTitle,ilkTekClass,idSahibi)

const tumTitles = document.querySelectorAll("h1")
//all dediğimiz için HTML collection içinde tüm seçillileri getirdi
console.log(tumTitles)

/*Özellik ekleme
getirdiğimiz elemetni ya da elementlerin bulunduğu collectiona içten 
erişip elemente özellik eklemesi yapabiliriz(class, id ..)*/
tumTitles[2].id = "ucuncuBaslik"
tumTitles[2].className = "ucuncuClass"

console.log(tumTitles[2])

//bu özellik eklemek için bir de özel metod var setAttribute
tumTitles[1].setAttribute("class","oF")
//ilk parametre attribute ismi, ikinci parametre de değeri
console.log(tumTitles[1])

/*Class ekleme çoklu da olabilen bir işlem olduğu için classList metodu
ile istediğimiz classı ekleyip (add), istediğimiz classı çıkartabiliyoruz
(remove)*/
tumTitles[2].classList.remove("ucuncuClass","odd")
tumTitles[2].classList.add("birinciClass","ikinciClass","ucuncuClass")
console.log(tumTitles[2])

/*Elementlerin textlerini de DOM üstünden belirleyebiliyoruz*/

tumTitles[5].textContent = "Kendine Güven"

/*HTML içinde de script içinde innerHTML ile yapılabilir bu değer text
atama işlemi.

<script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
</script>
*/

/*Bu inner html ile içerdeki bir listeyi de dışarı alabilirdik*/

/*seçili(getirilmiş) elementi bir değişkene atayıp degiskenAdi.style.
ile tüm css stillendirmeleri de yapılabilir*/




