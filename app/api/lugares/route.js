import dbConnect from '../../../lib/mongodb';
import Location from '../../../models/Location';

export async function GET(request) {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const filters = {};

    for (const [key, value] of searchParams) {
        filters[key] = value;
    }

    let locations = await Location.find(filters);

    return new Response(JSON.stringify(locations), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request) {
    await dbConnect();

    const body = await request.json();

    const newLocation = new Location(body);

    try {
        const savedLocation = await newLocation.save();
        return new Response(JSON.stringify(savedLocation), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al crear la ubicación' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}