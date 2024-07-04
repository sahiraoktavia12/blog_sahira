import * as React from "react";

function Profil() {
  return (
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl mb-[150px]">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-full object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://www.jagoanhosting.com/blog/wp-content/uploads/2023/01/Mikrotik-Cover.png" alt="blog"/>

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Penggunaan Fungsi Serta Perintah Dasar.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                Router adalah Hardware Jaringan yang dapat digunakan untuk menghubungkan beberapa jaringan, fungsi router untuk meneruskan paket data dari suatu jaringan ke jaringan lainnya 
                </p>                
                <div class="mt-4">
                    <a href="https://drive.google.com/file/d/1tusJp6AivlfK7k7oxcZSwKWMmDaVfy-L/view?usp=sharing" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://www.vsolcn.com/wp-content/uploads/2022/04/dhcp.jpg" alt="blog"/>

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Mikrotik Dynamic Host Configuration Protocol.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                DHCP adalah protokol yang digunakan untuk memberikan alamat IP secara dinamis dan otomatis kepada host perangkat lain yang terkoneksi dengan jaringan. 
                </p>                
                    <div class="mt-4">
                    <a href="https://drive.google.com/file/d/1Sjmv91TobO4YXfanblWHdvRephE-horA/view?usp=drive_link" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-full object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://www.tembolok.id/wp-content/uploads/2022/01/belajar-mikrotik-gratis.jpg" alt="blog"/>

                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Capaian Pembelajaran Mikrotik Static Routing.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                Routing adalah suatu proses penerusan paket data dari suatu jaringan menuju jaringan lainnya. Pengiriman paket pada jaringan dapat diteruskan ke jaringan lainnya melalui mekanisme routing. 
                </p>                
                <div class="mt-4">
                    <a href="https://drive.google.com/file/d/13Zyc_KKsKkHs8521Az5zlxvAu2-UeeK1/view?usp=drive_link" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default Profil;
