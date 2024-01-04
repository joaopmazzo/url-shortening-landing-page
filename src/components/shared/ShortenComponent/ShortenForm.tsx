import { Dispatch, SetStateAction } from "react";
import { ButtonForm } from "~/components/shared/Buttons";
import { ShortenCardProps } from "./ShortenComponent";

interface ShortenFormProps {
  setShortenedUrls: Dispatch<SetStateAction<ShortenCardProps[]>>;
}

const ShortenForm = ({ setShortenedUrls }: ShortenFormProps) => {
  const setBaseAndShortenUrl = () => {
    setShortenedUrls((prevItems) => [
      ...prevItems,
      {
        baseUrl: "https://www.frontendmentor.io",
        shortenUrl: "https://rel.ink/k4lKyk",
      },
    ]);
  };

  return (
    <form className="flex items-center flex-col md:flex-row gap-6">
      <input
        type="text"
        name="url-to-short"
        id="url-to-short"
        placeholder="Shorten a link here..."
        className="px-8 py-4 rounded-xl flex-1 w-full md:w-fit"
      />
      <ButtonForm text="Shorten It!" onClickFunction={setBaseAndShortenUrl} />
    </form>
  );
};

export default ShortenForm;
