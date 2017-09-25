const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    const viewports = [1600, 1000, 800, 600, 500];

    await page.goto('https://tutorialzine.com');

    await page.click('.search-trigger');

    await page.focus('#search-form-top input');

    await page.type('JavaScript', {delay: 200});

    const searchForm = await page.$('#search-form-top');
    await searchForm.evaluate(searchForm => searchForm.submit());

    for (let i = 0; i < viewports.length; i++) {
        let vw = viewports[i];

        await page.setViewport({
            width: vw,
            height: 1000
        });

        await page.screenshot({
            page: `screen-${vw}.png`,
            fullPage: true
        });
        
    }

    browser.close();
})();