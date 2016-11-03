declare module h5plus {

    export interface statistic {
        /**
         * 触发事件
         */
        eventTrig(id: string, label?: string);
        /**
         * 开始持续事件
         */
        eventStart(id: string, label?: string);
        /**
         * 结束持续事件
         */
        eventEnd(id: string, label?: string);
        /**
         * 精确持续事件
         */
        eventDuration(id: string, duration: number, label?: string);
    }
}
interface plusStatic {
    /**
     * Statistic模块管理统计功能，用于提供应用内统计的能力，支持统计和分析用户属性和用户行为数据
     */
    statistic: h5plus.statistic;
}