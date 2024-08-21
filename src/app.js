import express from 'express'
import config from './config'
import empresasRoutes from './routes/empresas.routes'
import personaRoutes from './routes/personas.routes'
import puestosRoutes from './routes/puestos_trabajo.routes'
import methodOverride from 'method-override';
import cors from 'cors'
import path from "path";

const app = express();

//Settings
app.set('port', config.port);
app.use(cors())
app.use(express.urlencoded({extended:false}));



app.set('public', path.join(__dirname, 'public')) 
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))




//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(empresasRoutes, puestosRoutes);
app.use(personaRoutes);

export default app