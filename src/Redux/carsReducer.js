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
        price: '100 000 руб.'
    },
    {
        regNumber:'А 060 СТ 86',
        vin: 'SVE22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Accord',
        maintenanceDate: '10.03.2021',
        insuranceDate: '06.11.2021',
        category: 'B',
        bornDate: '2020',
        engineModel:'5D',
        bodyNumber:'6665CD12',
        power: '320 л.с',
        color: 'Белый',
        engineVolume: '2.5',
        manufacturer: 'Honda',
        passNumber: '6712 224509',
        passDate: '10.10.2000',
        issuedBy: 'УМВД России по Нижневартовскому району',
        owner: 'Гордейчук В.С',
        price: '940 000 руб.'
    },
    {
        regNumber:'А 110 АР 72',
        vin: 'LЕA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Solaris',
        maintenanceDate: '01.01.2021',
        insuranceDate: '10.04.2021',
        category: 'B',
        bornDate: '2021',
        engineModel:'4QI',
        bodyNumber:'1245XL12',
        power: '120 л.с',
        color: 'Серебристый',
        engineVolume: '2.0',
        manufacturer: 'Hyindai',
        passNumber: '6710 234987',
        passDate: '21.11.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Лаптев С.С',
        price: '1 000 000 руб.'
    },
    {
        regNumber:'А 311 КР 75',
        vin: 'GND11F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Rio',
        maintenanceDate: '10.10.2021',
        insuranceDate: '03.05.2021',
        category: 'B',
        bornDate: '2021',
        engineModel:'4TP',
        bodyNumber:'1231DI12',
        power: '130 л.с',
        color: ' Черный',
        engineVolume: '2.0',
        manufacturer: 'Kia',
        passNumber: '6742 234999',
        passDate: '10.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Кондратьев С.С',
        price: '1 110 000 руб.'
    },
    {
        regNumber:'В 010 АР 197',
        vin: 'LЕA22F2B162004111',
        autoType: 'Легковой',
        autoModel: 'Camry',
        maintenanceDate: '10.10.2021',
        insuranceDate: '01.10.2021',
        category: 'B',
        bornDate: '2012',
        engineModel:'4FSE',
        bodyNumber:'1245XL12',
        power: '350 л.с',
        color: ' Черный',
        engineVolume: '3.5',
        manufacturer: 'Toyta',
        passNumber: '6719 234909',
        passDate: '20.10.1998',
        issuedBy: 'УМВД России по Тюменской обл.',
        owner: 'Горолевич С.С',
        price: '900 000 руб.'
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

