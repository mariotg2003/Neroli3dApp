import "./components_css/contact_card.css";
import GmailImage from "../assets/gmail_logo.png";
import InstaImage from "../assets/instagram_logo.png";
import TikTokImage from "../assets/tiktok_logo.png";

function ContactCard({ titulo, link }: { titulo: string; link: string }) {
    const iconMap: Record<string, string> = {
        instagram: InstaImage,
        tiktok: TikTokImage,
        gmail: GmailImage,
    };

    const nombreLink = titulo.toLowerCase().replace(/\s+/g, "-");
    const imageSrc = iconMap[nombreLink];

    if (!imageSrc) {
        return null;
    }

    return (
        <div className="contact-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img className="card-image" src={imageSrc} alt={titulo} />
                <h3 className="card-title">{titulo}</h3>
            </a> 
        </div>
    );
}

export default ContactCard;