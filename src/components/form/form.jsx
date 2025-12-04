import { useForm } from "react-hook-form";
import "./style.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ConfirmationModal } from "../modalForm/modalForm";
import { ButtonSend } from "../buttons/button-send";
import { useTranslation } from "react-i18next";
import { FormInput } from "./FormInput";

export function Form() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          entreprise: data.entreprise,
          sujet: data.sujet,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setMessage(t('setMessage'));
        setIsModalOpen(true);
        reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);

        let errorMessage = t('setMessage2');

        if (error.status === 412) {
          errorMessage = t('errorEmailJS412');
        } else if (error.status === 400) {
          errorMessage = t('errorEmailJS400');
        }

        setMessage(errorMessage);
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
             {t('errorMessage')}
            </p>
          )}

          <div className="form-group">
            <FormInput
              name="from_name"
              id="from_name"
              label={t("nom")}
              register={register("from_name", { required: t('errorMessageName') })}
              errors={errors}
            />
            <FormInput
              type="email"
              name="from_email"
              id="from_email"
              label="E-mail"
              register={register("from_email", {
                required: t('errorMessageEmail'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('errorMessageEmailInvalid'),
                },
              })}
              errors={errors}
            />
          </div>

          <div className="form-group">
            <FormInput
              name="entreprise"
              id="entreprise"
              label={t('Entreprise')}
              register={register("entreprise", {
                required: t('errorMessagecompagny'),
              })}
              errors={errors}
            />
            <FormInput
              name="sujet"
              id="sujet"
              label={t('sujet')}
              register={register("sujet", { required: t('errorMessagesubject')})}
              errors={errors}
            />
          </div>

          <FormInput
            as="textarea"
            name="message"
            id="message"
            label="Message"
            className="textarea-form"
            register={register("message", { required: t('errorMessageMessage') })}
            errors={errors}
          />
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
