import { useForm } from "react-hook-form";
import "./style.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ConfirmationModal } from "../modalForm/modalForm";
import { ButtonSend } from "../buttons/button-send";

export function FormTest() {
  const {
    register,
    handleSubmit,
    formState: { errors,  },
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
            <div className="input-group">
              <input
                required
                type="text"
                name="from_name"
                id="from_name"
                autoComplete="off"
                className={`input ${errors.from_name ? "input-error" : ""}`}
                {...register("from_name", { required: "Le nom est requis." })}
              />
              <label className="user-label" htmlFor="from_name">Nom</label>
              {errors.from_name && (
                <p className="error-message">{errors.from_name.message}</p>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="email"
                name="from_email"
                id="from_email"
                autoComplete="off"
                className={`input ${errors.from_email ? "input-error" : ""}`}
                {...register("from_email", {
                  required: "L'email est requis.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Adresse email invalide.",
                  },
                })}
              />
              <label className="user-label" htmlFor="from_email">Email</label>
              {errors.from_email && (
                <p className="error-message">{errors.from_email.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <input
                required
                type="text"
                name="entreprise"
                id="entreprise"
                autoComplete="off"
                className={`input ${errors.entreprise ? "input-error" : ""}`}
                {...register("entreprise", {
                  required: "Le nom de l'entreprise est requis.",
                })}
              />
              <label className="user-label" htmlFor="entreprise">Entreprise</label>
              {errors.entreprise && (
                <p className="error-message">{errors.entreprise.message}</p>
              )}
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                name="sujet"
                id="sujet"
                autoComplete="off"
                className={`input ${errors.sujet ? "input-error" : ""}`}
                {...register("sujet", { required: "Le sujet est requis." })}
              />
              <label className="user-label" htmlFor="sujet">Sujet</label>
              {errors.sujet && (
                <p className="error-message">{errors.sujet.message}</p>
              )}
            </div>
          </div>

          <div className="input-group">
            <textarea
              required
              name="message"
              id="message"
              autoComplete="off"
              className={`textarea-form ${errors.message ? "input-error" : ""}`}
              {...register("message", { required: "Le message est requis." })}
            />
            <label className="user-label" htmlFor="message">Message</label>
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <div className="container-button-val">
            <ButtonSend/>
          </div>
        </form>

        {isModalOpen && (
          <ConfirmationModal message={message} onClose={closeModal} />
        )}
      </div>
  );
}
