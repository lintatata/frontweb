'use strict'

const {access,readFile,constants} = require('fs');
const {join, extname} = require('path');
const {lookup} =require('mime-types');
module.exports = (pathUrl,res)=>{
    const extName = extname(pathUrl);
    const filePath = join(__dirname,'..','web',pathUrl);

    access(filePath,constants.F_ok | constants.R_OK,err=>{
        if (err){
            res.writeHead(404,{'constants':`${lookup(extName)}`});
            return;
        }

        res.writeHead(200,{'constants':`${lookup(extName)}`});

        readFile(filePath,(err,data)=>{
            if (err){
                res.end(JSON.stringify({success:false,error:err.message}));
                return;
            }
            res.end(data);
        });
    });


};
