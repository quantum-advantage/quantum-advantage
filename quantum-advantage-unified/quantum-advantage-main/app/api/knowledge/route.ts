import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query') || ''
    const category = searchParams.get('category') || 'all'
    
    // Load knowledge base
    const kbPath = path.join(process.env.HOME || '', 'Desktop', 'KNOWLEDGE_BASE', 'knowledge_base_index.json')
    
    if (!fs.existsSync(kbPath)) {
      return NextResponse.json({ error: 'Knowledge base not found' }, { status: 404 })
    }
    
    const kb = JSON.parse(fs.readFileSync(kbPath, 'utf-8'))
    
    let files = kb.files
    
    // Filter by category
    if (category !== 'all') {
      files = files.filter((f: any) => f.category === category)
    }
    
    // Filter by search query
    if (query) {
      const term = query.toLowerCase()
      files = files.filter((f: any) => 
        f.name.toLowerCase().includes(term) ||
        f.keywords.some((k: string) => k.toLowerCase().includes(term))
      )
    }
    
    return NextResponse.json({
      success: true,
      total: files.length,
      files: files.slice(0, 50), // Limit to 50 results
      categories: Object.keys(kb.categories).filter(c => c !== 'directories'),
      stats: {
        total_files: kb.files.length,
        total_connections: kb.knowledge_graph.edges.length,
        duplicates: kb.duplicates.length
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { file_path } = body
    
    // Load knowledge base
    const kbPath = path.join(process.env.HOME || '', 'Desktop', 'KNOWLEDGE_BASE', 'knowledge_base_index.json')
    const kb = JSON.parse(fs.readFileSync(kbPath, 'utf-8'))
    
    // Find file and its connections
    const file = kb.files.find((f: any) => f.path === file_path)
    
    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
    
    // Find related files
    const connections = kb.knowledge_graph.edges.filter((e: any) => 
      e.source === file_path || e.target === file_path
    ).map((e: any) => {
      const relatedPath = e.source === file_path ? e.target : e.source
      const relatedFile = kb.files.find((f: any) => f.path === relatedPath)
      return {
        ...relatedFile,
        connection_strength: e.strength,
        shared_keywords: e.shared_keywords
      }
    })
    
    return NextResponse.json({
      success: true,
      file,
      connections: connections.slice(0, 10) // Top 10 connections
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
