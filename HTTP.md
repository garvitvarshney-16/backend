# HTTP stands for Hyper text transfer protocol.

# HTTP Headers
-> Metadata: Key-value sent along with request & response.
-> Used is caching, authentication, manage state. In past we x-prefix in 2012 (X-deprecated)
1: Request Headers -> from client
2: Response Headers -> from server
3: Representation Headers -> encoding/compression (used in apps like Zerodha and Razorpay)
4: Payload Headers -> data
we have more headers.

# Most commmon headers 
1: Accept-> application/json
2: User-Agent-> from which browser user request accordingly send.
3: Authorization: Bearer tokens
4: Content-type
5: Cookie
6: cache-control

# CORS
Access-Control-Allow-origin
Access-control-allow-credentials
access-control-allow-method

# security
cross-origin-embedder-policy
cross-origin-opener-policy
content-security-policy
x-xss-protection

# HTTP Methods => Basic set of operations that can be used to interact with server
GET: retrieve a resource
HEAD: no message body (response headers only)
OPTIONS: What operations are available
TRACE: loopback test (get some data)
DELETE: remove a resource
PUT: replace a resource
POST: interact with resource
PATCH: Change part of resource

# HTTP Status Code 
1xx: Informational (100->Continue, 102->Processing)
2xx: Success (200->OK, 201-> created)
3xx: Redirection (307-> temporary redirect, 308->permanent redirect)
4xx: Client error (400-> Bad requesr, 401-> unauthrized, 402-> payment required, 404-> Not found)
5xx: server error (500-> Internal server error, 504-> gateway time out)

