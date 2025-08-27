type Props = {
  inputType: string;
  inputName: string;
  placeholder: string;
  ariaLabel: string;
  required: boolean;
  value: string;
  onChange: (data: string) => void;
};

export default function ContactInput({
  inputType,
  inputName,
  placeholder,
  ariaLabel,
  required,
  value,
  onChange,
}: Props) {
  return (
    <input
      className="w-full bg-inherit border-[2px] focus:outline-none focus:ring-0 border-primary rounded-2xl shadow-custom placeholder:text-gray-50 placeholder:text-[14px] px-3 py-1 text-[14px] font-nunito text-gray-50 font-semibold"
      type={inputType}
      name={inputName}
      aria-label={ariaLabel}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(data) => onChange(data.target.value)}
    />
  );
}
