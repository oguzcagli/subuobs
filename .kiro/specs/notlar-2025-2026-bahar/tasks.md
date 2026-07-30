# Implementation Plan: notlar-2025-2026-bahar

## Overview

Statik HTML/CSS işi. Önce FF notu için stil sınıfı eklenir, sonra referans sayfa (`notlar-2025-2026-guz.html`) uyarlanarak yeni dönem sayfası oluşturulur, ardından 10 mevcut dosyadaki dönem menüsüne yeni bağlantı eklenir ve son olarak dokümantasyon kaydı yazılır. JavaScript değişikliği yok.

## Tasks

- [x] 1. Stil sınıfı ve yeni dönem sayfası
  - [x] 1.1 `styles.css` dosyasına `.grade-f` sınıfını ekle
    - `.grade-c` tanımından sonra, `/* Dönem Özeti */` yorumundan önce yerleştir
    - `background: #f8d7da; color: #721c24;` (mevcut grade sınıflarıyla aynı yapı)
    - Mevcut `.grade-a`, `.grade-b`, `.grade-c` tanımlarına dokunma
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

  - [x] 1.2 `notlar-2025-2026-bahar.html` dosyasını oluştur
    - `notlar-2025-2026-guz.html` yapısını birebir kullan (navbar, hamburger, `nav-menu#navMenu`, `content-container`, `page-header`, `grades-table-container`)
    - Başlık: `Not Bilgisi - 2025-2026 Bahar Dönemi`; `<h1>Not Bilgisi</h1>`, `<h2>2025-2026 Bahar Dönemi</h2>`
    - `styles.css` link'i ve `</body>` öncesi `script.js` script etiketi
    - Tabloya design.md'deki 7 dersi verilen not/ortalama/harf değerleriyle aynı sırayla yaz (4 FF: 1., 3., 5., 7. satırlar)
    - FF hücrelerinde `grade-letter grade-f`, diğerlerinde `grade-a` / `grade-b` / `grade-c`
    - Dönem menüsünü 8 bağlantılı güncel sırayla, ilk sırada `2025-2026 BAHAR DÖNEMİ` olacak şekilde yaz
    - `semester-summary` / `summary-card` bölümü ekleme
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 4.4, 5.1, 5.2, 5.3, 5.5, 5.6, 6.2, 6.5_

- [x] 2. Dönem menüsünü mevcut dosyalarda güncelle
  - [x] 2.1 `home.html`, `ders-programi.html`, `sinav-takvimi.html` dosyalarındaki `dropdown-content` bloğuna yeni bağlantıyı ekle
    - `<a href="notlar-2025-2026-bahar.html">2025-2026 BAHAR DÖNEMİ</a>` satırı listenin ilk öğesi olsun
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 2.2 7 mevcut dönem not sayfasındaki `dropdown-content` bloğuna yeni bağlantıyı ekle
    - Dosyalar: `notlar-2022-2023-guz.html`, `notlar-2022-2023-bahar.html`, `notlar-2023-2024-guz.html`, `notlar-2023-2024-bahar.html`, `notlar-2024-2025-guz.html`, `notlar-2024-2025-bahar.html`, `notlar-2025-2026-guz.html`
    - Sadece menü satırı eklenir; ders adları, notlar, ortalamalar ve harf notları değiştirilmez
    - `index.html` dosyasına dokunulmaz
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.7, 6.1_

- [x] 3. Doğrulama ve dokümantasyon
  - [x]* 3.1 Değişiklikleri dosya içeriği üzerinden doğrula
    - Yeni sayfada 7 ders satırı, 4 adet `FF` ve 3 adet geçer notu bulunduğunu kontrol et
    - Her satırın Ortalama değerinin dört notun aritmetik ortalamasına eşit olduğunu kontrol et
    - 11 dosyanın (yeni sayfa + 10 mevcut dosya) her birinde `notlar-2025-2026-bahar.html` bağlantısının ve 8 dönem bağlantısının bulunduğunu kontrol et
    - `styles.css` içinde `.grade-f` tanımının doğru konumda olduğunu kontrol et
    - _Requirements: 2.2, 2.6, 3.1, 3.2, 5.3, 5.4, 6.1_

  - [x] 3.2 `dokümantasyon.txt` dosyasına Türkçe kayıt ekle
    - Dosya yoksa kök dizinde oluştur
    - Tarih, değişen/eklenen dosya adları ve kısa açıklama yaz
    - Önceki kayıtları koruyarak dosya sonuna ekle
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 4. Checkpoint - Tüm doğrulamaların geçtiğinden emin ol
  - Doğrulama adımları tamam mı, soru çıkarsa kullanıcıya sor.

## Notes

- `*` ile işaretli alt görev opsiyoneldir, atlanabilir.
- Bu iş statik HTML/CSS olduğu için otomatik birim/property test yoktur; doğrulama dosya içeriği kontrolüyle yapılır.
- Not değerleri design.md'deki tabloyla birebir aynı olmalı.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["2.1", "2.2"] },
    { "id": 2, "tasks": ["3.1"] },
    { "id": 3, "tasks": ["3.2"] }
  ]
}
```
