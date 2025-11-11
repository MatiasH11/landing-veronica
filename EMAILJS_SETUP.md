# Configuración de EmailJS para el Formulario de Contacto

El formulario de contacto ya está configurado para usar EmailJS. Seguí estos pasos para activarlo:

## 📋 Paso 1: Crear cuenta en EmailJS (5 minutos)

1. Andá a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Creá una cuenta gratuita (podés usar tu email de Gmail)
3. Verificá tu email

## 🔧 Paso 2: Conectar tu Gmail (3 minutos)

1. En el dashboard de EmailJS, andá a **"Email Services"**
2. Click en **"Add New Service"**
3. Seleccioná **"Gmail"**
4. Seguí las instrucciones para conectar tu cuenta `veronicamercadoseguros@gmail.com`
5. **Guardá el Service ID** que te muestra (ejemplo: `service_abc123`)

## 📧 Paso 3: Crear Template de Email (5 minutos)

1. Andá a **"Email Templates"**
2. Click en **"Create New Template"**
3. Usá este template:

### Template Name: `contact_form_landing`

### Template Content:

**Subject:**
```
Nueva solicitud de cotización - {{from_name}}
```

**Body:**
```
Has recibido una nueva solicitud de cotización desde tu landing page.

Datos del cliente:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nombre: {{from_name}}
📧 Email: {{from_email}}
📱 Teléfono: {{phone}}
🛡️ Tipo de Seguro: {{insurance_type}}

💬 Mensaje:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
```

4. **Guardá el Template ID** (ejemplo: `template_xyz789`)
5. Click en **"Save"**

## 🔑 Paso 4: Obtener Public Key

1. Andá a **"Account"** en el menú
2. En la sección **"API Keys"**, copiá tu **"Public Key"** (ejemplo: `AbCdEfGhIjKlMnOp`)

## ⚙️ Paso 5: Configurar Variables de Entorno

1. Creá un archivo `.env.local` en la raíz de tu proyecto
2. Agregá estas líneas con TUS credenciales:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### Ejemplo (con tus credenciales reales):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

## 🚀 Paso 6: Reiniciar el servidor

```bash
# Detené el servidor de desarrollo (Ctrl+C)
# Volvé a iniciarlo
pnpm dev
```

## ✅ Paso 7: Probar el formulario

1. Andá a tu landing page en el navegador
2. Llenás el formulario con datos de prueba
3. Hacé click en "Quiero mi cotización"
4. Deberías recibir un email en `veronicamercadoseguros@gmail.com`

## 🎯 Variables del Template

El formulario envía estos datos:

| Variable | Descripción |
|----------|-------------|
| `from_name` | Nombre completo del cliente |
| `from_email` | Email del cliente |
| `phone` | Teléfono o WhatsApp |
| `insurance_type` | Tipo de seguro seleccionado |
| `message` | Mensaje del cliente |
| `to_email` | Tu email (veronicamercadoseguros@gmail.com) |

## 🔒 Seguridad

- ✅ Las credenciales están en `.env.local` que **NO** se sube a Git
- ✅ EmailJS tiene protección contra spam
- ✅ Plan gratuito incluye 200 emails/mes

## ❓ Problemas Comunes

### "Email enviado exitosamente" pero no recibís el email
- Revisá la carpeta de SPAM
- Verificá que el Service ID sea correcto
- Verificá que el Template ID sea correcto

### Error al enviar
- Verificá que las 3 variables de entorno estén configuradas
- Reiniciá el servidor después de crear `.env.local`
- Revisá la consola del navegador para más detalles

## 📊 Límites del Plan Gratuito

- ✅ 200 emails por mes
- ✅ Sin tarjeta de crédito requerida
- ✅ Suficiente para empezar

Si necesitás más, podés actualizar al plan pago más adelante.

---

**¡Listo!** Tu formulario de contacto está configurado y funcional. 🎉

