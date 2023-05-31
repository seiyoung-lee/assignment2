export const add_inventory = (inventory) => {
	return {
		type: 'ADD_INVENTORY',
		payload: {
            inventory
        }
	};
};

export const del_inventory = (index) => {
	return {
		type: 'DEL_INVENTORY',
		payload: {
            index,
        }
	};
};

export const clear_inventory = () => {
	return {
		type: 'EMPTY_INVENTORY',
	};
};