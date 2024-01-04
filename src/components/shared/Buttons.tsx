interface ButtonProps {
  text: string;
  link?: string;
  onClickFunction?: () => void;
}

export const ButtonLinkHeader = ({ text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      className="py-2 px-6 bg-primary-cyan hover:bg-primary-cyan-hover rounded-3xl text-white font-Poppins font-bold text-sm w-full md:w-fit"
    >
      {text}
    </a>
  );
};

export const ButtonBody = ({ text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      className="py-3 px-10 bg-primary-cyan hover:bg-primary-cyan-hover rounded-3xl text-white font-Poppins font-bold text-xl"
    >
      {text}
    </a>
  );
};

export const ButtonForm = ({ text, onClickFunction }: ButtonProps) => {
  return (
    <button
      type="button"
      className="py-4 px-10 w-full md:w-fit bg-primary-cyan hover:bg-primary-cyan-hover rounded-xl text-white font-Poppins font-bold text-xl"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};
