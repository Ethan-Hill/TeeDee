TeeDee
========

A simple todo app built with Nuxt 3 and styled with TailwindCSS. Users can log in using their GitHub account and create, complete, and remove tasks. All tasks are stored in a Supabase database.

Features
--------

*   User authentication via GitHub
*   Create new tasks
*   Mark tasks as complete
*   Delete tasks
*   All tasks stored in a Supabase database

Technologies Used
-----------------

*   Nuxt 3
*   TailwindCSS
*   GitHub OAuth
*   Supabase

Installation
------------

1.  Clone the repository: `git clone https://github.com/ethan-hill/TeeDee.git`
2.  Navigate to the project directory: `cd TeeDee`
3.  Install dependencies: `npm install`
4.  Create a `.env` file and add your GitHub client ID and secret:


```
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
AUTH_SECRET=secret-here
AUTH_ORIGIN=http://localhost:3000
SUPABASE_KEY=supabase-key
SUPABASE_URL=supabase-url
```

5.  Start the development server: `npm run dev`

Usage
-----

1.  Navigate to `localhost:3000` in your browser
2.  Click the "Log in with GitHub" button
3.  Create a new task by clicking the + and then typing in the input field and pressing enter
4.  Mark a task as complete by clicking the checkbox next to it
5.  Delete a task by clicking the bin button next to it

Contributing
------------

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
-------

[MIT](https://choosealicense.com/licenses/mit/)
