var app = angular.module('campeones', []);
app.controller('controllerCampeones', function($scope) {
    $scope.campeones = [{
            "descripcion": "la Espada de los Oscuros",
            "nombre": "Aatrox",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "4/10"
            },
        },
        {
            "descripcion": "la Kumiho Ancestral",
            "nombre": "Ahri",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "3/10",
                "magia": "8/10",
                "defensa": "4/10"
            },
        },
        {
            "descripcion": "el Pu\u00f1o de la Sombra",
            "nombre": "Akali",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "5/10",
                "magia": "8/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Minotauro",
            "nombre": "Alistar",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "6/10",
                "magia": "5/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "la Momia Triste",
            "nombre": "Amumu",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Criof\u00e9nix",
            "nombre": "Anivia",
            "estadisticas": {
                "dificultad": "10/10",
                "ataque": "1/10",
                "magia": "10/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Hija de la Oscuridad",
            "nombre": "Annie",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Arquera de Hielo",
            "nombre": "Ashe",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "7/10",
                "magia": "2/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Forjador de Estrellas",
            "nombre": "Aurelion Sol",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Emperador de las Arenas",
            "nombre": "Azir",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "6/10",
                "magia": "8/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Guardi\u00e1n Trotamundos",
            "nombre": "Bardo",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "4/10",
                "magia": "5/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Gran G\u00f3lem de Vapor",
            "nombre": "Blitzcrank",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "4/10",
                "magia": "5/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "la Venganza Ardiente",
            "nombre": "Brand",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Coraz\u00f3n del Fr\u00e9ljord",
            "nombre": "Braum",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "3/10",
                "magia": "4/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "la Sheriff de Pilt\u00f3ver",
            "nombre": "Caitlyn",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Sombra de Acero",
            "nombre": "Camille",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Abrazo de la Serpiente",
            "nombre": "Cassiopeia",
            "estadisticas": {
                "dificultad": "10/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Terror del Vac\u00edo",
            "nombre": "Cho'Gath",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "3/10",
                "magia": "7/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Bombardero Osado",
            "nombre": "Corki",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "6/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Mano de Noxus",
            "nombre": "Darius",
            "estadisticas": {
                "dificultad": "2/10",
                "ataque": "9/10",
                "magia": "1/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Desd\u00e9n de la Luna",
            "nombre": "Diana",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "7/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Loco de Zaun",
            "nombre": "Dr. Mundo",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "5/10",
                "magia": "6/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Glorioso Ejecutor",
            "nombre": "Draven",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "9/10",
                "magia": "1/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Joven que Fragment\u00f3 el Tiempo",
            "nombre": "Ekko",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "5/10",
                "magia": "7/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Reina de las Ara\u00f1as",
            "nombre": "Elise",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "6/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Hacedora de Viudas",
            "nombre": "Evelynn",
            "estadisticas": {
                "dificultad": "10/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Explorador Pr\u00f3digo",
            "nombre": "Ezreal",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "7/10",
                "magia": "6/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Mensajero de la Muerte",
            "nombre": "Fiddlesticks",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Gran Duelista",
            "nombre": "Fiora",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "10/10",
                "magia": "2/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Bromista de las Mareas",
            "nombre": "Fizz",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "6/10",
                "magia": "7/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Tristeza del Guardi\u00e1n",
            "nombre": "Galio",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "3/10",
                "magia": "6/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Azote de los Mares",
            "nombre": "Gangplank",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "7/10",
                "magia": "4/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Poder de Demacia",
            "nombre": "Garen",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "7/10",
                "magia": "1/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Eslab\u00f3n Perdido",
            "nombre": "Gnar",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "6/10",
                "magia": "5/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Revoltoso",
            "nombre": "Gragas",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "4/10",
                "magia": "6/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Forajido",
            "nombre": "Graves",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Sombra de la Guerra",
            "nombre": "Hecarim",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "4/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Venerable Inventor",
            "nombre": "Heimerdinger",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Sacerdotisa del Kraken",
            "nombre": "Illaoi",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Voluntad de las Hojas",
            "nombre": "Irelia",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "7/10",
                "magia": "5/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el \u00c1rbol Padre",
            "nombre": "Ivern",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "3/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Furia de la Tormenta",
            "nombre": "Janna",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "3/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Ejemplo de Demacia",
            "nombre": "Jarvan IV",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "6/10",
                "magia": "3/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "el Maestro de Armas",
            "nombre": "Jax",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "7/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Defensor del Ma\u00f1ana",
            "nombre": "Jayce",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Virtuoso",
            "nombre": "Jhin",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "10/10",
                "magia": "6/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Bala Perdida",
            "nombre": "Jinx",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "9/10",
                "magia": "4/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Esp\u00edritu de la Venganza",
            "nombre": "Kalista",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "8/10",
                "magia": "4/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Iluminada",
            "nombre": "Karma",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "1/10",
                "magia": "8/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Canto de la Muerte",
            "nombre": "Karthus",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Caminante del Vac\u00edo",
            "nombre": "Kassadin",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "3/10",
                "magia": "8/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Daga Siniestra",
            "nombre": "Katarina",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "4/10",
                "magia": "9/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Justiciera",
            "nombre": "Kayle",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "6/10",
                "magia": "7/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Coraz\u00f3n de la Tempestad",
            "nombre": "Kennen",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "6/10",
                "magia": "7/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Saqueador del Vac\u00edo",
            "nombre": "Kha'Zix",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "9/10",
                "magia": "3/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "los Cazadores Eternos",
            "nombre": "Kindred",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Jinete Cascarrabias",
            "nombre": "Kled",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Boca del Abismo",
            "nombre": "Kog'Maw",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "5/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Maquiav\u00e9lica",
            "nombre": "LeBlanc",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "1/10",
                "magia": "10/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Monje Ciego",
            "nombre": "Lee Sin",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Radiante Amanecer",
            "nombre": "Leona",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "4/10",
                "magia": "3/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "la Bruja de Hielo",
            "nombre": "Lissandra",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Purificador",
            "nombre": "Lucian",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Hada Hechicera",
            "nombre": "Lulu",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Dama Luminosa",
            "nombre": "Lux",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Espada Wuju",
            "nombre": "Maestro Yi",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "10/10",
                "magia": "2/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Fragmento del Monolito",
            "nombre": "Malphite",
            "estadisticas": {
                "dificultad": "2/10",
                "ataque": "5/10",
                "magia": "7/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "el Profeta del Vac\u00edo",
            "nombre": "Malzahar",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Treant Retorcido",
            "nombre": "Maokai",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "3/10",
                "magia": "6/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "la Cazarrecompensas",
            "nombre": "Miss Fortune",
            "estadisticas": {
                "dificultad": "1/10",
                "ataque": "8/10",
                "magia": "5/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Se\u00f1or de la Muerte",
            "nombre": "Mordekaiser",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el \u00c1ngel Ca\u00eddo",
            "nombre": "Morgana",
            "estadisticas": {
                "dificultad": "1/10",
                "ataque": "1/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Invocadora de Mareas",
            "nombre": "Nami",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Curador de las Arenas",
            "nombre": "Nasus",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "7/10",
                "magia": "6/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Tit\u00e1n de las Profundidades",
            "nombre": "Nautilus",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "4/10",
                "magia": "6/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Cazadora Salvaje",
            "nombre": "Nidalee",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "5/10",
                "magia": "7/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Pesadilla Eterna",
            "nombre": "Nocturne",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "9/10",
                "magia": "2/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Domador de Yetis",
            "nombre": "Nunu",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Berserker",
            "nombre": "Olaf",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "9/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Doncella Mec\u00e1nica",
            "nombre": "Orianna",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "4/10",
                "magia": "9/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Artesano de la Guerra",
            "nombre": "Pantheon",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "9/10",
                "magia": "3/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Guardiana del Martillo",
            "nombre": "Poppy",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "6/10",
                "magia": "2/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "las Alas de Demacia",
            "nombre": "Quinn",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "9/10",
                "magia": "2/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Armadurillo",
            "nombre": "Rammus",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "4/10",
                "magia": "5/10",
                "defensa": "10/10"
            }
        },
        {
            "descripcion": "la Excavadora del Vac\u00edo",
            "nombre": "Rek'Sai",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Carnicero de las Arenas",
            "nombre": "Renekton",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Orgullo Acechante",
            "nombre": "Rengar",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "7/10",
                "magia": "2/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "la Desterrada",
            "nombre": "Riven",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "8/10",
                "magia": "1/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Amenaza Mec\u00e1nica",
            "nombre": "Rumble",
            "estadisticas": {
                "dificultad": "10/10",
                "ataque": "3/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Mago R\u00fanico",
            "nombre": "Ryze",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Ira del Invierno",
            "nombre": "Sejuani",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "5/10",
                "magia": "6/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Buf\u00f3n Siniestro",
            "nombre": "Shaco",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "8/10",
                "magia": "6/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Ojo del Crep\u00fasculo",
            "nombre": "Shen",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "3/10",
                "magia": "3/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "la Hija del Drag\u00f3n",
            "nombre": "Shyvana",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Qu\u00edmico Loco",
            "nombre": "Singed",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "4/10",
                "magia": "7/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "el Coloso no Muerto",
            "nombre": "Sion",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "5/10",
                "magia": "3/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "la Se\u00f1ora de la Batalla",
            "nombre": "Sivir",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "9/10",
                "magia": "1/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Vanguardia de Cristal",
            "nombre": "Skarner",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "7/10",
                "magia": "5/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Virtuosa de las Cuerdas",
            "nombre": "Sona",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "5/10",
                "magia": "8/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Hija de las Estrellas",
            "nombre": "Soraka",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "2/10",
                "magia": "7/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Estratega Maestro",
            "nombre": "Swain",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Soberana Oscura",
            "nombre": "Syndra",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Rey del R\u00edo",
            "nombre": "Tahm Kench",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "3/10",
                "magia": "6/10",
                "defensa": "9/10"
            }
        },
        {
            "descripcion": "la Tejedora de Piedra",
            "nombre": "Taliyah",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "1/10",
                "magia": "8/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "la Sombra de la Navaja",
            "nombre": "Talon",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "9/10",
                "magia": "1/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Escudo de Valoran",
            "nombre": "Taric",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "4/10",
                "magia": "5/10",
                "defensa": "8/10"
            }
        },
        {
            "descripcion": "el Explorador Veloz",
            "nombre": "Teemo",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "5/10",
                "magia": "7/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Carcelero Implacable",
            "nombre": "Thresh",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "5/10",
                "magia": "6/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "la Artillera Yordle",
            "nombre": "Tristana",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "9/10",
                "magia": "5/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Rey de los Troles",
            "nombre": "Trundle",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "7/10",
                "magia": "2/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Rey B\u00e1rbaro",
            "nombre": "Tryndamere",
            "estadisticas": {
                "dificultad": "5/10",
                "ataque": "10/10",
                "magia": "2/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Maestro de las Cartas",
            "nombre": "Twisted Fate",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "6/10",
                "magia": "6/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Rata Mutante",
            "nombre": "Twitch",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "9/10",
                "magia": "3/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Cambiapieles",
            "nombre": "Udyr",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "8/10",
                "magia": "4/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Orgullo del Verdugo",
            "nombre": "Urgot",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "la Flecha del Castigo",
            "nombre": "Varus",
            "estadisticas": {
                "dificultad": "2/10",
                "ataque": "7/10",
                "magia": "4/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "la Cazadora Nocturna",
            "nombre": "Vayne",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "10/10",
                "magia": "1/10",
                "defensa": "1/10"
            }
        },
        {
            "descripcion": "el Peque\u00f1o Maestro del Mal",
            "nombre": "Veigar",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Ojo del Vac\u00edo",
            "nombre": "Vel'Koz",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "la Vigilante de Pilt\u00f3ver",
            "nombre": "Vi",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Heraldo Mec\u00e1nico",
            "nombre": "Viktor",
            "estadisticas": {
                "dificultad": "9/10",
                "ataque": "2/10",
                "magia": "10/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Segador Carmes\u00ed",
            "nombre": "Vladimir",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Rugir del Trueno",
            "nombre": "Volibear",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "7/10",
                "magia": "4/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Cazador Sanguinario",
            "nombre": "Warwick",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "7/10",
                "magia": "4/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Rey de los Monos",
            "nombre": "Wukong",
            "estadisticas": {
                "dificultad": "3/10",
                "ataque": "8/10",
                "magia": "2/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Mago Ascendente",
            "nombre": "Xerath",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "1/10",
                "magia": "10/10",
                "defensa": "3/10"
            }
        },
        {
            "descripcion": "el Senescal de Demacia",
            "nombre": "Xin Zhao",
            "estadisticas": {
                "dificultad": "2/10",
                "ataque": "8/10",
                "magia": "3/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Imperdonable",
            "nombre": "Yasuo",
            "estadisticas": {
                "dificultad": "10/10",
                "ataque": "8/10",
                "magia": "4/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "Pastor de Almas",
            "nombre": "Yorick",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "6/10",
                "magia": "4/10",
                "defensa": "6/10"
            }
        },
        {
            "descripcion": "el Arma Secreta",
            "nombre": "Zac",
            "estadisticas": {
                "dificultad": "8/10",
                "ataque": "3/10",
                "magia": "7/10",
                "defensa": "7/10"
            }
        },
        {
            "descripcion": "el Maestro de las Sombras",
            "nombre": "Zed",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "9/10",
                "magia": "1/10",
                "defensa": "2/10"
            }
        },
        {
            "descripcion": "el Experto en Hexplosivos",
            "nombre": "Ziggs",
            "estadisticas": {
                "dificultad": "4/10",
                "ataque": "2/10",
                "magia": "9/10",
                "defensa": "4/10"
            }
        },
        {
            "descripcion": "el Guardi\u00e1n del Tiempo",
            "nombre": "Zilean",
            "estadisticas": {
                "dificultad": "6/10",
                "ataque": "2/10",
                "magia": "8/10",
                "defensa": "5/10"
            }
        },
        {
            "descripcion": "el Despertar de las Espinas",
            "nombre": "Zyra",
            "estadisticas": {
                "dificultad": "7/10",
                "ataque": "4/10",
                "magia": "8/10",
                "defensa": "3/10"
            }
        }
    ]

    $scope.busqueda = "";


    $scope.campeones.forEach(function(element) {
        element.foto = "img/" + element.nombre.replace(" ", "").replace(".", "").replace("'", "") + ".png";
    }, this);

    $scope.filtrar = function() {
        var index = 0;
        var actual = 1;
        $scope.filas = [
            []
        ];
        var busqueda = $scope.busqueda.trim();
        $scope.campeones.forEach(function(element) {
            added = false
            if (busqueda) {
                if (element.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                    $scope.filas[index].push(element);
                    added = true
                }
            } else {
                $scope.filas[index].push(element);
                added = true
            }
            if (added) {
                if (actual == 12) {
                    index += 1
                    actual = 1;
                    $scope.filas.push([]);
                } else {
                    actual += 1
                }
            }
        }, this);
    }
    $scope.filtrar();


    $scope.limpiarBusqueda = function() {
        $scope.busqueda = "";
        $scope.filtrar();
    }

    $scope.abrirCampeon = function(campeon) {
        alert("Informacion del campeon " + campeon + " no disponible. (No implementado)");
    }
});