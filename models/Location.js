import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  ubicacion: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  ciudad: { type: String, required: true },
  departamento: { type: String, required: true },
  tipo_actividad: { type: String, required: true },
  contacto: {
    telefono: { type: String, required: true },
    email: { type: String, required: true },
  },
  imagen: { type: String, required: true },
  popular: { type: Boolean, required: true },
  tours: { type: Number, required: true },
  actividades: { type: Number, required: true },
});

export default mongoose.models.Location || mongoose.model('Location', LocationSchema); 