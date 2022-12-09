import soleilVertexP from "./shaders/Soleil/vertex.glsl"
import soleilFragmentP from "./shaders/Soleil/fragment.glsl"
import soleilVertexA from "./shaders/Soleil/atmosphereVertex.glsl"
import soleilFragmentA from "./shaders/Soleil/atmosphereFragment.glsl"

import mercureVertexP from "./shaders/Mercure/vertex.glsl"
import mercureFragmentP from "./shaders/Mercure/fragment.glsl"
import mercureVertexA from "./shaders/Mercure/atmosphereVertex.glsl"
import mercureFragmentA from "./shaders/Mercure/atmosphereFragment.glsl"

import venusVertexP from "./shaders/Vénus/vertex.glsl"
import venusFragmentP from "./shaders/Vénus/fragment.glsl"
import venusVertexA from "./shaders/Vénus/atmosphereVertex.glsl"
import venusFragmentA from "./shaders/Vénus/atmosphereFragment.glsl"

import EarthVertexP from "./shaders/Terre/vertex.glsl"
import EarthFragmentP from "./shaders/Terre/fragment.glsl"
import EarthVertexA from "./shaders/Terre/atmosphereVertex.glsl"
import EarthFragmentA from "./shaders/Terre/atmosphereFragment.glsl"

class Planete {
  id;
  mesh = {};
  text = {};
  constructor(id, idName, map, MyDescription, atmosphereCompo) {
    this.id = id
    this.name = idName
    this.maping = map
    this.description = MyDescription
    this.atmosphereCompo = atmosphereCompo
  }
}

