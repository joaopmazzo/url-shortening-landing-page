import { LinkFooter } from "@components/shared/Link";

interface FooterLinksProps {
    itemTitle: string;
    subitems: string[];
}

export const FooterLinks = ({itemTitle, subitems}: FooterLinksProps) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="font-bold text-base">{itemTitle}</div>
            <div className="font-medium text-neutral-grayish-violet text-sm flex flex-col gap-3">
                {subitems.map((subitem: string, index: number) => (
                    <LinkFooter
                        link="#"
                        text={subitem}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}