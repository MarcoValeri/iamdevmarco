const Footer = () => {

    const getDate = new Date();
    const getYear = getDate.getFullYear();
    const getYearStr = getYear.toString();

    return (
        <footer className="p-5">
            <p className="text-md text-center">Made with <span className="text-3xl text-red-600 ">&hearts;</span> in London by Marco Valeri - &copy; {getYearStr} - All rights reserved</p>
        </footer>
    )
}

export default Footer;