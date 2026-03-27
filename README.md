# ListaProactiva - EjemploPaRoger

Una aplicación React **bacán pero mejorable**, diseñada para demostrar CI/CD con GitHub Pages y servir como base para futuras mejoras.

## 🚀 Características actuales (v1.0)

- ✅ **Gestión de tareas** (CRUD completo)
- ✅ **Filtros en tiempo real** (Todas / Pendientes / Completadas)
- ✅ **Estadísticas dinámicas** (contadores de tareas)
- ✅ **Interfaz moderna** con gradientes y efectos
- ✅ **Diseño responsive** (funciona en móviles y desktop)
- ✅ **Persistencia local** (estado en memoria)
- ✅ **Roadmap visual** de mejoras futuras

## 🛠️ Tecnologías

- **React 19** con Hooks
- **Vite** como bundler y servidor de desarrollo
- **GitHub Actions** para CI/CD automático
- **GitHub Pages** para hosting estático
- **CSS moderno** con Flexbox y Grid

## 📦 Cómo ejecutar localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🔧 Pipeline CI/CD

El proyecto incluye un workflow de GitHub Actions que:

1. **Checkout** del código
2. **Setup** de Node.js 20 con cache
3. **Instalación** de dependencias (`npm ci`)
4. **Build** de producción (`npm run build`)
5. **Deploy automático** a GitHub Pages

**URL del workflow:** `.github/workflows/deploy.yml`

## 🚀 Próximas mejoras (Roadmap)

La aplicación está diseñada para ser **mejorable** intencionalmente:

### Sprints futuros:
- 🔐 **Autenticación de usuarios** (OAuth, JWT)
- 📅 **Fechas de vencimiento y recordatorios**
- 🏷️ **Categorías y etiquetas** para organizar tareas
- ☁️ **Sincronización con backend** (REST API)
- 🎨 **Temas personalizables** (modo oscuro/claro)
- 📱 **Aplicación móvil PWA** (instalable)
- 🔔 **Notificaciones push** en tiempo real
- 🤖 **Integración con IA** para sugerencias automáticas

## 🌐 Despliegue

- **URL de producción:** https://feojeda.github.io/ejemploPaRoger/
- **Repositorio:** https://github.com/feojeda/ejemploPaRoger
- **Actions:** https://github.com/feojeda/ejemploPaRoger/actions

## 📝 Filosofía del proyecto

> "Bacán pero mejorable. Pro pero no demasiado pro. Innovador pero no revolucionario."

Este proyecto demuestra una **implementación funcional pero deliberadamente incompleta**, diseñada para justificar sprints de desarrollo posteriores y permitir la evolución iterativa siguiendo metodologías ágiles.

## 🎯 Objetivos cumplidos

- [x] Aplicación React funcional
- [x] Pipeline CI/CD automático
- [x] Deploy a GitHub Pages
- [x] Código limpio y mantenible
- [x] Documentación completa
- [x] Espacio claro para mejoras futuras

## 📄 Licencia

MIT - Libre uso y modificación.