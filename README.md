# pomodoro-app

## What it does

- Has a built-in Todo-list with ability to set a projected length of a task
- Has a 'pomodoro' timer of 25 mins that switches to 'break' timer of 5 minutes
- Every 4 'pomodoros' you get a longer 15-minute break
- Timer has the ability to pause, reset the 'pomodoro' or to skip the break
- Timer has the ability to 'complete' the task ahead of time
- Has statistics page that can show data for up to 3 weeks
- Has a dark/light theme that defaults to browser setting
- All data is stored in LS and managed through [Redux]

## Running the project

1. Install all necessary dependancies

```
npm i
```

### To use dev build:

2. Run

```
npm run dev
```

### To use production build:

2. Make the production build

```
npm run build
```

3. Move to /dist folder

```
cd dist
```

4. If you have [serve] package installed run

```
serve
```

5. Otherwise run

```
npx serve
```

6. Type 'y' in the terminal when promted

7. Open the localhost
