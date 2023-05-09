package com.buggycar.steps;

import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.testng.Assert;

import com.buggy.startup.BaseTest;
import com.buggy.utils.WaitElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class BuggyCarsTestSteps extends BaseTest {
	private static final Logger LOGGER = LogManager.getLogger();

	@Given("User launches the application url")
	public void validatePageTitle() throws InterruptedException {

		LOGGER.info("Verifying the page title");
		Assert.assertEquals(driver.getTitle().trim(), "Buggy Cars Rating", "Page title not matched");

	}

	@Then("click on the twitter icon and verify the new tab opened and return back")
	public void verifyTwitIcon() {
		votingpage.iconTwitter.click();
		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(1));
		driver.switchTo().window(tabs2.get(0));
	}

	@Given("I click to Register button in the Dashboard page")
	public void i_click_to_Register_button_in_the_Dashboardpage() {
		LOGGER.info("Clicking on register link");
		dashboardpage.lnkRegister.click();

	}

	@Given("I enter new username Firstname, Lastname and password")
	public void i_enter_new_username_James_Bond_Buggy_Buggy() {
		String userName = "Piraveeng_2403" + Math.random();
		registrationpage.userRegistration("username", userName);
		userprofile.setUserName(userName);
		String userFirstName = "Piraveen";
		registrationpage.userRegistration("firstName", userFirstName);
		userprofile.setFirstName(userFirstName);
		String userLastName = "Ganesh";
		registrationpage.userRegistration("lastName", userLastName);
		userprofile.setLastName(userLastName);
		String pwd = "BuggyCars@123";
		registrationpage.userRegistration("password", pwd);
		userprofile.setPassWord(pwd);
		registrationpage.userRegistration("confirmPassword", pwd);

	}

	@Then("I click on Register button")
	public void i_click_on_Register_button() {

		registrationpage.btnRegister.click();
		LOGGER.info("Registration completed");

	}

	@Then("I verify the registration successful message")
	public void i_verify_the_registration_successful_message() {

		Assert.assertEquals(registrationpage.registrationscuccuesmessageGetText.getText().trim(),
				"Registration is successful", "Registration message not matched");

	}

	@Given("I enter username and password")
	public void i_enter_username_and_Buggy() {

		dashboardpage.userLogin("login", userprofile.getUserName());
		dashboardpage.userLogin("password", userprofile.getPassWord());

	}

	@Then("I verify the login successful")
	public void i_verify_the_login_successful() {

		Assert.assertEquals(dashboardpage.lblNavItem.getText().trim(), "Hi, " + userprofile.getFirstName(),
				"User name not matched");

	}

	@Given("I click on Login button")
	public void i_click_on_Login_button() {
		dashboardpage.btnLogin.click();

	}

	@Then("I click on Profile button")
	public void i_click_on_Profile_button() {
		LOGGER.info("Verifying user profile");
		dashboardpage.lnkProfile.click();

	}

	@Then("I should see the profile detail page")
	public void i_should_see_the_profile_detail_page() {
		Assert.assertEquals(dashboardpage.verifyProfile("username"), userprofile.getUserName(),
				"User name not matched");
		Assert.assertEquals(dashboardpage.verifyProfile("firstName"), userprofile.getFirstName(),
				"User first name not matched");
		Assert.assertEquals(dashboardpage.verifyProfile("lastName"), userprofile.getLastName(),
				"User first name not matched");
		LOGGER.info("Profile validation completed");

	}

	@Then("I enter {int}, Mt Albert,{int}")
	public void i_enter_Mt_Albert(Integer int1, Integer int2) {

	}

	@Given("I click on Overall Rating")
	public void i_click_on_Overall_Rating() {
		dashboardpage.lnkBuggyRating.click();
		LOGGER.info("Voting process started");
		dashboardpage.lnkOverallCars.click();

	}

	@Given("I click on Lamborghini	Diablo model car image")
	public void i_click_on_Lamborghini_Diablo_model_car_image() {
		votingpage.clickOnDesiredCar("Lamborghini Diablo");

	}

	@Then("I enter my comments and I click vote button")
	public void i_enter_my_comments_and_I_click_vote_button() {

		votingpage.textareaComment.sendKeys("Voting done");
		votingpage.btnVote.click();

	}

	@Then("I verify vote number is increased")
	public void i_verify_vote_number_is_increased() {

		int previousVoteCount = Integer.parseInt(votingpage.getTotalVotes());
		WaitElement.waitInVisibilityOf(driver, By.xpath(votingpage.locatorBtnVote));
		driver.navigate().refresh();
		int laterVoteCount = Integer.parseInt(votingpage.getTotalVotes());
		Assert.assertEquals(laterVoteCount, previousVoteCount + 1, "Votes not matched");
		LOGGER.info("Voting is done");

	}

	@Given("I click on Twitter icon")
	public void i_click_on_twitter_icon() {
		votingpage.iconTwitter.click();

	}

	@Given("I should see the new browser open and close")
	public void i_should_see_the_new_browser_open_and_close() {
		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(1));
		LOGGER.info(driver.getTitle());
		driver.switchTo().window(tabs2.get(0));

	}

}
