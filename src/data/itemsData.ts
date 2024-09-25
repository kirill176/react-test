import { ListItemType } from './../types/index';
import { generateId } from "../utils/generateID";

const itemsData: ListItemType[] = [];

for (let i = 0; i < 7; i++) {
    itemsData.push({id: generateId(), value: `item-${i+1}`})
}

export default itemsData;