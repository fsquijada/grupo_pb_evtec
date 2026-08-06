# EVALUACIÓN TÉCNICA GRUPO PB

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura](#arquitectura)

## Introducción

Solicitud de una landing page responsiva para la captura de datos por medio de un formulario.

## Arquitectura

<img align='center' src="./images/01_arquitectura.png" width="100%">

---

## Requerimientos del Sistema

### Requerimientos Funcionales

- `RF-01:` Creación de una landing page con tema libre.
- `RF-02:` Formulario con validación de datos como el nombre, correo, teléfono, mensaje, etc
- `RF-03:` Envío de información de formulario a través de una función Lambda.
- `RF-04:` Se almacena la información en una base de datos en AWS.
- `RF-05:` La UI debe brindar feedback al usuario en cada acción (indicadores de carga, manejo de errores, mensajes de confirmación, validaciones de campos, etc).
- `RF-06:` El sistema debe de brindar retroalimentación clara sobre el resultado del envío (éxito, error, validaciones).

### No Funcionales (RNF)

- `RNF-01:` Arquitectura global Serverless utilizando AWS.
- `RNF-02:` Landing page alojado en un bucket S3 de AWS y distribuida a través de CloudFront.
- `RNF-03:` El formulario debe conectarse a una función Lambda a través de una API Gateway de AWS.
- `RNF-04:` La Lambda debe de conectarse a una base de datos de AWS donde se almacenará la información capturada en el formulario.
- `RNF-05:` Toda la solución debe estar publicada utilizando los servicios de AWS: S3 + CloudFront, Lambda y API Gateway para el backend.

---






