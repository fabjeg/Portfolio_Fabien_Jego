import PropTypes from "prop-types";

export function FormInput({
  type = "text",
  name,
  id,
  label,
  register,
  errors,
  className = "input",
  as = "input"
}) {
  const Component = as;
  const hasError = errors?.[name];

  return (
    <div className="input-group">
      <Component
        required
        type={type}
        name={name}
        id={id}
        autoComplete="off"
        className={`${className} ${hasError ? "input-error" : ""}`}
        {...register}
      />
      <label className="user-label" htmlFor={id}>
        {label}
      </label>
      {hasError && (
        <p className="error-message">{hasError.message}</p>
      )}
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string,
  as: PropTypes.string,
};
