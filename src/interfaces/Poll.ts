export interface Poll {
  inputs: PollInput[];
}

export interface PollInput {
  id: number,
  type: 'text';
  label: string
}
