# Tjomma Sails API

This is a very quick and dirty API I slammed together to
allow me to continue with the front end development.

I think it also acts as a kind of spec for what is expected in
the front end.

I did not implement any form of authentication, or notification
system.

I also did not implement any form of intelligence in the results.
It is going to be vital that the back end use some sort of intelligence
to send relevant information, be it on tournaments, matches or users.

## Live server
Use your favourite Rest Client to connect to http://tjomma-sails.herokuapp.com/
to test and play around.

## Routes
    get /tournament
    get /tournament/:tournamentId
    get /tournament/:tournamentId/user
    get /tournament/:tournamentId/match
    delete /tournament/:tournamentId
    post /tournament

    get /user
    get /user/:userId
    get /user/:userId/tournament
    post /user/:userId/tournament
    delete /user/:userId/tournament/:tournamentId
    get /user/:userId/match
    delete /user/:userId
    post /user

    get /match
    get /match/:matchId
    delete /match/:matchId
    post /match

##Models

###Tournament
  ```javascript
    {
      name: {
        type: 'string',
        required: true
      },
      matches: {
        collection: 'match',
        via: 'tournament'
      },
      users: {
        collection: 'user',
        via: 'tournaments'
      }
    }
  ```

###User
  ```javascript
    {
      name: {
        type: 'string',
        required: true
      },
      tournaments: {
        collection: 'tournament',
        via: 'users'
      },
      matches: {
        collection: 'match'
      }
    }
  ```

###Match
  ```javascript
    tournament: {
      model: 'Tournament',
      required: true
    },
    user1: {
      model: 'User',
      required: true
    },
    user2: {
      model: 'User',
      required: true
    },
    result: {
      model: 'User',
      required: true
    }
  ```
###Miscelanious stuff
####Following and unfollowing a tournament
In practise a user follows a tournament when the user is added
to the tournament.

When a match result is confirmed, both participants are
automatically 'added' to the tournament.

A user can also be added to a tournament by executing the
'post /user/:userId/tournament' route.

####Paging of results
All GET requests must be paged.  I will add the required format later.

####Auto complete searching
All get requests must be able to take an inline attributes to
filter search results.  I will add some detail later on.
