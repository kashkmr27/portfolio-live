import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const originalUrl = searchParams.get('url');
    const imageId = searchParams.get('id');
    const filename = searchParams.get('filename');

    if (!originalUrl) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }
    try {
        // Fetch the image from WordPress
        const response = await fetch(originalUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status}`);
        }

        // Get the image data
        const imageBuffer = await response.arrayBuffer();
        const contentType = response.headers.get('content-type') || 'image/jpeg';

        // Return the optimized image
        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    } catch (error) {
        console.error('Error optimizing image:', error);
        return new NextResponse('Failed to optimize image', { status: 500 });
    }
} 