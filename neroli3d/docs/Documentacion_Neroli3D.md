# Documentacion del Proyecto Neroli3D

## 1. Resumen
Neroli3D es una aplicacion web desarrollada con React + TypeScript + Vite para mostrar un catalogo de productos impresos en 3D y ofrecer canales de contacto directo.

La aplicacion es de tipo SPA (Single Page Application) y utiliza enrutado del lado del cliente con React Router para navegar entre secciones sin recargar la pagina.

## 2. Objetivos de la aplicacion
- Presentar categorias de productos de Neroli3D.
- Mostrar una vista rapida de cada categoria y una descripcion ampliada en modal.
- Facilitar el contacto con la marca mediante Instagram, Gmail y TikTok.
- Mantener una experiencia simple, ligera y compatible con despliegues estaticos.

## 3. Stack tecnologico
- React 19
- TypeScript
- Vite 8
- React Router 7
- Radix UI Dialog (@radix-ui/react-dialog)
- ESLint para reglas de calidad de codigo

## 4. Estructura general del proyecto
Estructura principal:

- src/
- src/app_pages/
- src/components/
- src/components/components_css/
- src/customHooks/
- src/assets/
- public/

Descripcion por carpeta:
- src/app_pages/: paginas de ruta (inicio, catalogo y contacto).
- src/components/: componentes reutilizables de UI y navegacion.
- src/components/components_css/: estilos por componente.
- src/customHooks/: logica de consulta de datos e informacion de productos.
- src/assets/: imagenes de marca, logos e imagenes del catalogo.

## 5. Flujo de navegacion
Rutas definidas en la aplicacion:
- / -> Pagina principal
- /catalogo -> Catalogo de productos
- /contacto -> Canales de contacto

Comportamiento:
1. La app arranca en main.tsx y envuelve App con BrowserRouter.
2. App.tsx resuelve la ruta activa y renderiza la pagina correspondiente.
3. Los botones de navegacion usan Link de React Router.

## 6. Descripcion funcional por pagina
### 6.1 Pagina principal
- Renderiza barra superior, logo principal y barra inferior.
- Incluye accesos directos a Catalogo y Contacto mediante botones de navegacion.

### 6.2 Catalogo
- Renderiza barra superior con enlaces a Inicio y Contacto.
- Muestra un contenedor de tarjetas de categorias.
- Cada tarjeta incluye imagen, titulo y boton "Ver mas".
- El boton abre un modal con descripcion ampliada del producto.

Categorias actuales:
- Estampitas 3D
- Pines
- Nero Pops
- Celebraciones
- NeroLamparas
- NeroNazarenos
- Coleccionismo

### 6.3 Contacto
- Renderiza barra superior con enlaces a Inicio y Catalogo.
- Muestra tarjetas de contacto para Instagram, Gmail y TikTok.
- En enlaces externos se abre una nueva pestana.
- En Gmail (mailto) intenta abrir el cliente de correo y copia el email al portapapeles como respaldo.

## 7. Componentes principales
- TopBar: barra de navegacion superior con menu hamburguesa en movil.
- BotBar: pie de pagina con copyright.
- Logo: imagen principal y botones de acceso rapido.
- NavButton: boton de navegacion basado en Link.
- CardContainer: contenedor de categorias del catalogo.
- Card: tarjeta individual que consulta datos del producto.
- ModalCard: modal de detalle con Radix Dialog.
- ContactCard: tarjeta de canal de contacto con iconografia dinamica.

## 8. Gestion de datos del catalogo
Los datos de productos se centralizan en src/customHooks/imgData.ts con la interfaz:
- name: identificador interno.
- url: recurso de imagen.
- description: texto descriptivo de marketing.

La busqueda de datos se realiza con el hook useSearchInfo en src/customHooks/findImg.ts:
- Recibe el nombre interno del producto.
- Devuelve el objeto Product correspondiente usando useMemo.

## 9. Estilos y UI
- Se usa una estrategia de CSS modular por componente en src/components/components_css/.
- Cada componente importa su propio archivo de estilos.
- El menu hamburguesa en TopBar permite adaptar navegacion a pantallas pequenas.

## 10. Build y scripts
Scripts definidos en package.json:
- npm run neroli: ejecuta servidor de desarrollo con Vite.
- npm run build: compila TypeScript y genera build de produccion.
- npm run lint: analiza codigo con ESLint.
- npm run preview: vista previa local de la build de produccion.

## 11. Despliegue en Netlify
Configuracion actual:
- Comando de build: npm run build
- Carpeta publicada: dist
- Redireccion SPA: todas las rutas apuntan a /index.html con estado 200.

Esto permite que rutas como /catalogo o /contacto funcionen correctamente al recargar.

## 12. Instalacion y ejecucion local
Requisitos:
- Node.js 18 o superior (recomendado LTS)
- npm

Pasos:
1. Instalar dependencias: npm install
2. Iniciar desarrollo: npm run neroli
3. Generar build: npm run build
4. Previsualizar build: npm run preview

## 13. Generacion de esta documentacion en PDF
Se incluye un script para convertir este documento markdown a PDF:
- Comando: npm run docs:pdf
- Entrada: docs/Documentacion_Neroli3D.md
- Salida: docs/Documentacion_Neroli3D.pdf

## 14. Mejoras recomendadas
- Estandarizar nombres de componentes en PascalCase para mayor consistencia.
- Reemplazar alerts por toasts para mejorar UX.
- Mover textos de marketing a un origen externo (JSON/CMS) para facilitar mantenimiento.
- Agregar pruebas unitarias y de componentes (por ejemplo con Vitest + Testing Library).
- Incorporar analitica de eventos para medir interacciones en catalogo y contacto.

## 15. Licencia y autoria
Proyecto desarrollado para la marca Neroli3D.

Si se desea publicar como software abierto, se recomienda agregar un archivo LICENSE y definir politicas de contribucion.
