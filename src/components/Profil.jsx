const Profil = () => {
  return (
    <div className="border border-blue-600 rounded-md p-5 ">
      <div className="flex flex-col items-center pt-5">
        <p className="text-2xl text-zinc-50 bg-zinc-700 rounded-full pl-5 pr-5">
          Profil
        </p>
        <img
          className="rounded-full w-40 h-40"
          src="/gambar.jpg"
          alt="Foto Profil"
        />
        <div>
          <p>Nama : Agus Rahman Hidayat</p>
          <p>Tempat Lahir : Ciamis</p>
          <p>Tanggal Lahir : 10 Agustus 2002</p>
          <p>Jenis Kelamin : Laki-laki</p>
          <p>Agama : Islam</p>
          <p>
            Alamat : Dusun Ciawitali, Desa Gereba, Kecamatan Cipaku, Kabupaten
            Ciamis, Jawa Barat {`(46253)`}
          </p>
        </div>
      </div>
      <div>
        <p>PENDIDIKAN</p>
        <div>
          <div>
            <p>Universitas Nasional Pasim</p>
            <p>- D3 Manajemen Informatika</p>
          </div>
          <div>
            <p>SMK Negeri 1 Kawali</p>
            <p>Teknik Komputer dan Jaringan</p>
          </div>
          <div>
            <p>MTs PUI Gereba</p>
          </div>
          <div>
            <p>SD Negeri 2 Gereba</p>
          </div>
          <div>
            <p>RA Al-Khoiriyah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
