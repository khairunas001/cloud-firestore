const {Firestore} = require("@google-cloud/firestore");  
const db = new Firestore();

async function store_data(){
    // Membuat Collection root-level
    const doctorsCollections = db.collection('dokter');
    console.log("Collections 'dokter' berhasil dibuat.");

    // Membuat dokumen: Dokter Eros
    const erosDoc = await doctorsCollections.doc("Dokter Eros");
    console.log("Dokumen atas nama Dokter Eros berhasil dibuat.");

    // Menambahkan data pribadi Dokter Eros
    const profileEros = {
        nama : "dr.Eros",
        keahlian: "Dokter Kulit",
        almamater: "Universitas Gadjah Mada",
    }
    await erosDoc.set(profileEros);
    console.log("Data berhasil ditambahkan ke dokumen Eros");

    // Membuat subcollection: Konsultasi
    const erosSubcollections = erosDoc.collection("Konsultasi");
    console.log("Subcollection Konsultasi berhasil dibuat.");

    // Menambahkan data ke 
    const historyConsultation = {
        nama_pasien : {
            depam : "Straik",
            belakang : "El Klemer", 
        },
        waktu_konsultasi : Date.now().toString()
    }
    await erosSubcollections.doc("Straik").set(historyConsultation);
    console.log("Data berhasil ditambahkan.");
}

store_data().catch(console.error)

