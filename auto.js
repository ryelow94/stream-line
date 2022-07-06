const {By,Key,Builder} = require("selenium-webdriver");
const { addConsoleHandler } = require("selenium-webdriver/lib/logging");
require("chromedriver");
 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
       
      await driver.findElement(By.id(searchString));

       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://ryelow94.github.io/stream-line/");
 
        console.log('Title is:',title);
 
        // //It is always a safe practice to quit the browser after execution
        // await driver.quit();
 
} 

example()

