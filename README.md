# DirectU
Automatically curate your degree on the backs of thousands of others' experiences.

## Inspiration
Choice is a mixed bag: having all the world's options at your hands means it's on _you_ to spend the time needed to pick out the perfect choice from hundreds, especially if it's something as important as your literal degree. But who has the time today to be reading course descriptions, then career descriptions, then student course reviews (because the first two never help), then buried Reddit posts from five years ago, then wherever next that rabbit hole takes you?

Using the collective effort of thousands of students' feedback and thoughts, DirectU does the job for you. Based on real people's experiences, all the best courses for you—and specifically you—are laid out right in front of you.

## What it does
DirectU takes in your career aspirations and freely-written **practical** course preferences to parse through thousands of student course reviews, selecting the ones that match your profile and fitting them into a 4-year degree for you. Want to... take the ML courses that'll actually provide something of value? DirectU has your back. Minor with only the best possible courses for it? DirectU has your back. Pick the easiest way out? DirectU has! your! back!

After picking out all your preferences, the data is sent to our backend containing course reviews scraped from uwflow.com stored in a MongoDB database. Here, we make calls to Cohere's API to embed your liked courses and all courses available in the university, turning them into vectors. We compare the vector of each available course against the vectors of your liked courses using cosine similarity, generating a **similarity score** that represents how much the former matches the latter. Then, we take the courses that match your liked courses the most and suggest those to you in your dashboard!

❌ No more bullet-pointing every course name that sounds vaguely interesting on a separate Google Doc

❌ No more losing track of how many courses you can afford each term

❌ No more taking limiting personality quizzes with only four answer options to match you to a job

Once your courses have been laid out, you get access to an **aggregated summary of past students'** best tips, warnings, and advice for each course, generated from all past course reviews. You're told **why each course was recommended** with personalized pros and cons produced on the spot by Cohere based on your profile. If you don't like your primary recommendations, you're free to play around with our builder to test out secondary and tertiary recommendations!

## How we built it
* React (Vite) for the frontend dashboard
* Python and Flask for the backend
* Cohere APIs for text embedding, summarization, and generation
* MongoDB for our database
* Figma for workflow definition and wireframing
* Selenium for web scraping

## Challenges we ran into
One major challenge we ran into was problem definition. The premise of our original idea was way different than what was produced, being a more faculty-serving product. Further exploration into what our toolkit provided us, the delving of into workflows, and the ability to change tracks and re-use old work allowed us to build a product that would serve more people, more practically.

Another challenge we ran into was not taking into account the time taken for every API call. Originally, our backend made over 1,000 calls to Cohere's API to embed text every time a user initiated a session -- each API call took about one second and added to 17 minutes in total. We adapted our code and reduced the number of calls to Cohere's API down to just 2, single-handedly reduced the loading time for our application to 15 seconds, or a 99% decrease.

## Accomplishments that we're proud of
We're happy to be able to present a fully-functioning full-stack web application, from a student-friendly interface down to robust, optimized backend with stored data for future user sessions, especially considering half of our team is comprised of first-time hackers!

## What we learned
* Frontend: integration of 3rd party libraries for UI enhancement, DRY code principles, more effective state management
* Backend: implementation of Flask servers to connect to a React frontend, request error handling, web-scraping with Selenium, MongoDB for easy lookup of data, optimizing time complexity of complicated functions, efficient calls to APIs

## What's next for DirectU 
We aim to expand the implementation of DirectU  beyond Waterloo and UWFlow to other universities and their respective course evaluations. The service could potentially become a 3rd-party service that can be integrated into existing scheduling and timetabling products used by universities. We also want to enhance the prompt engineering to be able to produce course-specific insights in more parseable, concise chunks for better UX.

[Devpost](https://devpost.com/software/untitled-project-84yezbhn7asu)
