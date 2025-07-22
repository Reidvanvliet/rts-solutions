import GalleryBanner from "../components/gallery/GalleryBanner";
import GalleryBody from "../components/gallery/GalleryBody";
import '../styles/gallery.css';

const Gallery = () => {
    return (
        <div>
            <GalleryBanner />
            <GalleryBody />
        </div>
    );
}

export default Gallery;