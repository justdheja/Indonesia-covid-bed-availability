const Layout = ({ children }) => {
  return (
		<div className="max-w-sm p-6 mx-auto mb-20 sm:max-w-md sm:py-6 md:mb-16 landscape:mx-auto">
        {children}
		</div>
	);
}

export default Layout;