const TOGGLE_ANCHOR = 'TOGGLE_ANCHOR'

let initial = {
    waybills: [{
        waybillType: '3 Легковые',  
        waybillNumber: '1',  
        checkOutTime: '28.08.2021',  
        timeOutTime: '21.06.2021',  
        auto: 'NIVA Шевроле',  
        driver: 'Поротников Ф.С'  
    },
    {
        waybillType: '5 Грузовые    ',  
        waybillNumber: '2',  
        checkOutTime: '18.06.2021',  
        timeOutTime: '22.06.2021',  
        auto: 'VISTA',  
        driver: 'Голованов С.С'  
    },
    {
        waybillType: '2 Легковые',  
        waybillNumber: '3',  
        checkOutTime: '15.04.2021',  
        timeOutTime: '10.01.2021',  
        auto: 'CAMRY',  
        driver: 'Сульянов А.С'  
    },
],
    anchor: false,
}

const waybillsReducer = (state = initial, action) => {
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

export default waybillsReducer;

export const toggleAnchor = (anchor) => ({
    type: TOGGLE_ANCHOR,
    payload: anchor
})

