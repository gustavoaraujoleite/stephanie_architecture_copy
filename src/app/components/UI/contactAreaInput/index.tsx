type Props = {
  inputName: string;
  placeholder: string;
  ariaLabel: string;
  required: boolean;
  value: string;
  onChange: (data: string) => void;
};

export default function ContactAreaInput({
  inputName,
  placeholder,
  ariaLabel,
  required,
  value,
  onChange,
}: Props) {
  return (
    <textarea
      className="w-full h-[120px] bg-inherit border-[2px] font-nunito text-gray-50 focus:outline-none focus:ring-0 border-primary rounded-2xl shadow-custom placeholder:text-gray-50 placeholder:text-[14px] px-3 py-2 text-[14px]"
      name={inputName}
      aria-label={ariaLabel}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(data) => onChange(data.target.value)}
    />
  );
}
