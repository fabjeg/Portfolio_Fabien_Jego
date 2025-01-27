import { useForm } from "react-hook-form";
import "./style.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ConfirmationModal } from "../modalForm/modalForm";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_zlwfo2c",
        "template_jqfm4xp",
        {
          from_name: data.from_name,
          from_email: data.from_email,
          entreprise: data.entreprise,
          sujet: data.sujet,
          message: data.message,
        },
        "8Xw1Qhsh1n-FKPfu5"
      )
      .then((result) => {
        console.log("Email envoyé avec succès :", result);
        setMessage("Votre message a bien été envoyé !");
        setIsModalOpen(true);
        reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setMessage("Une erreur est survenue lors de l'envoi de votre message.");
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section">
      <h6 className="h6-title" id="contact">
        Contact
      </h6>
      <form onSubmit={handleSubmit(sendEmail)} className="form">
        {isModalOpen && (
          <p className="global-error">
            Veuillez remplir correctement tous les champs requis.
          </p>
        )}

        <div className="form-group">
          <div className=" input-group">
            <label className="user-label">Nom</label>
            <input
              id="from_name"
              className={`input-form input${errors.from_name ? "input-error" : ""}`}
              {...register("from_name", { required: "Le nom est requis." })}
             
            />
            {errors.from_name && (
              <p className="error-message">{errors.from_name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="from_email">Email</label>
            <input
              id="from_email"
              className={`input-form ${errors.from_email ? "input-error" : ""}`}
              {...register("from_email", {
                required: "L'email est requis.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse email invalide.",
                },
              })}
              placeholder="Entrez votre email"
            />
            {errors.from_email && (
              <p className="error-message">{errors.from_email.message}</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <div className="form-control">
            <label htmlFor="entreprise">Entreprise</label>
            <input
              id="entreprise"
              className={`input-form ${errors.entreprise ? "input-error" : ""}`}
              {...register("entreprise", {
                required: "Le nom de l'entreprise est requis.",
              })}
              placeholder="Entrez le nom de l'entreprise"
            />
            {errors.entreprise && (
              <p className="error-message">{errors.entreprise.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="sujet">Sujet</label>
            <input
              id="sujet"
              className={`input-form ${errors.sujet ? "input-error" : ""}`}
              {...register("sujet", { required: "Le sujet est requis." })}
              placeholder="Entrez le sujet"
            />
            {errors.sujet && (
              <p className="error-message">{errors.sujet.message}</p>
            )}
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`textarea-form ${errors.message ? "input-error" : ""}`}
            {...register("message", { required: "Le message est requis." })}
            placeholder="Entrez votre message"
          />
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>
        <div className="container-button-val">
          {/* <button type="submit" className="submit-button" disabled={!isValid}>
            Envoyer
          </button> */}
        </div>
      </form>

      {isModalOpen && (
        <ConfirmationModal message={message} onClose={closeModal} />
      )}
    </div>
  );
}
