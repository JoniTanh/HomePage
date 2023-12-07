import { useRef, useState } from "react";
import emailService from "../services/emailServices";
import ContactForm from "./ContactForm";
import ResultModal from "./UI/ResultModal";
import linkedInLogo from "../assets/logos/linkedin.png";
import SECRETS from "../secrets";

const initialFormData = () => ({
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
});

export default function Contact() {
  const dialog = useRef();
  const [modalText, setModalText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData());
  const [showPhone, setShowPhone] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailService.sendEmail(formData);
      setModalText("Email sent successfully.");
      setIsSuccess(true);
      dialog.current.open();
      setFormData(initialFormData());
    } catch (error) {
      setModalText("Error sending email.");
      setIsSuccess(false);
      dialog.current.open();
    }
  };

  const togglePhoneDisplay = () => {
    setShowPhone(!showPhone);
  };

  return (
    <>
      <div className="flex-1 text-gray-500 sourceCodePro">
        <div className="mx-auto my-36 px-24 md:px-20 lg:px-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="w-auto md:w-1/2">
              <div className="text-2xl md:text-5xl">Contact.</div>
              <div className="pt-8 max-w-3xl mb-6">
                I am always ready to hear from you! If you have any questions,
                suggestions, would like to discuss potential collaboration, or
                have a job offer, please feel free to reach out. You can contact
                me by calling, sending an email directly to the address below,
                via LinkedIn, or by using this contact form. Just fill in the
                necessary information below, and I will get back to you as soon
                as possible.
              </div>
              <div className="mb-6">
                <div>E-mail: {SECRETS.EMAIL}</div>
                <div>
                  Phone:{" "}
                  {showPhone ? (
                    SECRETS.PHONE
                  ) : (
                    <button
                      onClick={togglePhoneDisplay}
                      className="text-blue-500"
                    >
                      Show Number
                    </button>
                  )}
                </div>
                <div className="mt-8 w-12 h-12">
                  <a
                    href="https://www.linkedin.com/in/joni-tanhuansuu-411011141/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedInLogo}
                      alt="LinkedIn Logo"
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto md:w-1/2">
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <ResultModal ref={dialog} text={modalText} success={isSuccess} />
        </div>
      </div>
    </>
  );
}
