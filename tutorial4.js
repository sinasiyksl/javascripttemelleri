/*Koşullu ifadeler koşullar ve koşulların sonuçları doğrultusunda kod 
bloğu üzerinden işlem yapılmasını sağlayan araçlardır. Default olarak
koşul işlemleri yukardan aşağı okunur ve işlenir.

if(koşul){kod bloğu} = eğer parantez içindeki koşul true döndürüyor ise
kod bloğundaki işlemi yapar false döndürüyor ise yapmaz. 

else if(koşul){kod bloğu} = ifden sonra yani ilk koşuldan sonra farklı bir 
koşul daha koşulmak isteniyorsa kullanılır. Kod yukardan aşağı değerlendirildiği
için ancak ifin koşulu sağlanmıyorsa koşul işlemi araması devam edeceğinden
aşağı iner ve else ifin koşulun kontrol eder ve true döndürüyorsa kod 
bloğundaki işlemi yapar.

else {} = Üstünde yazılan if ya da else if li hiçbir koşul gerçekleşmediyse
bunun dışında kalan tüm ihtimalleri else kapsar ve kod bloğu çalışır.*/

let age = 23

if(age<18){
    console.log("ehliyet almak için başvuramazsınız")
}
else if(age == 18){
    console.log("ehliyet için başvurabilirsiniz ama almak için biraz daha beklemelisiniz")
}
else {
    console.log("ehliyet alabilirsiniz")
}

/* if-elseif-else yapısı dışında bir switch-case yapısı var.
switch(koşul){
    case 1:
      kodbloğu
      break
    case 2:
       kodbloğu
       break
    case 3:
        kod bloğu 
        break
    default:
        kod bloğu
}
Koşul içindeki ifade caselerin yanında duran ifadelerden hangisi ile eşitse
o casein kod bloğu çalışır. Ve if mantığında durum karşılandıktan sonra
aramaya devam etmeyip çıkması otomatik olsa da burada bunu break ile 
sağlıyoruz o yüzden break kullanımı zorunlu.
Default bölümü de bahsi geçen caselerden hiçbiri koşulla eşit değilse
çalıştırılacak kod bloğudur*/

let weather = "cloudy"

switch(weather){
    case "sunny":
        console.log("hafif giyin hava sıcak")
        break
    case "rainy":
        console.log("şemsiyeni almayı unutma yağmur var")
        break
    case "cloudy":
        console.log("ceketini al hava belki yağabilir")
        break
    case "snowy":
        console.log("hava çok soğuk sıkı giyin")
        break
    default:              
        console.log("hava durumuna bakmadım kontrol edip çık") 
}

//default zaten son section olduğu için break koymak şart değil koysan da farketmez

//Ternary operatör(daha önce gördük tek satır içinde koşul)


