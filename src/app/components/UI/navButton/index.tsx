type Props = {
  title: string;
  onClick: () => void;
};

export default function NavButton({ title, onClick }: Props) {
  return (
    <button
      className="text-gray-50 font-nunito font-semibold py-1 text-[15px] px-1 border-b-[1px] border-transparent hover:border-b-gray-300 hover:text-gray-200 transition-all duration-200 ease-linear"
      onClick={onClick}
      type="button"
      aria-label="Acessar sessão"
    >
      {title}
    </button>
  );
}
