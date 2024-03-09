import React, { Dispatch, SetStateAction, useState } from "react";
import { ButtonForm } from "~/components/shared/Buttons";
import { ShortenCardProps } from "./ShortenComponent";

interface ShortenFormProps {
  setShortenedUrls: Dispatch<SetStateAction<ShortenCardProps[]>>;
}

const ShortenForm = ({ setShortenedUrls }: ShortenFormProps) => {
  const [urlToShort, setUrlToShort] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrlToShort(value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch("https://tinyurl.com/api-create.php?url=" + urlToShort)
      .then(resp => resp.text())
      .then(shortenUrl => setBaseAndShortenUrl(urlToShort, shortenUrl))
      .catch((error) => console.error("falha", error));
  };

  const setBaseAndShortenUrl = (baseUrl: string, shortenUrl: string) => {
    setShortenedUrls((prevItems) => [
      ...prevItems,
      {
        baseUrl: baseUrl,
        shortenUrl: shortenUrl,
      },
    ]);
  };

  return (
    <form className="flex items-center flex-col md:flex-row gap-6">
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
        className="px-8 py-4 rounded-xl flex-1 w-full md:w-fit"
        onChange={handleChangeInput}
      />
      <ButtonForm text="Shorten It!" onClickFunction={handleSubmit} />
    </form>
  );
};

export default ShortenForm;
