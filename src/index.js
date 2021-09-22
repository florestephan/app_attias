// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local
// Composants

{/*
POur la mise en place de form item on mets de coté formcontainer
import FormContainer from 'src/components/FormContainer';
*/}

import FormItem from 'src/components/FormItem';



// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <FormItem />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
