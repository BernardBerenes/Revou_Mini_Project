function validate() {
    var teks_error = document.getElementsByClassName('text-error')
    var berat = document.getElementById('berat')
    var usia = document.getElementById('usia')
    var tinggi = document.getElementById('tinggi')
    var flag_gender = 1;
    var flag_berat = 1;
    var flag_usia = 1;
    var flag_tinggi = 1;
    var jenis_kelamin = ""

    if(document.getElementById('pria').checked){
        jenis_kelamin = "Pria";
        teks_error[0].innerHTML = ""
    } else if(document.getElementById('wanita').checked){
        jenis_kelamin = "Wanita";
        teks_error[0].innerHTML = ""
    } else{
        teks_error[0].innerHTML = "Jenis kelamin harus diisi!!"
        event.preventDefault();
        flag_gender = 0;
    }

    if(berat.value == "" || berat.value == null){
        teks_error[1].innerHTML = "Berat harus diisi!!"
        event.preventDefault();
        flag_berat = 0;
    } else if(berat.value > 200 || berat.value <= 0){
        teks_error[1].innerHTML = "Berat badan harus berada di bawah 200 atau di atas 0!!"
        event.preventDefault();
        flag_berat = 0;
    } else{
        teks_error[1].innerHTML = ""
    }

    if(usia.value == "" || usia.value == null){
        teks_error[2].innerHTML = "Usia harus diisi!!"
        event.preventDefault();
        flag_usia = 0;
    } else if(usia.value > 100){
        teks_error[2].innerHTML = "Usia harus berada di bawah 100"
        event.preventDefault();
        flag_usia = 0;
    } else if(usia.value <= 18){
        teks_error[2].innerHTML = "Penggunaan hanya dilakukan oleh orang dewasa (sesuai dengan aturan deskripsi)!!"
        event.preventDefault();
        flag_usia = 0;
    } else{
        teks_error[2].innerHTML = ""
    }

    if(tinggi.value == "" || tinggi.value == null){
        teks_error[3].innerHTML = "Tinggi harus diisi!!"
        event.preventDefault();
        flag_tinggi = 0;
    } else if(tinggi.value < 50 || tinggi.value > 200){
        teks_error[3].innerHTML = "Tinggi badan harus berada di bawah 200 atau di atas 50!!"
        event.preventDefault();
        flag_tinggi = 0;
    }
    else{
        teks_error[3].innerHTML = ""
    }

    if(flag_gender == 0 || flag_berat == 0 || flag_usia == 0 || flag_tinggi == 0){
        return false;
    }

    var BMI = berat.value / (tinggi.value / 100 * tinggi.value / 100);
    BMI = BMI.toFixed(3);
    if(BMI < 18.5){
        deskripsi_satu = document.getElementById('deskripsi-satu');
        deskripsi_satu.innerHTML = "Berat Badan Kurang";
        BMI_desc = document.getElementById('BMI');
        BMI_desc.innerHTML = BMI;
        gender = document.getElementById('gender');
        gender.innerHTML = jenis_kelamin;
        deskripsi_dua = document.getElementById('deskripsi-dua');
        deskripsi_dua.innerHTML = "Anda memiliki berat badan kurang"
    } else if(BMI >= 18.5 && BMI <= 24.9){
        deskripsi_satu = document.getElementById('deskripsi-satu');
        deskripsi_satu.innerHTML = "Berat Badan Normal";
        BMI_desc = document.getElementById('BMI');
        BMI_desc.innerHTML = BMI;
        gender = document.getElementById('gender');
        gender.innerHTML = jenis_kelamin;
        deskripsi_dua = document.getElementById('deskripsi-dua');
        deskripsi_dua.innerHTML = "Anda memiliki berat badan normal"
    } else if(BMI >= 25.0 && BMI <= 29.9){
        deskripsi_satu = document.getElementById('deskripsi-satu');
        deskripsi_satu.innerHTML = "Berat Badan Lebih";
        BMI_desc = document.getElementById('BMI');
        BMI_desc.innerHTML = BMI;
        gender = document.getElementById('gender');
        gender.innerHTML = jenis_kelamin;
        deskripsi_dua = document.getElementById('deskripsi-dua');
        deskripsi_dua.innerHTML = "Anda memiliki berat badan berlebih";

        header_obesitas = document.getElementById('header-obesitas');
        header_obesitas.innerHTML = "Hasil BMI diantara 25 dan 29.9"

        paragraf_obesitas = document.getElementById('paragraf-obesitas');
        paragraf_obesitas.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengukur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."

        paragraf_tambahan = document.getElementById('paragraf-tambahan');
        paragraf_tambahan.innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda."
    } else{
        deskripsi_satu = document.getElementById('deskripsi-satu');
        deskripsi_satu.innerHTML = "Berat Badan obesitas";
        BMI_desc = document.getElementById('BMI');
        BMI_desc.innerHTML = BMI;
        gender = document.getElementById('gender');
        gender.innerHTML = jenis_kelamin;
        deskripsi_dua = document.getElementById('deskripsi-dua');
        deskripsi_dua.innerHTML = "Anda memiliki berat badan obesitas"

        header_obesitas = document.getElementById('header-obesitas');
        header_obesitas.innerHTML = "Hasil BMI berada di atas 30"

        paragraf_obesitas = document.getElementById('paragraf-obesitas');
        paragraf_obesitas.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengukur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    
        paragraf_tambahan = document.getElementById('paragraf-tambahan');
        paragraf_tambahan.innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda."
    }
}