
export function GetYearsList(currentDate:Date):number[] {

  const firstYearInThePanel: number = currentDate.getFullYear() - 7;
  const lastYearInThePanel:number = currentDate.getFullYear()+ 7;

  const currentYearList: number[] = [];
  
  for (let index:number = firstYearInThePanel; index <= lastYearInThePanel; index++) {
    currentYearList.push(index)
  }

  return currentYearList;

}