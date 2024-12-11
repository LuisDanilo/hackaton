import dbConnect from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET(request) {
    await dbConnect();

    try {
        const ciudades = await Location.distinct('ciudad'); // Obtener ciudades únicas directamente

        return new Response(JSON.stringify(ciudades), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error al obtener las ciudades:', error);
        return new Response(JSON.stringify({ error: 'Error al obtener las ciudades' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
