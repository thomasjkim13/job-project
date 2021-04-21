# WannaBe

## Planning

### web application allows user to sign-in/sign-up to browse for jobs and also to create/post jobs as needed.

### User Stories

- As a user I want to sign up
- As a user I want to sign in
- As a user I want to change password
- As a user I want to sign out
- As a user I want to create a job with title, company, and experience_level POST /jobs
- As a user I want to view the jobs i created GET /jobs
- As a user I want to delete the jobs i created DELETE /jobs/:id
- As a user I want to update a jobs title, company and experience_level PATCH /jobs/:id

Job
- title : string
- company : string
- experience_level : string
- owner : reference to user

Wireframes Logged Out View
- sign up form
- sign in form

Wireframes Logged In View
- sign out button
- change password form
- create job form with input fields for title, company, and experience_level
- view my jobs button that will display the users jobs including their title, company, experience_level and ID
- delete jobs form with input fields for ID
- update job form with input fields for ID, title, company, and experience_level

### Wireframe

![Sign In](https://user-images.githubusercontent.com/80496765/115585431-9812d880-a299-11eb-8883-24b2dc187820.png)
![Sign Up](https://user-images.githubusercontent.com/80496765/115585401-90533400-a299-11eb-92c8-6137ceac86be.png)
![Search by company](https://user-images.githubusercontent.com/80496765/115585531-b1b42000-a299-11eb-9b8b-a8d2e7b6e8e8.png)
![search by title](https://user-images.githubusercontent.com/80496765/115585546-b547a700-a299-11eb-8cee-efc553a231a7.png)
![Create post](https://user-images.githubusercontent.com/80496765/115585549-b678d400-a299-11eb-922f-48dfa292e37a.png)

### ERD

![one-to-many](https://user-images.githubusercontent.com/80496765/115587856-238d6900-a29c-11eb-9779-3ae60cc4e6a7.png)
