# nlw-IA
## [pnpm instalação:](https://pnpm.io/pt/installation)
```npm install -g pnpm```

## [Vite:](https://vitejs.dev/guide/)
```pnpm create vite```  
**Project name:** upload-ai-web   
**Framework:** React   
**Variant:** TypeScript  
### Dependencies:
```pnpm i```
### Bibliotecas:
[Tailwind](https://tailwindcss.com/): Usa classes para estilizar componentes html   
[Radix](https://www.radix-ui.com/): Vários componentes prontos para o react sem estilização   
[Shadcn](https://ui.shadcn.com/): Componentes implementados utilizando thements, componentes estilizados   
***instala automaticamente o Tailwind e o Radix***   
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.
```
pnpm add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```
***Edit tsconfig.json**
Add the code below to the compilerOptions of your ```tsconfig.json``` so your app can resolve paths without error   
Em compilerOptions:   
Permite que todos os imports feitos com @ o arquivo está dentro da pasta src   
```
  "baseUrl": ".",
  "paths": {
  "@/*": ["./src/*"]
  }

```
***Instalação do Types/node***
```
pnpm i -D @types/node

```

