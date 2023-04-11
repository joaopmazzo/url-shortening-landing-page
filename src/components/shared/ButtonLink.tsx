interface ButtonProps {
  text: string;
  link?: string;
}

export const ButtonLinkHeader = ({ text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      className="py-2 px-6 bg-primary-cyan hover:bg-primary-cyan-hover rounded-3xl text-white font-Poppins font-bold text-sm"
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

export const ButtonForm = ({ text }: ButtonProps) => {
  return (
    <button
      type="button"
      className="py-4 px-10 bg-primary-cyan hover:bg-primary-cyan-hover rounded-xl text-white font-Poppins font-bold text-xl"
    >
      {text}
    </button>
  );
};
