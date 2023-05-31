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
const emptyState = {
    inventoryState: {}
}

const ChangeInventory = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_INVENTORY':
            const currentInventoryADD = {
                ...state["inventoryState"]
            };
            let index = Object.keys(currentInventoryADD).length;
            while (index in currentInventoryADD) {
                index++;
            }
            const indexADD = index;
            const newInventoryADD = action.payload.inventory;
            currentInventoryADD[indexADD] = newInventoryADD;
            return {
                ...state,
                inventoryState: currentInventoryADD
            };
        case 'DEL_INVENTORY':
                const indexDEL = action.payload.index;
                const currentInventoryDEL = {
                    ...state["inventoryState"]
                };
                currentInventoryDEL[indexDEL] = {};
                delete currentInventoryDEL[indexDEL];
                return {
                    ...state,
                    inventoryState: currentInventoryDEL
                };
        case 'EMPTY_INVENTORY':
                return emptyState;
		default:
			return state;
	}
};

export default ChangeInventory;