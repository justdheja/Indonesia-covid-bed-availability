import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="max-w-sm p-6 mx-auto sm:max-w-md sm:py-6 pb-0 landscape:mx-auto flex flex-col justify-between h-screen">
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
