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
	console.log(state);
            console.log(action);
    switch(action.type) {
        case 'ADD_INVENTORY':
            const currentInventory = {
                ...state["inventoryState"]
            };
            let index = Object.keys(currentInventory).length;
            while (index in currentInventory) {
                index++;
            }
            const indexADD = index;
            const newInventoryADD = action.payload.inventory;
            currentInventory[indexADD] = newInventoryADD;
            return {
                ...state,
                inventoryState: currentInventory
            };
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