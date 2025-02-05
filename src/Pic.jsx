import './styles/pic.css';
import image from './assets/kendrick.webp';
import img from './assets/kendrick.avif';

function Pic() {

    return (
        
        <div className="profile-image">
            <img src={image} alt="Logo" data-speed="1.3" />
            <img src={img} alt="Logo" data-speed="1" />
        </div>
    );
}

export default Pic;
