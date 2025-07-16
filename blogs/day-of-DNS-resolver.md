# I Am a DNS Resolver and I Hate You: A Memoir

**Date:** 04:02:19 UTC  
**Position:** Recursive DNS Resolver, Google Public DNS (`8.8.8.8`)  
**Status:** Unpaid. Overworked. Caching things just to cope.

---

## 🌀 04:02 — The Request Comes In

I was just chilling, doing what I do best — serving up cached DNS records with zero thank yous and even fewer resources — when **this cursed URL** slides into my queue:

```

[https://app.api.blog.victor.dev/login](https://app.api.blog.victor.dev/login)

```

No cache. No mercy.  
Just pain.

---

## 🧩 Step 1 — Ask the Root

I ping the Root Servers.

“Hey... where the hell is `.dev`?”

They look at me like I’m a toddler in a server rack and say what they always say:

> “.dev is a TLD. Ask the `.dev` TLD servers, moron.”

Okay. Fine.

---

## 🌐 Step 2 — TLD Delegation

I contact the `.dev` TLD servers.

They reply:

> “`victor.dev` is hosted by **Cloudflare**.”

Oh, great. Cloudflare.  
Fast as hell, smarter than me, and somehow getting paid less than a junior frontend dev at a unicorn startup.  
Whatever. I send the request.

---

## 🤯 Step 3 — The Plot Twist (Zone Delegation)

Cloudflare replies:

> “Yeah… so `blog.victor.dev` isn’t actually our problem anymore. That subdomain has been **delegated to DigitalOcean**.”

I blink.  
I scream (internally — resolvers don’t have mouths).  
Then I keep going. Because no one else will.

---

## 🌊 Step 4 — Into the Ocean

I contact the authoritative servers at DigitalOcean.  
I ask them:

> “Hey, got anything on `api.blog.victor.dev`?”

They respond with another record:

> “Sure. But that points to another subdomain: `app.api.blog.victor.dev`.”

I swear to root. This is nesting. This is DNS recursion hell.  
I resolve it.

Two queries. Same server. Same tears.

---

## ✅ Step 5 — Resolution

I finally get the **A record** for:

```

app.api.blog.victor.dev → 203.0.113.42

```

I return it to the client.  
No thanks. No cookies. Just another line in someone else's server log.

---

## 🧠 Step 6 — Cache and Cry

Of course I cache the result.  
Because I know this same chaos will return in twenty seconds when someone’s JavaScript library prefetches a background API.

So I keep it. In memory.  
Not for efficiency. Not for protocol.  
But because I **never want to feel this again.**

---

## Final Notes

Whoever you are, **Victor**, please get a life.  
Your domain setup is legal, yes.  
But morally?  
DNS is not therapy.

Sincerely,  
The resolver.