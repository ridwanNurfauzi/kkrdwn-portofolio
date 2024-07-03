function LandingPage() {
    return (
        <div id="home" className="landingpage-bg">
            <div className="landingpage-c">
                <div className="flex flex-col m-auto text-center p-4">
                    <h1 className="text-2xl font-bold mb-4 mt-10">Selamat Datang di Web Portofolio Saya</h1>
                    <p className="text-gray-800 mb-4">Ini adalah halaman utama pada Web portofolio yang saya buat.</p>
                    <a href="#biodata" className="start-btn">Mulai</a>
                </div>
            </div>
        </div>
    )
}

function Biodata() {
    const skills: string[] = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'jQuery',
        'Bootstrap',
        'Tailwind',
        'MySQL',
        'Node.js',
        'Express.js',
        'Vue.js',
        'React.js',
        'PHP',
        'Laravel',
        'Dart',
        'Flutter'
    ];

    return (
        <div id="biodata" className="biodata-bg">
            <div className="biodata-c">
                <div className="md:grid md:grid-cols-2 mb-2">
                    <div className="flex mb-6">
                        <div className="mx-auto rounded-xl overflow-hidden group bg-white">
                            <img src="/images/kkrdwn_foto.jpg" className="w-64 group-hover:opacity-75 group-hover:scale-110 transition-all" alt="M. Ridwan" />
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="m-auto">
                            <h1 className="title-2">Biodata</h1>
                            <table cellPadding={2}>
                                <tbody>
                                    <tr>
                                        <td>Nama</td>
                                        <td>:</td>
                                        <td>M. Ridwan Nurfauzi H.P</td>
                                    </tr>
                                    <tr>
                                        <td>Tempat Lahir</td>
                                        <td>:</td>
                                        <td>Bandung</td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>:</td>
                                        <td>3 Mei 2006</td>
                                    </tr>
                                    <tr>
                                        <td>Agama</td>
                                        <td>:</td>
                                        <td>Islam</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Kelamin</td>
                                        <td>:</td>
                                        <td>Laki-laki</td>
                                    </tr>
                                    <tr>
                                        <td>Asal Sekolah</td>
                                        <td>:</td>
                                        <td>SMK Assalaam Bandung</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <h1 className="title-2">Tentang Saya</h1>
                    <p className="first-letter:ms-6 text-justify">
                        Saya adalah lulusan SMK Assalaam Bandung jurusan Rekayasa Perangkat Lunak.
                        Saya memiliki pengalaman dalam membuat aplikasi web mulai awal belajar
                        membuat aplikasi sederhana dengan HTML, CSS, JavaScript, hingga menggunakan
                        framework seperti Laravel, Express.js, dan Vue.js.
                    </p>
                </div>

                <div className="mb-2">
                    <h1 className="title-2">Keahlian</h1>

                    <div className="flex flex-wrap justify-center">
                        {
                            skills.map((val, i) => (
                                <div className="text-white bg-slate-600 rounded hover:scale-110 hover:opacity-75 transition-all cursor-pointer px-2.5 py-1 m-1.5" key={i}>
                                    {val}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function Experiences() {
    const organizationalExperiences = [
        {
            time: '2021 - 2024',
            text: 'Ikatan Remaja Masjid Nurul Huda'
        },
        {
            time: '2021 - 2022',
            text: 'Anggota Pengurus OSIS'
        }
    ];
    const workExperiences = [
        {
            time: '2023',
            text: 'Praktik Kerja Lapangan (PKL) di PT Sabio Ekuator Teknologi'
        }
    ];

    return (
        <div id="experiences" className="experiences-bg">
            <div className="experiences-c">
                <h1 className="title-1">Pengalaman</h1>
                <div className="md:grid md:grid-cols-2">
                    <div className="mb-8 mx-4">
                        <h1 className="title-2">Organisasi</h1>
                        <div className="flex flex-col">
                            {
                                organizationalExperiences.map((val, i) => (
                                    <div className="m-2 p-4 bg-white rounded shadow" key={i}>
                                        <h3 className="text-lg font-semibold mb-2">{val.time}</h3>
                                        <p>{val.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mb-8 mx-4">
                        <h1 className="title-2">Kerja</h1>
                        <div className="flex flex-col">
                            {
                                workExperiences.map((val, i) => (
                                    <div className="m-2 p-4 bg-white rounded shadow" key={i}>
                                        <h3 className="text-lg font-semibold mb-2">{val.time}</h3>
                                        <p>{val.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    const projects = [
        {
            title: 'Keuangan',
            img: '/images/keuangan.jpg',
            link: 'https://github.com/ridwanNurfauzi/keuangan-rev'
        },
        {
            title: 'CraftBazaar',
            img: '/images/craftbazaar.jpg',
            link: 'https://github.com/ridwanNurfauzi/CraftBazaar'
        },
        {
            title: 'QR Generator',
            img: '/images/qr-generator.jpg',
            link: 'https://ridwannurfauzi.github.io/QR-generator/'
        }
    ];

    return (
        <div id="projects" className="projects-bg">
            <div className="projects-c">
                <h1 className="title-1">Proyek Saya</h1>
                <div className="flex flex-wrap justify-center">
                    {
                        projects.map((value, i) => (
                            <div key={i} className="w-64 h-16 bg-gray-100 m-2 rounded shadow hover:bg-gray-200">
                                <a href={value.link} target="_blank">
                                    <div className="w-full h-full grid grid-cols-3 overflow-hidden">
                                        <div className="flex">
                                            <img className="w-14 h-14 m-auto" src={value.img} alt={value.title} />
                                        </div>
                                        <div className="col-span-2 flex">
                                            <p className="font-semibold m-auto">{value.title}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div id="contact" className="contact-bg">
            <div className="contact-c">
                <div className="md:grid md:grid-cols-2">
                    <div className="flex justify-center mb-4">
                        <div>
                            <h3 className="text-lg mb-3 font-semibold">M Ridwan Nurfauzi</h3>
                            Ds. Rancamanyar <br />
                            Kec. Baleendah <br />
                            Kab. Bandung <br />
                            Prov. Jawa Barat <br />
                            Indonesia <br />
                        </div>
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="flex flex-col">
                            <a href="mailto:mrnhp123@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 rounded py-1 m-2 transition-all">
                                <i className="bi bi-envelope me-2 text-lg"></i>
                                mrnhp123@gmail.com
                            </a>
                            <a href="https://wa.me/+6281222502458" className="bg-green-500 hover:bg-green-600 text-white px-2.5 rounded py-1 m-2 transition-all">
                                <i className="bi bi-whatsapp me-2 text-lg"></i>
                                +62 812-2250-2458
                            </a>
                            <a href="https://www.instagram.com/kkrdwn_/" className="bg-red-500 hover:bg-red-600 text-white px-2.5 rounded py-1 m-2 transition-all">
                                <i className="bi bi-instagram me-2 text-lg"></i>
                                @kkrdwn_
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <LandingPage />
            <div className="w-full lg:max-w-screen-2xl mx-auto">
                <Biodata />
                <Experiences />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}
