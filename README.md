# URL SHORTNER
- This is A url Shortner where you can enter url and in result it will give you shortned url

# activating to local host
- clone this repo
- npm install 
- npm run server 
- and you will have working project

# Desgin 
- Route that takes url in body then it shorts it 
- Route that takes custome url check if it is valid if it is not send sugestions
- Route That redirect shortend url to original url

# Steps
- Building The server
- Connecting To mongo Db
- Building The Routes
- Building The controllers
- Testing Each EndPoint

# Routes
- Home Route "/" Method Post Body must include url
- Custom Route "custom/:customUrl Method Post must include url in body and custom input in params
   - in this Route It Also Gives You 10 different sugestions 
- Redirect Route "/:urlId" after shortinig The route this route redirect you to the original url

# packages  
- Express
- dotenv
- mongoose
- shortid
- url validtor


# How It Works
- I take the url and the create url Id with shortId packge and add it to my base url then 
I save it in my DB 
- in anytime anyone request shortinig same url it will check database if it exist and return it 
- if anyone enters a custourl it will check it and return or sugestions or new url

# Validation
- Always validate if the url is indeed url
- Always validate if custom input is exist 
- Always validate if sugestions are good to give
- Always validate if the url is already shortend 

# Error handaling 
- check if anything missing
- input correction


