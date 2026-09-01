![image_alt](https://github.com/user-attachments/assets/37a616b5-0fce-4a9d-aa8b-eabbc825323a)

# Weatly - Meal Planner (Frontend)

Frontend de **Weatly**, una aplicación móvil para la gestión de planes nutricionales: recetas,
ingredientes y usuarios, construida con React Native y Expo.

> Repo del backend: [MP_SpringBoot](https://github.com/SihaoCheng123/MP_SpringBoot)

Proyecto desarrollado en equipo. Mi aportación: diseño de la arquitectura full-stack e
implementación de gran parte del frontend y del backend.

## Softwares utilizados
![My Skills](https://skillicons.dev/icons?i=java,react,nodejs,androidstudio,mysql,figma,docker)

## Cómo ejecutarlo

### Requisitos previos

- Node.js (LTS recomendada)
- [Expo Go](https://expo.dev/go) instalado en tu móvil (Android/iOS), o un emulador configurado
- El backend ([MP_SpringBoot](https://github.com/SihaoCheng123/MP_SpringBoot)) corriendo en local

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SihaoCheng123/MP_React.git
   cd MP_React
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la URL del backend en `app/data/sources/remote/api/ApiDelivery.tsx`:
   ```ts
   baseURL: 'http://TU_IP_LOCAL:8080/api'
   ```
   > Sustituye `TU_IP_LOCAL` por la IP local de tu ordenador (donde corre el backend), no
   > por `localhost`, ya que el emulador o el móvil físico no lo reconocerían como tal.

4. Inicia la aplicación:
   ```bash
   npm start
   ```

5. Escanea el código QR con la app **Expo Go** desde tu móvil, o pulsa `a` / `i` en la
   terminal para abrirlo en un emulador Android/iOS.

## Notas

- Requiere que el backend esté levantado y accesible desde la misma red que el dispositivo
  o emulador donde se ejecute la app.

## Softwares utilizados
![My Skills](https://skillicons.dev/icons?i=java,react,nodejs,androidstudio,mysql,figma,docker)
