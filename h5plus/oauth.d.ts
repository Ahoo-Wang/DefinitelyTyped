declare module h5plus {

    interface AuthOptions {
        scope: string;
        state: string;
        appkey: string;
    }
    interface AuthService {
        id: string;
        description: string;
        authResult: any;
        userInfo: any;
        extra: any;
        login(successCallback: (event) => {}, errorCallback?: (event) => {}, options?: AuthOptions);
        logout(successCallback: (event) => {}, errorCallback?: (event) => {});
        getUserInfo(successCallback: (event) => {}, errorCallback?: (event) => {});
        addPhoneNumber(successCallback: (event) => {}, errorCallback?: (event) => {});

    }
    export interface oauth {
        /**
         * 获取授权登录认证服务列表
         */
        getServices(successCB: (services: Array<AuthService>) => {}, errorCB?: (event) => {});
    }

}
interface plusStatic {
    oauth: h5plus.oauth;
}