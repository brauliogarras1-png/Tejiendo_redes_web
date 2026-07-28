# Tejiendo_redes_web

**Página web para la organización Tejiendo Redes por los Niños**

**Repositorio Web**: Tejiendo Redes por los Niños
**Proyecto**: Impulso Web con Sentido (Verano 2026) 

> [!NOTE]
> Este repositorio contiene el código base (HTML/CSS) y las integraciones de backend para la nueva plataforma web de donaciones. El objetivo es mantener una estructura limpia, responsiva y orientada a la conversión.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Reglas de colaboración 

- **Protección de la rama principal**: La rama main está bloqueada para commits directos; todo cambio debe integrarse mediante un Pull Request (PR) revisado por el Ingeniero 1.

- **Respetar el cascarón visual**: Los scripts de bases de datos o analítica solo deben inyectarse en los contenedores (`<div>`) vacíos y documentados; está prohibido alterar las clases CSS globales sin consultar.

- **Aprobación obligatoria**: Ningún código pasa a producción sin comprobar que el diseño Mobile-First se mantiene intacto.

Para mantener el historial limpio y saber exactamente qué hizo cada quien, utilizaremos la siguiente nomenclatura (Carpeta y nombre de rama, inicio del mensaje del commit, cuerpo del mensaje del commit):

- **Ingeniero 1 (UI/UX)**: feat/frontend, UI:, Maquetación HTML/CSS.

- **Ingeniero 2 (Nube)**: feat/firebase, DB: / HOST:, Conexión a Firestore y despliegue.

- **Ingeniero 3 (Datos)**: feat/analytics, SEO: / API:, Workspace, Webhooks y Google Analytics.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Cómo correr el proyecto localmente

Este proyecto usa **Vite** como bundler y el SDK de **Firebase** instalado vía npm. Para ejecutarlo localmente sigue estos pasos:

### 1. Clonar y actualizar el repositorio

```bash
git clone <URL-del-repo>
cd Tejiendo_redes_web
git pull origin main
```

> [!TIP]
> Después de hacer merge de cualquier PR no olvides actualizar tu repositorio local haciendo pull

### 2. Instalar dependencias
La carpeta `node_modules/` no se sube al repositorio, así que hay que generarla localmente:

```bash
npm install
```

> [!IMPORTANT]
> Cada nuevo PR puede traer nuevas dependencias de npm. No olvides correr `npm install` de nuevo después de cada pull, aunque ya lo hayas corrido antes.

### 3. Correr el proyecto en modo desarrollo

```bash
npx vite
```

Esto levanta un servidor local, normalmente en `http://localhost:5173`. Abre esa URL en tu navegador para ver los cambios en tiempo real (hot-reload) mientras editas.

### 4. Autenticarse en Firebase (solo necesario para desplegar)
```bash
firebase login
```

Este paso solo se hace una vez por máquina (o si la sesión expira). El equipo comparte la misma cuenta de Firebase, así que usa esas credenciales para iniciar sesión.

### 5. Compilar y desplegar a producción

```bash
npx vite build
firebase deploy --only hosting
```

El primer comando genera la carpeta `dist/` con la versión optimizada del sitio; el segundo la sube a Firebase Hosting. La URL pública del sitio es: `https://tejiendo-redes-a96cc.web.app`

-------------------------------------------------------------------------------------------------------------------------------------------------------

> [!CAUTION]
> Las reglas de seguridad de Firestore están en modo de prueba y expiran el **6 de agosto de 2026**. Después de esa fecha, todas las lecturas/escrituras se bloquearán hasta configurar reglas de seguridad permanentes.

> [!NOTE]
> No se debe hacer commit de `dist/`, `node_modules/` ni `.env`; ya están excluidos en `.gitignore` porque se generan/configuran localmente en cada máquina.

> [!IMPORTANT]
> Antes de subir cambios, verifica que el diseño Mobile-First y las clases CSS globales no se hayan alterado, según las reglas de colaboración.