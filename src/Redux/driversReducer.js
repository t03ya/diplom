const TOGGLE_ANCHOR = 'TOGGLE_ANCHOR'

let initial = {
    drivers: [{
        tabelNumber:'288272148',
        fio: 'Гордейчук.В.М',
        post: 'Водитель',
        licenseDateTo: '20.05.2020',
        licenseNumber: '65294848745AA',
        category: 'B',
        dateOfWork: '10.06.2020',
        order:'1787474',
        address:'ул. Ленина 27',
        phoneNum: '89059994949',
    },
    {
        tabelNumber:'288272148',
        fio: 'Сульянов.А.В',
        post: 'Водитель',
        licenseDateTo: '10.06.2021',
        licenseNumber: '59324128334AA',
        category: 'B,C,E',
        dateOfWork: '10.06.2020',
        order:'1787474',
        address:'ул. Ленина 27',
        phoneNum: '89059994949',
    },
    {
        tabelNumber:'288272148',
        fio: 'Адамов.М.И',
        post: 'Водитель',
        licenseDateTo: '20.05.2020',
        licenseNumber: '89994848736AA',
        category: 'B,С',
        dateOfWork: '10.06.2020',
        order:'1787474',
        address:'ул. Ленина 27',
        phoneNum: '89059994949',
    },
],
    anchor: false,
}

const driversReducer = (state = initial, action) => {
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

export default driversReducer;

export const toggleAnchor = (anchor) => ({
    type: TOGGLE_ANCHOR,
    payload: anchor
})

