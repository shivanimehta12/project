'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const useRouter = require('./Modules/user_module/userRouter')
const productRouter = require('./Modules/product_module/productRouter')
const fileupload = require('express-fileupload')
        
const dbConfig = require('./config/dbConnection');
const Routes = require('./Routes');

app.use(express.json());
app.use(cors());
app.use(fileupload());

app.listen(process.env.PORT, async () => {
    console.log(`1, Server running at port no. ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
    // require('./routes')(app); // API route 
    require('./Routes')(app)
    //app.use('/',Routes)


    app.post('/upload',function(req, res, next){ 
        const file = req.files.usr_profile_image;

        file.mv('./img_uploads/'+file.name,function(err,result){ 
   
            if(err)
            throw err;
            res.send({
                success: true,
                message: "file uploaded" 
             });
             dbConfig.connectDb(); // DB connect and authenticate

        } );

    } );
} );
  

   
    



