import plateSpaghettiMeatSauce from '../src//images/plate__spaghetti-meat-sauce.png';
import { Item } from '../src/domain/domain';
import plateBaconEggs from '../src/images/plate__bacon-eggs.png';
import plateChickenSalad from '../src/images/plate__chicken-salad.png';
import plateFishSticksFries from '../src/images/plate__fish-sticks-fries.png';
import plateFrenchFries from '../src/images/plate__french-fries.png';
import plateRavioli from '../src/images/plate__ravioli.png';
import plateSalmonVegetables from '../src/images/plate__salmon-vegetables.png';
import plateTortellini from '../src/images/plate__tortellini.png';

export const MenuData: Array<Item> = [
  { name: 'French Fries with Ketchup', unitPrice: 2.23, picture: plateFrenchFries },
  { name: 'Salmon and Vegetables', unitPrice: 5.12, picture: plateSalmonVegetables },
  {
    name: 'Spaghetti with Meat Sauce',
    unitPrice: 7.82,
    picture: plateSpaghettiMeatSauce,
  },
  { name: 'Chicken Salad with Parmesan', unitPrice: 6.98, picture: plateChickenSalad },
  { name: 'Fish Sticks and Fries', unitPrice: 6.34, picture: plateFishSticksFries },
  { name: 'Ravioli', unitPrice: 6.45, picture: plateRavioli },
  { name: 'Tortellini', unitPrice: 6.05, picture: plateTortellini },
  { name: 'Bacon, Eggs, and Toast', unitPrice: 5.99, picture: plateBaconEggs },
];
