import Footer from './Footer';
import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Kamar Covid</title>
				<meta name="description" content="Informasi ketersediaan kamar rumah sakit untuk pasien covid-19 " />
				<meta name="keywords" content="covid corona Indonesa covid-19 rumah sakit isolasi ventilator bed" />
			</Head>
			<div className="max-w-sm  mx-auto sm:max-w-md pb-0 landscape:mx-auto flex flex-col justify-between min-h-screen bg-gray-50">
				<div className="mb-2 px-1 md:px-6 pt-6">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
