
import {Ratelimit} from '@upstash/ratelimit' // for deno: import { Ratelimit } from "https://deno.land/x/upstash_ratelimit@v0.1.0/mod.ts";
import {Redis} from '@upstash/redis' // for deno: import { Redis } from "https://deno.land/x/upstash_redis@v0.1.2/mod.ts";

import dotenv from 'dotenv';
dotenv.config();

//create a ratelimiter that allows 10 reqs per 20 seconds
const ratelimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"60 s")

})
export default ratelimit;