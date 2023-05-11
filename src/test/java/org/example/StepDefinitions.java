package org.example;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class StepDefinitions{

//Opening Firefox Browser and launching the login page of application

    private final WebDriver driver = new ChromeDriver();

    @Given("user navigates to login page by opening Chrome")
    public void user_navigates_to_login_page_by_opening_chrome() {
        driver.get("https://www.saucedemo.com/");
      //  throw new io.cucumber.java.PendingException();
    }
    @When("user enters correct <username> AND <password> values")
    public void user_enters_correct_username_and_password_values() {
        driver.findElement(By.id("user-name")).sendKeys("standard_user");
        driver.findElement(By.id("password")).sendKeys("secret_sauce");
      //  throw new io.cucumber.java.PendingException();
    }
    @Then("user is directed to the homepage")
    public void user_is_directed_to_the_homepage() {
        driver.get("https://saucelabs.com/");
        throw new io.cucumber.java.PendingException();
    }
}