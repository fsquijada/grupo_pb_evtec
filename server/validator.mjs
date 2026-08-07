const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Limpieza de texto
export function sanitizeInput(str) {
  if (!str) return '';
  return String(str)
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Extrae la IP real del cliente
export function extractClientIP(event) {
  const xForwardedFor = event.headers['X-Forwarded-For'] || event.headers['x-forwarded-for'];
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }
  return event.requestContext?.identity?.sourceIp || '0.0.0.0';
}

// Validación de payload de suscripción
export function validateSubscriptionPayload(payload) {
  const name = sanitizeInput(payload.name);
  const email = String(payload.email || '').trim().toLowerCase();

  // 1. Validaciones de campos obligatorios
  if (!name || !email) {
    return { 
      isValid: false, 
      error: 'El nombre y el correo electrónico son obligatorios.', 
      code: 'MISSING_FIELDS' 
    };
  }

  // 2. Validación de longitud
  if (name.length > 80) {
    return { 
      isValid: false, 
      error: 'El nombre excede el límite de 80 caracteres.', 
      code: 'NAME_TOO_LONG' 
    };
  }

  // 3. Validación de formato de correo
  if (!EMAIL_REGEX.test(email)) {
    return { 
      isValid: false, 
      error: 'El formato del correo electrónico no es válido.', 
      code: 'INVALID_EMAIL' 
    };
  }

  return {
    isValid: true,
    isBot: false,
    sanitizedData: { name, email }
  };
}
