const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

//Conexion a la db
const PUERTO = 3000

//Modificar la conexion para otro usuario si es necesario
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'bd_centro_artesanal_ug',
        user: 'root',
        password: '123456'
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if (error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('Conexion exitosa de la API-Express')
})

// Rutas y métodos de la tabla perfil_estudiante
app.get('/perfil_estudiantes', (req, res) => {
    const query = `SELECT * FROM perfil_estudiante;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/perfil_estudiantes/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM perfil_estudiante WHERE idperfil_estudiante=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/perfil_estudiantes/agregar', (req, res) => {
    const perfilEstudiante = {
        foto_perfil: req.body.foto_perfil,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion_domiciliaria: req.body.direccion_domiciliaria,
        correo_electronico: req.body.correo_electronico,
        telefono: req.body.telefono,
        nivel_educativo: req.body.nivel_educativo
    };

    const query = `INSERT INTO perfil_estudiante SET ?`;
    conexion.query(query, perfilEstudiante, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el perfil del estudiante`);
    });
});

app.put('/perfil_estudiantes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        foto_perfil,
        cedula,
        nombre,
        apellido,
        edad,
        direccion_domiciliaria,
        correo_electronico,
        telefono,
        nivel_educativo
    } = req.body;

    const query = `UPDATE perfil_estudiante SET
        foto_perfil='${foto_perfil}',
        cedula='${cedula}',
        nombre='${nombre}',
        apellido='${apellido}',
        edad='${edad}',
        direccion_domiciliaria='${direccion_domiciliaria}',
        correo_electronico='${correo_electronico}',
        telefono='${telefono}',
        nivel_educativo='${nivel_educativo}'
        WHERE idperfil_estudiante='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el perfil del estudiante`);
    });
});

app.delete('/perfil_estudiantes/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM perfil_estudiante WHERE idperfil_estudiante=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);

        res.json(`Se eliminó correctamente el perfil del estudiante`);
    });
});

//Rutas y metodos de la tabla horario_estudiante


//Rutas y metodos de la tabla perfil_docente


//Rutas y metodos de la tabla salario


//Rutas y metodos de la tabla calificaciones


//Rutas y metodos de la tabla modulo


//Rutas y metodos de la tabla horario_docente


