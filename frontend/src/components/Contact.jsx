import { useRef, useState, useEffect } from "react";
import emailService from "../services/emailServices";
import storageService from "../services/storageServices";
import ContactForm from "./ContactForm";
import ResultModal from "./UI/ResultModal";
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
  const [logo, setLogo] = useState([]);

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

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const logosData = await storageService.getLogos();
        const linkedInLogo = logosData.find((logo) =>
          logo.name.toLowerCase().includes("linkedin")
        );

        setLogo(linkedInLogo);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <>
      <div className="flex-1 text-gray-500 sourceCodePro">
        <div className="mx-auto my-20 sm:my-24 px-8 sm:px-20 lg:px-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="w-auto md:w-1/2">
              <div className="text-2xl md:text-5xl text-orange-400">
                Contact.
              </div>
              <div className="pt-8 w-full xl:max-w-3xl mb-6 text-justify">
                I am always ready to hear from you! Whether you have questions,
                suggestions, are interested in collaborating, or have a job
                offer, I'm here to listen. Feel free to reach out by calling,
                sending an email directly to the address below, via LinkedIn, or
                through this contact form. For the form, simply fill in your
                details, and I'll respond as quickly as possible.
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
                  <a href={logo.page} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
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
