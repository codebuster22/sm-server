const knex = require('knex')({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: '12345678',
        database: 'test_social_app'
    }
});

const getAllUser = async () => {
    const response = await knex('users_table').select('*');
    console.log(response);
};

const registerUser = async() => {

};

const registerFamily = async() => {

};

const createFf = async() => {

};

const getRequests = async() => {

};

const getGroupRequests = async() => {

};

const getGroupMembers = async() =>{

};

const getMajorFamilyMembers = async() => {

};

const getSiblings = async() => {

};

const getFollowers = async() => {

};

const getFollowing = async() => {

};

const getMajorFamilyAdmins = async() => [

];

const getGroupAdminNodes = async() => {

};

const getAllRegisteredFamily = async() => {

};

const getUserGroups = async() => {

};

const getGroupMemberFamilyList = async() => {

};

const getUserByName = async() => {

};

const getUserByEmail = async() => {

};

const getUserById = async() => {

};

const getFamilyByName = async() => {

};

const getFamilyById = async() => {

};

const getFamilyByRootNode = async() => {

};

const getGroupByName = async() => {

};

const getGroupById = async() => {

};

const getGroupByCreatorId = async() => {

};

const promoteUserToAdminForFamily = async() => {

};

const promoteUserToAdminForGroup = async() => {

};

const acceptRequest = async() => {

};

const declineRequest = async() => {

};

const acceptGroupRequest = async() => {

};

const declineGroupRequest = async() => {

};

const sendRequest = async() =>{

};

module.exports = {getAllUser};