interface LinkProps {
  text: string;
  link: string;
}

export const LinkHeader = ({ text, link }: LinkProps) => {
  return (
    <a
      href={link}
      className="text-neutral-grayish-violet hover:text-neutral-very-dark-blue font-Poppins font-bold text-sm"
    >
      {text}
    </a>
  );
};
