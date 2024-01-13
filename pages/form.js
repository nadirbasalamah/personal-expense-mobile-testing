import BasePage from "./base.js";

export default class ExpenseFormPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  }

  getExpenseDate() {
    const currentDate = new Date();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthName = months[monthIndex];

    const formattedDate = `${monthName} ${day}, ${year}`;

    return formattedDate;
  }

  async getTitle() {
    const titleComponent = await this.find(
      '//android.view.View[@content-desc="Personal Expenses"]'
    );
    const title = await titleComponent.getAttribute("content-desc");
    return title;
  }

  async getPickedDate() {
    const dateComponent = await this.find(
      `//android.view.View[@content-desc="Picked Date: ${this.getCurrentDate()}"]`
    );
    const date = await dateComponent.getAttribute("content-desc");
    return date;
  }

  async tapPlusButton() {
    await this.click(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button"
    );
  }

  async insertTitle(title) {
    await this.click(
      `//android.view.View[@content-desc="Picked Date: ${this.getCurrentDate()}"]/android.widget.EditText[1]`
    );

    await this.type(
      `//android.view.View[@content-desc="Picked Date: ${this.getCurrentDate()}"]/android.widget.EditText[1]`,
      title
    );

    await this.driver.back();
  }

  async insertAmount(amount) {
    await this.click(
      `//android.view.View[@content-desc="Picked Date: ${this.getCurrentDate()}"]/android.widget.EditText[2]`
    );

    await this.type(
      `//android.view.View[@content-desc="Picked Date: ${this.getCurrentDate()}"]/android.widget.EditText[2]`,
      amount
    );

    await this.driver.back();
  }

  async pickDate() {
    await this.click('//android.widget.Button[@content-desc="Choose Date"]');
    await this.click('//android.widget.Button[@content-desc="OK"]');
    await this.driver.back();
  }

  async tapAddTxButton() {
    await this.click(
      '//android.widget.Button[@content-desc="Add Transaction"]'
    );
  }

  async getInsertedData() {
    const element = await this.find(`//android.view.View[@content-desc="$12500.0
my expense
${this.getExpenseDate()}"]`);

    const data = await element.getAttribute("content-desc");
    return data;
  }
}
