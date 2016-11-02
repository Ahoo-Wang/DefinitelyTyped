declare module h5plus {
    interface Message {
        to?: string[];
        cc?: string[];
        bcc?: string[];
        subject?: string;
        body?: string;
        bodyType?: 'text' | 'html';
        silent?: boolean;
        addAttachment(url: string);
    }
    export interface messaging {
        TYPE_SMS: 1;
        TYPE_MMS: 2;
        TYPE_EMAIL: 3;
        createMessage(type: number): Message;
        sendMessage(msg: Message, successCB?: () => {}, errorCB?: (event) => {});
    }
}

interface plusStatic {
    messaging: h5plus.messaging;
} 