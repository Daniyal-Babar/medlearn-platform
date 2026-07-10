export default function Field({
  label,
  type = "text",
  name,
  placeholder,
  autoComplete,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      {/* <span className="text-sm font-medium text-slate-700">{label}</span> */}
      <span className="text-sm font-medium text-[var(--field-text-slate-700)]">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
      />
    </label>
  );
}
