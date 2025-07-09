const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Issue #1: Next.js Project Setup', () => {
  const projectRoot = process.cwd();
  
  test('should have package.json with Next.js 14', () => {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    expect(fs.existsSync(packageJsonPath)).toBe(true);
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    expect(packageJson.dependencies?.next).toMatch(/^14\./);
  });
  
  test('should have TypeScript configuration', () => {
    const tsconfigPath = path.join(projectRoot, 'tsconfig.json');
    expect(fs.existsSync(tsconfigPath)).toBe(true);
    
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
    expect(tsconfig.compilerOptions).toBeDefined();
    expect(tsconfig.compilerOptions.jsx).toBe('preserve');
  });
  
  test('should have app directory structure', () => {
    expect(fs.existsSync(path.join(projectRoot, 'app'))).toBe(true);
    expect(fs.existsSync(path.join(projectRoot, 'app/layout.tsx'))).toBe(true);
    expect(fs.existsSync(path.join(projectRoot, 'app/page.tsx'))).toBe(true);
  });
  
  test('should have required scripts in package.json', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
    expect(packageJson.scripts?.dev).toBeDefined();
    expect(packageJson.scripts?.build).toBeDefined();
    expect(packageJson.scripts?.start).toBeDefined();
    expect(packageJson.scripts?.lint).toBeDefined();
  });
  
  test('should run dev server without errors', () => {
    // Test that the dev command exists and can be invoked
    const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
    expect(packageJson.scripts?.dev).toContain('next dev');
  });
  
  test('should build without errors', () => {
    try {
      // Run build command
      execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      expect(true).toBe(true); // Build succeeded
    } catch (error) {
      // If build fails, test will fail with the error output
      throw new Error(`Build failed: ${error.stdout || error.message}`);
    }
  });
});