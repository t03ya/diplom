const TOGGLE_ANCHOR = 'TOGGLE_ANCHOR'

let initial = {
    drivers: [{
        tabelNumber:'288272148',
        fio: 'Гордейчук.В.М',
        post: 'Водитель',
        licenseDateTo: '20.05.2020',
        licenseNumber: '546445234AA',
        category: 'B',
        dateOfWork: '10.06.2020',
        order:'1787474',
        address:'ул. Ленина 27',
        phoneNum: '89059994949',
    },
    {
        tabelNumber:'288272148',
        fio: 'Гордейчук.В.М',
        post: 'Водитель',
        licenseDateTo: '20.05.2020',
        licenseNumber: '546445234AA',
        category: 'B',
        dateOfWork: '10.06.2020',
        order:'1787474',
        address:'ул. Ленина 27',
        phoneNum: '89059994949',
    },
    {
        tabelNumber:'288272148',
        fio: 'Гордейчук.В.М',
        post: 'Водитель',
        licenseDateTo: '20.05.2020',
        licenseNumber: '546445234AA',
        category: 'B',
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

