export default function Header() {
    return (
        <header>
            <div className="container-menu">
            <div className="nav-menu">
                <div className="close-nav-menu">
                    <span className="close-icon"></span>
                </div>
                <ul class="menu">
                    <li className="menu-item"><a href="#">home</a></li>
                    <li className="menu-item"><a href="#">about me</a></li>
                    <li className="menu-item"><a href="#">my work</a></li>
                </ul>
            </div>

            <div className="open-nav-menu">
                <span></span>
            </div>

            <div className="menu-overlay">
            </div>
            </div>
        </header>
    )
}