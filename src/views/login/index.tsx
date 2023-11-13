import style from './index.module.scss'

export default function Login() {
    return (
        <>
            <div className={`${style.loginWrap} absolute`}>
                <div className="text-center text-color-3 mb-10px">
                    后台管理系统
                </div>
                <div>登录页面</div>
            </div>
        </>
    );
}
