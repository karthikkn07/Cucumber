package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.Runner;
import com.framework.baseclass.Base_Class;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class LoginStepDefinition extends Base_Class {

	public static WebDriver driver = Runner.driver;
	
	PageObjectManager pom = new PageObjectManager(driver);
	
	
	@Given("^User launch application$")
	public void user_launch_application() throws Throwable {
		
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		get(url);
	}

	@When("^User enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
		
		sendkeys(pom.getLp().getUsername(), arg1);
	}

	@When("^User enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
		
		sendkeys(pom.getLp().getPassword(), arg1);
	}

	@Then("^User verify valid username and valid password$")
	public void user_verify_valid_username_and_valid_password() throws Throwable {
		click(pom.getLp().getLogin_btn());
		Assert.assertEquals("abc", "ABC");
		
		
		
		
		
		
		
	}

}
