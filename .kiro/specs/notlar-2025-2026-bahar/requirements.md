# Requirements Document

## Introduction

Öğrenci Bilgi Sistemi statik web sitesine 2025-2026 Bahar dönemine ait yeni bir not sayfası (`notlar-2025-2026-bahar.html`) eklenecektir. Sayfa, mevcut dönem not sayfalarıyla (özellikle `notlar-2025-2026-guz.html` ve `notlar-2024-2025-bahar.html`) birebir aynı HTML yapısını, CSS sınıflarını ve tablo formatını kullanacaktır. Dönem 7 ders içerecek; bu derslerin 4'ü başarısız (FF), 3'ü başarılı olacaktır. Ayrıca dönem listesinin geçtiği tüm navigasyon menüleri güncellenecek ve başarısız harf notu için eksik olan CSS sınıfı eklenecektir.

Mevcut kod tabanında yapılan inceleme sonuçları:

- Not sayfaları tamamen statik HTML'dir; not değerleri ve ortalamalar HTML içinde sabit yazılıdır, JavaScript ile hesaplanmaz.
- `script.js` yalnızca giriş formu ve hamburger menü işlevini içerir; dönem verisi tutmaz.
- `styles.css` içinde `.grade-a`, `.grade-b`, `.grade-c` sınıfları vardır; `.grade-f` sınıfı yoktur.
- Dönem açılır listesi (dropdown) 9 dosyada tekrarlanır: `home.html`, `ders-programi.html`, `sinav-takvimi.html` ve 7 dönem not sayfası. `index.html` (giriş sayfası) menü içermez.
- `styles.css` içinde `.semester-summary` / `.summary-card` sınıfları tanımlıdır ancak hiçbir not sayfası tarafından kullanılmaz; AGNO veya dönem ortalaması özet bölümü mevcut sayfalarda yoktur.

## Glossary

- **Not_Sayfası**: Belirli bir akademik döneme ait ders notlarını tablo hâlinde gösteren statik HTML dosyası.
- **Yeni_Not_Sayfası**: Bu gereksinimlerle oluşturulacak `notlar-2025-2026-bahar.html` dosyası.
- **Referans_Sayfa**: Yapı ve stil kaynağı olarak kullanılacak `notlar-2025-2026-guz.html` dosyası.
- **Not_Tablosu**: `grades-table` CSS sınıfına sahip, sütunları Ders Adı, Quiz, Ödev, Vize, Final, Ortalama, Harf Notu olan HTML tablosu.
- **Ortalama**: Bir dersin Quiz, Ödev, Vize ve Final notlarının aritmetik ortalaması.
- **Harf_Notu**: Bir dersin başarı durumunu gösteren iki harfli kod (AA, BA, BB, CB, CC, DC, DD, FF).
- **Başarısız_Ders**: Harf notu FF olan ders.
- **Başarılı_Ders**: Harf notu FF dışında bir değer olan ders.
- **Dönem_Menüsü**: Tüm sayfalarda tekrarlanan, `dropdown-content` CSS sınıfına sahip dönem bağlantıları listesi.
- **Stil_Dosyası**: `styles.css` dosyası.
- **Dokümantasyon_Dosyası**: Proje kökünde yer alan, yapılan işlem ve değişikliklerin kaydedildiği `dokümantasyon.txt` metin belgesi.

## Requirements

### Requirement 1: Yeni Dönem Not Sayfasının Oluşturulması

**User Story:** Bir öğrenci olarak, 2025-2026 Bahar dönemi notlarımı ayrı bir sayfada görmek istiyorum, böylece dönem bazlı başarı durumumu takip edebilirim.

#### Acceptance Criteria

1. THE Yeni_Not_Sayfası SHALL proje kök dizininde `notlar-2025-2026-bahar.html` adıyla yer alsın
2. THE Yeni_Not_Sayfası SHALL `<html lang="tr">` kök öğesini ve `<meta charset="UTF-8">` bildirimini içersin
3. THE Yeni_Not_Sayfası SHALL `<title>` değeri olarak `Not Bilgisi - 2025-2026 Bahar Dönemi` metnini içersin
4. THE Yeni_Not_Sayfası SHALL `styles.css` dosyasını `<link rel="stylesheet">` ile ve `script.js` dosyasını `<body>` sonunda `<script src>` ile bağlasın
5. THE Yeni_Not_Sayfası SHALL `page-header` sınıfı içinde `<h1>Not Bilgisi</h1>` ve `<h2>2025-2026 Bahar Dönemi</h2>` başlıklarını içersin
6. THE Yeni_Not_Sayfası SHALL Referans_Sayfa ile aynı DOM yapısını kullansın: `nav.navbar` → `div.nav-brand` → `img.nav-logo`, `div.hamburger`, `ul.nav-menu#navMenu`, ardından `div.content-container` → `div.page-header` ve `div.grades-table-container`
7. THE Yeni_Not_Sayfası SHALL Referans_Sayfa'da bulunmayan hiçbir ek bölüm içermesin ve `semester-summary` veya `summary-card` sınıflarını kullanmasın

