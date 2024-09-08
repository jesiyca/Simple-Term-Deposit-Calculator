This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installing
Install dependencies:
```bash
npm install
# or
yarn install
```

## Running locally
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit tests
To run unit tests, 
```bash
npm test
# or
yarn test
```

## Assumptions
Assumptions made throughout this assignment are:
- Timed myself for only design (how the calculator will look) and implementation. The two hours spent on designing and building a solution does not include the following: time spent researching, figuring out the formula/calculation for each type of interest paid, setting up/installing packages and dependencies, writing tests and README.
- Similarly to Bendigo Bank's calculator, the values are rounded up/down.

## Trade offs
- Copied and pasted example component code snippets from shadcn UI website and kept their tailwind CSS styling - I just edited the logic to save time.
- Used months as the only time input to keep calculations simple instead of using both months and years like Bendigo Bank's calculator.
- Inputs are not validated by decimal, especially for start deposit amount and investment term as it would've taken more time.
- Wrote only a few tests as I wasn't too sure if it was meant to be included in the time spent on implementation - so I just wrote a few for each input and changed values to validate that the calculations were as expected - to which I cross checked with Bendigo Bank's calculator.

## Design decisions
- Decided to use only months for investment term to keep calculations simple. I referenced the compound interest formula [here](https://moneysmart.gov.au/saving/compound-interest) and tested the calculations on my own with the default inputs before writing it in code, figuring out the difference in formula between each calculation for interest paid periods first. This allowed me to save time while actually coding, although I did have a lot of trial and error as well to ensure that it was outputing the correct final balance.
- Decided to follow the Bendigo Bank calculator's minimum and maximum values as I could easily cross check input/output values while also validating input to a certain range.
- Originally thought of creating a form for the input with a calculate button but when I looked at shadcn's form usage examples, they used Zod which would take longer to set up, write schemas for and learn to use.
- Decided to use NextJS instead of React's create-react-app, which is what I'm used to professionally, as it has been deprecated and has vulnerability warnings. I already had some basic knowledge about NextJS so it wasn't too time-consuming to create a one-page app.
- Used the shadcn/ui component library for quick React UI components without need of styling to make it look readable/presentable on my own.

## What I would do if I had more time
- Add test scenario for when investment term is under 1 year as the interest paid radio box slightly changes (the annually selection disappears and sets it to at maturity by default if annually was previously selected)
- Add test scenario for final balance when multiple inputs are changed.
- Add validation for decimal numbers for each input type, eg. interest rate having two decimal points, not allowing decimals for start deposit amount and investment term.
- Add comma separator for every thousand in the final balance and start deposit amount, after its been inputed, to be more readable - especially for larger amounts. Add dollar signs and percentage symbol for their respective input boxes instead of having it in the label. This would mean the value shown and the actual value would be slightly different (one would be a string and other would be a number).
- Remove zeros in front of any of the numeric inputs if it was accidentally placed.
- Probably would rename my variables for the calculation as I think it's a bit messy - I went with what sounded right at the time of coding.
