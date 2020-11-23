interface IAnswer {
  type: "Single" | "Multi";
  options: { id: number; label: string }[];
}

export interface IPollDescription {
  id: number;
  title: string;
  publishedDate: number;
  answer: IAnswer;
}

export interface IPollResult {
  id: number;
  amount: number;
}
