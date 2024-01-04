import { useEffect, useState } from "react";

import ShortenForm from "./ShortenForm";
import ShortenCard from "./ShortenCard";

export interface ShortenCardProps {
  baseUrl: string;
  shortenUrl: string;
}

const localStorageKey = "shortenedUrls";

const ShortenComponent = () => {
  const [shortenedUrls, setShortenedUrls] = useState<ShortenCardProps[]>(() => {
    const savedItems = localStorage.getItem(localStorageKey);
    if (savedItems !== null && savedItems !== undefined) return JSON.parse(savedItems);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  return (
    <>
      <div className="bg-bg-shorten-desktop bg-cover bg-primary-darkest-violet p-6 md:px-16 md:py-12 rounded-xl w-full mb-6">
        <ShortenForm setShortenedUrls={setShortenedUrls} />
      </div>
      <div className="flex flex-col-reverse gap-4">
        {shortenedUrls?.map((item: ShortenCardProps, index: number) => (
          <ShortenCard
            baseUrl={item.baseUrl}
            shortenUrl={item.shortenUrl}
            key={index}
          />
        ))}
        <ShortenCard
          baseUrl="https://www.frontendmentor.io"
          shortenUrl="https://rel.ink/k4lKyk"
        />
      </div>
    </>
  );
};

export default ShortenComponent;
