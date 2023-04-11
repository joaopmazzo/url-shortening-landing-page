import logo from "@assets/logo.svg";
import { ButtonLinkHeader } from "@components/shared/ButtonLink";
import { LinkHeader } from "@components/shared/Link";
import { NavItens } from "@utils/NavLinks";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-12">
      <div className="flex items-center gap-11">
        <img
          src={logo}
          alt="Shortly logo"
        />
        <div className="flex items-center gap-7">
          {NavItens.options.map((option: string, index: number) => (
            <LinkHeader
              link="#"
              text={option}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-9">
        <LinkHeader
          link="#"
          text="Login"
        />
        <ButtonLinkHeader
          link="#"
          text="Sing Up"
        />
      </div>
    </header>
  );
};

export default Header;
