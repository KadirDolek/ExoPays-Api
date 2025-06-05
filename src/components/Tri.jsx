import './Tri.css'

export default function Tri({ regionFiltre, setRegionFiltre }) {
    
    const handleClick = (region) => {
        setRegionFiltre(region === regionFiltre ? "" : region);
    };

    return (
        <>
        <div id='tri'>
            <span className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {regionFiltre || "Filter By Region"}
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick("Africa");
                            }}
                        >
                            Africa
                        </a>
                    </li>
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick("Americas");
                            }}
                        >
                            America
                        </a>
                    </li>
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick("Asia");
                            }}
                        >
                            Asia
                        </a>
                    </li>
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick("Europe");
                            }}
                        >
                            Europe
                        </a>
                    </li>
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick("Oceania");
                            }}
                        >
                            Oceania
                        </a>
                    </li>
                    <li>
                        <a 
                            className="dropdown-item" 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setRegionFiltre("");
                            }}
                        >
                            All Regions
                        </a>
                    </li>
                </ul>
            </span>
        </div>
        </>
    )
}