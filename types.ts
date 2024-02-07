interface DataPicker{
  value: Date;
  onChange: (value:Date)=> void;
}

export interface Inputs  {
  example: string
  exampleRequired: string
}

type MonthNumber = 1|2|3|4|5|6|7|8|9|10|11|12;

interface CreateYearparams {
  year:number;
  MonthNumber:MonthNumber;
}