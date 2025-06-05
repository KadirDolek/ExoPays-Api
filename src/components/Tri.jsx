import './Tri.css'

export default function Tri({ regionFiltre, setRegionFiltre }) {
    
    const handleRegionClick = (region) => {
        setRegionFiltre(region === regionFiltre ? "" : region);
    };

    return (
        <>
        <div id='tri'>
            <p className="nav-item dropdown">
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
                                handleRegionClick("Africa");
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
                                handleRegionClick("Americas");
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
                                handleRegionClick("Asia");
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
                                handleRegionClick("Europe");
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
                                handleRegionClick("Oceania");
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
            </p>
        </div>
        </>
    )
}