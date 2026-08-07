import { validateSubscriptionPayload, extractClientIP } from './validator.mjs';
import { saveSubscription } from './repository.mjs';

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
  };

  // Manejo de Preflight CORS (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (!event.body) {
      return buildResponse(400, headers, { 
        message: 'El cuerpo de la petición está vacío.', 
        code: 'EMPTY_BODY' 
      });
    }

    const payload = JSON.parse(event.body);

    // Validación y Sanitización de Entradas
    const validation = validateSubscriptionPayload(payload);

    // Extracción de Metadatos
    const ipAddress = extractClientIP(event);
    const userAgent = event.headers['User-Agent'] || event.headers['user-agent'] || 'Unknown';

    // Almacenamiento en base de datos
    await saveSubscription({
      email: validation.sanitizedData.email,
      name: validation.sanitizedData.name,
      ipAddress,
      userAgent
    });

    return buildResponse(201, headers, { 
      message: '¡Gracias por suscribirte! Registro exitoso.' 
    });

  } catch (error) {
    // Captura de duplicados en DynamoDB (ConditionalCheckFailedException)
    if (error.name === 'ConditionalCheckFailedException') {
      return buildResponse(409, headers, {
        message: 'Este correo electrónico ya se encuentra registrado.',
        code: 'DUPLICATE_EMAIL',
      });
    }

    console.error('Error no controlado:', error);
    return buildResponse(500, headers, {
      message: 'Ocurrió un error interno al procesar tu solicitud.',
      code: 'INTERNAL_ERROR',
    });
  }
};

function buildResponse(statusCode, headers, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}
