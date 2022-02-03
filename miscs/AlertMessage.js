import { notification } from 'antd';

const AlertMessage = (message, type) =>{
    if(type==="success"){
        notification.success({
            message: message,
            placement:'topRight',
            duration:3,
        });
    }else if ( type === "warning" ){
        notification.warning({
            message: message,
            placement:'topRight',
            duration:3,
        });
    }
}

export default AlertMessage