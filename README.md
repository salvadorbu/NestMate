#Inspiration
Finding the perfect place to live is challenging enough, but the difficulty amplifies when searching for compatible roommates. Many of us have experienced the discomfort of living with people whose lifestyles and interests don't align with our own. This inspired us to create NestMates—a platform designed to simplify the process of finding both apartments and like-minded roommates by matching users based on their personal profiles.

#What it does
NestMates connects users with potential roommates and available apartments that best fit their preferences, lifestyles, and budget.

#How we built it
We developed NestMates using Next.js to create a sleek and responsive web app. MongoDB was our choice for the database, allowing us to efficiently store and manage user profiles and apartment listings. To ensure secure user authentication and data protection, we integrated PropelAuth into our application. Our team collaborated using GitHub for version control and used Copilot for rapid development.

#Challenges we ran into
One challenge was integrating PropelAuth with our Next.js application. The documentation wasn’t very thorough so it took some time to get that running. PropelAuth was also a bit tricky to get working in the prod deployment, where we had to integrate it with our GoDaddy domain. We were all also fairly new to Next.js, so we ran into different issues while integrating client components with the server, and also with some mongodb serialization errors.

#Accomplishments that we're proud of
We're proud of creating a functional prototype of NestMates within a limited time frame. We successfully integrated Next.js, MongoDB, and PropelAuth into a cohesive application. We developed a working matching algorithm that provides users with personalized roommate and apartment suggestions. Overall, getting through the technical challenges and bringing our idea to life was incredibly rewarding.

#What we learned
We gained substantial knowledge of Next.js and its capabilities for building dynamic applications. Implementing PropelAuth enhanced our skills in user authentication and security best practices. Working with MongoDB improved our understanding of database management and data modeling. We also learned about developing algorithms for matching users based on multiple criteria. Beyond technical skills, we recognized the importance of teamwork, effective communication, and time management in a fast-paced environment.

#What's next for NestMates
Improve matching algorithm Add real estate listings for new locations (more robust real estate scraping/api) Refine UI/UX elements of website Add a real estate listings map Add more profile preferences
