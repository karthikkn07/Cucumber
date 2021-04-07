package com.adactin.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "@rerunReports/FailedScenario.txt",
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
public class TestRunner {

}
