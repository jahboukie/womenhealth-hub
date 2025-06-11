import { NextResponse } from 'next/server';
import { db } from '../../../../lib/db/neon';
import { contacts } from '../../../../lib/db/schema';

export async function GET() {
  try {
    // Test database connection
    const result = await db.select().from(contacts).limit(1);
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      timestamp: new Date().toISOString(),
      recordCount: result.length
    });
  } catch (error) {
    console.error('Database connection error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
