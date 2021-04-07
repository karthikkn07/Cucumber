package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.LoginPage;

public class PageObjectManager {

	public static WebDriver driver;

	private LoginPage lp;
	
	/*
	 * private SearchHotel sh;
	 * 
	 * private BookingPage bp;
	 */

	public PageObjectManager(WebDriver pdriver) {

		this.driver = pdriver;
		PageFactory.initElements(driver, this);
	}

	public LoginPage getLp() {
		lp = new LoginPage(driver);
		return lp;
	}

	// LoginPage lp = new LoginPage(driver);

}
