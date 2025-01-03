import dbConnect from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET(request) {
    await dbConnect();

    try {
        const departamentos = await Location.distinct('departamento');

        const departamentosConEstado = departamentos.map(departamento => {
            return {
                nombre: departamento,
                desabilitado: false
            };
        });

        departamentosConEstado.push(
            { name: 'Departamento 1', active: false },
            { name: 'Departamento 2', active: false }
        );

        return new Response(JSON.stringify(departamentosConEstado), {
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
