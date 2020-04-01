# Tic Tac Toe with TypeScript Hooks

This is a remake of [Justin Kim's youtube video](https://youtu.be/Fuz8GTctT5o).

I made a couple of things differently:
- I prefer **type** definitions instead of interface for pure data structures. 
- I defined types in a separate file, **types.ts**
- I use fully qualified React names like **React.useState**
- I use **function** definitions for component internal functions, I use fat arrow syntax for component definitions and one-liner value returning (lambda) expressions. 
- I kept **App.tsx** and index.tsx, and I simply exported the Game component

Other comments and notes:
- I wasn't able to force typescript to detect **implicit any** declaration when using the **let** statement, which is severe defect in typescript. 
- Similarly, I wanted typescript to give errors when using **non-boolean expressions** in ifs. I hate this implicit boolean conversion of javascript.
- All type definitions had to be exported in types.ts, and all types had to be imported.

In a second iteration
- I have enabled PWA and I made a video about that [How to make and test the React Tic Tac Toe a PWA in 5 minutes?](https://www.youtube.com/watch?v=xOnoVHfTnSA)
- I have deployed on firebase, too, watch [Deploying React Tic Tac Toe PWA on Firebase and Run Lighthouse](https://www.youtube.com/watch?v=GsT34At7MLQ)
