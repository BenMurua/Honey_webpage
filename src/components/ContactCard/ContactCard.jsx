import "./ContactCard.css";

const ContactCard = ({ image, text, email, phone, address }) => {
  return (
    <div className="contact-card">
      <div className="contact-image-container">
        <img src={image} alt="Contact" className="contact-image" />
      </div>
      <div className="contact-info">
        {<p className="contact-text">{text}</p>}
        {<p className="contact-email">✉️ {email}</p>}
        {<p className="contact-phone">📞 {phone}</p>}
        {<p className="contact-address">📍 {address}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
