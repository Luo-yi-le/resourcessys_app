/**
 *  创建时间：2019/1/07
 */

/***********************服务器地址********************************/
export const baseUrl = 'http://localhost:8080';

/***********************登录相关********************************/
export const login=baseUrl+'/user/login';
export const reg=baseUrl+'/reg/insertReg';


/***********************获取列表********************************/
/**小区**/
export const req_resLimit=baseUrl+'/res_qua/selectAllRes_quaLimit';
export const req_res=baseUrl+'/res_qua/getAllRes_qua';


/**房子**/
export const houseLimit=baseUrl+'/huose/selectAllHuoseLimit';
export const house=baseUrl+'/huose/getAllHuose';
/**根据position查询房子*/
export const selectHousePosition=baseUrl+'/huose/selectHousePosition'


/**订单*/
export const orderById=baseUrl+'/order/selectAllOrderById';

/**查询用户*/
export const selectloginId=baseUrl+'/user/selectloginid';

/**查询公告*/
export const getAllNotice=baseUrl+'/noticer/getAllNotice';
export const selectAllNoticeOrderBy=baseUrl+'/noticer/selectAllNoticeOrderBy';

/**预定房子*/
export  const insertBespeak=baseUrl+'/bespeak/insertBespeak'

