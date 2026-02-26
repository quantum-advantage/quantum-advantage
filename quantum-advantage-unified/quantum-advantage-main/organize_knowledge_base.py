#!/usr/bin/env python3
"""
DNA-Lang Knowledge Base Organizer
Creates a searchable, indexed knowledge graph of all Desktop files
"""

import os
import json
import hashlib
import mimetypes
from pathlib import Path
from datetime import datetime
from collections import defaultdict

# DNA-Lang Constants
LAMBDA_PHI = 2.176435e-8
THETA_LOCK = 51.843
PHI_THRESHOLD = 0.7734

class KnowledgeBaseOrganizer:
    def __init__(self, root_path):
        self.root = Path(root_path)
        self.index = {
            "metadata": {
                "created": datetime.now().isoformat(),
                "root": str(root_path),
                "framework": "dna::}{::lang v51.843",
                "constants": {
                    "LAMBDA_PHI": LAMBDA_PHI,
                    "THETA_LOCK": THETA_LOCK,
                    "PHI_THRESHOLD": PHI_THRESHOLD
                }
            },
            "categories": defaultdict(list),
            "files": [],
            "duplicates": [],
            "knowledge_graph": {
                "nodes": [],
                "edges": []
            }
        }
        self.file_hashes = {}
        
    def categorize_file(self, filepath):
        """Categorize file based on name and type"""
        name = filepath.name.lower()
        suffix = filepath.suffix.lower()
        
        # Documentation
        if any(x in name for x in ['readme', 'doc', 'guide', 'manual', 'report', 'summary']):
            return 'documentation'
        
        # Quantum Research
        if any(x in name for x in ['quantum', 'qubit', 'circuit', 'ibm', 'fez', 'aeterna', 'porta']):
            return 'quantum_research'
        
        # Deployment/Operations
        if any(x in name for x in ['deploy', 'ignition', 'sweep', 'master']):
            return 'deployment'
        
        # Analysis/Results
        if any(x in name for x in ['result', 'analysis', 'evidence', 'validation', 'proof']):
            return 'analysis_results'
        
        # Consciousness/CCCE
        if any(x in name for x in ['consciousness', 'ccce', 'phi', 'lambda', 'nclm']):
            return 'consciousness'
        
        # Code/Scripts
        if suffix in ['.py', '.js', '.tsx', '.ts', '.sh']:
            return 'code'
        
        # Data
        if suffix in ['.json', '.csv', '.txt']:
            return 'data'
        
        # Media
        if suffix in ['.png', '.jpg', '.jpeg', '.pdf']:
            return 'media'
        
        # Archives
        if suffix in ['.zip', '.tar', '.gz']:
            return 'archives'
        
        return 'other'
    
    def get_file_hash(self, filepath):
        """Calculate SHA256 hash of file"""
        try:
            sha256_hash = hashlib.sha256()
            with open(filepath, "rb") as f:
                for byte_block in iter(lambda: f.read(4096), b""):
                    sha256_hash.update(byte_block)
            return sha256_hash.hexdigest()
        except:
            return None
    
    def extract_keywords(self, filename):
        """Extract meaningful keywords from filename"""
        keywords = []
        name = filename.stem.lower()
        
        # Split on common separators
        parts = name.replace('_', ' ').replace('-', ' ').replace('(', ' ').replace(')', ' ').split()
        
        # Filter meaningful keywords
        stopwords = {'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for'}
        keywords = [p for p in parts if len(p) > 2 and p not in stopwords]
        
        return keywords
    
    def scan_desktop(self):
        """Scan all files on Desktop"""
        print("🔍 Scanning Desktop files...")
        
        for item in self.root.iterdir():
            # Skip hidden files and certain directories
            if item.name.startswith('.'):
                continue
            
            if item.is_file():
                self.process_file(item)
            elif item.is_dir():
                self.process_directory(item)
        
        print(f"✓ Scanned {len(self.index['files'])} files")
    
    def process_file(self, filepath):
        """Process individual file"""
        category = self.categorize_file(filepath)
        file_hash = self.get_file_hash(filepath)
        keywords = self.extract_keywords(filepath)
        
        file_info = {
            "path": str(filepath),
            "name": filepath.name,
            "category": category,
            "size": filepath.stat().st_size if filepath.exists() else 0,
            "modified": datetime.fromtimestamp(filepath.stat().st_mtime).isoformat() if filepath.exists() else None,
            "hash": file_hash,
            "keywords": keywords,
            "mime_type": mimetypes.guess_type(str(filepath))[0]
        }
        
        self.index['files'].append(file_info)
        self.index['categories'][category].append(file_info)
        
        # Track duplicates
        if file_hash:
            if file_hash in self.file_hashes:
                self.index['duplicates'].append({
                    "hash": file_hash,
                    "files": [self.file_hashes[file_hash], str(filepath)]
                })
            else:
                self.file_hashes[file_hash] = str(filepath)
        
        # Add to knowledge graph
        self.index['knowledge_graph']['nodes'].append({
            "id": str(filepath),
            "label": filepath.name,
            "category": category,
            "keywords": keywords
        })
    
    def process_directory(self, dirpath):
        """Process directory (non-recursive for now)"""
        try:
            file_count = len(list(dirpath.iterdir()))
            self.index['categories']['directories'].append({
                "path": str(dirpath),
                "name": dirpath.name,
                "file_count": file_count
            })
        except PermissionError:
            pass
    
    def build_knowledge_graph(self):
        """Build connections between related files"""
        print("🧠 Building knowledge graph...")
        
        files = self.index['files']
        
        for i, file1 in enumerate(files):
            for file2 in files[i+1:]:
                # Check for keyword overlap
                keywords1 = set(file1['keywords'])
                keywords2 = set(file2['keywords'])
                overlap = keywords1.intersection(keywords2)
                
                if len(overlap) >= 2:  # At least 2 shared keywords
                    self.index['knowledge_graph']['edges'].append({
                        "source": file1['path'],
                        "target": file2['path'],
                        "strength": len(overlap),
                        "shared_keywords": list(overlap)
                    })
        
        print(f"✓ Created {len(self.index['knowledge_graph']['edges'])} connections")
    
    def generate_report(self):
        """Generate summary report"""
        report = []
        report.append("=" * 80)
        report.append("DNA-LANG KNOWLEDGE BASE ANALYSIS")
        report.append("=" * 80)
        report.append(f"Framework: dna::}{{::lang v51.843")
        report.append(f"Scanned: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append("")
        
        # Category breakdown
        report.append("📊 CATEGORY BREAKDOWN:")
        report.append("-" * 80)
        for category, files in sorted(self.index['categories'].items()):
            if category != 'directories':
                total_size = sum(f.get('size', 0) for f in files)
                report.append(f"  {category.upper():30s} {len(files):4d} files  {total_size/1024/1024:8.2f} MB")
        report.append("")
        
        # Duplicates
        if self.index['duplicates']:
            report.append(f"⚠️  DUPLICATES FOUND: {len(self.index['duplicates'])} groups")
            report.append("")
        
        # Top keywords
        keyword_freq = defaultdict(int)
        for file in self.index['files']:
            for kw in file['keywords']:
                keyword_freq[kw] += 1
        
        report.append("🔑 TOP KEYWORDS:")
        report.append("-" * 80)
        for kw, count in sorted(keyword_freq.items(), key=lambda x: x[1], reverse=True)[:20]:
            report.append(f"  {kw:30s} {count:4d} occurrences")
        report.append("")
        
        # Knowledge graph stats
        report.append("🌐 KNOWLEDGE GRAPH:")
        report.append("-" * 80)
        report.append(f"  Nodes: {len(self.index['knowledge_graph']['nodes'])}")
        report.append(f"  Edges: {len(self.index['knowledge_graph']['edges'])}")
        report.append("")
        
        report.append("=" * 80)
        
        return "\n".join(report)
    
    def save(self, output_dir):
        """Save index and reports"""
        output_dir = Path(output_dir)
        output_dir.mkdir(exist_ok=True)
        
        # Save full index
        index_path = output_dir / "knowledge_base_index.json"
        with open(index_path, 'w') as f:
            json.dump(self.index, f, indent=2, default=str)
        print(f"✓ Saved index: {index_path}")
        
        # Save report
        report_path = output_dir / "KNOWLEDGE_BASE_REPORT.txt"
        with open(report_path, 'w') as f:
            f.write(self.generate_report())
        print(f"✓ Saved report: {report_path}")
        
        # Save category manifests
        for category, files in self.index['categories'].items():
            if category != 'directories' and files:
                cat_path = output_dir / f"category_{category}.json"
                with open(cat_path, 'w') as f:
                    json.dump(files, f, indent=2, default=str)
        print(f"✓ Saved {len(self.index['categories'])} category manifests")

if __name__ == "__main__":
    print("━" * 80)
    print("DNA-LANG KNOWLEDGE BASE ORGANIZER")
    print("Framework: dna::}{::lang v51.843")
    print("━" * 80)
    print()
    
    desktop = Path.home() / "Desktop"
    kb = KnowledgeBaseOrganizer(desktop)
    
    # Scan
    kb.scan_desktop()
    
    # Build graph
    kb.build_knowledge_graph()
    
    # Save
    output_dir = desktop / "KNOWLEDGE_BASE"
    kb.save(output_dir)
    
    # Print report
    print()
    print(kb.generate_report())
    
    print()
    print("━" * 80)
    print("✅ KNOWLEDGE BASE COMPLETE")
    print(f"📁 Output: {output_dir}")
    print("━" * 80)
