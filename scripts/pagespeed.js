import psi from 'psi';

async function runTest() {
  const url = process.argv[2] || process.env.APP_URL;
  
  if (!url) {
    console.error('Error: Please provide a URL (npm run pagespeed https://example.com) or set APP_URL environment variable.');
    process.exit(1);
  }

  console.log(`Running PageSpeed Insights for: ${url}...`);

  try {
    // Desktop test
    const { data: desktopData } = await psi(url, {
      strategy: 'desktop'
    });
    console.log('\n--- DESKTOP ---');
    console.log(`Speed Score: ${desktopData.lighthouseResult.categories.performance.score * 100}`);
    
    // Mobile test
    const { data: mobileData } = await psi(url, {
      strategy: 'mobile'
    });
    console.log('\n--- MOBILE ---');
    console.log(`Speed Score: ${mobileData.lighthouseResult.categories.performance.score * 100}`);
    
  } catch (error) {
    console.error('PageSpeed test failed:', error.message);
  }
}

runTest();
