import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Path to the PDF file in the public directory
    const filePath = join(process.cwd(), 'public', 'Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf');
    
    // Read the file
    const fileBuffer = await readFile(filePath);
    
    // Create response with proper headers for PDF download
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });

    return response;
  } catch (error) {
    console.error('Error serving pitch deck:', error);
    
    return NextResponse.json(
      { 
        error: 'Pitch deck not found',
        message: 'The investor pitch deck is temporarily unavailable. Please contact team.mobileweb@gmail.com'
      },
      { status: 404 }
    );
  }
}
