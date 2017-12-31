
Findmypast Prime Tables
=======

About
------

This is a small app that takes as a user input a whole number N, and
then prints a multiplication table of dimensions N+1 x N+1, containing
the first N prime numbers as row and column headers.

How to run
----------

In the root folder in a command line, execute

    npm start

This will start the app in development mode. Open http://localhost:3000 to view it in the browser.

Run tests:

    npm tests

Run tests with coverage:

    npm tests -- --coverage

Design & architecture decisions
--------------------------------

 - Algorithm 'Sieve of Eratosthenes' is used to generate prime numbers
 - All the logic (generate primes, generate a multiplication table) are separate modules, independent of any visual framework
 - React as a front-end for user input and displaying the result

What I'm pleased With
---------------------

 - My first time working truly with TDD - it took some discipline but went very well and it was a nice feeling when the tests changed from red to green
 - Prime generation is fairly performant (20'000 primes take about .3s on my MacBook Pro, 100'000 about 1s)
 - Clean separation of concerns
 - Good test coverage


Possible improvements
---------------------

 - Separate logic and view even further by having the logic in a separate project, possibly running on a server for better performance
 - Further improve the prime-generating algorithm: mainly a better upper-bound approximation to only generate as many primes as are needed - or find an efficient way to stop after we have our N primes. With the sieve algorithm determining how many primes we have already is quite costly, so another algorithm might be better suited.
 - Caching: cache already generated primes so future generations are faster
 - Usability: rendering a big table (>300 rows) in the browser is quite slow, and viewing such a big table is cumbersome. Possible ideas to improve this:
    - Show a loading indicator while the table is being generated
    - Possibility to download the resulting table (e.g. csv export)
    - Let the user determine a range, e.g. view the multiplication table with the 200th - 300th primes
