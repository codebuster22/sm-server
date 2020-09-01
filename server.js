const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const query = require('./queries.js')

const app = express();

app.use(bp.json());
app.use(cors());

//-----------------------------------------------------------------------//
//--------------------------- Getter Requests ---------------------------//
//-----------------------------------------------------------------------//

app.get('/getAllUser',async (req,res) => res.json(await query.getAllUser()));

app.get('/getRequest', async (req,res) => res.json(await query.getRequests()));

app.get('/getGroupRequest', async (req,res) => res.json(await query.getGroupRequests()));

app.get('/getUserByString', async (req,res) => res.json(await query.getUserByString(req.body)));

app.get('/getUserById', async (req,res) => res.json(await query.getUserById(req.body)));

app.get('/getFamilyByName', async (req,res) => res.json(await query.getFamilyByName(req.body)));

app.get('/getFamilyById', async (req,res) => res.json(await query.getFamilyById(req.body)));

app.get('/getFamilyByRootNode', async (req,res) => res.json(await query.getFamilyByRootNode(req.body)));

app.get('/getGroupByName', async (req,res) => res.json(await query.getGroupByName(req.body)));

app.get('/getGroupById', async (req,res) => res.json(await query.getGroupById(req.body)));

app.get('/getGroupByCreatorId', async (req,res) => res.json(await query.getGroupByCreatorId(req.body)));

app.get('/getGroupMembers', async (req,res) => res.json(await query.getGroupMembers(req.body)));

app.get('/getMajorFamilyMembers', async (req,res) => res.json(await query.getMajorFamilyMembers(req.body)));

app.get('/getSiblings', async (req,res) => res.json(await query.getSiblings(req.body)));

app.get('/getFollowers', async (req,res) => res.json(await query.getFollowers(req.body)));

app.get('/getFollowing', async (req,res) => res.json(await query.getFollowing(req.body)));

app.get('/getMajorFamilyAdmins', async (req,res) => res.json(await query.getMajorFamilyAdmins(req.body)));

app.get('/getGroupAdminNodes', async (req,res) => res.json(await query.getGroupAdminNodes(req.body)));

app.get('/getUserGroups', async (req,res) => res.json(await query.getUserGroups(req.body)));

app.get('/getGroupMemberFamilyList', async (req,res) => res.json(await query.getGroupMemberFamilyList(req.body)));

//---------------------------------------------------------------------//
//--------------------------- Post Requests ---------------------------//
//---------------------------------------------------------------------//

app.post('/registerUser', async (req,res)=> {
    const data = {created_on: new Date(), ...req.body}
    const response = await query.registerUser(data)();
    if(response.flag)
        res.json("Welcome to Scoial Network");
    else
        res.json("Ooops! Try Again.");
});

app.post('/registerFamily', async (req,res)=> {
    const data = { ...req.body};
    const response = await query.registerFamily(data)();
    if(response.flag)
        res.json("Welcome to Scoial Network");
    else
        res.json("Ooops! Try Again.");
});

app.post('/CreateFf', async (req,res)=>{
    const data = { created_on: new Date() ,...req.body};
    const response = await query.createFf(data)();
    if(response.flag)
        res.json("Welcome to Social Network");
    else
        res.json("Ooops! Try Again.");
});

//-------------------------------------------------------------------------//
//--------------------------- Listening at Port ---------------------------//
//-------------------------------------------------------------------------//

app.listen(3000,()=>
    console.log("Listening at Port 3000")
);