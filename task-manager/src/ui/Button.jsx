export default function Button({ type, onClick, children }) {
  const base =
    "rounded-md px-3.5 py-2.5 text-sm font-semibold hover:opacity-80";

  const styles = {
    primary: base + " bg-blue-500",
    secondary: base + " bg-red-500",
  };

  return (
    <button type={type} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
