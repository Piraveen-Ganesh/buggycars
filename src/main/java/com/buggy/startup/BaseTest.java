package com.buggy.startup;

import static com.buggy.startup.PropertyLoader.returnConfigValue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.Listeners;

import com.aventstack.extentreports.testng.listener.ExtentITestListenerClassAdapter;
import com.buggy.driver.DriverFactory;
import com.buggy.dto.UserProfile;
import com.buggy.page.DashboaedPage;
import com.buggy.page.RegisterPage;
import com.buggy.page.VotingPage;
import com.buggy.report.ReportListener;

import io.cucumber.java.After;
import io.cucumber.java.Before;

@Listeners({ ExtentITestListenerClassAdapter.class, ReportListener.class })
public class BaseTest {

	public static WebDriver driver;
	public static DashboaedPage dashboardpage;
	public static RegisterPage registrationpage;
	public static VotingPage votingpage;
	public static UserProfile userprofile;

	public static void setDriver(WebDriver driverParam) {
		driver = driverParam;
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public static void initiatePages() {

		dashboardpage = new DashboaedPage(driver);
		registrationpage = new RegisterPage(driver);
		votingpage = new VotingPage(driver);
		userprofile = new UserProfile();
	}

}