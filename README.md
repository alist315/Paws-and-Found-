# Paws-and-Found

## About
For this partner project we decided to create an application that would help families find their lost pets. The idea is for families to post their lost pet on our site and it would allow more people to see the posting than if the family had posted it on neighborhood telephone poles.

## Approach Taken
We started this project by drawing up the general architectural design we wanted for the app. We wanted a page to show currently lost pets, a page for the pets that we had found, and an about page to explain our app and the ideas behind it.

On the pages that display pets, we wanted the functionality to toggle pets as lost or found because a found pet could easily become lost again or vise versa. We also wanted the ability to remove a pet listing from our site if that is what the owner wanted.

To keep track of our progress, we used the project management platform Trello to organize the features we were currently working on as well as to keep track of what we wanted to start working on and what we had already completed. Communication was key in avoiding merge conflicts during this project.

## Technologies Used
- Rails
- React
- PostgreSQL
- Babel
- Heroku

We created an API server using Rails and PostgreSQL. We then pushed the API up to Heroku and used it as the backend for our React app. The React application was then used as our frontend and allowed us to interact with our backend by pulling and storing data from that server.

## Improvements
While we were mostly satisfied with the end product of our application, there were a few features we would have liked to add, but did not have enough time to complete. We wanted to implement the option to edit the pet entries in case of a misspelling or change in information. The only way to do this with our current app is to delete the entry and create a new one. We also would have liked to have a way to sort lost pets based on last known location. We may choose to add these features in the future.

Link to our project hosted on Heroku: https://paws-and-find-front.herokuapp.com/
