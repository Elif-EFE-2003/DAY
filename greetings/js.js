let kullanici = prompt("Lütfen Adınızı Giriniz!");
var greetings = document.querySelector("#greet");
greetings.innerHTML = `Merhaba, ${kullanici}   Hoşgeldiniz!`;
// Saati güncellemek için bir fonksiyon
function saatGuncelle() {
    const tarih = new Date(); // Şu anki tarihi ve saati al
    const saat = tarih.getHours();
    const dakika = tarih.getMinutes();
    const saniye = tarih.getSeconds();

    // Günleri ve ayları metin olarak tanımlayabilirsiniz
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const simdikiGun = gunler[tarih.getDay()];

    // Saati ve günü HTML içindeki uygun elementlere yazdırın
    const saatElement = document.getElementById("saat");
    saatElement.innerHTML = `Saat: ${saat}:${dakika}:${saniye}`;

    const gunElement = document.getElementById("gun");
    gunElement.innerHTML = `Gün: ${simdikiGun}`;
}

// Saati güncelleme işlemini belirli bir aralıkta (örneğin, her saniye) tekrarlayın
setInterval(saatGuncelle, 1000);

// Sayfa yüklendiğinde saat ve günü göster
saatGuncelle();


