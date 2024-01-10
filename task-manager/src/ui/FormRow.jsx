import Error from "./Error";

export default function FormRow({ label, error, children }) {
  return (
    <div class="space-y-2 lg:space-y-3">
      {label && <label for={children.props.id}>{label}</label>}
      {children}
      {error && <Error message={error} />}
    </div>
  );
}
