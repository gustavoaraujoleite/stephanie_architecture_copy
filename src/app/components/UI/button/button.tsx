"use client";

type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  style?: string;
};
export default function Button({ text, onClick, disabled, style }: Props) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-button-hover cursor-pointer"
      } bg-primary self-center w-full rounded shadow-custom text-black font-nunito font-medium  transition-all duration-250 ease-in-out ${style}`}
      aria-label="Enviar formulário"
      disabled={disabled}
    >
      {text}
    </button>
  );
}
