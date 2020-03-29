import axios from "axios";
import * as telegram from "./telegram.js";
import dateFormat from "dateformat";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.barbora.lt/api/eshop/v1/cart/deliveries";
const cookie =
  "f5avraaaaaaaaaaaaaaaa_session_=MMNKLAEDKFMJDAPKKMJLHLBMNIANBGBGJDPKCLFHKNHLAFFPEGCLHNMIGLEACIABDPMDBLDLNCPNLHFHDPNABOJOMKLNLEJBGNDIIJPCGHNHMDFDEBALPMDGIIGKAHEF; permissionToUseCookies=true; rememberMe=true; order=discountDesc; f5avraaaaaaaaaaaaaaaa_session_=NPANENCIKPJDDODMBODGLHFFHIBELBPNJNPDLOJKNCEDDOBPGPMENHFGOOFBOBDEPLNDHCKBJCPLCMKFODKABADJLKKBEGFIFAOAOHKMJOPNMAJAMPBKGHAFFFGDHKKN; region=barbora.lt; brbLastLoginDay=2020-03-25; .BRBAUTH=ObT7cxQf3cTyP8fH-ODruUicp2_LQtBK11bNTmt322xLNmyBPoCBFWWNv0jCtUwsLuoZdhUQvkc2FTSWBv5kgb8E5Bkp-G0glYwj5iJC9WCd1Uiepu8tFXFhaBOKiqnOUgiwh3VhsfGOdiK7JtDCxQ2";
const telegramChatId = 905470537;
const authHeader = "Basic YXBpa2V5OlNlY3JldEtleQ==";

console.log("barbora!!!");

var resultObject;

//main();
loop(180, 60);

function task(index, delayInSeconds) {
  setTimeout(function() {
    console.log(`Start cycle No:${index} @${getDateTime()}`);
    main();
  }, delayInSeconds * 1000 * index);
}

async function loop(itterations, delayInSeconds) {
  for (let index = 1; index <= itterations; index++) {
    task(index, delayInSeconds);
  }
}

export async function main() {
  resultObject = {
    status: undefined,
    available: undefined,
    timeSlots: []
  };

  //fetch
  var response = await getData();
  if (response === null || response === undefined) {
    console.log("FetchError!");
    resultObject.status = "FetchError";
  } else {
    resultObject.status = response.status;
    //process response
    await parseData(response.data.deliveries[0]);
  }

  //report result
  await report(resultObject);
}

async function getData() {
  return await axios
    .get(url, {
      headers: {
        Authorization: "Basic YXBpa2V5OlNlY3JldEtleQ==",
        Cookie:
          "f5avraaaaaaaaaaaaaaaa_session_=MMNKLAEDKFMJDAPKKMJLHLBMNIANBGBGJDPKCLFHKNHLAFFPEGCLHNMIGLEACIABDPMDBLDLNCPNLHFHDPNABOJOMKLNLEJBGNDIIJPCGHNHMDFDEBALPMDGIIGKAHEF; permissionToUseCookies=true; rememberMe=true; order=discountDesc; f5avraaaaaaaaaaaaaaaa_session_=NPANENCIKPJDDODMBODGLHFFHIBELBPNJNPDLOJKNCEDDOBPGPMENHFGOOFBOBDEPLNDHCKBJCPLCMKFODKABADJLKKBEGFIFAOAOHKMJOPNMAJAMPBKGHAFFFGDHKKN; region=barbora.lt; brbLastLoginDay=2020-03-25; .BRBAUTH=ObT7cxQf3cTyP8fH-ODruUicp2_LQtBK11bNTmt322xLNmyBPoCBFWWNv0jCtUwsLuoZdhUQvkc2FTSWBv5kgb8E5Bkp-G0glYwj5iJC9WCd1Uiepu8tFXFhaBOKiqnOUgiwh3VhsfGOdiK7JtDCxQ2"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
}

async function parseData(data) {
  var totalDays = data.params.matrix.length;
  if (totalDays === 0 || totalDays === undefined) {
    return;
  }
  for (let day = 0; day < totalDays; day++) {
    for (let hour = 0; hour < 13; hour++) {
      var available = parseDay(data, day, hour);
      if (available) {
        resultObject.available = true;
        resultObject.timeSlots.push(
          data.params.matrix[day].hours[hour].deliveryTime
        );
      }
    }
  }
}

function parseDay(data, day, hour) {
  var entry = data.params.matrix[day].hours[hour];
  var dateAndTime = entry.deliveryTime;
  var value = entry.available;

  //console.log(dateAndTime + " = " + value);

  if (value === true) {
    return true;
  } else {
    return false;
  }
}

async function report(result) {
  var message;
  if (result.available) {
    message = `[${getDateTime()}] Available times:\n${result.timeSlots.join(
      "\n"
    )}`;
    await telegram.postMessage(telegramChatId, message);
  } else {
    message = `[${getDateTime()}] No time slots found [${result.status}]`;
  }
  console.log(message);
  //await telegram.postMessage(telegramChatId, message);
}

function getDateTime() {
  const format = "yyyy-mm-dd HH:MM:ss";
  return dateFormat(new Date(), format);
}
