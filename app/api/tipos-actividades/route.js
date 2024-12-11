import dbConnect from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET(request) {
    await dbConnect();

    try {
        const tipoActividad = await Location.distinct('tipo_actividad');

        return new Response(JSON.stringify(tipoActividad), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error al obtener las tipo:', error);
        return new Response(JSON.stringify({ error: 'Error al obtener las tipo' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
