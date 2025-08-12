import { useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import image_profile from "../../assets/Asier.jpg";

const Contact = () => {
  return (
    <div>
      <ContactCard image={image_profile}></ContactCard>
    </div>
  );
};

export default Contact;
