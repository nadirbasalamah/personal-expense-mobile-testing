# personal-expense-mobile-testing

Mobile automation testing example with CucumberJS and Appium.

## Notes

- The application that is used for testing is a simple personal expense tracker app. The sample application can be found in `sample` directory called `sample_app.apk`.
- This example is tested in Android platform.
- This repository uses [Appium 2](https://appium.io/docs/en/2.4/quickstart/).

## How to Use

1. Clone this repository.

2. Create `.env` file.

```sh
cp .env.example .env
```

3. Configure the appium configurations in `.env` file. Put the application (apk) location in `APP_DIR`.

4. Start the appium server.

```sh
appium
```

5. Install the dependencies.

```sh
npm install
```

6. Run the tests.

```sh
npm test
```

7. Check the test report.

```sh
npm run report
```
