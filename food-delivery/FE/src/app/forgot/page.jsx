import { ForgotEmail } from "@/components/ForgotEmail";
import { ForgotNewPass } from "@/components/ForgotNewPass";
import { ForgotOTP } from "@/components/ForgotOTP";

const ForgotPass = () => {
    return (
        <div>
            <ForgotEmail/>
            <ForgotOTP/>
            <ForgotNewPass/>
        </div>
    )


}

export default ForgotPass;