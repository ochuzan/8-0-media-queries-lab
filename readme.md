# Media Queries Lab

TekNews has a great looking website but it was only built for the desktop! Update the website so it can look good on any device.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

To complete the tests in this lab, you will need to overwrite some styles depending on the width of the screen. If you're unclear about any of the instructions below, remember that you can check the test file to see what exactly is being tested.

### 768px to 1279px

- [ ] Hide the `.splash` section by changing the `display` property to `none`.
- [ ] Set the width of the `main` element to be `90%`.
- [ ] Update the `footer` element so that instead of three columns it is set to have two.

### Less than 768px

- [ ] Update the `header` element so that instead of two columns it is set to have one.
- [ ] Update the `main` element so that instead of two columns it is set to have one.
- [ ] Change the `gap` on the `main` element so that it has a gap between each row of `50px`. The gap between columns should be `0`.
- [ ] Update the `footer` element so it has a padding of `25px` all around.
- [ ] Update the `footer` element so that all of the text inside of it is aligned to the center.
- [ ] Update the `footer` unordered list elements so that none of them have a list-style.
- [ ] Update the `footer` heading so that it no longer has a border along the bottom.
