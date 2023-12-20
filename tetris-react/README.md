# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Things I learned:

#### Movement:
- {x: 0, y: 0} = tetromino is NOT mnoving anywhere
- {x: -1} = tetromino is movinng LEFT
- {x: 1} = tetromino is movinng RIGHT
- {y: -1} = tetromino is movinng UP
- {y: 1} = tetromino is movinng DOWN

#### Generating rundom number:
```js
export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    // random tetromino generator (it generates random number -> position of a letter in array)
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
```

#### Styled components
- Nice way of styling
- Learn more about it.

#### Shadows in css
- learn how to create nice basic shadows

#### GRID css
- Nice alternative to Flex positioning
