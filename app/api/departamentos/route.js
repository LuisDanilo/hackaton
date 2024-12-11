import dbConnect from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET(request) {
    await dbConnect();

    try {
        const departamentos = await Location.distinct('departamento');

        return new Response(JSON.stringify(departamentos), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error al obtener los departamentos:', error);
        return new Response(JSON.stringify({ error: 'Error al obtener los departamentos' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
