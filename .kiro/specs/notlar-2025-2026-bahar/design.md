# Design Document

## Overview

İş basit: mevcut `notlar-2025-2026-guz.html` sayfası şablon olarak kopyalanacak, içindeki başlıklar ve not tablosu 2025-2026 Bahar dönemi verisiyle değiştirilecek. Ek olarak `styles.css`'e FF notu için renk sınıfı eklenecek ve dönem açılır menüsü 10 mevcut dosyada güncellenecek.

Yeni mimari, yeni katman veya JavaScript değişikliği yok. Not değerleri HTML içine sabit yazılır (mevcut sayfalardaki yaklaşımın aynısı).

Değişecek/eklenecek dosyalar:

| Dosya | İşlem |
|---|---|
| `notlar-2025-2026-bahar.html` | Yeni oluşturulur |
| `styles.css` | `.grade-f` sınıfı eklenir |
| `home.html`, `ders-programi.html`, `sinav-takvimi.html` | Menüye 1 satır eklenir |
| `notlar-2022-2023-guz.html`, `notlar-2022-2023-bahar.html`, `notlar-2023-2024-guz.html`, `notlar-2023-2024-bahar.html`, `notlar-2024-2025-guz.html`, `notlar-2024-2025-bahar.html`, `notlar-2025-2026-guz.html` | Menüye 1 satır eklenir |
| `index.html` | Dokunulmaz (menü içermiyor) |
| `dokümantasyon.txt` | Kayıt eklenir (yoksa oluşturulur) |

## Architecture

Tek katmanlı statik site. Sayfa yapısı `notlar-2025-2026-guz.html` ile birebir aynı:

```
nav.navbar
├── div.nav-brand > img.nav-logo (SSP.png)
├── div.hamburger[onclick="toggleMenu()"] > 3x span
└── ul.nav-menu#navMenu
    ├── li > a[home.html] "Ana Sayfa"
    ├── li.dropdown > a.dropbtn "Not Bilgisi" + div.dropdown-content (8 dönem bağlantısı)
    └── li > a[index.html] "Çıkış"

div.content-container
├── div.page-header > h1 "Not Bilgisi" + h2 "2025-2026 Bahar Dönemi"
└── div.grades-table-container > table.grades-table (thead + 7 satırlık tbody)

script[src="script.js"]
```

`semester-summary` / `summary-card` bölümü eklenmez — referans sayfada da yok.

## Components and Interfaces

### 1. Yeni sayfa: `notlar-2025-2026-bahar.html`

- `<html lang="tr">`, `<meta charset="UTF-8">`, viewport meta
- `<title>Not Bilgisi - 2025-2026 Bahar Dönemi</title>`
- `<link rel="stylesheet" href="styles.css">`, `</body>` öncesinde `<script src="script.js"></script>`
- Yukarıdaki DOM ağacı, aşağıdaki not tablosu verisiyle

### 2. `styles.css` — `.grade-f` sınıfı

`.grade-c` tanımından sonra, `/* Dönem Özeti */` yorumundan önce eklenir. Mevcut sınıfların yapısını izler (yalnızca `background` + `color`):

```css
.grade-f {
    background: #f8d7da;
    color: #721c24;
}
```

Kırmızı tonu seçildi; `.grade-a` (yeşil), `.grade-b` (mavi), `.grade-c` (sarı) ile aynı açık zemin / koyu yazı mantığında ve başarısızlık için sezgisel.

### 3. Dönem menüsü

`div.dropdown-content` içine ilk satır olarak eklenir:

```html
<a href="notlar-2025-2026-bahar.html">2025-2026 BAHAR DÖNEMİ</a>
```

Güncelleme sonrası tüm dosyalarda liste sırası (8 bağlantı):

1. 2025-2026 BAHAR DÖNEMİ → `notlar-2025-2026-bahar.html`
2. 2025-2026 GÜZ DÖNEMİ → `notlar-2025-2026-guz.html`
3. 2024-2025 BAHAR DÖNEMİ → `notlar-2024-2025-bahar.html`
4. 2024-2025 GÜZ DÖNEMİ → `notlar-2024-2025-guz.html`
5. 2023-2024 BAHAR DÖNEMİ → `notlar-2023-2024-bahar.html`
6. 2023-2024 GÜZ DÖNEMİ → `notlar-2023-2024-guz.html`
7. 2022-2023 BAHAR DÖNEMİ → `notlar-2022-2023-bahar.html`
8. 2022-2023 GÜZ DÖNEMİ → `notlar-2022-2023-guz.html`

