const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

describe('Issue #2: Tailwind CSS Configuration', () => {
  const projectRoot = process.cwd();
  
  test('should have Tailwind CSS installed', () => {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    expect(packageJson.devDependencies?.tailwindcss).toBeDefined();
    expect(packageJson.devDependencies?.postcss).toBeDefined();
    expect(packageJson.devDependencies?.autoprefixer).toBeDefined();
  });
  
  test('should have tailwind.config.ts with Costco colors', () => {
    const configPath = path.join(projectRoot, 'tailwind.config.ts');
    expect(fs.existsSync(configPath)).toBe(true);
    
    const configContent = fs.readFileSync(configPath, 'utf8');
    expect(configContent).toContain("'costco-red': '#E31837'");
    expect(configContent).toContain("'costco-blue': '#005DAA'");
  });
  
  test('should have PostCSS configuration', () => {
    const postcssConfigPath = path.join(projectRoot, 'postcss.config.mjs');
    expect(fs.existsSync(postcssConfigPath)).toBe(true);
    
    const postcssContent = fs.readFileSync(postcssConfigPath, 'utf8');
    expect(postcssContent).toContain('tailwindcss');
    expect(postcssContent).toContain('autoprefixer');
  });
  
  test('should have global CSS with Tailwind directives', () => {
    const globalCssPath = path.join(projectRoot, 'app/globals.css');
    expect(fs.existsSync(globalCssPath)).toBe(true);
    
    const cssContent = fs.readFileSync(globalCssPath, 'utf8');
    expect(cssContent).toContain('@tailwind base');
    expect(cssContent).toContain('@tailwind components');
    expect(cssContent).toContain('@tailwind utilities');
  });
  
  test('should have CSS variables for Costco colors', () => {
    const globalCssPath = path.join(projectRoot, 'app/globals.css');
    const cssContent = fs.readFileSync(globalCssPath, 'utf8');
    
    expect(cssContent).toContain('--costco-red: #E31837');
    expect(cssContent).toContain('--costco-blue: #005DAA');
  });
  
  test('should have extended Tailwind theme configuration', () => {
    const configPath = path.join(projectRoot, 'tailwind.config.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for extended theme configuration
    expect(configContent).toMatch(/theme:\s*{\s*extend:/);
    
    // Check for responsive breakpoints (should have defaults)
    expect(configContent).toContain('colors:');
  });
  
  test('should compile CSS without errors', async () => {
    const cssPath = path.join(projectRoot, 'app/globals.css');
    const css = fs.readFileSync(cssPath, 'utf8');
    
    try {
      const result = await postcss([
        tailwindcss(path.join(projectRoot, 'tailwind.config.ts')),
        require('autoprefixer')
      ]).process(css, { from: cssPath });
      
      expect(result.css).toBeDefined();
      expect(result.css.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(`CSS compilation failed: ${error.message}`);
    }
  });
  
  test('should have utility classes for Costco colors', async () => {
    const testCss = `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      .test {
        @apply text-costco-red bg-costco-blue;
      }
    `;
    
    try {
      const result = await postcss([
        tailwindcss({
          content: ['./tests/fixtures/issue-2/test.html'],
          theme: {
            extend: {
              colors: {
                'costco-red': '#E31837',
                'costco-blue': '#005DAA',
              }
            }
          }
        })
      ]).process(testCss, { from: undefined });
      
      expect(result.css).toContain('color: rgb(227 24 55');
      expect(result.css).toContain('background-color: rgb(0 93 170');
    } catch (error) {
      throw new Error(`Costco color utilities test failed: ${error.message}`);
    }
  });
});