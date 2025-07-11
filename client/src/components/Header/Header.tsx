interface HeaderProps {
    title: string;
    subTitle: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header className="text-center p-10">
            <h1 className="text-5xl mb-5">{props.title}</h1>
            <h2 className="text-3xl">{props.subTitle}</h2>
        </header>
    )
}

export default Header;