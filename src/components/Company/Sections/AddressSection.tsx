import { ICompanyResponseDto } from "../../../interfaces";

type AddressSectionProps = {
    details: ICompanyResponseDto | null;
}

const AddressSection = ({details}: AddressSectionProps) => {
    return (
        <div className="overViewContainer">
            <h3>{details?.company_name} Address</h3>
            <div className="overViewLine print-flex-row">
                <div className="md:max-w-[60%] w-full">
                    <div className="mb-2">{`Country: ${details?.main_country ?? ''}`}</div>
                    <div className="mb-2">{`City: ${details?.main_city ?? ''}`}</div>
                    <div className="mb-2">{`Street name: ${details?.main_street ?? ''}`}</div>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <div className="mb-2">{`Country code: ${details?.main_country_code ?? ''}`} </div>
                    <div className="mb-2">{`Main region: ${details?.main_region ?? ''}`} </div>
                    <div className="mb-2">{`Street number: ${details?.main_street_number ?? ''}`} </div>
                </div>
            </div>
        </div>
    )
};

export default AddressSection