### Requirement 2: Ders Listesi ve Not Tablosu

**User Story:** Bir öğrenci olarak, dönemin 7 dersini quiz, ödev, vize, final, ortalama ve harf notu bilgileriyle tablo hâlinde görmek istiyorum, böylece her dersin detayına tek bakışta ulaşabilirim.

#### Acceptance Criteria

1. THE Not_Tablosu SHALL `<thead>` içinde sırasıyla Ders Adı, Quiz, Ödev, Vize, Final, Ortalama, Harf Notu başlıklarını içersin
2. THE Not_Tablosu SHALL `<tbody>` içinde tam olarak 7 ders satırı içersin
3. THE Not_Tablosu SHALL ders satırlarını şu sırayla listelesin: Enerji Sistemleri, Robotik ve Otomasyon, Isıtma, Havalandırma ve İklimlendirme, Bitirme Projesi II, Hesaplamalı Akışkanlar Dinamiği, Hidrolik ve Pnömatik Sistemler, İçten Yanmalı Motorlar
4. THE Not_Tablosu SHALL her satırın ilk hücresinde `course-name` sınıfını, altıncı hücresinde `average` sınıfını, yedinci hücresinde `grade-letter` sınıfı ile birlikte harf notuna karşılık gelen renk sınıfını kullansın
5. THE Not_Tablosu SHALL Quiz, Ödev, Vize ve Final hücrelerinde 0 ile 100 arasında tam sayı değerler içersin
6. THE Not_Tablosu SHALL her satırın Ortalama hücresinde, o satırın Quiz, Ödev, Vize ve Final değerlerinin aritmetik ortalamasını göstersin
7. THE Not_Tablosu SHALL Ortalama değerlerini en az bir ondalık basamakla, Referans_Sayfa biçimiyle uyumlu olarak yazsın (örnek biçimler: `66.0`, `48.25`, `70.5`, `72.75`)

### Requirement 3: Başarı ve Başarısızlık Dağılımı

**User Story:** Bir öğrenci olarak, bu dönemde 4 dersten kaldığımın ve 3 dersi geçtiğimin sayfada net şekilde görünmesini istiyorum, böylece hangi dersleri tekrar almam gerektiğini anlayabilirim.

#### Acceptance Criteria

1. THE Not_Tablosu SHALL tam olarak 4 Başarısız_Ders satırı içersin
2. THE Not_Tablosu SHALL tam olarak 3 Başarılı_Ders satırı içersin
3. WHERE bir satır Başarısız_Ders'e aittir, THE Not_Tablosu SHALL o satırın Final değerini 40 ile 47 arasında (40 ve 47 dâhil) bir tam sayı olarak yazsın
4. THE Not_Tablosu SHALL 4 Başarısız_Ders satırının Final değerlerini birbirinden farklı tam sayılar olarak yazsın
5. WHERE bir satır Başarısız_Ders'e aittir, THE Not_Tablosu SHALL o satırın Harf Notu hücresinde `FF` metnini göstersin
6. WHERE bir satır Başarılı_Ders'e aittir, THE Not_Tablosu SHALL o satırın Harf Notu hücresinde AA, BA, BB, CB, CC, DC veya DD değerlerinden birini göstersin
7. WHERE bir satır Başarılı_Ders'e aittir, THE Not_Tablosu SHALL o satırın Final değerini 50 ile 100 arasında (50 ve 100 dâhil) bir tam sayı olarak yazsın

### Requirement 4: Başarısız Harf Notu Stili

**User Story:** Bir öğrenci olarak, FF notlarının diğer harf notlarından ayırt edilebilir bir renkle gösterilmesini istiyorum, böylece başarısız dersleri hızlıca fark edebilirim.

#### Acceptance Criteria

1. THE Stil_Dosyası SHALL `.grade-f` adlı bir CSS sınıfı tanımlasın
2. THE Stil_Dosyası SHALL `.grade-f` sınıfında `background` ve `color` özelliklerini, mevcut `.grade-a`, `.grade-b`, `.grade-c` sınıflarıyla aynı özellik yapısını izleyerek tanımlasın
3. THE Stil_Dosyası SHALL `.grade-f` sınıfını `.grade-c` tanımından sonra, `/* Dönem Özeti */` yorumundan önce yerleştirsin
4. WHERE bir satır Başarısız_Ders'e aittir, THE Not_Tablosu SHALL o satırın Harf Notu hücresinde `grade-letter grade-f` sınıflarını kullansın
5. THE Stil_Dosyası SHALL mevcut `.grade-a`, `.grade-b`, `.grade-c` tanımlarını değiştirmeden korusun

