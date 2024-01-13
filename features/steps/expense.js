import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import assert from "assert";

import initDriver from "../../configs/driver.js";
import ExpenseFormPage from "../../pages/form.js";

let driver;
let expenseFormPage;

Before({ timeout: 6000 * 10000 }, async () => {
  try {
    driver = await initDriver();
    expenseFormPage = new ExpenseFormPage(driver);
  } catch (error) {
    console.error(error);
  }
});

Given("I am on the home page", async () => {
  const title = await expenseFormPage.getTitle();
  assert.equal(title, "Personal Expenses");
});

When("I tap plus button", async () => {
  await expenseFormPage.tapPlusButton();
});

Then("I insert title", async () => {
  await expenseFormPage.insertTitle("my expense");
});

Then("I insert amount", async () => {
  await expenseFormPage.insertAmount(12500);
});

Then("I pick a date", async () => {
  await expenseFormPage.pickDate();
});

Then("I tap add transaction button", async () => {
  await expenseFormPage.tapAddTxButton();
});

Then("my expense is added", async () => {
  const expenseContent = await expenseFormPage.getInsertedData();
  assert.notEqual(expenseContent, "");
});

Then("I still in the expense form", async () => {
  const expenseDate = await expenseFormPage.getPickedDate();
  assert.notEqual(expenseDate, "");
});

Then("I tap delete expense button", async () => {
  await expenseFormPage.tapDeleteButton();
});

Then("Empty transaction message is displayed", async () => {
  const message = await expenseFormPage.getEmptyTxMessage();
  assert.equal(message, "No transaction added yet!");
});

After(async () => {
  await driver.deleteSession();
});
