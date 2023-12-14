export default function FormInput({
  type = "text",
  id,
  name,
  value,
  handleChange,
  required = true,
  labelText,
  textArea = false,
  rows = 8,
}) {
  const inputProps = {
    id,
    name,
    value,
    onChange: handleChange,
    required,
    className:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium  textTuplaShadow"
      >
        {labelText}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {textArea ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
}
