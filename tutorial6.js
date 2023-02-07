/*Hayatta yaptığımız birçok şey gibi programlamada da yaptığımız şeylerin
birçoğu tekrarlıdır. 1 den 200e kadar sayıları ekrana basmamız gereken basit
bir işlem yapmamız gerekse bile bu işlem boş yere dakikalarımızı alırdı.
Programlama dillerinde tekrarlı görevleri uygulamak için döngü yapılarımız var.*/

//For Loop
//for(sayaç olan değişken ve mevcut değeri,sayacın döngü koşulu,sayaç arttırma azaltma)

for(let i=1;i<=200;i++){
    console.log(i)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesBigger = []
for(i=0 ; i < countries.length ; i++){
    countriesBigger.push(countries[i].toUpperCase())
}
/*Burada i yi sıfırdan başlatıp koşul olarak da dizinin uzunluğundan küçük
olduğu sürece diyerek döngüye dizi içini tamamen dolaşabilcek kadar alan 
yarattık. Sonra da sıfırdan başlayan sayacı bir index olarak kullanarak
dizi elemanlarını yeni bir dizi içine kopyaladık. toUpperCase metodu ile de
alınan her elamanı geçişten önce büyük harfli hale çevirdik*/
console.log(countriesBigger)

//dizinin tüm elemanlarını toplama
const numbers = [1,3,17,26,42,7,15]
let sum = 0
for(i=0 ; i < numbers.length ; i++){
    sum += numbers[i]
}
console.log(`dizinin tolamı ${sum}'dır`)

//While loop
//for varken ne kadar gerekir bilinmez ama bunda sayacı kod bloğu içine koyuyoruz

let sayac = 0
while(sayac<numbers.length){
    console.log(numbers[sayac])
    sayac++
}

//do-while loop
/*whiledan farkı ilk seferde şartı sağlamasa bile ilk sefere mahsus en az
bir kere işlemini yapan döngüdür*/
let sayac2 = 0
do{
    console.log(numbers[sayac2])
    sayac2++
}while(sayac2<numbers.length)

//for of loop (diziler için döngü)
/*elementlerin tek tek alınabileceği bir değişken tanımlanır ardına 
of diziAdı yazılır ve bu sayede dizinin tüm elemanları tek tek dönülüp
işlem yapılabilir*/
for(let country of countries){
    console.log(country)
}

//break
/*switch casede de gördüğümüz gibi kod bloğunu kırıp o anda işlemi 
bitirmemizi sağlıyor*/
for(let i=0 ; i<5 ; i++){
    if(i==3){
        break
    }
    console.log(i)
}
/*burada sıfır bir ve ikiyi yazıcak çünkü üç olursa direkt döngüyü kırıp
çıkması için break verdik. mesela bir liste var ve biz bir isim arıyoruz
aradığımız isim bulunduktan sonra liste içinde dönmeye gerek kalmamıştır 
bu sebeple break kullanarak döngüyü sonlandırabiliriz*/

for(let country2 of countries){
    if(country2 == "Denmark"){
        console.log("Danimarka listede mevcut")
        break
    }
}

/*continue da mevcut işlemin atlanıp sıradaki adımının yapılmasını istiyorsak 
kullanacağımız komut. mesela 0-5 arası sayıları yazdırmak istedik
ama üçü ve ikiyi istemedik*/
for(let i=0 ; i<=5; i++){
    if(i==2||i==3){
        continue
    }
    console.log(i)
}


