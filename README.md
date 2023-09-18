# 💻 Projeto
Aplicação que possibilita realizar upload de videos e por meio de IA, criar automaticamente títulos chamativos e descrições com um boa indexação.

## nlw-IA
```pnpm run dev```
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
***Edit tsconfig.json***
Add the code below to the compilerOptions of your ```tsconfig.json``` so your app can resolve paths without error   
Em compilerOptions:   
Permite que todos os imports feitos com @ o arquivo está dentro da pasta ```src```   
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
***No ```vite.config.ts```***
```
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
***Instalação dos Componentes***
*yes/new york/zinc   
src/index.css/yes/enter/enter/enter/no/yes
```pnpm dlx shadcn-ui@latest init```

***Testar o funcionamento***
```pnpm dlx shadcn-ui@latest add button```

***Biblioteca lucide***
Diversos ícones
```pnpm i lucide-react```

***Componente separator do shadcn***
Para separar as sessões
```pnpm dlx shadcn-ui@latest add separator```

***Componente textarea***
```pnpm dlx shadcn-ui@latest add textarea```

***Componente label***
```pnpm dlx shadcn-ui@latest add label```

***Componente select***
```pnpm dlx shadcn-ui@latest add select```

***Componente slider***
```pnpm dlx shadcn-ui@latest add slider```

## Estrutura do Projeto Node
```mkdir upload-ai-server```
```pnpm init```

### Dependências de desenvolvimento:
```pnpm i typescript @types/node tsx -D```
```pnpm i prisma -D```   ```pnpm prisma init --datasource-provider sqlite```   ```pnpm prisma migrate dev```
visualizar no BD ```pnpm prisma studio```

### Dependências de Produção: 
Rotas HTTP
```pnpm i fastify```

instalar pacote [Fastify](https://github.com/fastify/fastify-multipart)
```pnpm i @fastify/multipart```

### Biblioteca para validação de ID
```pnpm i zod```

