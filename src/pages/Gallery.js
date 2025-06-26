import GalleryBanner from "../components/gallery/GalleryBanner";
import GalleryBody from "../components/gallery/GalleryBody";
import '../styles/gallery.css';

const Gallery = () => {
    return (
        <div>
            <GalleryBanner />
            <GalleryBody />
            {/* Additional content for the Projects page can be added here */}
        </div>
    );
}

export default Gallery;