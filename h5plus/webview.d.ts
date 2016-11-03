declare module h5plus {

    type WebviewEvent = 'close' | 'dragBounce' | 'slideBounce' | 'error' | 'hide' | 'loading' | 'loaded' | 'maskClick' | 'show' | 'popGesture' | 'titleUpdate';
    type AnimationTypeClose = 'auto' | 'none' | 'slide-out-right' | 'slide-out-left' | 'slide-out-top' | 'slide-out-bottom' | 'fade-out' | 'zoom-in' | 'zoom-fade-in' | 'pop-out';
    type AnimationTypeShow = 'auto' | 'none' | 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'pop-in';
    /**
     * 原生窗口扩展参数
     */
    interface WebviewExtraOptions {
        acceleration: 'auto' | 'none' | 'capture';
        capture: any;
        otherCapture: any;
    }

    interface WebviewObject {
        id?: string;
        /**
         * 添加事件监听器
         */
        addEventListener(event: WebviewEvent, listener, capture);
        /**
         * 添加Webview窗口预加载js文件
         */
        appendJsFile(file);
        /**
         * 后退到上次加载的页面
         */
        back();
        /**
         * 查询Webview窗口是否可后退
         */
        canBack(queryCallback);
        /**
         * 查询Webview窗口是否可前进
         */
        canForward(queryCallback);
        /**
         * 获取Webview窗口的所有子Webview窗口
         */
        children(): Array<WebviewObject>;
        /**
         * 清空原生Webview窗口加载的内容
         */
        clear();
        /**
         * 关闭Webview窗口
         */
        close(aniClose, duration: number, extras: WebviewExtraOptions);

        draw(bitmap, successCallback, errorCallback);
        evalJS(js);
        forward();
        getStyle(): any;
        getTitle(): string;
        getURL(): string;
        hide(aniHide, duration, extras);
        isHardwareAccelerated(): boolean;
        isVisible(): boolean;
        listenResourceLoading(options, callback);
        loadData(data);
        loadURL(url);
        /**
         * 获取Webview窗口对象的原生（Native.JS）实例对象
         */
        nativeInstanceObject(): any;
        opened(): Array<WebviewObject>;
        /**
         * 获取当前Webview窗口的创建者
         */
        opener(): WebviewObject;
        /**
         * 拦截Webview窗口的资源加载
         */
        overrideResourceRequest(options);
        overrideUrlLoading(options, callback);
        parent(): WebviewObject;
        reload(force: boolean);
        resetBounce();
        /**
         * 移除子Webview窗口
         */
        remove(webview: WebviewObject);
        removeEventListener(event: WebviewEvent, listener);
        removeFromParent();
        setBounce(style);
        setBlockNetworkImage(block);
        setPullToRefresh(style, refreshCB);
        setStyle(styles);
        setJsFile(path);
        show(aniShow, duration, showedCB, extras);
        stop();
        onclose?: Function;
        onerror?: Function;
        onloaded?: Function;
        onloading?: Function;
    }

    interface webview {
        /**
         * 获取所有Webview窗口
         */
        all(): Array<WebviewObject>;
        /**
         * 关闭Webview窗口
         */
        close(id_wvobj: string | WebviewObject, aniClose?: AnimationTypeClose, duration?: number, extras?: WebviewExtraOptions);
        /**
         * 创建新的Webview窗口
         */
        create(url?: string, id?: string, styles?, extras?): WebviewObject;
        /**
         * 获取当前窗口的WebviewObject对象
         */
        currentWebview(): WebviewObject;
        /**
         * 查找指定标识的WebviewObject窗口
         */
        getWebviewById(id): WebviewObject;
        /**
         * 获取应用首页WebviewObject窗口对象
         */
        getLaunchWebview(): WebviewObject;
        /**
         * 获取应用显示栈顶的WebviewObject窗口对象
         */
        getTopWebview(): WebviewObject;
        /**
         * 隐藏Webview窗口
         */
        hide(id_wvobj: string | WebviewObject, aniHide?: AnimationTypeClose, duration?: number, extras?: WebviewExtraOptions);
        /**
         * 创建并打开Webview窗口
         */
        open(url?: string, id?: string, styles?, aniShow?: AnimationTypeShow, duration?: number, showedCB?: () => {}): WebviewObject;
        /**
         * 显示Webview窗口
         */
        show(id_wvobj: string | WebviewObject, aniShow, duration, showedCB, extras);
        /**
         * 获取Webview默认是否开启硬件加速
         */
        defaultHardwareAccelerated(): boolean;

    }
}

interface plusStatic {
    webview: h5plus.webview;
}