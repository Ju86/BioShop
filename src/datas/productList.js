import banane from '../assets/banane.jpg'
import citron from '../assets/citron.jpg'
import oignons from '../assets/oignons.jpg'
import pdt from '../assets/pdt.jpg'
import poireaux from '../assets/poireaux.jpg'
import tomate from '../assets/tomate.png'


export const products = [
	{
		name: 'Banane',
		category: 'Fruit',
		id: '1',
		cover: banane,
		price: 1.49,
		unit: '(la pièce)',
		details: 'Ces bananes de taille moyenne sont déjà conditionnées en main de 5 bananes, elles sont donc vendues à la pièce. Leur maturité et couleur peut varier en fonction des origines et de la saison. Conservez vos bananes à température ambiante car elles ont une nature frileuse. Le froid les fait non seulement noircir mais aussi perdre leurs qualités gustatives.'
	},
	{
		name: 'Citron',
		category: 'Fruit',
		id: '2',
		cover: citron,
		price: 0.73,
		unit: '(la pièce)',
		details : 'Charnu et juteux, son écorce est d\'un jaune éclatant et légèrement lustré. Son jus vif sera parfait utilisé dans votre cuisine salée ou sucrée. Le citron est traité après la récolte.' 

	},
	{
		name: 'Oignons',
		category: 'Légume',
		id: '3',
		cover: oignons,
		price: 0.43,
		unit: '(la pièce)',
		details: 'Variété au goût plus prononcé et piquant que l\'oignon blanc. Il est parfait pour les longues cuissons : ragoûts, bœuf bourguignon, pot-au-feu...' 

	},
	{
		name: 'Pomme de Terre',
		category: 'Légume',
		id: '4',
		cover: pdt,
		price: 2.93,
		unit: '(le kg)',
		details: 'Polyvalentes, ces pommes de terres conviennent à tout type de préparation: plats au four, purées, potages... Cultivées localement, elles sont récoltées à maturité pour garantir leur fraîcheur et leur saveur. Nous vous conseillons de les cuire à la vapeur ou à l\'eau bouillante salée pendant environ 20 minutes. Vous pouvez ensuite les écraser pour en faire une purée onctueuse ou les couper en rondelles pour les faire gratiner au four. ' 
	},
	{
		name: 'Poireaux',
		category: 'Légume',
		id: '5',
		cover: poireaux, 
		price: 1.38,
		unit: '(500g)',
		details: 'Légume tendre et fondant, à consommer en potage, en tarte ou tiède avec de la vinaigrette. Bien qu’on l’ait surnommé «l’asperge du pauvre», le poireau mérite d’être mis à l’honneur pour ses propres qualités tant gustatives que nutritionnelles. Riche en vitamines et en minéraux, peu calorique et gorgé de fibres, le poireau est non seulement un champion de la diététique, mais en plus, il s\'accommode à toutes les sauces... 500g de poireaux équivalent généralement à 2 ou 3 poireaux mais en pleine saison, 1 seul poireau peut parfois suffire !'

	},
	{
		name: 'Tomate',
		category: 'Fruit',
		id: '6',
		cover: tomate,
		price: 8.99,
		unit: '(le kg)',
		details: 'Variété cultivée par nos producteurs partenaires en Rhône-Alpes et en Bretagne. Elle est issue d\'une exploitation certifiée Haute Valeur Environnementale et est très appréciée car elle est pulpeuse et parfumée.' 

	}
]

