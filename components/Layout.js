import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="max-w-sm  mx-auto sm:max-w-md pb-0 landscape:mx-auto flex flex-col justify-between min-h-screen bg-gray-50">
			<div className="mb-2 px-1 md:px-6 pt-6">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
