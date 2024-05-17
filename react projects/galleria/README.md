# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Galeria de picturi
Acesta este un mic proiect care afișează o listă de picturi și permite vizualizarea detaliilor fiecărei picturi prin intermediul unei rute separate.

Tehnologii utilizate
React
React Router
Axios

Cum să rulezi proiectul
Clonare: Clonează acest repository în directorul local folosind git clone.
Instalare dependințe: Navighează în directorul proiectului și rulează npm install pentru a instala toate dependințele necesare.
Pornirea aplicației: După ce s-au instalat dependințele, rulează npm start pentru a porni serverul de dezvoltare și a accesa aplicația într-un browser la adresa http://localhost:3000.


Structura fișierelor
App.js: Componenta principală a aplicației care definește rutele și layout-ul general.
GalleryList.jsx: Componenta care afișează o listă de picturi.
Painting.jsx: Componenta care afișează detaliile unei picturi pe baza ID-ului furnizat în parametrul URL.
PaintingCard.jsx: Componenta care reprezintă un card pentru afișarea unei picturi în lista de picturi.


Funcționalități
Afisează o listă de picturi.
Permite vizualizarea detaliilor unei picturi prin intermediul unei rute separate.
