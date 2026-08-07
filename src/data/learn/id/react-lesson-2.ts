const content = `
## Handling Events (Menangani Interaksi)

Di React, event ditulis dengan gaya *camelCase* (misal: \`onClick\`, \`onChange\`, \`onSubmit\`) dan dikirimkan berupa fungsi (*event handler*), bukan string.

### Contoh 1: Click & Input Event

\`\`\`jsx
import React, { useState } from 'react';

function EventExample() {
  const [text, setText] = useState('');

  // Function handler untuk perubahan input
  const handleChange = (event) => {
    setText(event.target.value); // Mengambil nilai dari tag <input>
  };

  const handleClick = () => {
    console.log(\`Teks yang diketik: \${text}\`);
  };

  return (
    <div>
    <input 
        type= "text"
  placeholder = "Ketik sesuatu..."
  value = { text }
  onChange = { handleChange }
    />
    <button onClick={ handleClick }> Tampilkan Alert </button>
      < p > Hasil Real - time: { text } </p>
        </div>
  );
}

\`\`\`

---

## Conditional Rendering & List Rendering

### 1. Conditional Rendering(Tampilan Bersyarat)

Kamu bisa menampilkan atau menyembunyikan komponen menggunakan operator logika JavaScript(\`&& \` atau operator ternari\` ? : \`).

\`\`\`jsx
function StatusUser({ isLoggedIn }) {
  return (
    <div>
    { isLoggedIn?<h3>Selamat Datang, User!</ h3 > : <h3>Silakan Login Terlebih Dahulu </h3>
}
</div>
  );
}

\`\`\`

### 2. List Rendering(\`map\`)

Untuk menampilkan array data ke dalam UI, gunakan fungsi\`.map()\`.Setiap elemen array ** wajib memiliki properti \`key ** \` yang unik.

\`\`\`jsx
function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 'Rp 10.000.000' },
    { id: 2, name: 'Mouse', price: 'Rp 150.000' },
    { id: 3, name: 'Keyboard', price: 'Rp 400.000' },
  ];

  return (
    <ul>
    {
      products.map((item) => (
        <li key= { item.id } >
        { item.name } - <strong>{ item.price } </strong>
        </li>
      ))
    }
    </ul>
  );
}

\`\`\`

---

## Lifecycle & \`useEffect\`(Data Fetching)

  \`useEffect\` adalah Hook yang digunakan untuk menangani *side effects* (efek samping), seperti:

* Mengambil data dari API(*fetch* / *axios*)
* Mengubah judul dokumen(\`document.title\`)
* Menjalankan *timer* atau *subscription*

### Anatomi\`useEffect\`

  \`\`\`jsx
import { useEffect } from 'react';

useEffect(() => {
  // Kode efek samping di sini

  return () => {
    // Optional: Cleanup function (misal: membersihkan timer/listener)
  };
}, [dependencyArray]);
\`\`\`

> **Aturan Dependency Array \`[]\`:**
> - **Kosong\`[] \`**: Efek hanya berjalan **sekali** saat komponen pertama kali dimuat(*mount*).
> - **Dengan variabel \`[data] \`**: Efek berjalan saat komponen pertama dimuat **dan** setiap kali nilai \`data\` berubah.
> - **Tanpa array**: Efek berjalan **setiap kali** terjadi *re-render* (hindari ini untuk fetch API agar tidak *infinite loop*).
> 
>

  ---

### Contoh Latihan: Fetch Data dari API

Berikut adalah pola standar mengambil data dari REST API external:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserListFromAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi async untuk fetch data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      } finally {
        setLoading(false); // Matikan status loading setelah selesai
      }
    };

    fetchUsers();
  }, []); // [] memastikan fetch hanya dipanggil 1 kali saat kompenen dipasang

  if (loading) {
    return <p>Sedang memuat data...</p>;
  }

  return (
    <div>
    <h2>Daftar Pengguna dari API </h2>
      <ul>
  {
    users.map((user) => (
      <li key= { user.id } >
      <strong>{ user.name } </strong> ({user.email})
      </li>
    ))
  }
  </ul>
    </div>
  );
}

export default UserListFromAPI;

\`\`\`

---

## Ringkasan Alur Dasar React

  \`\`\`
State / Props Berubah ──► Component Re - render ──► Virtual DOM Membandingkan ──► UI Diperbarui

  \`\`\`
  `;

export default content;
