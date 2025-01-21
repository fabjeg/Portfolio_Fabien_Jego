import './style.css';
import picture from "../../assets/pictures/n-067.jpg"

export function Background() {
    return (
        <div className="background-bg">
            <div className="background-filter circle">
                <div
                    className="background-img"
                    style={{ backgroundImage: `url(${picture})` }}
                >
                </div>
            </div>
        </div>
    );
}
