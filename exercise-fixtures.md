# Exercise - Fixtures Lists

After setting up the basic layout of the project, the Stadion developer's next priority was to implement a list of upcoming fixtures (i.e upcoming games).

However, after being promoted to Center Midfield in the Stadion FC team, the developer now needs you to finish that task.

**The dev has already completed the following:**

- Created a `FixturesScreen.tsx` and plugged it into the router.
- Implemented a `useEffect` in that screen that dispatches a redux thunk called `getFixturesAsync`, which in turn loads all the fixtures that Stadion are yet to play.
- Used some redux state selector hooks to pull in:
  - A boolean called `fixturesLoading`, which indicates whether the API request to fetch the fixtures is currently in progress.
  - An array of `Fixture` objects called `fixtures`, which contains all the data that the returned for the aforementioned API call.

## Task List

- [ ] **Display a simple loading indicator** whilst the data is being loaded
  - We have added a mocked 3 second timeout to simulate network latency.
- [ ] **Display a list of "cards"** that show all the results that are in the  `fixtures` variable.
  - We've included a wireframe image of what the card can look like below in this readme. Use this as a guide, but you don't have to make it look exactly the same if you don't want to.
  - All of the data displayed in the card (team logo, name, date, time, competition name) is available from the fixture items in the array.
  - We've console logged out the data in the screen so that you can see what it looks like, but you can also reference the `Fixture` Typescript interface as well.
- [ ] Run `yarn tsc` to check for and fix any typing issues.
- [ ] Run `yarn lint` to check for and fix any linting issues.

The approach you choose to render the list of results is up to you, though it's worth considering that at some point soon the amount of data will grow so it's worth considering rendering performance up front.

![fixture](/Users/chrispaynter/Development/stadion/exercises.react-native/fixture.png)