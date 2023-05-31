import UBCLogo from "../../images/ubcLogo.png";

const initialOject = {
    name : "UBC",
    description : "One of the best universities in British Columbia and Canada",
    price : 32,
    imageURL : UBCLogo
};

const initialState = {
    inventoryState: {
        0: initialOject,
    }
};

const ChangeInventory = (state = initialState, action) => {
	switch(action.type) {
        case 'ADD_INVENTORY':
            const indexADD = action.payload.index;
            const newInventoryADD = action.payload.inventory;
            const currentStateADD = {
                ...state
            };
            currentStateADD["inventoryState"][indexADD] = newInventoryADD;
            return currentStateADD;
        case 'DEL_INVENTORY':
                const indexDEL = action.payload.index;
                const currentStateDEL = {
                    ...state
                };
                delete currentStateDEL["inventoryState"][indexDEL];
                return currentStateDEL;
        case 'EMPTY_INVENTORY':
                return initialState;
		default:
			return state;
	}
};

export default ChangeInventory;