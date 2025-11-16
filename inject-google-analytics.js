// Inject Google Analytics & GTM in all HTML files
// Execute: node inject-google-analytics.js

const fs = require('fs');
const path = require('path');

const googleTagManager = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZTKC6VC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

const googleAnalytics = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZTKC6VC');</script>
<!-- End Google Tag Manager -->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T01JJ59170"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-T01JJ59170');
</script>
<!-- End Google Analytics -->`;

function injectAnalytics(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // إضافة Google Tag Manager في <head>
    if (!content.includes('GTM-KZTKC6VC')) {
        content = content.replace('</head>', `${googleAnalytics}\n</head>`);
    }
    
    // إضافة noscript في <body> مباشرة بعد فتحه
    if (!content.includes('noscript')) {
        content = content.replace('<body>', `<body>\n${googleTagManager}`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
}

// Inject in index.html
if (fs.existsSync('index.html')) {
    injectAnalytics('index.html');
    console.log('✅ index.html');
}

// Inject in legal pages
const legalPages = ['about.html', 'privacy.html', 'terms.html', 'return.html', 'shipping.html'];
legalPages.forEach(page => {
    if (fs.existsSync(page)) {
        injectAnalytics(page);
        console.log(`✅ ${page}`);
    }
});

// Inject in all product pages
if (fs.existsSync('products-pages')) {
    const files = fs.readdirSync('products-pages');
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join('products-pages', file);
            injectAnalytics(filePath);
            console.log(`✅ products-pages/${file}`);
        }
    });
}

console.log('\n✨ تم حقن Google Analytics و GTM في جميع صفحات الموقع!\n');