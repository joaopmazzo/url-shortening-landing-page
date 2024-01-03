interface LinkProps {
  text: string;
  link: string;
}

export const LinkHeader = ({ text, link }: LinkProps) => {
  return (
    <a
      href={link}
      className="text-white md:text-neutral-grayish-violet md:hover:text-neutral-very-dark-blue font-Poppins font-bold text-lg md:text-sm"
    >
      {text}
    </a>
  );
};

export const LinkFooter = ({ text, link }: LinkProps) => {
  return (
    <a
      href={link}
      className="text-neutral-grayish-violet hover:text-primary-cyan font-Poppins font-medium text-sm"
    >
      {text}
    </a>
  );
};
