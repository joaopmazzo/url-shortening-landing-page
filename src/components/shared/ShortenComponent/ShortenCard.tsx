import { ButtonForm } from "../Buttons";
import { ShortenCardProps } from "./ShortenComponent";

const ShortenCard = ({ baseUrl, shortenUrl }: ShortenCardProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center bg-white w-full font-medium text-base md:text-xl py-3 md:py-4 px-4 md:px-7 rounded-md gap-2 md:gap-0">
      <span className="text-neutral-very-dark-blue">{baseUrl}</span>

      <hr className="md:hidden" />

      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <span className="text-primary-cyan">{shortenUrl}</span>
        <ButtonForm text="Copy" link="#" />
      </div>
    </div>
  );
};

export default ShortenCard;
