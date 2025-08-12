const ContactCard = ({ image, text, email, phone, address }) => {
  return (
    <div className="contact-card">
      <img src={image} alt="Contact" className="contact-image" />
      <div className="contact-info">
        <p className="contact-text">{text}</p>
        <p className="contact-email">Email: {email}</p>
        <p className="contact-phone">Phone: {phone}</p>
        <p className="contact-address">Address: {address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
