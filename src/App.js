import NavBar from "./components/NavBar";
import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner";
import Flex from "./components/Flex";

function App() {
  return (
    <div className="App">
    <header>
    <NavBar/>
    </header>
    <Flex>
    <ItemListConteiner
    titulo= "Tirantes Saligna"
    descripcion= "Tirantes de madera Saligna De 2'' x 3'' x 4 mts. "
    precio= "$758"
    img= "https://www.gerardozittimaderera.com.ar/assets/img/galeria/postes_eucaliptus_colorado.jpg"
    />
    <ItemListConteiner
    titulo= "Postes Eucaliptus"
    descripcion= "Postes de 3'' x 3'' x 4 mts de madera Eucaliptus Colorado"
    precio= "$1990"
    img= "https://www.gerardozittimaderera.com.ar/assets/img/galeria/saligna_1.jpg"
    />
    <ItemListConteiner
    titulo= "Polietilenos Agroman"
    descripcion= "Polietilenos Agroman de todas las medidas , Canaletas , Zocalos y Techos."
    precio= "$1500"
    img= "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/292786819_1437341463406047_1526782660765639691_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O0Iyf-oGtZEAX-p47Le&_nc_ht=scontent-eze1-1.xx&oh=00_AfCXyes_XMPiDI0hL8g6GAAhGHJhkgGcN2qakORMW0mhBQ&oe=6414BDE6"
    />
    </Flex>
    </div>
  );
}

export default App;
