Date- 06/08/2026 5:42 PM

Title: Monorepo with npm Workspaces and Turborepo


Status: Accepted


Problem Statement/Context: 


We want to create two portfolio projects and one shared UI component library. We have limited time and we need to have our setup which should help us create faster . We want to come up with a folder structure / project structure that should help us achieve this goal.


Options


Option A. 
The shared UI library lives in one of the apps (apps/expenses/shared-library) and the other app imports it somehow


Pros:  Source code lives together, faster iteration times
Cons: Less scalable, cannot reuse in other projects as size of the project grows


Option B. 
All three apps, the expense management app, the citizens services app and the shared UI library live in separate git repositories . The UI library gets published as an npm package and the other two apps install it as dependency


Pros: 1. Loose coupling 2. Highly scalable 
Cons: Unnecessary overhead,  slower iterations . If I make any smaller change in a library or any of the projects
 Build the library and publish newer version
 Update the dependency in each of the apps and rebuild them again
Test the app


Option C.
 Monorepo- All three live in a single git repositories in separate folders with a mechanism in place which lets them reference each other without publishing to npm 
Pros:
Faster iteration cycles and good for our use case to develop smaller apps faster
Cons: 
As the project grows , the codebase will grow significantly , and might become very huge . We accept this tradeoff since this is less likely to happen in our portfolio
It can create tightly coupled projects . This is less likely to happen in our portfolio project owing to the smaller scale


Decision:
Option C.Monorepo-  All three apps , the expense management apps, UI library and the citizens services app live in the single git repository. We will also use Turborepo and npm workspaces to enable communication between these three projects and enable faster build times . NPM workspaces handles the linking, Turborepo handles the orchestration and caching


Consequences:
1. It gets really fast to reload the app if I make changes across any project due to monorepo architecture and usage of Turborepo and its parallel task execution and caching mechanism which does not create a new build if the source files haven't been changed
2. NPM workspaces enable local package resolution without having a need to publish those . It handles the linking between different packages and manages dependency graph intelligently
2. I don't need to rebuild every package if I make changes . Hot reloading powered by caching. Faster iteration cycles

