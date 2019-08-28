const server = require('./www/bin/app');
const port = 3001;


require('dotenv').config();


server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
