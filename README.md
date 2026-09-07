# Grupo Empresarial La Cordillera — sitio local

Esta versión reproduce visualmente el mockup entregado y añade zonas interactivas
para navegación y botones.

## Estructura

```text
cordillera_web/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── cordillera-reference.png
```

## Apache en Linux

Copiar la carpeta al DocumentRoot de Apache, por ejemplo:

```bash
sudo cp -r cordillera_web /var/www/html/cordillera
sudo chown -R apache:apache /var/www/html/cordillera
```

En Debian/Ubuntu el usuario puede ser `www-data`:

```bash
sudo chown -R www-data:www-data /var/www/html/cordillera
```

Luego abrir:

```text
http://localhost/cordillera/
```

## Apache virtual host opcional

También se puede publicar como:

```text
http://cordillera.local/
```

agregando un VirtualHost y una entrada en `/etc/hosts`.

## Nota

La imagen de referencia se usa como capa visual para conseguir una reproducción
muy fiel del diseño original. Los botones son hotspots HTML reales y abren
modales. Si quieres una versión 100% construida con HTML/CSS (sin usar la captura
como fondo), se puede sustituir esta capa por componentes HTML, SVG e imágenes
individuales.
