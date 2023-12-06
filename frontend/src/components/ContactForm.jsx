import FormInput from "./UI/FormInput";

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <FormInput
        type="text"
        id="name"
        name="name"
        value={formData.name}
        handleChange={handleChange}
        labelText="Name"
      />
      <FormInput
        type="email"
        id="email"
        name="email"
        value={formData.email}
        handleChange={handleChange}
        labelText="E-mail"
      />
      <FormInput
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        handleChange={handleChange}
        required={false}
        labelText="Phone Number"
      />
      <FormInput
        id="message"
        name="message"
        value={formData.message}
        handleChange={handleChange}
        textArea
        labelText="Message"
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Send
      </button>
    </form>
  );
}