### 4. `dokümantasyon.txt`

Kök dizinde tutulur. Dosya sonuna Türkçe kayıt eklenir; tarih + değişen dosya adı + kısa açıklama. Önceki kayıtlar korunur.

## Data Models

Not tablosu verisi (uygulama aşamasında birebir bu değerler yazılacak). Ortalama = (Quiz + Ödev + Vize + Final) / 4.

| # | Ders Adı | Quiz | Ödev | Vize | Final | Ortalama | Harf | Renk sınıfı |
|---|---|---|---|---|---|---|---|---|
| 1 | Enerji Sistemleri | 42 | 55 | 38 | 45 | 45.0 | FF | `grade-f` |
| 2 | Robotik ve Otomasyon | 70 | 85 | 68 | 72 | 73.75 | BB | `grade-b` |
| 3 | Isıtma, Havalandırma ve İklimlendirme | 38 | 60 | 35 | 41 | 43.5 | FF | `grade-f` |
| 4 | Bitirme Projesi II | 90 | 95 | 85 | 88 | 89.5 | AA | `grade-a` |
| 5 | Hesaplamalı Akışkanlar Dinamiği | 30 | 50 | 28 | 40 | 37.0 | FF | `grade-f` |
| 6 | Hidrolik ve Pnömatik Sistemler | 60 | 75 | 55 | 62 | 63.0 | CC | `grade-c` |
| 7 | İçten Yanmalı Motorlar | 45 | 58 | 40 | 47 | 47.5 | FF | `grade-f` |

Doğrulama:

- 7 satır; 4 FF (1, 3, 5, 7), 3 geçer (2, 4, 6)
- FF finalleri: 45, 41, 40, 47 → hepsi 40-47 aralığında ve birbirinden farklı
- Geçen derslerin finalleri: 72, 88, 62 → hepsi 50-100 aralığında
- Tüm notlar 0-100 arası tam sayı
- Ortalamalar en az bir ondalık basamakla yazılır (`45.0`, `73.75` gibi), referans sayfa biçimiyle uyumlu

Satır HTML kalıbı:

```html
<tr>
    <td class="course-name">Enerji Sistemleri</td>
    <td>42</td>
    <td>55</td>
    <td>38</td>
    <td>45</td>
    <td class="average">45.0</td>
    <td class="grade-letter grade-f">FF</td>
</tr>
```

## Error Handling

Statik HTML olduğu için çalışma zamanı hata yönetimi yok. Dikkat edilecek noktalar:

- Dosya adı Türkçe karakter içermez (`notlar-2025-2026-bahar.html`) — mevcut adlandırma kuralıyla uyumlu
- Menü güncellemesi 10 dosyanın hepsinde yapılmalı; atlanan dosyada bağlantı görünmez (kırık işlev değil, eksik işlev)
- `styles.css` düzenlenirken mevcut `.grade-a/.grade-b/.grade-c` tanımları değiştirilmez
- Yanlış yazılmış sınıf adı (`grade-f` yerine başka bir şey) sessizce stilsiz görünüme yol açar — sınıf adı kontrol edilmeli

## Testing Strategy

Bu iş statik HTML/CSS içerik üretimi ve link güncellemesi. Girdi/çıktı davranışı olan fonksiyon yok, dolayısıyla property-based test uygulanabilir değil; bu nedenle Correctness Properties bölümü yer almıyor. Doğrulama manuel kontrol listesiyle yapılır:

1. `notlar-2025-2026-bahar.html` tarayıcıda açılıyor, başlıklar `Not Bilgisi` / `2025-2026 Bahar Dönemi` görünüyor
2. Tabloda 7 satır var; 4 satırda FF, 3 satırda geçer notu var
3. Her satırın Ortalama değeri tablodaki dört notun ortalamasına eşit
4. FF hücreleri kırmızı zeminle, diğerleri mevcut renklerle görünüyor
5. Dönem menüsü 8 bağlantı içeriyor ve ilk sırada 2025-2026 BAHAR DÖNEMİ var
6. 10 mevcut dosyanın her birinde yeni bağlantı mevcut ve tıklanınca yeni sayfaya gidiyor
7. Mobil genişlikte hamburger menü açılıp kapanıyor (mevcut `toggleMenu`)
8. Eski dönem sayfalarındaki notlar değişmemiş
9. `dokümantasyon.txt` yeni kaydı içeriyor
