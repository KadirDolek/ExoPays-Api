import './Tri.css'


export default function Tri(){



    return(

        <>
            <p className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Filter By Region
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <a className="dropdown-item" href="#">
                        Africa
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        America
                    </a>
                    </li>
                    <li>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Asia
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Europe
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Oceania
                    </a>
                    </li>
                </ul>
            </p>

        </>
    )
}