import { Book, Salad, Time } from "../components/icon/FeatureIcons";


export const SIGNUP_INPUTS = [
    {
      placeholder: "Нэрээ оруулна уу",
      name: "Нэр",
      type: "text",
      
    },
    {
      placeholder: "И-мэйл хаягаа оруулна уу",
      name: "И-мэйл",
      type: "email",
      // eye: <Eye/>
    },
    {
      placeholder: "Та хаягаа оруулна уу",
      name: "Хаяг",
      type: "text",
      // eye: <Eye/>
    },
    {
      placeholder: "Нууц үгээ оруулна уу",
      name: "Нууц үг",
      type: "password",
    },
    {
      placeholder: "Нууц үгээ оруулна уу",
      name: "Нууц үг давтах",
      type: "password",
    }
  ]

 export const FEATURES = [
    {
      title: "Хүргэлтийн төлөв хянах",
      description: "Захиалга бэлтгэлийн явцыг хянах",
      icon: <Book /> 
    },
    {
      title: "Шуурхай хүргэлт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
      icon: <Time /> 
    },
    {
      title: "Эрүүл, баталгаат орц",
      description: "Захиалга бэлтгэлийн явцыг хянах",
      icon: <Salad /> 
    },
    {
      title: "Хоолны өргөн сонголт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
      icon: <Book /> 
    }

  ];