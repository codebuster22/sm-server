const knex = require('knex')({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: '12345678',
        database: 'server_test_social_app'
    }
});

const queryById = async (tableName, columnName,search) => {
    try {
        const data = await knex(tableName).select()
            .where(columnName, '=', search)
        if(data.length)
            return {
                flag: true,
                data
            };
        else
            return{
                flag: false,
                data: "No Entries Found"
            }
    }catch (e) {
        console.log(e);
        return {
            flag: false,
            data: e.detail
        };
    };
}

const getAllUser = async () =>  await knex('users_table').select('*');

const getRequests = async() => {
    const connectionRequest = await knex('connection_request').select('*');
    return connectionRequest;

};

const getGroupRequests = async() => {
    const groupRequest = await knex('ff_group_request').select('*');
    return groupRequest;
};

const getGroupMembers = async({search}) => await queryById('ff_group_members', 'fk_ff_group_id',search);

const getMajorFamilyMembers = async({search}) => await queryById('users_table', 'fk_family_id',search);

const getSiblings = async({search}) => await queryById('sibling_relation', 'fk_sibling1_id',search);

const getFollowers = async({search}) => await queryById('relations_follows', 'followee_id',search);

const getFollowing = async({search}) => await queryById('relations_follows', 'follower_id',search);

const getMajorFamilyAdmins = async({search}) => await queryById('admin_nodes_family_mva', 'fk_family_id',search);

const getGroupAdminNodes = async({search}) => await queryById('admin_nodes_ff_mva', 'fk_ff_group_id',search);

const getUserGroups = async({search}) => await queryById('ff_group_members', 'fk_member_id',search);

const getGroupMemberFamilyList = async() => {
    try {
        const data = await knex('ff_group_members').select('fk_member_family_id').distinct()
            .where('fk_ff_group_id', '=', search)
        if(data.length)
            return {
                flag: true,
                data
            };
        else
            return{
                flag: false,
                data: "No Entries Found"
            }
    }catch (e) {
        console.log(e);
        return {
            flag: false,
            data: e.detail
        };
    };
};

const getUserByString = async({search}) => {
    try{
        const data = await knex('users_table').select()
                    .where('user_email_id', '~*', '.*' + search + '.*')
                    .orWhere('user_fullname', '~*', '.*' + search + '.*')
                    .orWhere('username', '~*', '.*' + search + '.*')
        if(data.length)
            return {
                flag: true,
                data
            };
        else
            return{
                flag: false,
                data: "No Entries Found"
            }
    }catch (e) {
        console.log(e);
        return {
            flag: false,
            data: e.detail
        };
    };
};

const getUserById = async({search}) => await queryById('users_table', 'user_id',search);

const getFamilyByName = async({search}) => {
    try{
        const data = await knex('family_table').select()
            .where('family_name', '~*', '.*' + search + '.*');
        if(data.length)
            return {
                flag: true,
                data
            };
        else
            return{
                flag: false,
                data: "No Entries Found"
            }
    }catch (e) {
        console.log(e);
        return {
            flag: false,
            data: e.detail
        };
    };
};

const getFamilyById = async({search}) => await queryById('family_table', 'family_id',search);

const getFamilyByRootNode = async({search}) => await queryById('family_table', 'fk_root_node_id',search);

const getGroupByName = async({search}) => {
    try{
        const data = await knex('ff_table').select()
            .where('ff_name', '~*', '.*' + search + '.*');
        if(data.length)
            return {
                flag: true,
                data
            };
        else
            return{
                flag: false,
                data: "No Entries Found"
            }
    }catch (e) {
        console.log(e);
        return {
            flag: false,
            data: e.detail
        };
    };
};

const getGroupById = async({search}) => await queryById('ff_table', 'ff_group_id',search);

const getGroupByCreatorId = async({search}) => await queryById('ff_table', 'fk_creator_id',search);

const registerUser = (data) => async() => {
    try{
        const response = await knex('users_table').insert([data]);
        console.log(response);
        return {
            flag: true,
            data: "User Registered"
        };
    }catch (e) {
        console.log(e.detail);
        return {
            flag: false,
            data: "Couldn't Update"
        };
    }
};

const registerFamily = (data) => async() => {
    try{
        const response = await knex('family_table').insert([data]);
        console.log(response);
        return {
            flag: true,
            data: "Family Registered"
        }
    }catch (e) {
        console.log(e.detail);
        return{
            flag: false,
            data: "Couldn't Register a Family"
        }
    }
};

const createFf = (data) => async() => {
    try{
        const response = await knex('ff_table').insert([data]);
        console.log(response);
        return {
            flag: true,
            data: "Family Friends Group Registered"
        }
    }catch (e) {
        console.log(e.detail);
        return{
            flag: false,
            data: "Couldn't Register a Family Friends Group"
        }
    }
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

module.exports = {
    getAllUser,
    registerUser,
    registerFamily,
    createFf,
    getRequests,
    getGroupRequests,
    getUserByString,
    getUserById,
    getFamilyByName,
    getFamilyById,
    getFamilyByRootNode,
    getGroupByName,
    getGroupById,
    getGroupByCreatorId,
    getGroupMembers,
    getMajorFamilyMembers,
    getSiblings,
    getFollowers,
    getFollowing,
    getMajorFamilyAdmins,
    getGroupAdminNodes,
    getUserGroups,
    getGroupMemberFamilyList

};