export function GetRelativeResult(currentDate:Date, operationType: string, value:number):Date {
  let finalDate:number;
  const getDate:Date = currentDate;

  switch (operationType) {
    case "Seconds ago":
      finalDate = new Date().getTime()- value*1000;
      getDate.setTime(finalDate);

      break;

    case "Minutes ago":
      finalDate = new Date().getTime()- (value*1000*60);
      getDate.setTime(finalDate);

      break;

    case "Hours ago":
      finalDate = new Date().getTime()- (value*1000*3600);
      getDate.setTime(finalDate);
      
      break;

    case "Days ago":
      finalDate = new Date().getTime()- (value*1000*3600*24);
      getDate.setTime(finalDate);
      
      break;

    case "Seconds From now":
      finalDate = new Date().getTime()+ value*1000;
      getDate.setTime(finalDate);
      
      break;

    case "Minutes From now":
      finalDate = new Date().getTime()+ (value*1000*60);
      getDate.setTime(finalDate);
      
      break;

    case "Hours From now":
      finalDate = new Date().getTime()+ (value*1000*3600);
      getDate.setTime(finalDate);

      break;

    case "Days From now":
      finalDate = new Date().getTime() + (value*1000*3600*24);
      getDate.setTime(finalDate);
      
      break;
  
    default:
      break;
  }


  return getDate;
  

}