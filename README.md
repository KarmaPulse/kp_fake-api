# kp_fake-api
Túnel para obtener un feed con protocolo HTTP y HTTPS

## Dependencias

**Node.js(v4.4.7) & NPM(v3.10.3)**

## ¿Cómo correr el proyecto?

- Abrir el directorio en la terminal y ejecutar el siguiente comando para instalar dependencias:

    ```sh
    ~ kp_fake-api git:(master) ✗ npm install
    ```

- Correr el proyecto con el comando:

    ```sh
    ~ kp_fake-api git:(master) ✗ npm start
    ```

- Abrir una nueva terminal situado en el mismo directorio y proporcionar todos los permisos al archivo ngrok que se encuentra en la carpeta:

    ```sh
    ~ kp_fake-api git:(master) ✗ chmod 777 ngrok
    ```

- Ejecutar ngrok:
    
    ```sh
    ~ kp_fake-api git:(master) ✗ ./ngrok http 3000
    ```
    
Ngrok creará el túnel para exponer el servidor local a la red.