const SolarSysteme = {
  Soleil: new Planete(
    0,
    "Soleil", {
      base: "./assets/map/Map_sun.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete: soleilVertexP,
        fragmentPlanete: soleilFragmentP,
        vertexAtmos: soleilVertexA,
        fragmentAtmos: soleilFragmentA,
      }
    },
    "Le Soleil est l’étoile du Système solaire. Le Soleil fait partie de la galaxie appelée la Voie lactée et se situe à environ 8 kpc (environ 26 100 a.l.) du centre galactique.",
    {H: 73.46, He: 24.85, O: 0.77, C: 0.29, Fe: 0.16, Ne: 0.12, N: 0.09, Si: 0.07, Mg: 0.05, S: 0.04 }
    ),
  Mercure: new Planete(
    1,
    "Mercure", {
      base: "./assets/map/Map_mercure.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete : mercureVertexP,
        fragmentPlanete : mercureFragmentP,
        vertexAtmos: mercureVertexA,
        fragmentAtmos: mercureFragmentA,
      }
    },
    "Mercure est la planète la plus proche du Soleil et la moins massive du Système solaire.",
    {O: 42, Na: 29, H: 22, He: 6, H20: "5 à 10", Ar: "Traces", Ne: "Traces", CO2: "Traces", N: "Traces", Xe: "Traces", Kr:"Traces" }
  ),
  Venus: new Planete(
    2,
    "Vénus", {
      base: "./assets/map/Map_venus.jpg",
      atmosphere: "./assets/map/Map_venus_atmosphere.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete : venusVertexP,
        fragmentPlanete : venusFragmentP,
        vertexAtmos: venusVertexA,
        fragmentAtmos: venusFragmentA,
      }
    },
    "Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre.",
    {CO2: 96.5, N2: 3.5, SO2: 0.015, Ar: 0.007, H2O: 0.002, CO: 0.0017, He: 0.0012, Ne: 0.0002, HCl: "Traces", HF: "Traces"}
  ),
  Terre: new Planete(3, "La Terre", {
      base: "./assets/map/Map_earth.jpg",
      atmosphere: "./assets/map/Map_earth_clouds.jpg",
      bump: " ./assets/map/Map_earth_bump.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete : EarthVertexP,
        fragmentPlanete : EarthFragmentP,
        vertexAtmos: EarthVertexA,
        fragmentAtmos: EarthFragmentA,
      }
    },
    "La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie.",
    {N2: 78.084, O2: 20.953, Ar: 0.9340, CO2: 0.04147, Ne: 0.001818, He: 0.000524, CH4: 0.0001745, Kr: 0.000114, H2: "Traces", H2O: "de < 0,5 % à ~ 5"}
  ),
  Mars: new Planete(4, "Mars", {
      base: "./assets/map/Map_mars.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete : require("./shaders/Mars/vertex.glsl"),
        fragmentPlanete : require("./shaders/Mars/fragment.glsl"),
        vertexAtmos: require("./shaders/Mars/atmosphereVertex.glsl"),
        fragmentAtmos: require("./shaders/Mars/atmosphereFragment.glsl"),
      }
    },
    "Mars (prononcé en français : /maʁs/) est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse.",
    {CO2: 95.97, Ar: 1.93, N2 : 1.89, O2: 0.146, CO: 0.0557, H2O: 0.03, NO: 0.013, Ne: 0.00025, Kr: "Traces", Xe: "Traces", O3: "Traces", CH4: "Traces" }
  ),
  Jupiter: new Planete(5, "Jupiter", {
      base: "./assets/map/Map_jupiter.jpg",
      shaders: {
        atmosSize: 11,
        vertexPlanete : require("./shaders/Jupiter/vertex.glsl"),
        fragmentPlanete : require("./shaders/Jupiter/fragment.glsl"),
        vertexAtmos: require("./shaders/Jupiter/atmosphereVertex.glsl"),
        fragmentAtmos: require("./shaders/Jupiter/atmosphereFragment.glsl"),
      }
    },
    "Jupiter est la cinquième planète du Système solaire par ordre d'éloignement au Soleil, et la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse.",
    {H2: 86, He: 13, CH4: 0.1, H2O: 0.1, NH3: 0.02, C2H6: 0.0002, PH3: 0.0001, H2S: "< 0.0001"}
  ),
  Saturne: new Planete(6, "Saturne", {
      base: "./assets/map/Map_saturne.jpg",
      ring: {
        map: "./assets/map/Map_saturnerings_polar.jpg",
        position: {
          x: 90,
          size: { begin: 13, end: 17}
        }
      },
      shaders: {
        atmosSize: 11,
        vertexPlanete : require("./shaders/Saturne/vertex.glsl"),
        fragmentPlanete : require("./shaders/Saturne/fragment.glsl"),
        vertexAtmos: require("./shaders/Saturne/atmosphereVertex.glsl"),
        fragmentAtmos: require("./shaders/Saturne/atmosphereFragment.glsl"),
      }
    },
    "Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse.",
    {H: 96, He: 3.25, CH4: 0.3, H2O: 0.1, NH3: 0.01, C2H6: 0.0005, PH: 0.0001}
  ),
  Uranus: new Planete(7, "Uranus", {
      base: "./assets/map/Map_uranus.jpg",
      ring: {
        map: "./assets/map/Map_uranus_ringpolar.jpg",
        position: {
          x: 0,
          size: { begin: 13, end: 15}
        }
      },
      shaders: {
        atmosSize: 11,
        vertexPlanete : require("./shaders/Uranus/vertex.glsl"),
        fragmentPlanete : require("./shaders/Uranus/fragment.glsl"),
        vertexAtmos: require("./shaders/Uranus/atmosphereVertex.glsl"),
        fragmentAtmos: require("./shaders/Uranus/atmosphereFragment.glsl"),
      }
    },
    "Uranus est la septième planète du Système solaire par ordre d'éloignement du Soleil.",
    {H2: 83, He: 15, CH4: 1.99, NH3: 0.01, C2H6: 0.00025, C2H2: 0.00001, CO: "Traces", H2S: "Traces"}
  ),
  Neptune: new Planete(8, "Neptune", {
    base: "./assets/map/Map_neptune.jpg",
    shaders: {
      atmosSize: 11,
      vertexPlanete : require("./shaders/Neptune/vertex.glsl"),
      fragmentPlanete : require("./shaders/Neptune/fragment.glsl"),
      vertexAtmos: require("./shaders/Neptune/atmosphereVertex.glsl"),
      fragmentAtmos: require("./shaders/Neptune/atmosphereFragment.glsl"),
    }
  }, 
  "Neptune est la huitième planète par ordre d'éloignement au Soleil et la plus éloignée connue du Système solaire",
  {H2: 84, He: 12, CH4: 2, NH3: 0.01, C2H6: 0.00025, C2H2: 0.00001}
  ),
}

export default SolarSysteme