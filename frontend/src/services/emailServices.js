import axios from "axios";

const baseUrl = "http://localhost:3001/api/send-email";

const sendEmail = async (formData) => {
  const response = await axios.post(baseUrl, formData);
  return response.data;
};

export default { sendEmail };
