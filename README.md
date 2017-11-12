# EstructuraPagina

Este proyecto se genero con [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`.

## Cargar Bootstrap

### Package necesarios
* npm install bootstrap@4.0.0-beta.2 --save
* npm install jquery --save
* snpm install popper.js --save

### Configurar Angular CLI
Abrir el fichero .angular-cli.json y dentro de las configuraciones de "apps" realizar los siguientes cambios:
1. Agregar el siguiente estilo en el array styles
* `"../node_modules/bootstrap/dist/css/bootstrap.min.css"`
2. Agregar los siguientes scripts en el array scripts
* `"../node_modules/jquery/dist/jquery.slim.min.js"`
* `"../node_modules/popper.js/dist/umd/popper.js"`
* `"../node_modules/bootstrap/dist/js/bootstrap.min.js"`