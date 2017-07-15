let HOST: string = 'http://jobnumber.hungvt.com';
let cstc: object = {
    APL_URL: {
        'LOGIN': HOST + '/xxx/login',
        'LOGOUT': HOST + '/xxx/logout',
        'CLIENT_LIST': HOST + '/clientList',
        'CLIENT': HOST + '/client',
        'CLIENT_DETAIL': HOST + '/client/detail/',
        'CLIENT_DELETE': HOST + '/client_delete',
        'BONSEY_PROJECT_LIST': HOST + '/b_project_list',
        'HARVEST_PROJECT_LIST': HOST + '/h_project_list',
        'PROJECT': HOST + '/project',
        'PROJECT_DETAIL': HOST + '/project/detail/',
        'PROJECT_DETAIL_HARVEST': HOST + '/h_project_detail',
        'PROJECT_DETAIL_ASANA': HOST + '/a_project_detail',
        'ASANA_PROJECT_LIST': HOST + '/a_project_list',
        'JOB_LIST': HOST + '/jobList',
        'ASANA_JOBS_OF_PROJECT': HOST + '/get-asana-jobs-of-project',
        'BONSEY_JOB_LIST': HOST + '/b_job_list',
        'JOB': HOST + '/job',
        'JOB_DELETE': HOST + '/job_delete',
        'JOB_DETAIL': HOST + '/job/detail/',
        'JOB_DETAIL_HARVEST': HOST + '/h_job_detail',
        'TEAM_LIST': HOST + '/teams',
        'ASANA_TEAMS_OF_CUR_USER': HOST + '/get-asana-teams-of-current-user',
        'TEAM_PROJECTS': HOST + '/teams/{{team-id}}/projects',
        'PROJECT_DELETE': HOST + '/project_delete',
        'USER_ROLES': HOST + '/users/get-roles',
        'USER_ROLE': HOST + '/users/role',
        'USER_EDIT_ROLE': HOST + '/users/edit-role',
        'PERMISSION_LIST': HOST + '/permissions',
        'USERS': HOST + '/users/get-list',
        'USER': HOST + '/users',
        'USER_INFO': HOST + '/get-user-info',
        'USER_DELETE': HOST + '/user_delete'
    },
    APL_ERROR_CODE: {
        'TIMEOUT': "401",
        'DUPLICATE_LOGIN': "402"
    },
    LOCAL_STORAGE: {
        'CLIENT_NAME': 'CLIENT_NAME',
    },
    COMMON_CONSTANTS: {
        'DASHBOARD': HOST,
        'CLIENTS': '/clients',

        'CLIENT_CREATE': '/client/create',
        'CLIENT_EDIT': '/client/{{id}}/edit/',

        'PROJECTS': '/projects',

        'JOBS': '/jobs',

        'USER_ROLE_LIST': HOST + '/users/roles',

        'USER_LIST_PAGE': HOST + '/users',

        'TIMEOUT': 10000, // 10s
        'MAXFILESIZEBYTES': 2000000,// 2MB
        'IMAGEFORMATS': ['jpg', 'gif', 'jpeg', 'png'],
        'PATH_FOLDER_IMAGE': HOST + "/home/images/",
        'SITE': 11106,
        'LIMIT_ROWS': 10,
        'ROLES': {
            'STAFF': 3,
            'ADMIN': 2,
            'MASTER_ADMIN': 1,
        }
    },
    REFRESH_INTERVAL: 1500,
    REFRESH_CHECK_INTERVAL: 60

}

export var ConstantConfig = {
    APL_URL: {
        'LOGIN': HOST + '/xxx/login',
        'LOGOUT': HOST + '/xxx/logout',
        'CLIENT_LIST': HOST + '/clientList',
        'CLIENT': HOST + '/client',
        'CLIENT_DETAIL': HOST + '/client/detail/',
        'CLIENT_DELETE': HOST + '/client_delete',
        'BONSEY_PROJECT_LIST': HOST + '/b_project_list',
        'HARVEST_PROJECT_LIST': HOST + '/h_project_list',
        'PROJECT': HOST + '/project',
        'PROJECT_DETAIL': HOST + '/project/detail/',
        'PROJECT_DETAIL_HARVEST': HOST + '/h_project_detail',
        'PROJECT_DETAIL_ASANA': HOST + '/a_project_detail',
        'ASANA_PROJECT_LIST': HOST + '/a_project_list',
        'JOB_LIST': HOST + '/jobList',
        'ASANA_JOBS_OF_PROJECT': HOST + '/get-asana-jobs-of-project',
        'BONSEY_JOB_LIST': HOST + '/b_job_list',
        'JOB': HOST + '/job',
        'JOB_DELETE': HOST + '/job_delete',
        'JOB_DETAIL': HOST + '/job/detail/',
        'JOB_DETAIL_HARVEST': HOST + '/h_job_detail',
        'TEAM_LIST': HOST + '/teams',
        'ASANA_TEAMS_OF_CUR_USER': HOST + '/get-asana-teams-of-current-user',
        'TEAM_PROJECTS': HOST + '/teams/{{team-id}}/projects',
        'PROJECT_DELETE': HOST + '/project_delete',
        'USER_ROLES': HOST + '/users/get-roles',
        'USER_ROLE': HOST + '/users/role',
        'USER_EDIT_ROLE': HOST + '/users/edit-role',
        'PERMISSION_LIST': HOST + '/permissions',
        'USERS': HOST + '/users/get-list',
        'USER': HOST + '/users',
        'USER_INFO': HOST + '/get-user-info',
        'USER_DELETE': HOST + '/user_delete'
    },
    APL_ERROR_CODE: {
        'TIMEOUT': "401",
        'DUPLICATE_LOGIN': "402"
    },
    LOCAL_STORAGE: {
        'CLIENT_NAME': 'CLIENT_NAME',
    },
    COMMON_CONSTANTS: {
        'DASHBOARD': HOST,
        'CLIENTS': '/clients',

        'CLIENT_CREATE': '/client/create',
        'CLIENT_EDIT': '/client/{{id}}/edit/',

        'PROJECTS': '/projects',

        'JOBS': '/jobs',

        'USER_ROLE_LIST': HOST + '/users/roles',

        'USER_LIST_PAGE': HOST + '/users',

        'TIMEOUT': 10000, // 10s
        'MAXFILESIZEBYTES': 2000000,// 2MB
        'IMAGEFORMATS': ['jpg', 'gif', 'jpeg', 'png'],
        'PATH_FOLDER_IMAGE': HOST + "/home/images/",
        'SITE': 11106,
        'LIMIT_ROWS': 10,
        'ROLES': {
            'STAFF': 3,
            'ADMIN': 2,
            'MASTER_ADMIN': 1,
        }
    },
    REFRESH_INTERVAL: 1500,
    REFRESH_CHECK_INTERVAL: 60

};