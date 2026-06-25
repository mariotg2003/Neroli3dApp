import type { MouseEvent } from "react";
import "./components_css/contact_card.css";
import GmailImage from "../assets/gmail_logo.webp";
import InstaImage from "../assets/instagram_logo.webp";
import TikTokImage from "../assets/tiktok_logo.webp";

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

    const isMailLink = link.startsWith("mailto:");

    const handleMailClick = async (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const email = link.replace(/^mailto:/i, "");
        window.location.assign(link);

        try {
            await navigator.clipboard.writeText(email);
            alert(
                "No se abrió tu cliente de correo? El correo se ha copiado al portapapeles: " +
                    email
            );
        } catch {
            alert(
                "Si tu cliente de correo no se abrió, usa este correo: " + email
            );
        }
    };

    return (
        <div className="contact-card">
            <a
                href={link}
                onClick={isMailLink ? handleMailClick : undefined}
                {...(!isMailLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                <img className="card-image" src={imageSrc} alt={titulo} />
                <h3 className="card-title">{titulo}</h3>
            </a>
        </div>
    );
}

export default ContactCard;