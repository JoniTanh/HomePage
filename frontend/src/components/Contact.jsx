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
      <div className="flex-1 sourceCodePro whiteColorBlackShadow">
        <div className="mx-auto my-20 sm:my-24 px-8 sm:px-20 lg:px-40">
          <div className="text-2xl md:text-5xl text-orange-400 w-full xl:w-1/2 mx-auto">
            Contact.
          </div>
          <div className="flex flex-col items-center w-full xl:w-1/2 mx-auto">
            <div className="w-full pt-8 mb-6">
              Feel free to contact me by phone, email, LinkedIn, or by filling
              out the contact form.
              <div className="flex items-center my-6">
                <div>
                  <div>E-mail: {SECRETS.EMAIL}</div>
                  <div className="text-justify">
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
                </div>
                <div className="ml-4 w-12 h-12">
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
            <div className="w-full md:mt-0">
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
