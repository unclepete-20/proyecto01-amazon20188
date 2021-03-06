![GitHub watchers](https://img.shields.io/github/watchers/unclepete-20/proyecto01-amazon20188?style=social) ![GitHub followers](https://img.shields.io/github/followers/unclepete-20?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/unclepete-20/proyecto01-amazon20188) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/unclepete-20/proyecto01-amazon20188/dev/@babel/preset-react) ![npm dev dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-react/dev/eslint) ![GitHub](https://img.shields.io/github/license/unclepete-20/proyecto01-amazon20188)

# Proyecto Clon de Amazon :rocket:

Este es el Proyecto #1 del curso de Sistemas y Tecnologías Web del año 2022, impartido en la Universidad del Valle de Guatemala. Dicho proyecto consistió en aplicar los conocimientos y herramientas aprendidas a lo largo del curso para poder recrear una página web que más nos gustara. En este caso yo, Pedro Pablo Arriola Jiménez con número de carnet 20188, decidí aplicar mis conocimientos y ciertas tecnologías web para recrear una de las páginas de E-Commerce más importantes a nivel global, [Amazon](https://www.amazon.com/-/es/ref=nav_logo#nav-top).


![amazon-logo (2)](https://user-images.githubusercontent.com/63658079/165650676-9a2a5031-5661-4cf5-be39-e2b9fba9a9b1.png)


## Pantalla implementada
Para este proyecto, se dicidió implementar la página principal de Amazon.

![image](https://user-images.githubusercontent.com/63658079/165622603-3c895940-24ea-49b2-bbd0-0db7dcc3e83d.png)

## Tecnologías utilizadas

### npm

![2560px-Npm-logo svg (1)](https://user-images.githubusercontent.com/63658079/165651215-f3b867df-5a52-4094-8b1d-432f5278b722.png)

[npm](https://www.npmjs.com/) es el gestor de paquetes para Node.js. Fue creado en 2009 como un proyecto de código abierto para ayudar a los desarrolladores de JavaScript a compartir fácilmente módulos de código empaquetados. Este gestor de paquetes permitió crear el esqueleto principal del proyecto para poder instalar y manejar todas las dependencias implementadas para desarrollar el proyecto.

```bash
npm init --yes
```

### webpack

![image](https://user-images.githubusercontent.com/63658079/165625412-34f8bb29-e334-4a41-b23e-0b648b4eacf7.png)

[webpack](https://webpack.js.org/) es un agrupador de módulos estáticos para aplicaciones modernas de JavaScript. Cuando webpack procesa la aplicación, construye internamente un gráfico de dependencias a partir de uno o más puntos de entrada y luego combina cada módulo que dicho proyecto necesita en uno o más paquetes, que son activos estáticos para servir el contenido.

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

### React
![image](https://user-images.githubusercontent.com/63658079/165626853-93ec4bf6-2180-4359-954e-2bd43e526bd4.png)

[React](https://es.reactjs.org/) es una biblioteca Javascript para crear interfaces de usuario. Es importante mencionar que este framework tiene un enfoque basado en componentes, haciendo que la construcción de una página web sea mucho más fácil ya que permite reutilizar código. Esto permitió que la elaboración de la página de Amazon fuera más fácil, a la vez que proporciona elementos visuales más actualizados y atractivos.

```bash
npm i react react-dom react-router-dom
```

###  Babel

![image](https://user-images.githubusercontent.com/63658079/165626395-cbcb39df-8021-4664-bd6b-3735704ae93e.png)

[Babel](https://babeljs.io/) es una cadena de herramientas que se utiliza principalmente para convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores en navegadores o entornos actuales y antiguos. Este compilador de JavaScript permitió implementar Polyfills para solucionar problemas de ejecución en los diferentes navegadores, al igual que adoptar un formato de código más amigable con las diferentes distribuciones de navegadores que existen en los sistemas de computo hoy en día. También fue necesario instalar el preset para React, lo cual permitiría modificar y darle el formato correcto al código de react.js que fue escrito para el proyecto.

```bash
npm i --save-dev @babel/core @babel/cli @babel/eslint-parser @babel/preset-env @babel/preset-react babel-loader
```

### Material UI

![image](https://user-images.githubusercontent.com/63658079/165629821-2d46b29b-1cc5-4280-97c9-8afdcd158dde.png)

[Material UI](https://mui.com/) es una biblioteca completa de componentes que cuenta con una implementación del sistema Material Design de Google. Esto permitió darle un mejor aspecto visual a la interfaz de Amazon, a la vez que permitió obtener mejores resultados al momento de construir los componentes de dicha página.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)
Componente de carrusel potente, ligero y totalmente personalizable para aplicaciones React. Esta dependencia y componente fue implementado en la sección de anuncios de la página principal de Amazon.
```bash
npm i react-responsive-carousel
```
### [react-alice-carousel](https://www.npmjs.com/package/react-alice-carousel)

![react-alice-carousel](https://user-images.githubusercontent.com/63658079/165631627-1465029c-7713-4c28-a3ff-4e7592735d9c.gif)  ![react-alice-carousel-demo](https://user-images.githubusercontent.com/63658079/165631643-1caaa4b4-0037-4b4c-8ca6-7eacc684d287.gif)

React Alice Carousel es un componente React para construir galerías de contenido, rotadores de contenido y cualquier carrusel React. Esta dependencia y componente fue utilizado para recrear la lista de productos.

## Resultado final

Con todas estas tecnologías implementadas, la creación de la página principal de Amazon fue exitosa. A continuación se presentan los resultados obtenidos:

![image](https://user-images.githubusercontent.com/63658079/165632017-6ba4ec8e-673d-4c5b-b996-b4d290755caa.png)
![image](https://user-images.githubusercontent.com/63658079/165632105-98b12f53-f622-4d35-8e93-89160a8bc9a9.png)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
