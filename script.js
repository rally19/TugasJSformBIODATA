let dataSiswa = [];

function tambahSiswa() {
    const jumlahSiswa = document.querySelector('input[name="JumlahSiswa"]').value;
    const divSiswa = document.getElementById("divSiswa");

    divSiswa.innerHTML = "";

    if (jumlahSiswa <= 0 || isNaN(jumlahSiswa)) {
        alert("Masukkan jumlah siswa yang valid!");
        return;
    }

    for (let i = 1; i <= jumlahSiswa; i++) {
        const fieldset = document.createElement("fieldset");

        fieldset.innerHTML = `
            <legend><b>Data Siswa ${i}</b></legend>
            <label for="NamaSiswa${i}">Nama: </label>
            <input type="text" name="NamaSiswa${i}" id="NamaSiswa${i}" placeholder="Masukkan nama siswa ${i}..." required>
            <br>
            <label for="TempatLahir${i}">Tempat Lahir: </label>
            <input type="text" name="TempatLahir${i}" id="TempatLahir${i}" placeholder="Masukkan tempat lahir siswa ${i}..." required>
            <br>
            <label for="TanggalLahir${i}">Tanggal Lahir: </label>
            <input type="date" name="TanggalLahir${i}" id="TanggalLahir${i}" required>
            <br>
            <label for="Agama${i}">Agama: </label>
            <select name="Agama${i}" id="Agama${i}" required>
                <option value="Islam">Islam</option>
                <option value="Katolik">Katolik</option>
                <option value="Kristen">Kristen</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
            </select>
            <br>
            <label for="NoHp${i}">No. HP: </label>
            <input type="tel" name="NoHp${i}" id="NoHp${i}" placeholder="Masukkan No. Hp siswa ${i}..." required>
        `;

        divSiswa.appendChild(fieldset);
    }
}

function ProsesData() {
    const divSiswa = document.getElementById("divSiswa");
    const fieldsets = divSiswa.querySelectorAll("fieldset");

    if (fieldsets.length === 0) {
        alert("Tidak ada data siswa untuk diproses!");
        return;
    }

    dataSiswa = [];

    for (let i = 0; i < fieldsets.length; i++) {
        const fieldset = fieldsets[i];
        const namaInput = fieldset.querySelector(`input[name="NamaSiswa${i + 1}"]`);
        const tempatLahirInput = fieldset.querySelector(`input[name="TempatLahir${i + 1}"]`);
        const tanggalLahirInput = fieldset.querySelector(`input[name="TanggalLahir${i + 1}"]`);
        const agamaInput = fieldset.querySelector(`select[name="Agama${i + 1}"]`);
        const noHpInput = fieldset.querySelector(`input[name="NoHp${i + 1}"]`);

        if (!namaInput.value.trim() || !tempatLahirInput.value.trim() || !tanggalLahirInput.value.trim() || !agamaInput.value || !noHpInput.value.trim()) {
            alert(`Data siswa ke-${i + 1} belum lengkap!`);
            return;
        }

        const siswa = {
            nama: namaInput.value,
            tempatLahir: tempatLahirInput.value,
            tanggalLahir: tanggalLahirInput.value,
            agama: agamaInput.value,
            noHp: noHpInput.value
        };

        dataSiswa.push(siswa);
    }

    isiTabel();
    alert("Data siswa berhasil diproses!");
}

function isiTabel() {
    const tabelSiswa = document.getElementById("tabelSiswa");

    while (tabelSiswa.rows.length > 1) {
        tabelSiswa.deleteRow(1);
    }

    dataSiswa.forEach((siswa, index) => {
        const row = tabelSiswa.insertRow();
        const cellNo = row.insertCell(0);
        const cellNama = row.insertCell(1);
        const cellTempatLahir = row.insertCell(2);
        const cellTanggalLahir = row.insertCell(3);
        const cellAgama = row.insertCell(4);
        const cellNoHp = row.insertCell(5);

        cellNo.textContent = index + 1;
        cellNama.textContent = siswa.nama;
        cellTempatLahir.textContent = siswa.tempatLahir;
        cellTanggalLahir.textContent = siswa.tanggalLahir;
        cellAgama.textContent = siswa.agama;
        cellNoHp.textContent = siswa.noHp;
    });
}
