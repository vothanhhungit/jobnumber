let HOST: string = 'http://jobnumber.hungvt.com';
let cstc: object = {
    APL_URL: {
        'LOGIN': HOST + '/api/v1/login',
        'LOGOUT': HOST + '/api/v1/xxx/logout',
        'CLIENT_LIST': HOST + '/api/v1/clientList',
        'CLIENT': HOST + '/api/v1/client',
        'CLIENT_DETAIL': HOST + '/api/v1/client/detail/',
        'CLIENT_DELETE': HOST + '/api/v1/client_delete',
        'BONSEY_PROJECT_LIST': HOST + '/api/v1/b_project_list',
        'HARVEST_PROJECT_LIST': HOST + '/api/v1/h_project_list',
        'PROJECT': HOST + '/api/v1/project',
        'PROJECT_DETAIL': HOST + '/api/v1/project/detail/',
        'PROJECT_DETAIL_HARVEST': HOST + '/api/v1/h_project_detail',
        'PROJECT_DETAIL_ASANA': HOST + '/api/v1/a_project_detail',
        'ASANA_PROJECT_LIST': HOST + '/api/v1/a_project_list',
        'JOB_LIST': HOST + '/api/v1/jobList',
        'ASANA_JOBS_OF_PROJECT': HOST + '/api/v1/get-asana-jobs-of-project',
        'BONSEY_JOB_LIST': HOST + '/api/v1/b_job_list',
        'JOB': HOST + '/job',
        'JOB_DELETE': HOST + '/api/v1/job_delete',
        'JOB_DETAIL': HOST + '/api/v1/job/detail/',
        'JOB_DETAIL_HARVEST': HOST + '/api/v1/h_job_detail',
        'TEAM_LIST': HOST + '/api/v1/teams',
        'ASANA_TEAMS_OF_CUR_USER': HOST + '/api/v1/get-asana-teams-of-current-user',
        'TEAM_PROJECTS': HOST + '/api/v1/teams/{{team-id}}/projects',
        'PROJECT_DELETE': HOST + '/api/v1/project_delete',
        'USER_ROLES': HOST + '/api/v1/users/get-roles',
        'USER_ROLE': HOST + '/api/v1/users/role',
        'USER_EDIT_ROLE': HOST + '/api/v1/users/edit-role',
        'PERMISSION_LIST': HOST + '/api/v1/permissions',
        'USERS': HOST + '/api/v1/users/get-list',
        'USER': HOST + '/api/v1/users',
        'USER_INFO': HOST + '/api/v1/get-user-info',
        'USER_DELETE': HOST + '/api/v1/user_delete'
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
        'LOGIN': HOST + '/api/v1/login',
        'LOGOUT': HOST + '/api/v1/xxx/logout',
        'CLIENT_LIST': HOST + '/api/v1/clientList',
        'CLIENT': HOST + '/api/v1/client',
        'CLIENT_DETAIL': HOST + '/api/v1/client/detail/',
        'CLIENT_DELETE': HOST + '/api/v1/client_delete',
        'BONSEY_PROJECT_LIST': HOST + '/api/v1/b_project_list',
        'HARVEST_PROJECT_LIST': HOST + '/api/v1/h_project_list',
        'PROJECT': HOST + '/api/v1/project',
        'PROJECT_DETAIL': HOST + '/api/v1/project/detail/',
        'PROJECT_DETAIL_HARVEST': HOST + '/api/v1/h_project_detail',
        'PROJECT_DETAIL_ASANA': HOST + '/api/v1/a_project_detail',
        'ASANA_PROJECT_LIST': HOST + '/api/v1/a_project_list',
        'JOB_LIST': HOST + '/api/v1/jobList',
        'ASANA_JOBS_OF_PROJECT': HOST + '/api/v1/get-asana-jobs-of-project',
        'BONSEY_JOB_LIST': HOST + '/api/v1/b_job_list',
        'JOB': HOST + '/job',
        'JOB_DELETE': HOST + '/api/v1/job_delete',
        'JOB_DETAIL': HOST + '/api/v1/job/detail/',
        'JOB_DETAIL_HARVEST': HOST + '/api/v1/h_job_detail',
        'TEAM_LIST': HOST + '/api/v1/teams',
        'ASANA_TEAMS_OF_CUR_USER': HOST + '/api/v1/get-asana-teams-of-current-user',
        'TEAM_PROJECTS': HOST + '/api/v1/teams/{{team-id}}/projects',
        'PROJECT_DELETE': HOST + '/api/v1/project_delete',
        'USER_ROLES': HOST + '/api/v1/users/get-roles',
        'USER_ROLE': HOST + '/api/v1/users/role',
        'USER_EDIT_ROLE': HOST + '/api/v1/users/edit-role',
        'PERMISSION_LIST': HOST + '/api/v1/permissions',
        'USERS': HOST + '/api/v1/users/get-list',
        'USER': HOST + '/api/v1/users',
        'USER_INFO': HOST + '/api/v1/get-user-info',
        'USER_DELETE': HOST + '/api/v1/user_delete'
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