# Pink Angular Windows 95

A fork of [Angular 95](https://github.com/Nytyr/angular-windows-95), with React95's Candy color scheme, windows logo on start button, and adding icons to taskbar items.

A live demo can be found [here](https://calm-stone-02731f310.2.azurestaticapps.net) which I've made for an old girlfriend of mine. Might be a little cringe but oh well.

## Screenshots
<img src="https://raw.githubusercontent.com/egeulk/angular-windows-95-pink/master/demo.png" alt="W95">

## Add components to the start menu

Just generate your components and modify 'menu' field from the AppComponent.

```typescript
menu: MenuItem[] = [
    {
      name: '📕 Welcome',
      goTo: WelcomeComponent,
    },
    {
      name: '📄 Register',
      goTo: RegisterComponent,
    },
    {
      name: '🔗 Github',
      goTo: 'https://github.com/nytyr',
    }
  ];
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You must run "$env:NODE_OPTIONS = "--openssl-legacy-provider" on Windows, "export NODE_OPTIONS=--openssl-legacy-provider" on Unix like OSes.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
