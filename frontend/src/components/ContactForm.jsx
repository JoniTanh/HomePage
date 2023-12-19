import FormInput from "./UI/FormInput";

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto mb-1">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 text-justify">
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            labelText="Name"
          />
        </div>
        <div className="hidden md:block w-full md:w-1/2 mt-5">
          <FormInput required={false} isDisabled={true} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 text-justify">
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            labelText="E-mail"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify">
          <FormInput
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            handleChange={handleChange}
            labelText="Phone Number"
            required={false}
          />
        </div>
      </div>
      <div className="text-justify">
        <FormInput
          id="message"
          name="message"
          value={formData.message}
          handleChange={handleChange}
          textArea
          labelText="Message"
        />
      </div>
      <button
        type="submit"
        className="whiteColorBlackShadow bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Send
      </button>
    </form>
  );
}
