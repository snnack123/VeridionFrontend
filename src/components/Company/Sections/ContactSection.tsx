import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { ICompanyResponseDto } from "../../../interfaces";

type ContactSectionProps = {
  details: ICompanyResponseDto | null;
}

const ContactSection = ({ details }: ContactSectionProps) => {
  return (
    <div className="overViewContainer truncate space-y-6 flex items-center flex-col w-full md:w-auto">
      {details?.primary_phone?.length && 
        <a href={`tel:${details?.primary_phone}`} className="flex">
          <div>
            <PhoneIcon className="w-6 h-6" />
          </div>
          <div className="">{details?.primary_phone}</div>
        </a>
      }
      {details?.primary_email?.length && 
        <a href={`mailto:${details?.primary_email}`} className="flex">
          <div>
            <AtSymbolIcon className="w-6 h-6" />
          </div>
          <div className="underline">{details?.primary_email}</div>
        </a>
      }
    </div>
  );
};

export default ContactSection;
