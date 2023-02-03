import {
  BiHomeSmile,
  BiCustomize,
  BiDevices,
  BiCodeAlt,
  BiRepost,
} from "react-icons/bi";

const STATUS_REGISTER_ACTIVE = {
  SEND_OTP: "SEND_OTP",
  VERIF_EMAIL: "VERIF_EMAIL",
  REGISTER: "REGISTER",
};

const STATUS_DEVICE_ACTIVE = {
  INPUT_NUMBER: "INPUT_NUMBER",
  ADD_QR_CODE: "ADD_QR_CODE",
  FINISHED: "FINISHED",
};

const STATUS_DOCS = {
  SEND_MESSAGE: "SEND_MESSAGE",
  DEVICE: "DEVICE",
  API: "API",
};

const MENUS = [
  {
    title: "Home",
    route: "/",
    icon: <BiHomeSmile size={24} />,
    iconActive: <BiHomeSmile size={24} color="#14BA6D" />,
    menuChild: null,
  },
  {
    title: "Device",
    route: "/device",
    icon: <BiDevices size={24} />,
    iconActive: <BiDevices size={24} color="#14BA6D" />,
    menuChild: null,
  },
  {
    title: "Auto Reply",
    route: "/auto-reply",
    icon: <BiRepost size={24} />,
    iconActive: <BiRepost size={24} color="#14BA6D" />,
    menuChild: null,
  },
  {
    title: "Documentation",
    route: "/documentation",
    icon: <BiCodeAlt size={24} />,
    iconActive: <BiCodeAlt size={24} color="#14BA6D" />,
    menuChild: [
      {
        title: "Send Message",
        route: "/documentation",
        status: STATUS_DOCS.SEND_MESSAGE,
      },
      //{
      //   title: "API",
      //   route: "/documentation",
      //   status: STATUS_DOCS.API,
      // },
      // {
      //   title: "Device",
      //   route: "/documentation",
      //   status: STATUS_DOCS.DEVICE,
      // },
    ],
  },
];

const DATA_DOCS = [
  {
    id: 1,
    title: "Send Message",
    activeMenu: STATUS_DOCS.SEND_MESSAGE,
    introduction:
      "Send Message API to integrate your app or website to send messages via WhatsApp, such as otp codes, promotions, and notifications. This example request sends a message using your WhatsApp device; please connect your device first to use this feature. ",
    method: "POST",
    endpoint: "http://198.71.61.49:3333/api/send-message/${deviceKey}",
    body: `{
        "receiver": "phone number",
        "message": {
            "text": "hello there!"
        }
    }`,
    payload: `{
        "success": true,
        "message": "The message has been successfully sent.",
        "data": {}
    }`,
    codeSnippet: {
      axios: {
        name: "Axios",
        code: `var axios = require('axios');
        var data = JSON.stringify({
          "receiver": "6287754175829",
          "message": {
            "text": "hello there!"
          }
        });
        
        var config = {
          method: 'post',
          url: 'http://198.71.61.49:3333/api/send-message/8f7cc71fbc92',
          headers: { 
            'Authorization': 'Bearer [YOUR TOKEN HERE], 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });`,
      },
      curl: {
        name: "Curl",
        code: `<?php
        $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => 'http://198.71.61.49:3333/api/send-message/8f7cc71fbc92',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'POST',
          CURLOPT_POSTFIELDS =>'{
            "receiver": "6287754175829",
            "message": {
                "text": "hello there!"
            }
        }',
          CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ3YXJkeWRldkBnbWFpbC5jb20iLCJpYXQiOjE2NzMwODAwMjIsImV4cCI6MTY3NTY3MjAyMn0.IPpRKaGYuej-JYmNRfyB4TukURLM6B_Sc3IgLAdoG7M',
            'Content-Type: application/json'
          ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        echo $response;`,
      },
    },
  },
];

const HEAD_DEVICE = [
  "NO",
  "NAME",
  "PHONE NUMBER",
  "DEVICE KEY",
  "STATUS",
  "ACTION",
];
const HEAD_AUTOREPLY = ["NO", "NAME", "PHONE NUMBER", "SETTING", "STATUS"];

const STATUS_ACTION = {
  ADD_AUTO_REPLY: "ADD_AUTO_REPLY",
  EDIT_AUTO_REPLY: "EDIT_AUTO_REPLY",
};

export {
  STATUS_REGISTER_ACTIVE,
  STATUS_DEVICE_ACTIVE,
  STATUS_DOCS,
  MENUS,
  DATA_DOCS,
  HEAD_DEVICE,
  HEAD_AUTOREPLY,
  STATUS_ACTION,
};
