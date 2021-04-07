package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.framework.baseclass.Base_Class;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount = 4)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature",
					glue = "com\\adactin\\stepdefinition",
					monochrome = true,
					dryRun = false,
					strict = true,
					plugin = {"html:Reports.html",
							  "pretty",
							  "json:Reports/JsonReport.json",
							  "com.cucumber.listener.ExtentCucumberFormatter:ExtentReport/CucumberReport.html",
							  "rerun:rerunReports/FailedScenario.txt"}
					//tags = {"~@Login1"}
				)

public class Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException {

		String browserName = FileReaderManager.getInstance().getCrInstance().getBrowserName();
		driver = Base_Class.browserlaunch(browserName);
	}

	@AfterClass
	public static void tearDown() {

		driver.quit();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
