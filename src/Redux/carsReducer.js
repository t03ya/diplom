const TOGGLE_ANCHOR = 'TOGGLE_ANCHOR'

let initial = {
    cars: [{
        regNumber:'В 010 АР 197',
        vin: 'LTA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Vista',
        maintenanceDate: '20.06.2021',
        insuranceDate: '20.10.2021',
        category: 'B',
        bornDate: '2006',
        engineModel:'3FSE',
        bodyNumber:'1245XL12',
        power: '255 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Голованов С.С',
        price: '40 000 руб.'
    },
    {
        regNumber:'В 060  ОР 86',
        vin: 'SVE22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Accord',
        maintenanceDate: '20.06.2021',
        insuranceDate: '20.10.2021',
        category: 'B',
        bornDate: '2012',
        engineModel:'5D',
        bodyNumber:'1245XL12',
        power: '255 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Гордейчук В.С',
        price: '940 000 руб.'
    },
    {
        regNumber:'В 010 АР 197',
        vin: 'LЕA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Vista',
        maintenanceDate: '20.06.2021',
        insuranceDate: '20.10.2021',
        category: 'B',
        bornDate: '2006',
        engineModel:'3FSE',
        bodyNumber:'1245XL12',
        power: '255 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Голованов С.С',
        price: '40 000 руб.'
    },
    {
        regNumber:'В 010 АР 197',
        vin: 'LЕA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Vista',
        maintenanceDate: '20.06.2021',
        insuranceDate: '20.10.2021',
        category: 'B',
        bornDate: '2006',
        engineModel:'3FSE',
        bodyNumber:'1245XL12',
        power: '255 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Голованов С.С',
        price: '40 000 руб.'
    },
    {
        regNumber:'В 010 АР 197',
        vin: 'LЕA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Vista',
        maintenanceDate: '20.06.2021',
        insuranceDate: '20.10.2021',
        category: 'B',
        bornDate: '2006',
        engineModel:'3FSE',
        bodyNumber:'1245XL12',
        power: '255 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Голованов С.С',
        price: '40 000 руб.'
    }
],
    anchor: false,
}

const carsReducer = (state = initial, action) => {
    switch (action.type) {
        case TOGGLE_ANCHOR:
            return {
                ...state,
                anchor: action.payload
            }
        default:
            return state;
    }
};

export default carsReducer;

export const toggleAnchor = (anchor) => ({
    type: TOGGLE_ANCHOR,
    payload: anchor
})

