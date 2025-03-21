import modelo.conexion

# todoo
def obtener_incidencias():
    conexion = modelo.conexion.conectar()
    sql = "SELECT * FROM incidencias"
    cursor = conexion.cursor(dictionary=True)
    cursor.execute(sql)
    incidencias = cursor.fetchall()
    cursor.close()
    conexion.close()
    
    #print all the data in a way that is easy to read
    for incidencia in incidencias:
        print(incidencia["elemento"], incidencia["instalacion"], incidencia["ubicacion"], incidencia["tipo"], incidencia["estado"])
  
  
    return incidencias

def registrar_incidencia(elemento, instalacion, ubicacion, tipo, estado, fecha, observaciones):
    conexion = modelo.conexion.conectar()
    sql = "INSERT INTO incidencias (elemento, instalacion, ubicacion, tipo, estado, fecha, observaciones) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values = (elemento, instalacion, ubicacion, tipo, estado, fecha, observaciones)
    cursor = conexion.cursor()
    cursor.execute(sql, values)
    conexion.commit()
    cursor.close()
    conexion.close()