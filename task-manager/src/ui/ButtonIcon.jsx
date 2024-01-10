export default function ButtonIcon({ type, icon, className, children }) {
  return (
    <button type={type} className={className}>
      {icon}
      <span class="sr-only">{children}</span>
    </button>
  );
}
