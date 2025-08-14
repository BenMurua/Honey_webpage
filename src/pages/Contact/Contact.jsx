import { useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import image_profile from "../../assets/Asier.jpg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ContactCard
        image={image_profile}
        email={"prueba@gmail.com"}
        phone={"+34 123 456 789"}
        address={"Calle Falsa 123, Madrid, España"}
        text={t("Contact.text")}
      ></ContactCard>
    </div>
  );
};

export default Contact;
