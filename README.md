# Willful developer technical test

## Objective

Display a toast notification when you click the "what is react?" button.

The following is an example of a toast notification that airbnb uses: ![](airbnb-toast-notification.png)

## Instructions:

You can begin the test by extending `src/App.js`

The following criteria should be met:

### 1. The notification should be styled, similar to the above airbnb example with the following specifications:

- The notification should be displayed at the very top of the page.
- The notification should be full page width.
- The notification should be approximately 50px in height with 16px of padding.
- The left chat bubble icon should be replaced with our [Willful icon](src/willful-icon.png).
- The notification's background color should be our Willful blue `#0064DC`.
- The message's font color should be white.
- The message's font size should be 14px
- The far right `×` font color should also be white.

### 2. The notification should display the current description of the [React library's Github repository](https://github.com/facebook/react) as the message.

- You can retrieve the Github repository's data by sending a GET request to `https://api.github.com/repos/facebook/react`
- If you look at the response, the `description` key contains the current description of the repo.

### 3. Clicking the "what is react?" button should display the notification

- Only one notification should be displayed

### 4. Clicking the "×" close button should dismiss the notification

- The html/JSX element used for the "×" _should_ be a button
- After dismissing a notification, clicking the "what is react?" button again should redisplay the notification

## Completing the test

Once complete, please submit your test by emailing a [gist](https://gist.github.com/) of your `App.js` file to mattm@willful.co

## Additional notes:

- Your code can be written any way you want, whatever you feel most comfortable with.
- You are free to use any additional dependencies or libraries if preferred. The only requirement is to use React.
- For styling: Styled Components was only used as an example, you are free to use any styling solution.
- `src/App.js` is just a starting point, it can be tweaked, re-wrote completely or scrapped if desired.
- The page background and button aren't being graded, only styling consideration is the toast notification.
- No browser requirements, it should work in latest version of Chrome.
- No accessibility requirements.
- No bonus points for extending functionality outside the scope of the instructions, we are only looking for a functioning solution that matches the design requirements.

## Getting Started:

Install dependencies:

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
