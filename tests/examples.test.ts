// File: dotaislash-examples/tests/examples.test.ts
// What: Validate all example .ai/ folders
// Why: Ensure examples are valid, complete, and useful
// Related: examples/*/

import { describe, test, expect } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const EXAMPLES_DIR = join(__dirname, '../examples');
const CLI_PATH = '/var/www/dotAIslash/dotaislash-cli/dist/bin.js';

// Dynamically discover all examples
function getExamples(): string[] {
  if (!existsSync(EXAMPLES_DIR)) return [];
  return readdirSync(EXAMPLES_DIR).filter(name => {
    const path = join(EXAMPLES_DIR, name);
    return existsSync(path) && readdirSync(path).length > 0;
  });
}

const examples = getExamples();

describe('Example Structure Validation', () => {
  for (const example of examples) {
    describe(`Example: ${example}`, () => {
      const examplePath = join(EXAMPLES_DIR, example);
      const aiPath = join(examplePath, '.ai');
      
      test('has .ai/ folder', () => {
        expect(existsSync(aiPath)).toBe(true);
      });
      
      test('has context.json', () => {
        const contextPath = join(aiPath, 'context.json');
        expect(existsSync(contextPath)).toBe(true);
      });
      
      test('context.json is valid JSON', () => {
        const contextPath = join(aiPath, 'context.json');
        const content = readFileSync(contextPath, 'utf-8');
        
        expect(() => JSON.parse(content)).not.toThrow();
      });
      
      test('context.json has required version field', () => {
        const contextPath = join(aiPath, 'context.json');
        const content = JSON.parse(readFileSync(contextPath, 'utf-8'));
        
        expect(content.version).toBe('1.0');
      });
      
      test('has README.md', () => {
        const readmePath = join(examplePath, 'README.md');
        expect(existsSync(readmePath)).toBe(true);
      });
      
      test('referenced rules exist', () => {
        const contextPath = join(aiPath, 'context.json');
        const context = JSON.parse(readFileSync(contextPath, 'utf-8'));
        
        if (context.rules && Array.isArray(context.rules)) {
          for (const rule of context.rules) {
            const rulePath = join(aiPath, rule);
            expect(existsSync(rulePath), `Rule ${rule} should exist`).toBe(true);
          }
        }
      });
      
      test('referenced agents exist', () => {
        const contextPath = join(aiPath, 'context.json');
        const context = JSON.parse(readFileSync(contextPath, 'utf-8'));
        
        if (context.agents && Array.isArray(context.agents)) {
          for (const agent of context.agents) {
            const agentPath = join(aiPath, agent);
            expect(existsSync(agentPath), `Agent ${agent} should exist`).toBe(true);
          }
        }
      });
      
      test('profiles are valid if present', () => {
        const profilesPath = join(aiPath, 'profiles');
        
        if (existsSync(profilesPath)) {
          const profiles = readdirSync(profilesPath).filter(f => f.endsWith('.json'));
          
          for (const profileFile of profiles) {
            const profilePath = join(profilesPath, profileFile);
            const content = readFileSync(profilePath, 'utf-8');
            
            expect(() => JSON.parse(content)).not.toThrow();
            
            const profile = JSON.parse(content);
            expect(profile.version).toBe('1.0');
            expect(profile.merge).toMatch(/^(deep|shallow|replace)$/);
          }
        }
      });
      
      test('rule files have proper markdown', () => {
        const rulesPath = join(aiPath, 'rules');
        
        if (existsSync(rulesPath)) {
          const rules = readdirSync(rulesPath).filter(f => f.endsWith('.md'));
          
          for (const ruleFile of rules) {
            const rulePath = join(rulesPath, ruleFile);
            const content = readFileSync(rulePath, 'utf-8');
            
            expect(content.length).toBeGreaterThan(0);
            expect(content).toContain('#'); // Has markdown headers
          }
        }
      });
    });
  }
});

describe('Example Content Quality', () => {
  test('all examples have unique metadata names', () => {
    const names = new Set<string>();
    
    for (const example of examples) {
      const contextPath = join(EXAMPLES_DIR, example, '.ai', 'context.json');
      if (!existsSync(contextPath)) continue;
      
      const context = JSON.parse(readFileSync(contextPath, 'utf-8'));
      if (context.metadata?.name) {
        expect(names.has(context.metadata.name), `Duplicate name: ${context.metadata.name}`).toBe(false);
        names.add(context.metadata.name);
      }
    }
  });
  
  test('all examples have creation dates', () => {
    for (const example of examples) {
      const contextPath = join(EXAMPLES_DIR, example, '.ai', 'context.json');
      if (!existsSync(contextPath)) continue;
      
      const context = JSON.parse(readFileSync(contextPath, 'utf-8'));
      
      // Skip minimal example which might not have metadata
      if (example === 'minimal') continue;
      
      if (context.metadata) {
        expect(context.metadata.created, `${example} should have creation date`).toBeTruthy();
      }
    }
  });
  
  test('examples have appropriate tags', () => {
    const taggedExamples = examples.filter(e => e !== 'minimal');
    
    for (const example of taggedExamples) {
      const contextPath = join(EXAMPLES_DIR, example, '.ai', 'context.json');
      if (!existsSync(contextPath)) continue;
      
      const context = JSON.parse(readFileSync(contextPath, 'utf-8'));
      
      if (context.metadata?.tags) {
        expect(Array.isArray(context.metadata.tags)).toBe(true);
        expect(context.metadata.tags.length).toBeGreaterThan(0);
      }
    }
  });
});

describe('Example Count', () => {
  test('has at least 10 examples', () => {
    expect(examples.length).toBeGreaterThanOrEqual(10);
  });
  
  test('all examples are in expected list', () => {
    const expected = [
      'minimal',
      'quick-start',
      'typescript-project',
      'python-project',
      'nextjs-app',
      'fastapi-backend',
      'monorepo',
      'react-native',
      'open-source',
      'enterprise'
    ];
    
    for (const exp of expected) {
      expect(examples.includes(exp), `Should include ${exp}`).toBe(true);
    }
  });
});
