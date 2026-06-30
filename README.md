# Antecedentes profesionales — Leonardo Hugo Zequin

Página web de antecedentes profesionales de **Leonardo Hugo Zequin** — Ingeniero Industrial, Magíster en Docencia Universitaria y cofundador de **Somos Zeta Digital Advice**.

Pensada para compartir con instituciones (mutuales, escuelas, municipios, universidades) y empresas que solicitan antecedentes profesionales, presentados de forma estética y navegable.

🔗 **Ver online:** _(GitHub Pages → activar en Settings ▸ Pages ▸ Branch: `main` / root)_

---

## ✨ Características

- **Página única autónoma** (`index.html`) — sin dependencias externas. La foto va **embebida en base64**, por lo que nunca se rompe al publicar.
- **Identidad de marca propia**, co-branded con Somos Zeta: púrpura institucional `#7030a0` + acento dorado `#FFBA00`, sobre fondo claro (estilo editorial).
- **Trayectoria con filtros** por categoría: Gestión, Proyectos & Consultoría, Docencia, Investigación y Divulgación en IA.
- **Sección Somos Zeta** con propuesta de valor, servicios y las empresas e instituciones con las que trabajamos.
- **Formación** (títulos + capacitaciones desplegables), **habilidades** y **contacto** con todas las redes.
- **Responsive** (desktop y mobile).

---

## 📂 Estructura del proyecto

| Archivo | Descripción |
|---|---|
| `index.html` | **La página final.** Es lo único necesario para publicar (autónomo). |
| `build.js` | Generador: toma los datos y produce `index.html`. |
| `clean.json` | Datos de contenido (logros, estudios, habilidades). |
| `Foto Leo Zequin.jpeg` | Foto de origen (se embebe en el build; no se usa en runtime). |
| `server.js` | Servidor local mínimo para previsualizar. |

> Para publicar en GitHub Pages alcanza con `index.html`. El resto son archivos de trabajo para regenerar la página.

---

## 🛠️ Editar y regenerar

El contenido NO se edita a mano en el HTML. Se modifica la fuente y se regenera:

1. Editá los datos en `clean.json`, o la configuración (nombre, contacto, redes, foto) en el objeto `CONFIG` dentro de `build.js`.
2. Regenerá la página:
   ```bash
   node build.js
   ```
3. (Opcional) Previsualizá localmente:
   ```bash
   node server.js
   # abrir http://localhost:8099
   ```

Cualquier cambio de foto, color o contacto se aplica desde `build.js` y queda embebido al correr el build.

---

## 🚀 Publicar en GitHub Pages

1. **Settings** ▸ **Pages**.
2. **Source:** Deploy from a branch.
3. **Branch:** `main` · carpeta `/ (root)`.
4. Guardar. La URL queda como `https://<usuario>.github.io/Antecedentes_Leo_Zequin/`.

---

## 📬 Contacto

- **Correo personal:** lzequin@gmail.com
- **Correo Somos Zeta:** formaciones@somos-zeta.com
- **WhatsApp:** +54 9 3496 460513
- **LinkedIn:** https://www.linkedin.com/in/lzequin/
- **Instagram:** [@somoszeta_da](https://www.instagram.com/somoszeta_da/)
- **Web:** https://www.somos-zeta.com/

---

<sub>Somos Zeta Digital Advice — _"Tecnología que acerca, soluciones que transforman"_</sub>
