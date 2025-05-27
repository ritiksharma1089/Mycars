import React from 'react';


const Caroverview = ({item}) => {
    const carOverviewData = [
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/reg-year.png',
            label: 'Reg. year',
            value: item.titile,
            alt: 'registrationYear',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/fuel.png',
            label: 'Fuel',
            value: item.type,
            alt: 'fuelType',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/odometer.png',
            label: 'KM driven',
            value: item.driven + ' km',
            alt: 'odometerReading',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/transmission.png',
            label: 'Transmission',
            value: item.othertype,
            alt: 'transmissionType',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/engine-capacity.png',
            label: 'Engine capacity',
            value: '1451cc',
            alt: 'engineCapacity',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/ownership.png',
            label: 'Ownership',
            value: item.ownership,
            alt: 'ownershipType',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/make-year.png',
            label: 'Make year',
            value: item.model,
            alt: 'manufacturingYear',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/key.png',
            label: 'Spare key',
            value: item.spare_key,
            alt: 'duplicateKey',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/rto.png',
            label: 'Reg number',
            value: item.Reg_num,
            alt: 'registration',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/insurance.png',
            label: (
                <>
                    Insurance{' '}
                    <img
                        alt="Insurance"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        src="https://assets.cars24.com/production/catalog-web-in/250522152232/_next/static/media/info-icon.ffa5be75.svg"
                        style={{ color: 'transparent', verticalAlign: 'middle' }}
                    />
                </>
            ),
            value: item.Insurance,
            alt: 'insuranceExpiry',
        },
        {
            icon: 'https://media.cars24.com/india/car-catalog/cdp_07022024/insurance_type.png',
            label: 'Insurance type',
            value: '3rd Party',
            alt: 'insuranceType',
        },
    ];
    return (
        <div>
            <div className="container mx-auto">
               

                    <div className='row'>


                    {carOverviewData.map((item, idx) => (
                        <div key={idx} className='col-6 col-sm-4'>
                            <span className="styles_icon__sYtOl">
                                <img
                                    alt={item.alt}
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    src={item.icon}
                                    style={{ color: 'transparent' }}
                                    />
                            </span>
                            <div className="styles_itemBody__IMfct">
                                <p className="sc-braxZu jjIUAi">{item.label}</p>
                                <p className="sc-braxZu kjFjan">{item.value}</p>
                            </div>
                        </div>
                    ))}
                    </div>
               
            </div>
        </div>
    );
};

export default Caroverview;