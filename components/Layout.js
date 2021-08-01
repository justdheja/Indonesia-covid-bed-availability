import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="max-w-sm px-1 md:px-6 pt-6 mx-auto sm:max-w-md pb-0 landscape:mx-auto flex flex-col justify-between h-screen">
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
