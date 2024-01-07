import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import initDriver from "../../configs/driver.js";
import assert from "assert";

let driver;

Before({ timeout: 6000 * 10000 }, async () => {
  try {
    driver = await initDriver();
  } catch (error) {
    console.error(error);
  }
});

Given("I am on the home page", async () => {
  const titleComponent = await driver.$(
    '//android.view.View[@content-desc="Personal Expenses"]'
  );
  const title = await titleComponent.getAttribute("content-desc");
  assert.equal(title, "Personal Expenses");
});

When("I tap plus button", async () => {
  const addButton = await driver.$(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button"
  );
  await addButton.click();
});

Then("I insert title", async () => {
  const titleInput = await driver.$(
    '//android.view.View[@content-desc="Picked Date: 1/7/2024"]/android.widget.EditText[1]'
  );

  await titleInput.click();
  await titleInput.setValue("my expense");
  await driver.back();
});

Then("I insert amount", async () => {
  const amountInput = await driver.$(
    '//android.view.View[@content-desc="Picked Date: 1/7/2024"]/android.widget.EditText[2]'
  );

  await amountInput.click();
  await amountInput.setValue(12500);
  await driver.back();
});

Then("I pick a date", async () => {
  const datePicker = await driver.$(
    '//android.widget.Button[@content-desc="Choose Date"]'
  );

  await datePicker.click();

  const okButton = await driver.$(
    '//android.widget.Button[@content-desc="OK"]'
  );

  await okButton.click();
  await driver.back();
});

Then("I tap add transaction button", async () => {
  const addTxButton = await driver.$(
    '//android.widget.Button[@content-desc="Add Transaction"]'
  );

  await addTxButton.click();
});

Then("my expense is added", async () => {
  const expense = await driver.$(
    `//android.view.View[@content-desc="$12500.0
my expense
Jan 7, 2024"]`
  );

  const expenseContent = await expense.getAttribute("content-desc");
  assert.notEqual(expenseContent, "");
});

After(async () => {
  await driver.deleteSession();
});
