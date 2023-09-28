-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 28 sep. 2023 à 12:46
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bioshop`
--

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `cover` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `details` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `cover`, `category`, `unit`, `details`) VALUES
(1, 'Banane', 1.49, 'https://assets.afcdn.com/story/20230724/2224514_w4205h3153c1cx2103cy1689cxt0cyt0cxb4205cyb3378.jpg', 'Fruit', '(la pièce)', 'Ces bananes de taille moyenne sont déjà conditionnées en main de 5 bananes, elles sont donc vendues à la pièce. Leur maturité et couleur peut varier en fonction des origines et de la saison. Conservez vos bananes à température ambiante car elles ont une nature frileuse. Le froid les fait non seulement noircir mais aussi perdre leurs qualités gustatives.'),
(2, 'Citron', 0.73, 'https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/1160/4ecac57acaebdbd315c8cdff906fe76a.jpg', 'Fruit', '(la pièce)', 'Charnu et juteux, son écorce est d\'un jaune éclatant et légèrement lustré. Son jus vif sera parfait utilisé dans votre cuisine salée ou sucrée. Le citron est traité après la récolte.'),
(3, 'Oignons', 0.43, 'https://www.academiedugout.fr/images/15721/1200-auto/fotolia_55631648_subscription_xl-copy.jpg?poix=50&poiy=50', 'Légume', '(la pièce)', 'Variété au goût plus prononcé et piquant que l\'oignon blanc. Il est parfait pour les longues cuissons : ragoûts, bœuf bourguignon, pot-au-feu...'),
(4, 'Pomme de Terre', 2.93, 'https://www.academiedugout.fr/images/16365/1200-auto/fotolia_55292183_subscription_xl-copy.jpg?poix=50&poiy=50', 'Légume', '(le kg)', 'Polyvalentes, ces pommes de terres conviennent à tout type de préparation: plats au four, purées, potages... Cultivées localement, elles sont récoltées à maturité pour garantir leur fraîcheur et leur saveur. Nous vous conseillons de les cuire à la vapeur ou à l\'eau bouillante salée pendant environ 20 minutes.'),
(5, 'Poireaux', 1.38, 'https://www.academiedugout.fr/images/1558/1200-auto/poireau_000.jpg?poix=50&poiy=50', 'Légume', '(500g)', 'Légume tendre et fondant, à consommer en potage, en tarte ou tiède avec de la vinaigrette. Bien qu’on l’ait surnommé «l’asperge du pauvre», le poireau mérite d’être mis à l’honneur pour ses propres qualités tant gustatives que nutritionnelles. Riche en vitamines et en minéraux, peu calorique et gorgé de fibres, le poireau est non seulement un champion de la diététique.'),
(6, 'Tomate', 8.99, 'https://www.vangeldernederland.nl/static/uploads/pictures/large/115208-tomaten-b.jpg', 'Fruit', '(le kg)', 'Variété cultivée par nos producteurs partenaires en Rhône-Alpes et en Bretagne. Elle est issue d\'une exploitation certifiée Haute Valeur Environnementale et est très appréciée car elle est pulpeuse et parfumée.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
