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

export const edit_inventory = (inventory, index) => {
	return {
		type: 'EDIT_INVENTORY',
		payload: {
            inventory,
			index
        }
	};
};

export const clear_inventory = () => {
	return {
		type: 'EMPTY_INVENTORY',
	};
};