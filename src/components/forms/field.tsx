import clsx from "clsx";

const base =
  "w-full rounded-2xl border border-pond/15 bg-pearl px-4 py-3.5 text-ink placeholder:text-muted/60 outline-none transition focus:border-pond focus:ring-4 focus:ring-pond/10";

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
} & (
  | ({ as?: "input" } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ as: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({ as: "select"; options: readonly string[] } & React.SelectHTMLAttributes<HTMLSelectElement>)
);

export function Field(props: FieldProps) {
  const { label, name, required, className } = props;
  let control: React.ReactNode;
  if (props.as === "textarea") {
    const { as: _as, label: _l, className: _c, ...rest } = props;
    control = <textarea id={name} rows={4} className={clsx(base, "resize-none")} {...rest} />;
  } else if (props.as === "select") {
    const { as: _as, label: _l, className: _c, options, ...rest } = props;
    control = (
      <select id={name} className={clsx(base, "appearance-none")} defaultValue="" {...rest}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  } else {
    const { as: _as, label: _l, className: _c, ...rest } = props;
    control = <input id={name} className={base} {...rest} />;
  }
  return (
    <label htmlFor={name} className={clsx("block", className)}>
      <span className="mb-2 block text-sm font-bold text-pond">
        {label} {required && <span className="text-sindoor">*</span>}
      </span>
      {control}
    </label>
  );
}