### Requirement 5: Navigasyon Menülerinin Güncellenmesi

**User Story:** Bir öğrenci olarak, yeni dönemi sitenin her sayfasındaki dönem listesinden seçebilmek istiyorum, böylece nereye gidersem gideyim yeni döneme erişebilirim.

#### Acceptance Criteria

1. THE Dönem_Menüsü SHALL `notlar-2025-2026-bahar.html` hedefine giden ve metni `2025-2026 BAHAR DÖNEMİ` olan bir bağlantı içersin
2. THE Dönem_Menüsü SHALL yeni dönem bağlantısını `2025-2026 GÜZ DÖNEMİ` bağlantısından önce, listenin ilk öğesi olarak yerleştirsin
3. THE Dönem_Menüsü SHALL güncellenmiş hâlde 8 dönem bağlantısı içersin
4. THE Dönem_Menüsü SHALL `home.html`, `ders-programi.html`, `sinav-takvimi.html`, `notlar-2022-2023-guz.html`, `notlar-2022-2023-bahar.html`, `notlar-2023-2024-guz.html`, `notlar-2023-2024-bahar.html`, `notlar-2024-2025-guz.html`, `notlar-2024-2025-bahar.html`, `notlar-2025-2026-guz.html` ve `notlar-2025-2026-bahar.html` dosyalarının tamamında aynı bağlantı listesini ve aynı sıralamayı içersin
5. THE Yeni_Not_Sayfası SHALL `nav-menu` içinde `home.html` hedefli `Ana Sayfa` ve `index.html` hedefli `Çıkış` bağlantılarını Referans_Sayfa ile aynı şekilde içersin
6. THE Yeni_Not_Sayfası SHALL `div.hamburger` öğesinde `onclick="toggleMenu()"` çağrısını ve `ul.nav-menu` öğesinde `id="navMenu"` niteliğini içersin
7. WHERE `index.html` giriş sayfasıdır ve Dönem_Menüsü içermez, THE Dönem_Menüsü SHALL `index.html` dosyasında değişiklik gerektirmesin

### Requirement 6: Mevcut İşlevlerin Korunması

**User Story:** Bir öğrenci olarak, yeni dönem eklendikten sonra sitenin mevcut sayfalarının ve menü davranışının bozulmamasını istiyorum, böylece eski dönem bilgilerine erişimimi kaybetmem.

#### Acceptance Criteria

1. THE Not_Sayfası SHALL mevcut 7 dönem sayfasındaki ders adlarını, not değerlerini, ortalamalarını ve harf notlarını değişmeden korusun
2. THE Yeni_Not_Sayfası SHALL `script.js` dosyasında değişiklik yapılmasını gerektirmesin
3. WHEN kullanıcı hamburger menü öğesine tıklar, THE Yeni_Not_Sayfası SHALL `navMenu` öğesine `active` sınıfını ekleyen mevcut `toggleMenu` işlevini çağırsın
4. WHEN kullanıcı Dönem_Menüsü içindeki yeni dönem bağlantısına tıklar, THE Dönem_Menüsü SHALL kullanıcıyı `notlar-2025-2026-bahar.html` sayfasına yönlendirsin
5. THE Yeni_Not_Sayfası SHALL yalnızca `styles.css` içinde tanımlı CSS sınıflarını kullansın

### Requirement 7: Çalışma Dokümantasyonu

**User Story:** Bir geliştirici olarak, projede yapılan işlemlerin bir metin belgesine kaydedilmesini istiyorum, böylece hangi değişikliğin neden yapıldığını sonradan izleyebilirim.

#### Acceptance Criteria

1. THE Dokümantasyon_Dosyası SHALL proje kök dizininde bulunsun
2. WHEN proje dosyalarında bir ekleme veya değişiklik tamamlanır, THE Dokümantasyon_Dosyası SHALL değiştirilen dosya adını ve yapılan değişikliğin özetini içeren bir kayıt içersin
3. THE Dokümantasyon_Dosyası SHALL kayıtlarını Türkçe yazsın
4. THE Dokümantasyon_Dosyası SHALL her kayıtta tarih bilgisi içersin
5. IF Dokümantasyon_Dosyası mevcut değildir, THEN THE Dokümantasyon_Dosyası SHALL ilk kayıt yazılmadan önce oluşturulsun
6. THE Dokümantasyon_Dosyası SHALL önceki kayıtları koruyarak yeni kayıtları dosya sonuna eklesin
