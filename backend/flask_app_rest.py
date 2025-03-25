from flask import jsonify, request, session, Blueprint
import modelo.repositorio_inspector
from __main__ import app
import os
from datetime import datetime

app = Blueprint('rest_app', __name__)

ruta_servicios_rest = "/rest/"

@app.route(ruta_servicios_rest)
def inicio_servicios_rest():
    return "REST OPERATIVOS"

@app.route(ruta_servicios_rest + "/obtener_incidencias")
def obtener_incidencias():
    incidencias = modelo.repositorio_inspector.obtener_incidencias()
    print(incidencias)
    return jsonify(incidencias)


@app.route(ruta_servicios_rest + "/registrar_incidencia", methods=["POST"])
def registrar_incidencia():
    
        print("Headers:", request.headers)
        print("Raw Data:", request.data)  # Muestra los datos sin procesar
        data = request.get_json()  # Procesa el JSON
        print("JSON Data:", data)

    
        elemento = request.get_json()["elemento"]
        instalacion = request.get_json()["instalacion"]
        ubicacion = request.get_json()["ubicacion"]
        tipo = request.get_json()["tipo"]
        estado = request.get_json()["estado"]
        fecha = request.get_json()["fecha"]
        observaciones = request.get_json()["observaciones"]
        
        print(f"elemento: {elemento}, instalacion: {instalacion}, ubicacion: {ubicacion}, tipo: {tipo}, estado: {estado}, fecha: {fecha}, observaciones: {observaciones}")
        
        modelo.repositorio_inspector.registrar_incidencia(elemento, instalacion, ubicacion, tipo, estado, fecha, observaciones)
        
        return jsonify("ok")
    
    
@app.route(ruta_servicios_rest + "/obtener_incidencia_id", methods=["GET"])
def obtener_incidencia_id():
    id = request.args.get("id")
    incidencia = modelo.repositorio_inspector.obtener_incidencia_id(id)
    return jsonify(incidencia)
     