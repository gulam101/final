using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;


namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            // Targets the web driver
            IWebDriver driver = new ChromeDriver(@"C:\webdrivers");
            // Loads up web browser
            driver.manage.window.maximize();
            // Navigates to web app URL
            driver.Navigate().GoToUrl("http://127.0.0.1:5501/index.html");
            // Targets sign in
            IWebElement menu = driver.FindElement(By.CssSelector(" body > div.top-menu-bar > div.btn-container > button:nth-child(1) "));
            // Adds user content information
            IWebElement email = driver.FindElement(By.XPath(" /html/body/div[2]/div[6]/form/div[2]/input[1] "));
            IWebElement passowrd = driver.FindElement(By.CssSelector(" body > div.top-menu-bar > div.btn-container > button:nth-child(1) "));
            IWebElement menu = driver.FindElement(By.CssSelector(" body > div.top-menu-bar > div.btn-container > button:nth-child(1) "));
            IWebElement menu = driver.FindElement(By.CssSelector(" body > div.top-menu-bar > div.btn-container > button:nth-child(1) "));
            // Waits for the application at 12 seconds
            Thread.Sleep(12000);
            // Exits the webdriver
            driver.Quit();
        }


        
    }
}