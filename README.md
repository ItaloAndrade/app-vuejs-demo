[<img src="https://ui-flutter-git.s3-sa-east-1.amazonaws.com/common/head-readme-new.jpg" width="100%"></img>](http://google.com.au/)

<p align="center">

<img src="https://img.shields.io/badge/vers%C3%A3o-1.0.0-blue" />
<img src="https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet"  />
<img src="https://img.shields.io/static/v1?label=release&message=ok&color=success"  />
<a href="https://t.me/Italorio"><img src="https://img.shields.io/static/v1?label=telegram&message=chat&color=informational"  /></a>
<a href="https://twitter.com/ItaloandradeD">
<img src="https://img.shields.io/static/v1?label=social&message=tweet&color=yellow" />
</a>
<a href="https://dev.to/italoandrade"><img src="https://img.shields.io/static/v1?label=social&message=dev&color=inactive"  /></a>
<a href="https://br.linkedin.com/in/italo-galbino-83958b1a4"><img src="https://img.shields.io/static/v1?label=author&message=Italo&color=important"  /></a>
</p>

#vue-vuetify--admin-marvel

### DEMO
![Product Gif](https://ui-flutter-git.s3-sa-east-1.amazonaws.com/app-vuejs-demo/vue-marvel-gif.gif)

### PRINTS SCREEN
  
 <table>
  <tbody>
    <tr>
      <td> 
          		<img src="https://ui-flutter-git.s3-sa-east-1.amazonaws.com/app-vuejs-demo/1.jpg"> 
      </td>
       <td> 
          		<img src="https://ui-flutter-git.s3-sa-east-1.amazonaws.com/app-vuejs-demo/2.jpg"> 
      </td>
    </tr>
    <tr>
      <td> 
          		<img src="https://ui-flutter-git.s3-sa-east-1.amazonaws.com/app-vuejs-demo/3.jpg"> 
      </td>
       <td> 
          		<img src="https://ui-flutter-git.s3-sa-east-1.amazonaws.com/app-vuejs-demo/4.jpg"> 
      </td>
    </tr>
   </tbody>
</table>


### INTRODUÇÃO

Este projeto foi desenvolvido utilizando boas práticas de programação. 
Através do consumo de uma api rest fornecida pelo provedor da Marvel, e uma api rest hospedada no Heroku,  foi possível popular as páginas .
As bibliotecas empregadas para construção dos componentes da página foi a VueJs em conjunto com Vuetify(Material Design) e Vuex(Controle de Estado) .

## Estrutura

src
 ┣ assets
 ┃ ┣ logo.png
 ┃ ┗ logo.svg
 ┣ infra
 ┃ ┣ http.init.js
 ┃ ┗ util.js
 ┣ locate
 ┃ ┣ en_US
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ route.js
 ┃ ┣ pt_BR
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ route.js
 ┃ ┣ index.js
 ┃ ┗ vuetify.js
 ┣ plugins
 ┃ ┣ vuetify.js
 ┃ ┗ vuetifyThemes.js
 ┣ router
 ┃ ┣ modules
 ┃ ┃ ┣ auth.js
 ┃ ┃ ┣ dashboard.js
 ┃ ┃ ┗ errors.js
 ┃ ┣ index.js
 ┃ ┗ middlewares.js
 ┣ scss
 ┃ ┗ style.scss
 ┣ services
 ┃ ┣ auth.service.js
 ┃ ┣ base.service.js
 ┃ ┣ favorito.service.js
 ┃ ┣ marver.service.js
 ┃ ┗ users.service.js
 ┣ store
 ┃ ┣ modules
 ┃ ┃ ┣ auth.js
 ┃ ┃ ┣ favorito.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ marvel.js
 ┃ ┃ ┣ settings.js
 ┃ ┃ ┗ snackbar.js
 ┃ ┗ index.js
 ┣ views
 ┃ ┣ components
 ┃ ┃ ┣ AppBarBreadcrumbs.vue
 ┃ ┃ ┣ AppBarFullScreen.vue
 ┃ ┃ ┣ AppBarLanguage.vue
 ┃ ┃ ┣ AppBarNotification.vue
 ┃ ┃ ┣ AppBarProfile.vue
 ┃ ┃ ┣ Center.vue
 ┃ ┃ ┣ CharactersCard.vue
 ┃ ┃ ┣ ProfileCard.vue
 ┃ ┃ ┣ Snackbar.vue
 ┃ ┃ ┣ TableFavorite.vue
 ┃ ┃ ┗ Theme.vue
 ┃ ┣ layout
 ┃ ┃ ┣ AppBar.vue
 ┃ ┃ ┣ Content.vue
 ┃ ┃ ┣ Drawer.vue
 ┃ ┃ ┣ DrawerList.vue
 ┃ ┃ ┣ FabPageBack.vue
 ┃ ┃ ┣ FabThemaRight.vue
 ┃ ┃ ┣ Footer.vue
 ┃ ┃ ┗ Layout.vue
 ┃ ┗ pages
 ┃ ┃ ┣ Dashboard.vue
 ┃ ┃ ┣ ErrorPage.vue
 ┃ ┃ ┣ Favorite.vue
 ┃ ┃ ┣ SignIn.vue
 ┃ ┃ ┣ SignUp.vue
 ┃ ┃ ┗ Theme.vue
 ┣ .env.js
 ┣ App.vue
 ┣ config.js
 ┣ main.js
 ┗ registerServiceWorker.js


## Getting started

```bash
# clone the project
git clone  https://github.com/ItaloAndrade/app-vuejs-demo.git

# enter the project directory
cd app-vuejs-demo

# install dependency
npm install

# develop
npm run serve
```

This will automatically open http://localhost:8080

## Build and Test

```bash
# build
npm run build
  
```

## License

[MIT](https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/LICENSE)

Author:   Italo Andrade
 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
