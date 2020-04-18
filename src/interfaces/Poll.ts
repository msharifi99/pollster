export interface Poll {
  inputs: PollInput[];
}

export interface PollInput {
  type: 'text';
  label: string
}
