import "./style.css";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function InfoBox() {
  const { t } = useTranslation();

  const informations = useMemo(
    () => [
      { label: t("nom"), value: "Fabien Jégo" },
      { label: t("naissance"), value: "29 octobre 1991" },
      { label: t("ville"), value: "Vannes" },
    ],
    [t]
  );

  const contactDetails = useMemo(
    () => [
      { label: "E-mail", value: "fabien.jego.p@gmail.com" },
      { label: t("Téléphone"), value: "+33 6 95 35 29 16" },
      { label: "Skype", value: "Fabien_Jego" },
    ],
    [t]
  );

  return (
    <div className="container-informations">
      <div className="info-box">
        <table>
          <tbody>
            {informations.map((info, index) => (
              <tr key={index}>
                <td className="info-label">{info.label}</td>
                <td className="info-value">{info.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="info-box">
        <table>
          <tbody>
            {contactDetails.map((detail, index) => (
              <tr key={index}>
                <td className="info-label">{detail.label}</td>
                <td className="info-value">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
