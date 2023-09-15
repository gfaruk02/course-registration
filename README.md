# Course-Registration Project

Questions : 1. Add at least 3 Project features

Answer 1:
I have used some features in my project like 1. Selected course, 2. Calculate credit Hour, 3. Credit Hour Remaining 4. Calculate total Prices
Now i discuss my features working system.

 1. Selected course : When users click course select button then its course add cart section and show course name in UI. User select multiple course in same time but one course select one time when user try to select same course second time then my system provide toast (You've already selected in this course).

 2. Calculate credit Hour : When click course select button then its course add cart section and Calculate Total Credit Hour also show Total Credit Hour in UI. User credit hour limit is 20 credits when user try crouse over come the limit credit then system provide toast (Your course credit limit has been reached).

 3. Credit Hour Remaining : When click course select button then its course add cart section and Calculate Credit Hour Remaining also show in UI. User credit hour limit is 20 credits but Credit Hour Remaining = 20 - Total Credit Hour.Credit Hour Remaining minimum value is  0.

Questions : 2. Discuss how you managed the state in your assignment project.

 Answer 2: Using Local state i managed the state in my assignment project for building dynamic and interactive user interfaces.
 . Component State(useState Hook) : Components car have local state using the "useState" hook. it's manage data in one or another component. Local state working for show or hide a modal component or to track values for a form component. 
 . Props: I can pass data from a parent component to a child component using props. This is a simple way to share data and manage state at a higher level in component hierarchy.