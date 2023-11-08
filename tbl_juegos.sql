-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2023 a las 19:53:37
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_xbox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_juegos`
--

CREATE TABLE `tbl_juegos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `precio` varchar(50) NOT NULL,
  `clasificacion` varchar(50) NOT NULL,
  `desarrolladores` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_juegos`
--

INSERT INTO `tbl_juegos` (`id`, `nombre`, `descripcion`, `genero`, `fecha`, `precio`, `clasificacion`, `desarrolladores`) VALUES
(1, 'Minecraft', 'Juego para todas las edades', 'Mundo Abierto', 'Noviembre 2011', '$450', '+8', 'Mojang'),
(2, 'Valorant', 'Juego por clases', 'Disparos', 'Junio 2020', '$100', '+15', 'Riot Games'),
(3, 'Cyberpunk 2077', 'Juego realista', 'Mundo Abierto FPS', 'Diciembre 2020', '$1400', '+18', 'CD Projekt'),
(4, 'Assasin\'s Creed', 'Juego ambientado en 1200 D.C', 'Parkour', 'Julio 2008', '$360', '+16', 'Ubisoft'),
(7, 'Bloodborne', 'El mejor souls', 'Souls', 'Agosto 2015', '$450', '+16', 'FromSoftware');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_juegos`
--
ALTER TABLE `tbl_juegos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
