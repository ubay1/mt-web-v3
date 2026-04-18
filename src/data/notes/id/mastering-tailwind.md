# Tailwind CSS v4: Kecepatan Tanpa Batas

Versi terbaru Tailwind membawa perubahan besar dalam cara kita mendesain. Dengan engine baru yang lebih cepat, kita bisa melakukan iterasi desain dalam hitungan detik.

## Fitur Unggulan v4
- **Zero-runtime engine**: Performa build yang jauh lebih cepat.
- **Composable Variants**: Kemudahan dalam membuat varian kustom.
- **CSS-first configuration**: Konfigurasi yang lebih intuitif langsung di CSS.

### Tutorial Utility Kustom
Contoh penggunaan utility baru untuk grid system:
```css
@utility custom-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
```

Dengan pendekatan ini, kode kita tetap bersih dan mudah dibaca (maintainability).
