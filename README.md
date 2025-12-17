# aidanstoner.com
### Personal Website Self-hosted at [aidanstoner.com](https://aidanstoner.com)
## Summary
[aidanstoner.com](https://aidanstoner.com) is my personal website where I can list my projects, experience, certifications, etc. It acts as an online resume where I can show my skills both from the information on each page, as well as from the website itself. This is a more long-term project - the initial website is up and running and I plan to keep it that way, but I also plan to continue building upon this page as time goes on.

## Tools, Software, and Architecture (New)
I decided to run this website on an AWS S3 Bucket, as they support static website hosting. This means that no backend server is needed, and since this website is purely frontend I am able to use this instead of having to manage an entire backend server. I also am now using AWS Cloudfront to serve the website and manage SSL certificates.

## Tools, Software, and Architecture (Legacy)
#### NOTE: This is not used anymore.
The website is built and runs on a few different components. The frontend is built with React and Vite, and used Axios to make API requests. The UI was built with Tailwind.

On the backend, the application uses Express.js within a Node.js environment to manage API routes and handle server-side logic. Data is stored in MongoDB, with Mongoose used for object data modeling and simplifying interactions with the database. 

For hosting, the application is deployed on an AWS EC2 t4g.small instance. Nginx is used as both a web server and a reverse proxy to manage traffic efficiently. The domain is managed via AWS Route 53, and TLS is configured using Certbot and Let's Encrypt to secure communication between the client and the server.
