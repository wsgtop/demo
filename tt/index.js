import dayjs from "dayjs";
function a(completeTime) {
  const data = {};
  switch (completeTime) {
    case "tomorrow":
      data.commpleteType = "1";
      data.completeTime = new Date(
        dayjs(new Date()).add(1, "day").format("YYYY-MM-DD") + " 23:59"
      );
      break;
    case "theDayAfterTomorrow":
      data.commpleteType = "2";
      data.completeTime = new Date(
        dayjs(new Date()).add(2, "day").format("YYYY-MM-DD") + " 23:59"
      );
      break;
    case "aWeekLater":
      data.commpleteType = "3";
      data.completeTime = new Date(
        dayjs(new Date()).add(7, "day").format("YYYY-MM-DD") + " 23:59"
      );
      break;
    case Boolean(completeTime):
      data.commpleteType = "0";
      data.completeTime = new Date(
        dayjs(new Date()).add(1, "day").format("YYYY-MM-DD") + " 23:59"
      );
      break;
    default:
      if (completeTime) {
        data.commpleteType = "0";
        data.completeTime = new Date(
          dayjs(new Date()).add(1, "day").format("YYYY-MM-DD") + " 23:59"
        );
      } else {
        data.completeTime = "-1";
      }
  }
  console.log(data);
}
a(1);
