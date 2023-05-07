$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/BuggyCarRatingSmokeTests.feature");
formatter.feature({
  "name": "Automation of Buggy Cars smoke testing happy path scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am in the Buggy Cars Ratting web application",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click to Register button in the Dashboardpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_to_Register_button_in_the_Dashboardpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter new username Firstname, Lastname and password",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_enter_new_username_James_Bond_Buggy_Buggy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the registration successful message",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_verify_the_registration_successful_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Given I am in the Buggy Cars Ratting web application",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User Logging",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_enter_username_and_Buggy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login successful",
  "keyword": "Then "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_verify_the_login_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Given I am in the Buggy Cars Ratting web application",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User profile verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Profile button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the profile detail page",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_should_see_the_profile_detail_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Given I am in the Buggy Cars Ratting web application",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Buggy car rating - Vote for a particular car model",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Overall Rating",
  "keyword": "Given "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_Overall_Rating()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Lamborghini\tDiablo model car image",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_Lamborghini_Diablo_model_car_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my comments and I click vote button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_enter_my_comments_and_I_click_vote_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify vote number is increased",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_verify_vote_number_is_increased()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Given I am in the Buggy Cars Ratting web application",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Buggy car rating - facebook icon verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on facebook icon",
  "keyword": "Given "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_click_on_facebook_icon()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca _ngcontent-egi-1\u003d\"\" href\u003d\"https://www.facebook.com\" target\u003d\"_blank\" title\u003d\"Facebook\"\u003e...\u003c/a\u003e is not clickable at point (1221, 681). Other element would receive the click: \u003chtml\u003e...\u003c/html\u003e\n  (Session info: chrome\u003d112.0.5615.137)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nivethas-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:b3:4018:f9c:8b15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002712.2.1\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 112.0.5615.137, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: /var/folders/gh/yh_pmnkn4js...}, goog:chromeOptions: {debuggerAddress: localhost:63018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8fbcf007b7d38e6f9f7dd118c23a762f\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat jdk.proxy2/jdk.proxy2.$Proxy28.click(Unknown Source)\n\tat com.buggycar.steps.BuggyCarsTestSteps.i_click_on_facebook_icon(BuggyCarsTestSteps.java:239)\n\tat ✽.I click on facebook icon(file:///Users/nivethakumaresan/Desktop/Westpac%201/buggycarbdd_beta-main/src/test/resources/Features/BuggyCarRatingSmokeTests.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see the new browser open and close",
  "keyword": "And "
});
formatter.match({
  "location": "com.buggycar.steps.BuggyCarsTestSteps.i_should_see_the_new_browser_open_and_close()"
});
formatter.result({
  "status": "skipped"
});
});