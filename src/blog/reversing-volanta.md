---
title: "Reverse engineering the Volanta API"
pubDate: 2025-08-02
description: "I finally decided to reverse engineer the API for the Volanta flight simulator tracker."
author: "StarNumber"
image:
  url: "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScYqmSf1sedOFNv53A4rncQox1Sqk0W2EyuXYV"
  alt: "A dark background with a red-purple glow"
tags: ["reverse engineering", "flight simulation"]
---

# Reverse engineering the Volanta API

I finally decided to reverse engineer the API for the Volanta flight simulator tracker, out of boredom.

## What is Volanta?

Volanta is a logbook for flight simulation: it allows you to log your flights, your landing rates and even screenshots. You can also see what your friends (and anyone else) are up to.

## So, why?

While on vacation, I had the random thought of a Discord bot that would allow me to see someone's Volanta profile, current and past flights, and possibly their top screenshots :).

## So, how?

I obviously started by looking at GitHub if anyone had already reverse engineered the API, and, as it turns out, just like on SkyCards, there wasn't. Unloike SkyCards, however, Volanta is not a mobile app (There is one, but it's only for Volanta Premium users), but a web (and desktop) app. This means that I could use the Firefox DevTools (and my trusty Network tab) to reverse engineer the API.

## The API

The API is a REST API, and it's fortunately pretty self-documenting, so I could just infer what any endpoint would do from its name and path.

I started by looking for a way to authenticate with the API, and as it turns out, it's pretty simple: you just need to send a POST request to /api/v1/Session with a JSON body containing your username and password.

```json
{
  "username": string,
  "password": string
}
```

To authenticate with any endpoint you need to send a Bearer token in the Authorization header, which is a JWT.

This returns a JSON response containing your user data, including your profile image, your connections (i.e. Discord, SimBrief, etc.), and a TON of other data.

I then started looking into getting informations about your friends, and it was as simple as sending a GET request to /api/v1/Relationships/Friends, just with the authentication header, and it returns a JSON response containing a list of your friends and a bunch of other data.

Finally, I wanted to get information about someone's flight. It seems that Volanta uses UUIDs for both users and flights, but I couldn't find any endpoint that would return a flight by user UUID, so I believe it filters all flights returned by the flight feed endpoint by user ID, which makes little sense since the flight feed is often very large.

I could reverse engineer the client bundle (and I don't exclude doing so in the future) to find out if that's actually the case, but I decided to just use the API to get the flight data I needed.

## The Discord bot

As I mentioned earlier, I had the random thought of a Discord bot that would allow me to see someone's Volanta profile, current and past flights, and possibly their top screenshots :).

This is what I ended up doing, and it's pretty simple.

It currently has only 2 commands:
- `/profile <user>` - Returns the profile of the user (by username)
- `/flight <user>` - Returns the current flight of the user (by username)

All of these also use some pretty embeds to make everything look nice.

You can try the bot [here](https://discord.com/oauth2/authorize?client_id=1400808659885228104&integration_type=1&scope=applications.commands) as a User App. I am probably going to open source it when it's more polished.

## Conclusion

This was a fun little project, and I learned a lot about reverse engineering APIs. I'm pretty sure I'll be doing this again in the future, so I hope to write about it here.